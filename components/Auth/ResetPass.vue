<template>
  <section class="bg-green-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen md:h-screen lg:py-0"
    >
      <div class="w-full md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Recover Password
          </h1>

          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your phone number</label
              >
              <div class="flex items-center">
                <button
                  id="dropdown-phone-button"
                  data-dropdown-toggle="dropdown-phone"
                  class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus: focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                  type="button"
                >
                  <svg
                    class="me-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.4em"
                    height="1.4em"
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="#060"
                      d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"
                    />
                    <path fill="#bb1600" d="M0 13h36v10H0z" />
                    <path
                      fill="#141414"
                      d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4"
                    />
                    <path fill="#eee" d="M0 13h36v1H0zm0 9h36v1H0z" />
                    <path
                      fill="#141414"
                      d="M23.054 9.404c-.066-.039-.186.089-.794.764c-.216.24-.486.539-.785.86c-.608.653-1.244 1.461-.783 1.935l-7.265 12.211c-.011.018-.019.047.003.087a.432.432 0 0 0 .294.177h.003c.046 0 .068-.021.079-.039l7.268-12.215c.626.148 1.024-.784 1.305-1.616c.14-.417.274-.796.381-1.1c.302-.856.356-1.027.294-1.064"
                    />
                    <path
                      fill="#fff"
                      d="M22.305 10.208c-.216.24-.486.539-.786.861c-.886.952-1.124 1.528-.769 1.868l.018.016l-7.29 12.252c-.004.008.001.021.005.027a.378.378 0 0 0 .242.145h.002c.01 0 .023-.001.028-.01l7.279-12.234l.012-.02l.022.006c.458.13.846-.355 1.254-1.572c.14-.417.274-.796.381-1.101c.168-.475.314-.889.314-.984c-.082.046-.375.372-.712.746"
                    />
                    <path
                      fill="#141414"
                      d="M15.308 12.963c.461-.474-.174-1.282-.783-1.935c-.299-.322-.569-.62-.785-.86c-.608-.674-.728-.803-.794-.764c-.062.038-.008.208.293 1.063c.107.304.241.683.381 1.1c.28.833.678 1.764 1.305 1.616l7.268 12.215c.011.018.033.039.079.039h.003a.432.432 0 0 0 .294-.177c.021-.04.014-.069.003-.087z"
                    />
                    <path
                      fill="#fff"
                      d="M15.25 12.937c.355-.34.118-.916-.769-1.868c-.3-.322-.569-.621-.786-.861c-.337-.374-.631-.7-.714-.745c0 .095.146.509.314.984c.107.305.242.684.381 1.101c.409 1.217.796 1.702 1.254 1.572l.022-.006l.012.02l7.279 12.234c.005.009.019.01.028.01h.002a.374.374 0 0 0 .242-.145c.004-.007.009-.02.005-.027l-7.29-12.252z"
                    />
                    <path
                      fill="#141414"
                      d="M18.018 10.458L18 10.444l-.018.014c-2.492 1.87-3.704 4.331-3.704 7.523s1.211 5.653 3.704 7.524l.018.013l.018-.013c2.492-1.87 3.704-4.331 3.704-7.524s-1.212-5.655-3.704-7.523"
                    />
                    <path
                      fill="#bb1600"
                      d="M20.879 14.059c-.603-1.363-1.551-2.54-2.88-3.54c-1.326.999-2.273 2.174-2.877 3.533c.525 1.181.782 2.468.782 3.937c0 1.467-.256 2.751-.779 3.928c.604 1.356 1.55 2.529 2.873 3.527c1.326-.999 2.273-2.174 2.876-3.534c-.521-1.178-.776-2.461-.776-3.921c.002-1.462.258-2.747.781-3.93"
                    />
                    <path
                      fill="#fff"
                      d="M18 18.927c.306 0 .555-.424.555-.946s-.249-.947-.555-.947c-.306 0-.554.424-.554.947c-.001.522.248.946.554.946m-.231-2.497c-.502-.739-.746-1.677-.746-2.821c0-1.145.244-2.083.746-2.823zm.462 0c.501-.739.744-1.677.744-2.821c0-1.145-.243-2.083-.744-2.823zm-.462 3.1c-.502.738-.746 1.677-.746 2.821c0 1.146.244 2.082.746 2.822zm.462 0c.501.738.744 1.677.744 2.821c0 1.146-.243 2.082-.744 2.822z"
                    />
                  </svg>
                  +254
                  <svg
                    class="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown-phone"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-phone-button"
                  >
                    <li>
                      <button
                        type="button"
                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        <span class="inline-flex items-center">
                          <svg
                            class="me-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.4em"
                            height="1.4em"
                            viewBox="0 0 36 36"
                          >
                            <path
                              fill="#060"
                              d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"
                            />
                            <path fill="#bb1600" d="M0 13h36v10H0z" />
                            <path
                              fill="#141414"
                              d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4"
                            />
                            <path fill="#eee" d="M0 13h36v1H0zm0 9h36v1H0z" />
                            <path
                              fill="#141414"
                              d="M23.054 9.404c-.066-.039-.186.089-.794.764c-.216.24-.486.539-.785.86c-.608.653-1.244 1.461-.783 1.935l-7.265 12.211c-.011.018-.019.047.003.087a.432.432 0 0 0 .294.177h.003c.046 0 .068-.021.079-.039l7.268-12.215c.626.148 1.024-.784 1.305-1.616c.14-.417.274-.796.381-1.1c.302-.856.356-1.027.294-1.064"
                            />
                            <path
                              fill="#fff"
                              d="M22.305 10.208c-.216.24-.486.539-.786.861c-.886.952-1.124 1.528-.769 1.868l.018.016l-7.29 12.252c-.004.008.001.021.005.027a.378.378 0 0 0 .242.145h.002c.01 0 .023-.001.028-.01l7.279-12.234l.012-.02l.022.006c.458.13.846-.355 1.254-1.572c.14-.417.274-.796.381-1.101c.168-.475.314-.889.314-.984c-.082.046-.375.372-.712.746"
                            />
                            <path
                              fill="#141414"
                              d="M15.308 12.963c.461-.474-.174-1.282-.783-1.935c-.299-.322-.569-.62-.785-.86c-.608-.674-.728-.803-.794-.764c-.062.038-.008.208.293 1.063c.107.304.241.683.381 1.1c.28.833.678 1.764 1.305 1.616l7.268 12.215c.011.018.033.039.079.039h.003a.432.432 0 0 0 .294-.177c.021-.04.014-.069.003-.087z"
                            />
                            <path
                              fill="#fff"
                              d="M15.25 12.937c.355-.34.118-.916-.769-1.868c-.3-.322-.569-.621-.786-.861c-.337-.374-.631-.7-.714-.745c0 .095.146.509.314.984c.107.305.242.684.381 1.101c.409 1.217.796 1.702 1.254 1.572l.022-.006l.012.02l7.279 12.234c.005.009.019.01.028.01h.002a.374.374 0 0 0 .242-.145c.004-.007.009-.02.005-.027l-7.29-12.252z"
                            />
                            <path
                              fill="#141414"
                              d="M18.018 10.458L18 10.444l-.018.014c-2.492 1.87-3.704 4.331-3.704 7.523s1.211 5.653 3.704 7.524l.018.013l.018-.013c2.492-1.87 3.704-4.331 3.704-7.524s-1.212-5.655-3.704-7.523"
                            />
                            <path
                              fill="#bb1600"
                              d="M20.879 14.059c-.603-1.363-1.551-2.54-2.88-3.54c-1.326.999-2.273 2.174-2.877 3.533c.525 1.181.782 2.468.782 3.937c0 1.467-.256 2.751-.779 3.928c.604 1.356 1.55 2.529 2.873 3.527c1.326-.999 2.273-2.174 2.876-3.534c-.521-1.178-.776-2.461-.776-3.921c.002-1.462.258-2.747.781-3.93"
                            />
                            <path
                              fill="#fff"
                              d="M18 18.927c.306 0 .555-.424.555-.946s-.249-.947-.555-.947c-.306 0-.554.424-.554.947c-.001.522.248.946.554.946m-.231-2.497c-.502-.739-.746-1.677-.746-2.821c0-1.145.244-2.083.746-2.823zm.462 0c.501-.739.744-1.677.744-2.821c0-1.145-.243-2.083-.744-2.823zm-.462 3.1c-.502.738-.746 1.677-.746 2.821c0 1.146.244 2.082.746 2.822zm.462 0c.501.738.744 1.677.744 2.821c0 1.146-.243 2.082-.744 2.822z"
                            />
                          </svg>
                          Kenya (+254)
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <label
                  for="phone-input"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >Phone number:</label
                >
                <div class="relative w-full">
                  <input
                    type="text"
                    id="phone-input"
                    class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 outline-none focus:ring-0 focus:border-gray-300 dark:focus:focus:border-gray-600 dark:focus:border-gray-300 dark:focus:ring-0 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="797******"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Email Address</label
              >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@gmail.com"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:ring-0 focus:border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                required=""
              />
            </div>

            <button
              type="submit"
              class="w-full text-white bg-[#23a455] hover:bg-[#008100] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Recover Password
            </button>
            <div class="flex items-center justify-end">
              <a
                href="/auth/login"
                class="text-sm font-medium text-primary-600 hover:underline dark:text-white"
                >Back to Login</a
              >
            </div>

            <div class="flex justify-center mt-3">
              <span
                class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
                >© 2024
                <a href="https://flowbite.com/" class="hover:underline"
                  >Spin Mobile™</a
                >. All Rights Reserved.
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script></script>
