<script setup lang="ts">
import { UTooltip } from '#components';

</script>

<template>
  <section id="music">
    <div class="md:grid md:grid-cols-2 md:gap-5">
      <p class="col-span-1">
        I am always listening to music. I listen to pretty much any genre from classical to experimental. Recently I have been listening to a lot of jazz. These are some
        of my favourite artists from various genres. This list is not comprehensive.
      </p>
      <UCarousel v-slot="{ item }" :items="artists" orientation="vertical" class-names wheel-gestures skip-snaps
        class="w-full h-full max-md:mt-15 max-md:mb-15 col-span-1" :ui="{
          container: 'transition-[height] h-100',
          item: 'basis-1/4'
        }">
        <div class="flex w-full">
          <img :src="item.images[item.images.length - 1].url" :title="item.name" width="80" height="80"
            class="rounded-full shrink-0 aspect-square object-fill h-[80px]" />
          <div class="mt-1 ml-5">
            <div class="flex gap-4">
              <h1 class="font-bold text-(--ui-text-highlighted)">{{ item.name }}</h1>
              <ULink :to="item.external_urls.spotify" target="_blank" class="mt-1">
                <UTooltip text="View on Spotify">
                  <UIcon name="simple-icons:spotify" />
                </UTooltip>
              </ULink>
            </div>
            <p class="text-(--ui-text-muted) italic">{{ item.genres?.join(', ') }}</p>
          </div>
        </div>
      </UCarousel>
    </div>
  </section>
</template>