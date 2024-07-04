<template>
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
      <h1 class="text-2xl text-gray-900 dark:text-white mt-1">Dashboard</h1>
    </div>
    <div class="flex space-x-3">
      <div>
        <button
          id="theme-toggle"
          @click="toggle_light_mode()"
          type="button"
          class="text-yellow-400 dark:text-yellow-400 bg-green-100 hover:bg-green-100 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-2"
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
          class="text-gray-400 dark:text-[#23a455] bg-green-100 hover:bg-green-100 dark:text-[#23a455] dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-2"
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
          class="z-20 hidden w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700"
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
                <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                  New message from
                  <span class="font-semibold text-gray-900 dark:text-white"
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
                <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                  <span class="font-semibold text-gray-900 dark:text-white"
                    >Joseph Mcfall</span
                  >
                  and
                  <span class="font-medium text-gray-900 dark:text-white"
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
                <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                  <span class="font-semibold text-gray-900 dark:text-white"
                    >Bonnie Green</span
                  >
                  and
                  <span class="font-medium text-gray-900 dark:text-white"
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
          class="text-[#23a455] dark:text-[#23a455] bg-green-100 hover:bg-green-100 dark:text-[#23a455] dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-2"
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
          class="z-10 hidden bg-white origin-top-right divide-y divide-gray-100 rounded-lg shadow p-3 w-64 dark:bg-gray-700"
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
                class="mt-4 block px-4 py-2 bg-gray-200 hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white text-center rounded-lg"
                >Manage Account</a
              >
            </li>
            <li @click="logout">
              <p
                class="mt-2 block px-4 py-2 bg-green-100 hover:bg-green-100 dark:bg-[#23a455] dark:hover:text-white text-center rounded-lg"
              >
                Sign out
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
