<script setup lang="ts">
const accordionItems = ref([
  {
    label: 'Summary',
    slot: 'summary',
  },
  {
    label: 'Hobbies',
    slot: 'hobbies',
  },
  {
    label: 'Philosophy',
    slot: 'philosophy',
  },
  {
    label: 'Books',
    slot: 'books',
  },
  {
    label: 'Music',
    slot: 'music',
  }
])
const navItems = ref([
  [
    {
      label: 'Table of Contents',
      type: 'label',
      defaultOpen: true,
      children:
        [
          {
            label: 'Summary',
            to: '#summary',
            icon: 'lucide:dot',
          },
          {
            label: 'Hobbies',
            to: '#hobbies',
            icon: 'lucide:dot',
          },
          {
            label: 'Philosophy',
            to: '#philosophy',
            icon: 'lucide:dot',
          },
          {
            label: 'Books',
            to: '#books',
            icon: 'lucide:dot',
          },
          {
            label: 'Music',
            to: '#music',
            icon: 'lucide:dot',
          }
        ]
    },
  ],
]);

</script>

<template>
  <div class="mx-5 mt-5 grid grid-cols-16">
    <div class="col-span-2 max-md:hidden"></div>
    <div class="col-span-12 max-md:col-span-16">
      <UAccordion defaultValue="0" :items="accordionItems" :ui="{
        label: 'font-bold text-xl',
        content: 'mx-5'
      }">
        <template #summary>
          <AboutSummary class="mb-15" />
        </template>
        <template #hobbies>
          <AboutHobbies class="mb-15" />
        </template>
        <template #philosophy>
            <AboutPhilosophy />
        </template>
        <template #books>
          <AboutBooks />
        </template>
        <template #music>
          <AboutMusic />
        </template>
      </UAccordion>
    </div>
  </div>
</template>