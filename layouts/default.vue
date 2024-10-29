<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="">
      <div class="hidden lg:block absolute top-0">
        <div class="z-50 flex fixed">
          <svg width="240" height="9" class="text-green-500">
            <line
              stroke-width="5px"
              x1="0"
              y1="0"
              x2="350"
              y2="0"
              stroke="#23a455"
            />
          </svg>
          <svg width="0" height="9" class="text-green-500">
            <line
              stroke-width="5px"
              x1="0"
              y1="0"
              x2="350"
              y2="0"
              stroke="#23a455"
            />
          </svg>
        </div>
      </div>

      <aside
        id="sidebar-multi-level-sidebar"
        class="fixed top-0 left-0 z-40 w-60 transition-transform -translate-x-full sm:translate-x-0 border-e border-gray-200 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div
          class="h-screen w-full overflow-y-auto bg-white dark:bg-gray-800 px-8 py-3.5 flex flex-col justify-between"
        >
          <div>
            <div class="h-auto flex flex-row">
              <img
                class="w-12 h-12 me-2"
                src="/assets/images/M-logo.png"
                alt="logo"
              />
              <h1
                class="text-gray-700 dark:text-white font-medium text-xl mt-3"
              >
                SpinID
              </h1>
            </div>
            <h1
              class="text-gray-500 text-sm dark:text-gray-400 font-regular p-2 mt-4"
            >
              <small>MAIN</small>
            </h1>
            <div
              class="list-none border-b border-dashed dark:border-gray-600 pb-4"
            >
              <NuxtLink
                to="/"
                role="button"
                activeClass="bg-gray-100 text-green-700 dark:text-[#23a455] dark:bg-gray-700 mb-1"
                class="flex flex-row hover:bg-gray-50 text-gray-500 dark:text-[#23a455] dark:hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-md"
              >
                <span
                  type="button"
                  class="dark:text-[#23a455] ms-1 me-2 text-sm p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    class="h-5 w-5"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M8.557 2.75H4.682A1.932 1.932 0 0 0 2.75 4.682v3.875a1.942 1.942 0 0 0 1.932 1.942h3.875a1.942 1.942 0 0 0 1.942-1.942V4.682A1.942 1.942 0 0 0 8.557 2.75m10.761 0h-3.875a1.942 1.942 0 0 0-1.942 1.932v3.875a1.943 1.943 0 0 0 1.942 1.942h3.875a1.942 1.942 0 0 0 1.932-1.942V4.682a1.932 1.932 0 0 0-1.932-1.932m0 10.75h-3.875a1.942 1.942 0 0 0-1.942 1.933v3.875a1.942 1.942 0 0 0 1.942 1.942h3.875a1.942 1.942 0 0 0 1.932-1.942v-3.875a1.932 1.932 0 0 0-1.932-1.932M8.557 13.5H4.682a1.943 1.943 0 0 0-1.932 1.943v3.875a1.932 1.932 0 0 0 1.932 1.932h3.875a1.942 1.942 0 0 0 1.942-1.932v-3.875a1.942 1.942 0 0 0-1.942-1.942"
                    />
                  </svg>
                </span>
                <span class="dark:text-gray-300 text-sm font-regular p-2">
                  Home
                </span>
              </NuxtLink>
              <NuxtLink
                to="/analytics"
                role="button"
                activeClass="bg-gray-100 text-green-700 dark:text-[#23a455] dark:bg-gray-700 mb-1"
                class="flex flex-row hover:bg-gray-50 text-gray-500 dark:text-[#23a455] dark:hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-md"
              >
                <button
                  type="button"
                  class="dark:text-[#23a455] ms-1 me-2 text-sm p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M8 10h8v2H8zm0-4h12v2H8zm0-4h12v2H8z"
                    />
                    <path
                      fill="currentColor"
                      d="m4.711 28l5.631-9.996l7.434 6.49a2 2 0 0 0 3.084-.534l6.97-10.403l-1.661-1.114l-7 10.448l-.07.103l-7.435-6.49a2.003 2.003 0 0 0-3.08.53L4 25.183V2H2v26a2 2 0 0 0 2 2h26v-2Z"
                    />
                  </svg>
                </button>
                <span class="dark:text-gray-300 text-sm font-regular p-2">
                  Analytics
                </span>
              </NuxtLink>
            </div>
            <h1
              class="text-gray-500 text-sm dark:text-gray-400 font-regular p-2 mt-4"
            >
              <small>DATA</small>
            </h1>
            <div
              class="list-none border-b border-dashed dark:border-gray-600 pb-4"
            >
              <NuxtLink
                to="/data/customers"
                role="button"
                activeClass="bg-gray-100 text-green-700 dark:text-[#23a455] dark:bg-gray-700 mb-1"
                class="flex flex-row hover:bg-gray-50 text-gray-500 dark:text-[#23a455] dark:hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-md"
              >
                <button
                  type="button"
                  class="dark:text-[#23a455] ms-1 me-2 text-sm p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M117.25 157.92a60 60 0 1 0-66.5 0a95.83 95.83 0 0 0-47.22 37.71a8 8 0 1 0 13.4 8.74a80 80 0 0 1 134.14 0a8 8 0 0 0 13.4-8.74a95.83 95.83 0 0 0-47.22-37.71M40 108a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44m210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16a44 44 0 1 0-16.34-84.87a8 8 0 1 1-5.94-14.85a60 60 0 0 1 55.53 105.64a95.83 95.83 0 0 1 47.22 37.71a8 8 0 0 1-2.33 11.07"
                    />
                  </svg>
                </button>
                <span class="dark:text-gray-300 text-sm font-regular p-2">
                  Customers
                </span>
              </NuxtLink>
              <NuxtLink
                to="/data/budgets"
                role="button"
                activeClass="bg-gray-100 text-green-700 dark:text-[#23a455] dark:bg-gray-700 mb-1"
                class="flex flex-row hover:bg-gray-50 text-gray-500 dark:text-[#23a455] dark:hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-md"
              >
                <button
                  type="button"
                  class="dark:text-[#23a455] ms-1 me-2 text-sm p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 32 32"
                  >
                    <path fill="currentColor" d="M22 17h2v2h-2z" />
                    <path
                      fill="currentColor"
                      d="M28 8H4V5h22V3H4a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M4 26V10h24v3h-8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8v3Zm24-11v6h-8v-6Z"
                    />
                  </svg>
                </button>
                <span class="dark:text-gray-300 text-sm font-regular p-2">
                  Budgets
                </span>
              </NuxtLink>
              <NuxtLink
                to="/data/transactions"
                role="button"
                activeClass="bg-gray-100 text-green-700 dark:text-[#23a455] dark:bg-gray-700 mb-1"
                class="flex flex-row hover:bg-gray-50 text-gray-500 dark:text-[#23a455] dark:hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-md"
              >
                <button
                  type="button"
                  class="dark:text-[#23a455] ms-1 me-2 text-sm p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13 5h8m-8 4h5m-5 6h8m-8 4h5M3 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm0 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"
                    />
                  </svg>
                </button>
                <span class="dark:text-gray-300 text-sm font-regular p-2">
                  Transactions
                </span>
              </NuxtLink>
              <NuxtLink
                to="/data/statements"
                role="button"
                activeClass="bg-gray-100 text-green-700 dark:text-[#23a455] dark:bg-gray-700 mb-1"
                class="flex flex-row hover:bg-gray-50 text-gray-500 dark:text-[#23a455] dark:hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-md"
              >
                <button
                  type="button"
                  class="dark:text-[#23a455] ms-1 me-2 text-sm p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M8.75 11.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm0 2.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm0 2.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm4.835-14.414l5.829 5.828A2 2 0 0 1 20 9.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6.172q.042.001.082.007q.03.005.059.007c.215.015.427.056.624.138c.057.024.112.056.166.087l.05.029l.047.024a1 1 0 0 1 .081.044c.078.053.148.116.219.18l.036.03zM18 20.5a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5zm-.622-12L13.5 4.621V8a.5.5 0 0 0 .5.5z"
                    />
                  </svg>
                </button>
                <span class="dark:text-gray-300 text-sm font-regular p-2">
                  Statements
                </span>
              </NuxtLink>
              <NuxtLink
                to="/data/goals"
                role="button"
                activeClass="bg-gray-100 text-green-700 dark:text-[#23a455] dark:bg-gray-700 mb-1"
                class="flex flex-row hover:bg-gray-50 text-gray-500 dark:text-[#23a455] dark:hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-md"
              >
                <button
                  type="button"
                  class="dark:text-[#23a455] ms-1 me-2 text-sm p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="currentColor"
                      d="M19.72 10.47a11.65 11.65 0 0 0-6.31.52a.8.8 0 1 0 .59 1.49a10.1 10.1 0 0 1 5.44-.48a.8.8 0 1 0 .28-1.57Z"
                      class="clr-i-outline clr-i-outline-path-1"
                    />
                    <circle
                      cx="25.38"
                      cy="16.71"
                      r="1.36"
                      fill="currentColor"
                      class="clr-i-outline clr-i-outline-path-2"
                    />
                    <path
                      fill="currentColor"
                      d="M35.51 18.63a1 1 0 0 0-.84-.44a3.42 3.42 0 0 1-2.09-1.12a17.4 17.4 0 0 1-2.63-3.78l2.88-4.5A1.89 1.89 0 0 0 33 7a1.77 1.77 0 0 0-1.33-1a10.1 10.1 0 0 0-5.39.75a12.7 12.7 0 0 0-2.72 1.63a17 17 0 0 0-5.16-1.39C11.31 6.3 4.83 10.9 4 17a2.56 2.56 0 0 1-1.38-1.53a1.8 1.8 0 0 1 .14-1.4a1.2 1.2 0 0 1 .43-.43a1.08 1.08 0 0 0-1.12-1.85A3.3 3.3 0 0 0 .91 13a4 4 0 0 0-.33 3.08A4.76 4.76 0 0 0 3 18.95l.92.46a17.6 17.6 0 0 0 1.82 7l.17.38a23 23 0 0 0 3.29 5.09a1 1 0 0 0 .75.34h4.52a1 1 0 0 0 .92-1.38l-.39-.9l1.18.13a20.3 20.3 0 0 0 4 0c.37.6.77 1.2 1.21 1.79a1 1 0 0 0 .8.41h4.34a1 1 0 0 0 .92-1.39c-.17-.4-.34-.83-.47-1.2c-.18-.53-.32-1-.43-1.45A13.2 13.2 0 0 0 29.56 26a12.5 12.5 0 0 0 3 0a1 1 0 0 0 .78-.62l2.26-5.81a1 1 0 0 0-.09-.94m-3.78 5.44a11.4 11.4 0 0 1-2.35-.11a8.2 8.2 0 0 1-2.53-.87a1 1 0 0 0-.93 1.77a12 12 0 0 0 1.29.58a8 8 0 0 1-1.8 1.16l-1.06.48s.49 2.19.82 3.16h-2.38c-.24-.34-1.45-2.36-1.45-2.36l-.67.09a18.5 18.5 0 0 1-4.25.12c-.66-.06-1.76-.2-2.62-.35l-1.55-.27s.63 2.43.75 2.74h-2.58A20.6 20.6 0 0 1 7.76 26l-.18-.39A14.6 14.6 0 0 1 6 17.48c.54-5.19 6.12-9.11 12.19-8.54a15.5 15.5 0 0 1 5.08 1.48l.62.29l.5-.47A10.3 10.3 0 0 1 27 8.54a8.25 8.25 0 0 1 4-.65l-3.38 5.29l.25.5a21.2 21.2 0 0 0 3.31 4.84a6.5 6.5 0 0 0 2.14 1.39Z"
                      class="clr-i-outline clr-i-outline-path-3"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                </button>
                <span class="dark:text-gray-300 text-sm font-regular p-2">
                  Goals
                </span>
              </NuxtLink>
            </div>
            <h1
              class="text-gray-500 text-sm dark:text-gray-400 font-regular p-2 mt-4"
            >
              <small>ADMINISTRATION</small>
            </h1>
            <div
              class="list-none border-b border-dashed dark:border-gray-600 pb-4"
            >
              <NuxtLink
                to="/admin/users"
                role="button"
                activeClass="bg-gray-100 text-green-700 dark:text-[#23a455] dark:bg-gray-700 mb-1"
                class="flex flex-row hover:bg-gray-50 text-gray-500 dark:text-[#23a455] dark:hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-md"
              >
                <button
                  type="button"
                  class="dark:text-[#23a455] ms-1 me-2 text-sm p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M117.25 157.92a60 60 0 1 0-66.5 0a95.83 95.83 0 0 0-47.22 37.71a8 8 0 1 0 13.4 8.74a80 80 0 0 1 134.14 0a8 8 0 0 0 13.4-8.74a95.83 95.83 0 0 0-47.22-37.71M40 108a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44m210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16a44 44 0 1 0-16.34-84.87a8 8 0 1 1-5.94-14.85a60 60 0 0 1 55.53 105.64a95.83 95.83 0 0 1 47.22 37.71a8 8 0 0 1-2.33 11.07"
                    />
                  </svg>
                </button>
                <span class="dark:text-gray-300 text-sm font-regular p-2">
                  Users
                </span>
              </NuxtLink>
              <NuxtLink
                to="/admin/reports"
                role="button"
                activeClass="bg-gray-100 text-green-700 dark:text-[#23a455] dark:bg-gray-700 mb-1"
                class="flex flex-row hover:bg-gray-50 text-gray-500 dark:text-[#23a455] dark:hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-md"
              >
                <button
                  type="button"
                  class="text-gray-400 dark:text-[#23a455] ms-1 me-2 text-sm p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M2.75 2h18.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0 1 21.25 9H2.75A1.75 1.75 0 0 1 1 7.25v-3.5C1 2.784 1.784 2 2.75 2m18.5 1.5H2.75a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25M2.75 10a.75.75 0 0 1 .75.75v9.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25v-9.5a.75.75 0 0 1 1.5 0v9.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25v-9.5a.75.75 0 0 1 .75-.75"
                    />
                    <path
                      fill="currentColor"
                      d="M9.75 11.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"
                    />
                  </svg>
                </button>
                <span class="dark:text-gray-300 text-sm font-regular p-2">
                  Reports
                </span>
              </NuxtLink>
            </div>
          </div>
          <div class="">
            <div
              class="list-none border-b border-dashed dark:border-gray-600 pb-4"
            >
              <NuxtLink
                role="button"
                activeClass="bg-gray-100 text-green-700 dark:text-[#23a455] dark:bg-gray-700 mb-1"
                class="flex flex-row hover:bg-gray-50 text-gray-500 dark:text-[#23a455] dark:hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-md"
              >
                <button
                  type="button"
                  @click="toggle_aside()"
                  class="dark:text-[#23a455] ms-1 me-2 text-sm p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="currentColor"
                      d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14"
                      class="clr-i-outline clr-i-outline-path-1"
                    />
                    <path
                      fill="currentColor"
                      d="M18.29 8.92a7.38 7.38 0 0 0-5.72 2.57a1 1 0 0 0-.32.71a.92.92 0 0 0 .95.92a1.08 1.08 0 0 0 .71-.29a5.7 5.7 0 0 1 4.33-2c2.36 0 3.83 1.52 3.83 3.41v.05c0 2.21-1.76 3.44-4.54 3.65a.8.8 0 0 0-.76.92s0 2.32 0 2.75a1 1 0 0 0 1 .9h.11a1 1 0 0 0 .9-1v-2.06c3-.42 5.43-2 5.43-5.28v-.05c-.03-3-2.37-5.2-5.92-5.2"
                      class="clr-i-outline clr-i-outline-path-2"
                    />
                    <circle
                      cx="17.78"
                      cy="26.2"
                      r="1.25"
                      fill="currentColor"
                      class="clr-i-outline clr-i-outline-path-3"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                </button>
                <span class="dark:text-gray-300 text-sm font-regular p-2">
                  Help
                </span>
              </NuxtLink>
              <NuxtLink
                role="button"
                activeClass="bg-gray-100 text-green-700 dark:text-[#23a455] dark:bg-gray-700 mb-1"
                class="flex flex-row hover:bg-gray-50 text-gray-500 dark:text-[#23a455] dark:hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-md"
              >
                <button
                  type="button"
                  class="dark:text-[#23a455] ms-1 me-2 text-sm p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4M416.39 256a154 154 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.5 164.5 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155 155 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.5 164.5 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155 155 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47"
                    />
                  </svg>
                </button>
                <span class="dark:text-gray-300 text-sm font-regular p-2">
                  Settings
                </span>
              </NuxtLink>
              <li
                role="button"
                class="flex flex-row bg-green-50 hover:bg-green-100 mt-3 dark:text-[#23a455] dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-md"
              >
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  data-dropdown-placement="left-end"
                  data-dropdown-offset-distance="10"
                  data-dropdown-offset-skidding="50"
                  type="button"
                  class="text-[#23a455] dark:text-[#23a455] bg-transparent dark:text-[#23a455] me-3 dark:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M10 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-6.535 6.494a1.23 1.23 0 0 0 .41 1.41A9.96 9.96 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1c.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003"
                    />
                  </svg>
                </button>
                <span
                  class="text-gray-500 dark:text-gray-300 text-sm font-regular p-2"
                >
                  Justus Katunga
                </span>
              </li>
            </div>
          </div>
        </div>
      </aside>

      <div class="sm:ml-60 bg-gray-100 dark:bg-gray-900" id="main-content">
        <div class="pt-5 mx-auto max-w-screen-xl px-4">
          <div class="flex justify-between">
            <div class="flex">
              <button
                class="lg:hidden md:hidden text-[#23a455] mt-0.5 me-3"
                data-drawer-target="sidebar-multi-level-sidebar"
                data-drawer-toggle="sidebar-multi-level-sidebar"
                aria-controls="sidebar-multi-level-sidebar"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  class="h-7 w-7"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 5h12M4 12h16M4 19h8"
                    color="currentColor"
                  />
                </svg>
              </button>
              <button
                class="hidden lg:block md:block text-[#23a455] mt-0.5 me-3"
                @click="toggle_aside()"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  class="h-7 w-7"
                  v-if="toggled_main"
                  height="1em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="m19.03 4.28l-11 11l-.686.72l.687.72l11 11l1.44-1.44L10.187 16l10.28-10.28z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  v-else
                  class="h-7 w-7"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 5h12M4 12h16M4 19h8"
                    color="currentColor"
                  />
                </svg>
              </button>
              <h1
                class="text-2xl text-gray-900 dark:text-white mt-0.5 capitalize"
              >
                <span v-if="$route.path == '/'">Dashboard</span>
                <span v-else>{{
                  String($route.path)
                    .split("/")
                    [String($route.path).split("/").length - 1].replaceAll(
                      "_",
                      " "
                    )
                }}</span>
              </h1>
            </div>
            <div class="flex space-x-3">
              <div>
                <button
                  id="theme-toggle"
                  @click="toggle_light_mode()"
                  type="button"
                  class="text-yellow-400 dark:text-yellow-400 bg-white border border-gray-200 dark:border-gray-700 hover:bg-green-100 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-2"
                >
                  <svg
                    id="theme-toggle-dark-icon"
                    class="hidden w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                    ></path>
                  </svg>
                  <svg
                    id="theme-toggle-light-icon"
                    class="hidden w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div>
                <button
                  id="dropdownNotificationButton"
                  data-dropdown-toggle="dropdownNotification"
                  data-dropdown-placement="left-end"
                  data-dropdown-offset-distance="10"
                  data-dropdown-offset-skidding="50"
                  type="button"
                  class="text-red-500 dark:text-red-600 bg-white border border-gray-200 dark:border-gray-700 hover:bg-green-100 dark:text-[#23a455] dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    class="w-5 h-5"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M13 3a1 1 0 1 0-2 0v.75h-.557A4.214 4.214 0 0 0 6.237 7.7l-.221 3.534a7.377 7.377 0 0 1-1.308 3.754a1.617 1.617 0 0 0 1.135 2.529l3.407.408V19a2.75 2.75 0 1 0 5.5 0v-1.075l3.407-.409a1.617 1.617 0 0 0 1.135-2.528a7.376 7.376 0 0 1-1.308-3.754l-.221-3.533a4.214 4.214 0 0 0-4.206-3.951H13zm-2.557 2.25a2.714 2.714 0 0 0-2.709 2.544l-.22 3.534a8.877 8.877 0 0 1-1.574 4.516a.117.117 0 0 0 .082.183l3.737.449c1.489.178 2.993.178 4.482 0l3.737-.449a.117.117 0 0 0 .082-.183a8.877 8.877 0 0 1-1.573-4.516l-.221-3.534a2.714 2.714 0 0 0-2.709-2.544zm1.557 15c-.69 0-1.25-.56-1.25-1.25v-.75h2.5V19c0 .69-.56 1.25-1.25 1.25"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>

                <!-- Dropdown menu -->
                <div
                  id="dropdownNotification"
                  class="z-20 hidden w-full max-w-sm bg-white divide-y divide-gray-100 rounded-md shadow dark:bg-gray-800 dark:divide-gray-700"
                  aria-labelledby="dropdownNotificationButton"
                >
                  <div
                    class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white"
                  >
                    Notifications
                  </div>
                  <div class="divide-y divide-gray-100 dark:divide-gray-700">
                    <a
                      href="#"
                      class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <div class="flex-shrink-0">
                        <img
                          class="rounded-full w-11 h-11"
                          src="https://www.earthdata.nasa.gov/s3fs-public/styles/medium/public/2023-03/owen_cooper_hdsht_th.JPG?VersionId=Dg.aZ.zXOSzzIaABJSsF_CVS3ZB8Oq8y&itok=LZXmD72m"
                          alt="Jese image"
                        />
                        <div
                          class="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800"
                        >
                          <svg
                            class="w-2 h-2 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 18"
                          >
                            <path
                              d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z"
                            />
                            <path
                              d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="w-full ps-3">
                        <div
                          class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"
                        >
                          New message from
                          <span
                            class="font-semibold text-gray-900 dark:text-white"
                            >Jese Leos</span
                          >: "Hey, what's up? All set for the presentation?"
                        </div>
                        <div class="text-xs text-green-600 dark:text-green-500">
                          a few moments ago
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <div class="flex-shrink-0">
                        <img
                          class="rounded-full w-11 h-11"
                          src="https://img.freepik.com/free-photo/portrait-young-tender-woman-with-healthy-freckled-skin_158595-3947.jpg"
                          alt="Joseph image"
                        />
                        <div
                          class="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800"
                        >
                          <svg
                            class="w-2 h-2 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 18"
                          >
                            <path
                              d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="w-full ps-3">
                        <div
                          class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"
                        >
                          <span
                            class="font-semibold text-gray-900 dark:text-white"
                            >Joseph Mcfall</span
                          >
                          and
                          <span
                            class="font-medium text-gray-900 dark:text-white"
                            >5 others</span
                          >
                          started following you.
                        </div>
                        <div class="text-xs text-green-600 dark:text-green-500">
                          10 minutes ago
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <div class="flex-shrink-0">
                        <img
                          class="rounded-full w-11 h-11"
                          src="https://img.freepik.com/free-photo/smiley-woman-outdoors_23-2148613033.jpg"
                          alt="Bonnie image"
                        />
                        <div
                          class="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800"
                        >
                          <svg
                            class="w-2 h-2 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 18"
                          >
                            <path
                              d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="w-full ps-3">
                        <div
                          class="text-gray-500 text-sm mb-1.5 dark:text-gray-400"
                        >
                          <span
                            class="font-semibold text-gray-900 dark:text-white"
                            >Bonnie Green</span
                          >
                          and
                          <span
                            class="font-medium text-gray-900 dark:text-white"
                            >141 others</span
                          >
                          love your story. See it and view more stories.
                        </div>
                        <div class="text-xs text-green-600 dark:text-green-500">
                          44 minutes ago
                        </div>
                      </div>
                    </a>
                  </div>
                  <a
                    href="#"
                    class="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                  >
                    <div class="inline-flex items-center">
                      <svg
                        class="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 14"
                      >
                        <path
                          d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                        />
                      </svg>
                      View all
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  data-dropdown-placement="left-end"
                  data-dropdown-offset-distance="10"
                  data-dropdown-offset-skidding="50"
                  type="button"
                  class="text-[#23a455] dark:text-[#23a455] bg-white border border-gray-200 dark:border-gray-700 hover:bg-green-100 dark:text-[#23a455] dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M10 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-6.535 6.494a1.23 1.23 0 0 0 .41 1.41A9.96 9.96 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1c.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  class="z-10 hidden bg-white origin-top-right divide-y divide-gray-100 rounded-md shadow p-3 w-64 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <div class="flex justify-center">
                        <div
                          type="button"
                          class="text-[#23a455] dark:text-[#23a455] bg-green-100 hover:bg-green-100 dark:text-[#23a455] dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            class="h-16 w-16"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill="currentColor"
                              d="M10 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-6.535 6.494a1.23 1.23 0 0 0 .41 1.41A9.96 9.96 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1c.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003"
                            />
                          </svg>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h1
                        class="text-xl font-semibold text-gray-700 dark:text-white text-center mt-3"
                      >
                        Justus Katunga
                      </h1>
                      <p class="text-sm text-gray-500 text-center">
                        <small>jmutua289@gmail.com</small>
                      </p>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="mt-4 block px-4 py-2 bg-gray-200 hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white text-center rounded-md"
                        >Manage Account</a
                      >
                    </li>
                    <li @click="logout" role="button">
                      <p
                        class="mt-2 block px-4 py-2 bg-green-100 hover:bg-green-100 dark:bg-[#23a455] dark:hover:text-white dark:hover:bg-[#23a455] text-center rounded-md"
                      >
                        Sign out
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>
const token = ref(useCookie("token"));
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const router = useRouter();
const logout = () => {
  logUserOut();
};
onMounted(() => {
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

  // Change the icons inside the button based on previous settings
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIcon.classList.remove("hidden");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
  }
});
const toggled_main = ref(true);
function toggle_aside() {
  let aside = document.getElementById("sidebar-multi-level-sidebar");
  let mainContent = document.getElementById("main-content");
  if (aside.classList.contains("hidden")) {
    aside.classList.remove("hidden");
    mainContent.classList.add("sm:ml-60");
    this.toggled_main = true;
  } else {
    aside.classList.add("hidden");
    mainContent.classList.remove("sm:ml-60");
    this.toggled_main = false;
  }
}

function toggle_light_mode() {
  var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
  var themeToggleBtn = document.getElementById("theme-toggle");
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}
</script>
