import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';

export const useAuth = () => {
  const authStore = useAuthStore();

  const useLogin = () => {
    return {
      mutate: authStore.login,
      isError: authStore.isError,
      isSuccess: authStore.isSuccess
    };
  };

  const useSignUp = () => {
    return {
      mutate: authStore.signUp,
      isError: authStore.isError
    };
  };

  const useLogout = () => {
    return {
      mutate: authStore.logout
    };
  };

  const useIsAuthorized = () => {
    return authStore.isAuthorized;
  };

  return {
    useLogin,
    useSignUp,
    useLogout,
    useIsAuthorized
  };
};
