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
  <main
    class="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white"
  >
    <VitePwaManifest />
    <CookieBanner />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
  <ClientOnly>
    <Notivue v-slot="item">
      <Notifications :item="item" />
    </Notivue>
  </ClientOnly>
</template>
