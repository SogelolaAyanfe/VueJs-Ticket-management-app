<template>
  <div class="signup-form">
    <div class="header">
      <h2>Ticketed</h2>
    </div>
    <div class="form-header">
      <h2>Sign Up</h2>
      <p>Create your account by filling in the information below.</p>
    </div>


    <form id="form-signup" @submit.prevent="handleSignUp">
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          required
        />
      </div>
      <button type="submit" :disabled="isLoading">
        {{ isLoading ? 'Signing Up...' : 'Sign Up' }}
      </button>
      <div v-if="authStore.isError" class="error-message">
      {{ authStore.isError }}
    </div>

    <!-- Success Message -->
    <div v-if="authStore.isSuccess" class="success-message">
      {{ authStore.isSuccess }}
    </div>
    </form>

    <div class="login-link">
      <p>Already have an account? <router-link to="/login">Log in</router-link></p>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import Footer from "@/components/Footer.vue";

const email = ref('');
const password = ref('');
const isLoading = ref(false);
const router = useRouter();
const authStore = useAuthStore();

// Redirect if already authorized
onMounted(() => {
  if (authStore.isAuthorized) {
    router.push('/dashboard');
  }
});



const handleSignUp = async () => {
  isLoading.value = true;

  const result = authStore.signUp({
    email: email.value,
    password: password.value
  });

  if (result?.success) {
    // Form will be cleared by the redirect
    console.log('Signup successful');
  }

  isLoading.value = false;
};
</script>

<style scoped>
.success-message {
  color: #155724;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  padding: 15px 20px;
  width: 40%;
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 500;
  animation: slideIn 0.3s ease-out;
}

.error-message {
  color: white;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
  border: none;
  padding: 15px 20px;
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 500;
  width: 40%;
  box-shadow: 0 4px 15px rgba(238, 90, 111, 0.3);
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.signup-form {
  /* max-width: 1440px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: white;
  padding-bottom: 40px;
}

.header {
  display: flex;
  background: #351764;
  width: 100%;
  color: white;
}
.header h2 {
  padding: 10px;
}
form {
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.form-header {
  gap: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.form-group input {
  border: 2px solid black;
  border-radius: 8px;
  height: 50px;
  width: 600px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  padding-left: 10px;
}


button {
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 5px 20px 5px 20px;
  text-decoration: none;
  color: white;
  background-color: black;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 200px;
  white-space: normal;
  font-family: "Montserrat", sans-serif;
}

button:hover {
  background: #333;
  border-color: #333;
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

@media screen and (max-width: 770px) {
  button {
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .form-group {
    gap: 20px;
  }

  .form-group input {
    width: 500px;
  }

  .error-message, .message {
    width: 480px;
  }
}

@media screen and (max-width: 550px) {
  .form-group input {
    width: 350px;
  }

  .error-message, .message {
    width: 320px;
  }
}

@media screen and (max-width: 415px) {
  .form-group input {
    width: 250px;
  }

  .error-message, .message {
    width: 220px;
  }
}





</style>
