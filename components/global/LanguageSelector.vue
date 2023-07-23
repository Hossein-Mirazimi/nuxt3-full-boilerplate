<script lang="ts" setup>
const { t, locale, availableLocales } = useI18n();
const items = availableLocales.map((_locale) => [
  {
    label: t(`locale.${_locale}`),
    shortcuts: [_locale.charAt(0).toLocaleUpperCase()],
    click: () => {
      locale.value = _locale;
    },
  },
]);
</script>
<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton
      class="inline-flex rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      color="white"
      label="theme"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    >
      <Icon name="prime:language" size="1.5em" />
      {{ t(`locale.${locale}`) }}
    </UButton>
  </UDropdown>
</template>
