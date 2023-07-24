<template>
  <div
    class="h-screen bg-slate-100 p-20 text-slate-900 dark:bg-slate-900 dark:text-white"
  >
    <div
      class="mx-auto w-auto max-w-md rounded-lg bg-white p-6 text-center shadow-xl shadow-xl ring-1 ring-1 ring-slate-900/5 ring-slate-900/5 dark:bg-slate-800"
    >
      <div
        class="relative flex flex-col justify-center gap-y-4 sm:h-40 sm:gap-y-5"
      >
        <p class="mb-[-1em] font-semibold text-slate-500 dark:text-slate-400">
          404
        </p>
        <h1 class="text-xl font-medium">
          {{ $t("error.page-not-found") }}
        </h1>

        <a
          class="mx-2 mx-auto inline w-[10em] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm font-bold text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          href="/"
        >
          {{ $t("error.return") }}
        </a>
      </div>
    </div>
  </div>
</template>
