<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton
      color="white"
      class="inline-flex rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      label="theme"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    >
      <Icon name="gg:dark-mode" size="1.5em" />
      {{ themes[colorMode.preference as keyof typeof themes] }}
    </UButton>
  </UDropdown>
</template>

<script lang="ts" setup>
const { t } = useI18n();
const colorMode = useColorMode();
const themes = {
  system: t("themes.system"),
  light: t("themes.light"),
  dark: t("themes.dark"),
};

const items = [
  [
    {
      label: t("themes.system"),
      icon: "i-carbon:laptop",
      shortcuts: ["S"],
      click: () => {
        colorMode.preference = "system";
      },
    },
    {
      label: t("themes.light"),
      icon: "i-carbon:sun",
      shortcuts: ["L"],
      click: () => {
        colorMode.preference = "light";
      },
    },
    {
      label: t("themes.dark"),
      icon: "i-carbon:moon",
      shortcuts: ["D"],
      click: () => {
        colorMode.preference = "dark";
      },
    },
  ],
];
</script>
