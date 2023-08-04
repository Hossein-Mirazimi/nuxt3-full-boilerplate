<script lang="ts" setup>
import type { LocaleObject } from "#i18n";

const route = useRoute();
const { t, localeProperties, locales } = useI18n();
const localePath = useLocalePath();

const localeName = computed(() => t(`locale.${localeProperties.value.iso}`));

const items = computed(() =>
  // eslint-disable-next-line eslint
  (<Array<LocaleObject>>locales.value).map(_locale => ([
    {
      label: t(`locale.${_locale.iso}`),
      shortcuts: [_locale.code],
      click: () => {
        navigateTo(localePath(route, _locale.code));
      },
    },
  ]))
);
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
      {{ localeName }}
    </UButton>
  </UDropdown>
</template>
