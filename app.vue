<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Nuxt3 Boilerplate`
      : "Nuxt3 Boilerplate";
  },
});
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
