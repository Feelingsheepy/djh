<template>
  <UContainer class="mt-10">
    <div class="text-center text-(--ui-text)">
      <h3 class="text-lg">Just some links to my portfolio</h3>
      <br />
      <p class="text-(--ui-text)">
        <ULink to="https://blue-pebble-0e93d0b03.4.azurestaticapps.net/" target="_blank" raw
          class="text-(--ui-primary) font-bold  hover:text-(--ui-text-highlighted)">
          This
        </ULink> is a website with components/pages showing UI prototypes. You can find the GitHub repository here:
        <ULink to="https://github.com/Feelingsheepy/playground" target="_blank" raw
          class="text-lg text-(--ui-text-muted) hover:text-(--ui-text-highlighted)">
          <UIcon name="simple-icons:github" class="align-text-top" /> Playground
        </ULink>
      </p>
      <p>
        This website and the playground are created using Vue, Nuxt, NuxtUI v3, Tailwind v4 and Pinia for state when
        necessary. The language is Typescript for the most-part. Some instances of pure Javascript. They are both
        hosted on Azure Static Web Apps.
      </p>
      <br />
      <p>You can find the GitHub repository for this About Me website here:
        <ULink to="https://github.com/Feelingsheepy/djh" target="_blank" raw
          class="text-lg text-(--ui-text-muted) hover:text-(--ui-text-highlighted)">
          <UIcon name="simple-icons:github" class="align-text-top" /> DJH
        </ULink>
      </p>
      <br />
      <p>You can find my GitHub profile here:
        <ULink to="https://github.com/Feelingsheepy/" target="_blank" raw
          class="text-lg text-(--ui-text-muted) hover:text-(--ui-text-highlighted)">
          <UIcon name="simple-icons:github" class="align-text-top" /> Feelingsheepy
        </ULink>
      </p>
      <br />
      <p>You can find my LinkedIn profile here:
        <ULink to="https://www.linkedin.com/in/dylan-husted-ba28a1349/" target="_blank" raw
          class="text-lg text-(--ui-text-muted) hover:text-(--ui-text-highlighted)">
          <UIcon name="simple-icons:linkedin" class="align-text-top" />
        </ULink>
      </p>
      <p>Although I do not really use LinkedIn.</p>
      <br />
      <p>You can find my personal Instagram profile here:
        <ULink to="https://www.instagram.com/dylan_husted/" target="_blank" raw
          class="text-lg text-(--ui-text-muted) hover:text-(--ui-text-highlighted)">
          <UIcon name="simple-icons:instagram" class="align-text-top" />
        </ULink>
      </p>
      <p>
        I haven't really posted on there in ages and don't really use social media, but Instagram is the only one I
        "use".
      </p>
      <p>It has nothing to do with coding.</p>
      <br />
      <p>If you have any suggestions or feedback, feel free to contact me at:
        <ULink to="mailto:dylanjeanhusted@gmail.com" target="_blank" raw
          class="text-lg text-(--ui-text-muted) hover:text-(--ui-text-highlighted)">
          dylanjeanhusted@gmail.com
        </ULink>
      </p>
    </div>
  </UContainer>
</template>
