import { defineStore } from "pinia";

interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    verified: false,
    loading: false,
    auth_user: {},
    user_id: "",
  }),
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      this.authenticated = false;

      try {
        const { data, error, pending }: any = await useFetch(
          "https://dummyjson.com/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              password,
            }),
          }
        );

        if (error) {
          console.error("Authentication failed", error);
          this.authenticated = false;
          return;
        }

        if (data) {
          console.log("Authentication successful", data);
          this.authenticated = true;
        }
      } catch (e) {
        console.error("Request failed", e);
        this.authenticated = false;
      }
    },
  },

  persist: true,
});
