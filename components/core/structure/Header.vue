<script setup lang="ts">
import { onMounted } from "vue";
import { initCollapses } from "flowbite";

onMounted(() => {
  initCollapses();
});

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <nav
    class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600"
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <NuxtLink href="/" class="flex items-center">
        <img
          src="/img/mcbanners-logo.svg"
          class="h-16 mr-3 sm:h-9 dark:invert"
          alt="MCBanners Logo"
        />
      </NuxtLink>

      <div class="flex md:order-2">
        <NuxtLink href="/studio" class="mr-1.5">
          <UButton color="sky" size="md"> Create a Banner </UButton>
        </NuxtLink>
        <ClientOnly>
            <UButton
              :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
              color="gray"
              variant="ghost"
              aria-label="Theme"
              @click="isDark = !isDark"
            />
        </ClientOnly>
        <UButton
            to="https://github.com/MCBanners/website-next"
            target="_blank"
            color="gray"
            variant="ghost"
            icon="i-simple-icons-github"
          />
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li><CoreUtilNavbarLink path="/" text="Home" :active="true" /></li>
          <li><CoreUtilNavbarLink path="/studio" text="Studio" /></li>
          <li><CoreUtilNavbarLink path="/about" text="About" /></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
