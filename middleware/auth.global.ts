import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const token = useCookie("token"); // get token from cookies
  const { verified } = storeToRefs(useAuthStore()); // make authenticated state reactive

  if (token.value) {
    // check if value exists
    authenticated.value = true; // update the state to authenticated
  }

  // if token exists and url is /login redirect to homepage
  if (token.value && to.path === "/auth/login" && verified.value) {
    return navigateTo("/");
  }

  // if token doesn't exist redirect to log in
  if (
    !token.value &&
    to.path !== "/auth/login" &&
    to.path !== "/auth/resetpassword"
  ) {
    abortNavigation();
    return navigateTo("/auth/login");
  }
  if (
    token.value &&
    !verified.value &&
    to.path !== "/auth/verify" &&
    to.path !== "/auth/login" &&
    to.path !== "/auth/resetpassword"
  ) {
    abortNavigation();
    return navigateTo("/auth/verify");
  }
});
