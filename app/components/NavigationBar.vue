<script setup lang="ts">
const items = ref([
  [
    {
      icon: 'mdi:home',
      to: '/',
    },
  ],
  [
    {
      label: 'About Me',
      icon: 'mdi:information-variant',
      to: '/about',
    },
    {
      label: 'Résumé',
      icon: 'mdi:document',
      to: '/resume',
    },
    {
      label: 'Portfolio',
      icon: 'mdi:brush-outline',
      to: '/portfolio',
    },
  ],
  [
    {
      icon: 'simple-icons:github',
      to: 'https://github.com/Feelingsheepy/djh',
      target: '_blank',
    },
  ]
])
</script>
<template>
  <UNavigationMenu :items="items"
    class="fixed z-50 bg-(--ui-bg) top-0 data-[orientation=horizontal]:border-b border-[var(--ui-border)] data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48" 
    :ui="{
      list: 'mx-5',
      item: 'shrink-0',
      linkLabel: 'max-md:hidden'
    }" />
</template>