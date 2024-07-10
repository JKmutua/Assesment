import { defineStore } from "pinia";

interface UserPayloadInterface {
  phone_number: string;
  password: string;
}

interface VerifyInterface {
  otp: string;
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
    async authenticateUser({ phone_number, password }: UserPayloadInterface) {
      const is_customer = false;
      // useFetch from nuxt 3
      const { data, pending }: any = await useFetch(
        "https://stage-individual.spinmobile.co/api/auth/token/",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            phone_number,
            password,
            is_customer,
          },
        }
      );
      this.loading = pending;

      if (data.value.code == "200.000.000") {
        const token = useCookie("token"); // useCookie new hook in nuxt 3
        token.value = data.value.data.token; // set token to cookie
        this.user_id = data.value.data.user_id;
        this.authenticated = true; // set authenticated  state value to true
      }
    },
    async verifyUser({ otp }: VerifyInterface) {
      const is_customer = false;
      const token = useCookie("token");
      // useFetch from nuxt 3
      const { data, pending }: any = await useFetch(
        "https://stage-individual.spinmobile.co/api/auth/verify/",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            otp,
            token,
            is_customer,
          },
        }
      );
      this.loading = pending;

      if (data.value.code == "200.000.000") {
        this.verified = true; // set authenticated  state value to true
      }
    },
    async profileUser() {
      const is_customer = false;
      const user_id = this.user_id;
      const token = useCookie("token");
      // useFetch from nuxt 3
      const { data, pending }: any = await useFetch(
        "https://stage-individual.spinmobile.co/api/auth/profile/",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            token,
            user_id,
            is_customer,
          },
        }
      );
      this.loading = pending;
      const router = useRouter();
      if (data.value.code == "200.000.000") {
        this.auth_user = data.value.data;
        router.push("/");
        // await profileUser();
        // const token = useCookie("token"); // useCookie new hook in nuxt 3
        // token.value = data.value.data.token; // set token to cookie
        // this.authenticated = true; // set authenticated  state value to true
      }
    },
    async logUserOut() {
      const token = useCookie("token");
      const is_customer = false;
      const user_id = this.user_id;
      const { data, pending }: any = await useFetch(
        "https://stage-individual.spinmobile.co/api/auth/logout/",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            token,
            user_id,
            is_customer,
          },
        }
      );
      const router = useRouter();
      if (data.value.code == "200.000.000") {
        this.authenticated = false; // set authenticated  state value to false
        this.verified = false;
        token.value = null; // clear the token cookie
        this.user_id = "";
        this.auth_user = {};
        router.push("/auth/login");
      }
    },
  },
  getters: {
    getUserProfile(state) {
      return this.auth_user;
    },
  },
  persist: true,
});
