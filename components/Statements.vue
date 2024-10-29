<template>
  <div>
    <div class="flex justify-between mb-4">
      <div class="flex my-auto">
        <div>
          <h1 class="font-medium text-sm uppercase">
            Customer Financial Statements
          </h1>
          <p class="text-gray-500 dark:text-gray-400">
            <small>All Customer Financial Statements</small>
          </p>
        </div>
      </div>
      <div class="flex my-auto mb-2">
        <button
          class="bg-white me-2 text-sm font-regular py-2 px-4 rounded-lg border border-gray-300 hover:border-gray-200 dark:text-white dark:border-gray-500 dark:hover:border-gray-600 dark:bg-gray-700"
        >
          <span class="me-2">Cancel</span>
        </button>
        <button
          class="text-white bg-[#23a455] text-sm hover:bg-opacity-90 font-regular py-2 px-4 rounded-lg"
        >
          <span class="me-2">Save</span>
        </button>
      </div>
    </div>
    <div class="mx-auto max-w-screen-sm px-4 mt-12 mb-6">
      <div class="grid sm:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <div class="flex justify-between">
            <div class="flex my-auto">
              <div
                class="my-auto text-red-500 bg-red-500 p-1.5 bg-opacity-20 rounded-lg me-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-8 w-8"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023c.479 0 .774-.242.774-.651c0-.366-.254-.586-.704-.586m3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018c.817.006 1.349-.444 1.349-1.396c.006-.83-.479-1.268-1.255-1.268"
                  />
                  <path
                    fill="currentColor"
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9.498 16.19c-.309.29-.765.42-1.296.42a2 2 0 0 1-.308-.018v1.426H7v-3.936A7.6 7.6 0 0 1 8.219 14c.557 0 .953.106 1.22.319c.254.202.426.533.426.923c-.001.392-.131.723-.367.948m3.807 1.355c-.42.349-1.059.515-1.84.515c-.468 0-.799-.03-1.024-.06v-3.917A8 8 0 0 1 11.66 14c.757 0 1.249.136 1.633.426c.415.308.675.799.675 1.504c0 .763-.279 1.29-.663 1.615M17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17zM14 9h-1V4l5 5z"
                  />
                </svg>
              </div>
              <div class="flex my-auto">
                <div>
                  <h1 class="font-medium text-semibold text-sm">
                    Bank Statement
                  </h1>
                  <p class="-mt-1 text-gray-500 dark:text-gray-400 text-sm">
                    <small>KCB passcode: 123456</small>
                  </p>
                </div>
              </div>
            </div>
            <div
              role="button"
              class="my-auto text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 p-1.5 bg-opacity-20 border border-gray-200 dark:border-gray-600 rounded-full me-2"
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
                  d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <div class="flex my-auto">
              <div
                class="my-auto text-red-500 bg-red-500 p-1.5 bg-opacity-20 rounded-lg me-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-8 w-8"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023c.479 0 .774-.242.774-.651c0-.366-.254-.586-.704-.586m3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018c.817.006 1.349-.444 1.349-1.396c.006-.83-.479-1.268-1.255-1.268"
                  />
                  <path
                    fill="currentColor"
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9.498 16.19c-.309.29-.765.42-1.296.42a2 2 0 0 1-.308-.018v1.426H7v-3.936A7.6 7.6 0 0 1 8.219 14c.557 0 .953.106 1.22.319c.254.202.426.533.426.923c-.001.392-.131.723-.367.948m3.807 1.355c-.42.349-1.059.515-1.84.515c-.468 0-.799-.03-1.024-.06v-3.917A8 8 0 0 1 11.66 14c.757 0 1.249.136 1.633.426c.415.308.675.799.675 1.504c0 .763-.279 1.29-.663 1.615M17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17zM14 9h-1V4l5 5z"
                  />
                </svg>
              </div>
              <div class="flex my-auto">
                <div>
                  <h1 class="font-medium text-semibold text-sm">
                    Mpesa Statement
                  </h1>
                  <p class="-mt-1 text-gray-500 dark:text-gray-400 text-sm">
                    <small>passcode: 123456</small>
                  </p>
                </div>
              </div>
            </div>
            <div
              role="button"
              class="my-auto text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 p-1.5 bg-opacity-20 border border-gray-200 dark:border-gray-600 rounded-full me-2"
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
                  d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <div class="flex my-auto">
              <div
                class="my-auto text-red-500 bg-red-500 p-1.5 bg-opacity-20 rounded-lg me-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-8 w-8"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023c.479 0 .774-.242.774-.651c0-.366-.254-.586-.704-.586m3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018c.817.006 1.349-.444 1.349-1.396c.006-.83-.479-1.268-1.255-1.268"
                  />
                  <path
                    fill="currentColor"
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9.498 16.19c-.309.29-.765.42-1.296.42a2 2 0 0 1-.308-.018v1.426H7v-3.936A7.6 7.6 0 0 1 8.219 14c.557 0 .953.106 1.22.319c.254.202.426.533.426.923c-.001.392-.131.723-.367.948m3.807 1.355c-.42.349-1.059.515-1.84.515c-.468 0-.799-.03-1.024-.06v-3.917A8 8 0 0 1 11.66 14c.757 0 1.249.136 1.633.426c.415.308.675.799.675 1.504c0 .763-.279 1.29-.663 1.615M17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17zM14 9h-1V4l5 5z"
                  />
                </svg>
              </div>
              <div class="flex my-auto">
                <div>
                  <h1 class="font-medium text-semibold text-sm">
                    Bank Statement
                  </h1>
                  <p class="-mt-1 text-gray-500 dark:text-gray-400 text-sm">
                    <small>KCB passcode: 123456</small>
                  </p>
                </div>
              </div>
            </div>
            <div
              role="button"
              class="my-auto text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 p-1.5 bg-opacity-20 border border-gray-200 dark:border-gray-600 rounded-full me-2"
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
                  d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <div class="flex my-auto">
              <div
                class="my-auto text-red-500 bg-red-500 p-1.5 bg-opacity-20 rounded-lg me-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-8 w-8"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023c.479 0 .774-.242.774-.651c0-.366-.254-.586-.704-.586m3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018c.817.006 1.349-.444 1.349-1.396c.006-.83-.479-1.268-1.255-1.268"
                  />
                  <path
                    fill="currentColor"
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9.498 16.19c-.309.29-.765.42-1.296.42a2 2 0 0 1-.308-.018v1.426H7v-3.936A7.6 7.6 0 0 1 8.219 14c.557 0 .953.106 1.22.319c.254.202.426.533.426.923c-.001.392-.131.723-.367.948m3.807 1.355c-.42.349-1.059.515-1.84.515c-.468 0-.799-.03-1.024-.06v-3.917A8 8 0 0 1 11.66 14c.757 0 1.249.136 1.633.426c.415.308.675.799.675 1.504c0 .763-.279 1.29-.663 1.615M17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17zM14 9h-1V4l5 5z"
                  />
                </svg>
              </div>
              <div class="flex my-auto">
                <div>
                  <h1 class="font-medium text-semibold text-sm">
                    Bank Statement
                  </h1>
                  <p class="-mt-1 text-gray-500 dark:text-gray-400 text-sm">
                    <small>KCB passcode: 123456</small>
                  </p>
                </div>
              </div>
            </div>
            <div
              role="button"
              class="my-auto text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 p-1.5 bg-opacity-20 border border-gray-200 dark:border-gray-600 rounded-full me-2"
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
                  d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <div class="flex my-auto">
              <div
                class="my-auto text-red-500 bg-red-500 p-1.5 bg-opacity-20 rounded-lg me-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-8 w-8"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023c.479 0 .774-.242.774-.651c0-.366-.254-.586-.704-.586m3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018c.817.006 1.349-.444 1.349-1.396c.006-.83-.479-1.268-1.255-1.268"
                  />
                  <path
                    fill="currentColor"
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9.498 16.19c-.309.29-.765.42-1.296.42a2 2 0 0 1-.308-.018v1.426H7v-3.936A7.6 7.6 0 0 1 8.219 14c.557 0 .953.106 1.22.319c.254.202.426.533.426.923c-.001.392-.131.723-.367.948m3.807 1.355c-.42.349-1.059.515-1.84.515c-.468 0-.799-.03-1.024-.06v-3.917A8 8 0 0 1 11.66 14c.757 0 1.249.136 1.633.426c.415.308.675.799.675 1.504c0 .763-.279 1.29-.663 1.615M17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17zM14 9h-1V4l5 5z"
                  />
                </svg>
              </div>
              <div class="flex my-auto">
                <div>
                  <h1 class="font-medium text-semibold text-sm">
                    Mpesa Statement
                  </h1>
                  <p class="-mt-1 text-gray-500 dark:text-gray-400 text-sm">
                    <small>passcode: 123456</small>
                  </p>
                </div>
              </div>
            </div>
            <div
              role="button"
              class="my-auto text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 p-1.5 bg-opacity-20 border border-gray-200 dark:border-gray-600 rounded-full me-2"
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
                  d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <div class="flex my-auto">
              <div
                class="my-auto text-red-500 bg-red-500 p-1.5 bg-opacity-20 rounded-lg me-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-8 w-8"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023c.479 0 .774-.242.774-.651c0-.366-.254-.586-.704-.586m3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018c.817.006 1.349-.444 1.349-1.396c.006-.83-.479-1.268-1.255-1.268"
                  />
                  <path
                    fill="currentColor"
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9.498 16.19c-.309.29-.765.42-1.296.42a2 2 0 0 1-.308-.018v1.426H7v-3.936A7.6 7.6 0 0 1 8.219 14c.557 0 .953.106 1.22.319c.254.202.426.533.426.923c-.001.392-.131.723-.367.948m3.807 1.355c-.42.349-1.059.515-1.84.515c-.468 0-.799-.03-1.024-.06v-3.917A8 8 0 0 1 11.66 14c.757 0 1.249.136 1.633.426c.415.308.675.799.675 1.504c0 .763-.279 1.29-.663 1.615M17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17zM14 9h-1V4l5 5z"
                  />
                </svg>
              </div>
              <div class="flex my-auto">
                <div>
                  <h1 class="font-medium text-semibold text-sm">
                    Bank Statement
                  </h1>
                  <p class="-mt-1 text-gray-500 dark:text-gray-400 text-sm">
                    <small>KCB passcode: 123456</small>
                  </p>
                </div>
              </div>
            </div>
            <div
              role="button"
              class="my-auto text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 p-1.5 bg-opacity-20 border border-gray-200 dark:border-gray-600 rounded-full me-2"
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
                  d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between">
            <div class="flex my-auto">
              <div
                class="my-auto text-red-500 bg-red-500 p-1.5 bg-opacity-20 rounded-lg me-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-8 w-8"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023c.479 0 .774-.242.774-.651c0-.366-.254-.586-.704-.586m3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018c.817.006 1.349-.444 1.349-1.396c.006-.83-.479-1.268-1.255-1.268"
                  />
                  <path
                    fill="currentColor"
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9.498 16.19c-.309.29-.765.42-1.296.42a2 2 0 0 1-.308-.018v1.426H7v-3.936A7.6 7.6 0 0 1 8.219 14c.557 0 .953.106 1.22.319c.254.202.426.533.426.923c-.001.392-.131.723-.367.948m3.807 1.355c-.42.349-1.059.515-1.84.515c-.468 0-.799-.03-1.024-.06v-3.917A8 8 0 0 1 11.66 14c.757 0 1.249.136 1.633.426c.415.308.675.799.675 1.504c0 .763-.279 1.29-.663 1.615M17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17zM14 9h-1V4l5 5z"
                  />
                </svg>
              </div>
              <div class="flex my-auto">
                <div>
                  <h1 class="font-medium text-semibold text-sm">
                    Bank Statement
                  </h1>
                  <p class="-mt-1 text-gray-500 dark:text-gray-400 text-sm">
                    <small>KCB passcode: 123456</small>
                  </p>
                </div>
              </div>
            </div>
            <div
              role="button"
              class="my-auto text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 p-1.5 bg-opacity-20 border border-gray-200 dark:border-gray-600 rounded-full me-2"
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
                  d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between my-8">
        <div class="dark:bg-gray-700 p-1 rounded-md">
          <div class="bg-[#23a455] py-2 rounded-md px-4 text-white">1</div>
        </div>
        <div class="">
          <div class="bg-gray-100 dark:bg-gray-700 p-1 rounded-md flex">
            <div
              class="bg-white dark:bg-gray-800 px-1.5 me-2 py-1.5 px rounded-md"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13.75 16.25a.74.74 0 0 1-.53-.22l-3.5-3.5a.75.75 0 0 1 0-1.06L13.22 8a.75.75 0 0 1 1.06 1l-3 3l3 3a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.19"
                  />
                </svg>
              </span>
            </div>
            <div class="bg-white dark:bg-gray-800 px-1.5 py-1.5 px rounded-md">
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  class="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10.25 16.25a.74.74 0 0 1-.53-.25a.75.75 0 0 1 0-1.06l3-3l-3-3A.75.75 0 0 1 10.78 8l3.5 3.5a.75.75 0 0 1 0 1.06L10.78 16a.74.74 0 0 1-.53.25"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
