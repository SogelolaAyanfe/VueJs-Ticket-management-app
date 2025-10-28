import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { hash, compare, encrypt, decrypt } from '../utils/bcrypt';

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref(JSON.parse(localStorage.getItem('user')) || {
    email: '',
    password: ''
  });
  const session = ref(JSON.parse(localStorage.getItem('session')) || {});
  const error = ref('');
  const success = ref('');

  // Constants
  const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000;

  // Getters (Computed)
  const isAuthorized = computed(() => {
    if (!session.value?.accessToken) {
      return false;
    }

    try {
      const accessTokenToArray = Object.values(session.value.accessToken);
      const arrayToUint8Array = new Uint8Array(accessTokenToArray);
      const decryptedToken = decrypt(arrayToUint8Array);
      return decryptedToken.exp > Date.now();
    } catch (err) {
      console.error('Token decryption failed:', err);
      return false;
    }
  });

  const isError = computed(() => error.value);
  const isSuccess = computed(() => success.value);

  // Check if a user exists (has signed up)
  const userExists = computed(() => {
    return user.value.email !== '' && user.value.password !== '';
  });

  // Actions (Methods)
  const login = ({ email, password }) => {
    // Check if no user has signed up yet
    if (!userExists.value) {
      error.value = "No account found. Please sign up first.";
      setTimeout(() => { error.value = ''; }, 3000);
      return { success: false };
    }

    // Check if credentials match
    if (email === user.value.email && compare(password, user.value.password)) {
      success.value = "Login successful! Redirecting...";

      setTimeout(() => {
        try {
          const tokenData = {
            email,
            password: user.value.password,
            exp: Date.now() + twentyFourHoursInMilliseconds,
          };
          const accessToken = encrypt(tokenData);

          // Convert Uint8Array to regular array for localStorage
          const tokenArray = Array.from(accessToken);
          session.value = { accessToken: tokenArray };
          localStorage.setItem('session', JSON.stringify(session.value));

          error.value = '';
          success.value = '';

          // Redirect on successful LOGIN (not signup)
          window.location.href = "/dashboard"; // Or use router if available
        } catch (err) {
          console.error('Login encryption error:', err);
          error.value = 'Login failed';
        }
      }, 2000);

      return { success: true };
    } else {
      error.value = "Wrong credentials";
      setTimeout(() => { error.value = ''; }, 3000);
      return { success: false };
    }
  };

  const signUp = ({ email, password }) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 10;

    // Check if user already exists (and has a different email)
    if (userExists.value && user.value.email === email) {
      error.value = "Email already exists!";
      setTimeout(() => { error.value = ''; }, 3000);
      return { success: false };
    }

    if (!isEmailValid) {
      error.value = "String is not an email";
      setTimeout(() => { error.value = ''; }, 3000);
      return { success: false };
    }

    if (!isPasswordValid) {
      error.value = "Password must be at least 10 characters";
      setTimeout(() => { error.value = ''; }, 3000);
      return { success: false };
    }

    try {
      const hashedPassword = hash(password);
      console.log("hashedPassword", hashedPassword);
      user.value = { email, password: hashedPassword };
      localStorage.setItem('user', JSON.stringify(user.value));

      // SUCCESS: Show message but DON'T auto-login or redirect to dashboard
      success.value = "Account created successfully! You can now log in.";

      setTimeout(() => {
        success.value = '';
        // Redirect to login page instead of dashboard
        window.location.href = "/auth/login";
      }, 2000);

      return {
        success: true,
        data: { email, password: hashedPassword }
      };
    } catch (err) {
      console.error('Signup encryption error:', err);
      error.value = 'Signup failed';
      return { success: false };
    }
  };

  const logout = () => {
    session.value = {};
    localStorage.removeItem('session');
    success.value = "Logged out successfully";
  };

  return {
    // State
    user,
    session,
    error,
    success,

    // Getters
    isAuthorized,
    isError,
    isSuccess,
    userExists,

    // Actions
    login,
    signUp,
    logout
  };
});
