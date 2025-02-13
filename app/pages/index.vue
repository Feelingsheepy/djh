<template>
  <UCard>
    <template #header>
      <div class="text-center">
        <h1 class="text-(--ui-text-highlighted)">Dylan Jean Husted</h1>
      </div>
    </template>
    <div class="text-center">
      <h3 class="text-(--ui-text)">Welcome to my website</h3>
      <p class="text-(--ui-text)">This is just a small website to share a bit about myself and my work</p>
      <p class="text-(--ui-text-toned)">You will learn some fascinating things about me in the aptly named
        <ULink to="/about" raw class="text-(--ui-text-toned) font-bold  hover:text-(--ui-text-highlighted)">About Me
        </ULink> page.
      </p>
      <p class="text-(--ui-text-muted)">Or you can view my past experiences in the fancy sounding <ULink to="/resume"
          raw class="text-(--ui-text-muted) font-bold hover:text-(--ui-text-highlighted)">Résumé</ULink> page.
      </p>
      <p class="text-(--ui-text-muted)">Otherwise, take a look at some of my prototypes in the <ULink to="/portfolio" raw
          class="text-(--ui-text-muted) font-bold hover:text-(--ui-text-highlighted)">Portfolio</ULink> page.
      </p>
      <p class="text-(--ui-text-dimmed)">Now hurry up and click one of the links before I disappear.</p>
    </div>
  </UCard>
</template>
