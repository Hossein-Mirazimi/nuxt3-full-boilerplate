<script setup lang="ts">
import type { LocaleObject } from "#i18n";

const { localeProperties, defaultDirection } = useI18n();

useHead(computed(() => ({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Nuxt3 Boilerplate`
      : "Nuxt3 Boilerplate";
  },
  htmlAttrs: {
    dir: (<LocaleObject>localeProperties.value).dir || defaultDirection || 'auto',
  },
})))

</script>
<template>
  <NuxtErrorBoundary>
    <template #error="{ error, clearError }">
      You can display the error locally here: {{ error }}
      <button @click="clearError">This will clear the error.</button>
    </template>
    <main
      class="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white"
    >
      <RobotMeta />
      <VitePwaManifest />
      <CookieBanner />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
  </NuxtErrorBoundary>
  <ClientOnly>
    <Notivue v-slot="item">
      <Notifications :item="item" />
    </Notivue>
  </ClientOnly>
</template>
