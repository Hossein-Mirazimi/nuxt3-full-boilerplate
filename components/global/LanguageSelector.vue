<script setup>
const { locale, availableLocales } = useI18n();
</script>
<template>
  <form>
    <label for="languages">
      <Icon name="prime:language" size="1.5em" />
    </label>
    <select v-model="locale" class="bg-transparent">
      <option
        v-for="language in availableLocales"
        :key="language"
        :value="language"
        :selected="locale === language"
      >
        {{ $t("locale." + language) }}
      </option>
    </select>
  </form>
</template>
