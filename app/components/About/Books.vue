<script setup lang="ts">
const books = ref([
  {
    link: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
    externalLink: 'https://www.goodreads.com/book/show/33.The_Lord_of_the_Rings',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    blurb: 'Absolute legend. Amazing trilogy. Need I say more?',
  },
  {
    link: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659905815i/228665.jpg',
    externalLink: 'https://www.goodreads.com/book/show/228665.The_Eye_of_the_World',
    title: 'The Wheel of Time',
    author: 'Robert Jordan',
    blurb: `The series that got me into reading epic fantasy novels. RIP Robert Jordan. Brandon Sanderson did an amazing job completing the series.
              The series starts out as a typical Chosen One type of fantasy like LotR, but evolves into a large-scale more political overview of the
              world and the contending forces. The world he crafts over the series is phenomenal, but be warned it is a very slow burn. His ability to
              set the scene and build up plots over many books is top-notch.`,
  },
  {
    link: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617768316i/68428.jpg',
    externalLink: 'https://www.goodreads.com/book/show/68428.Mistborn',
    title: 'Mistborn',
    author: 'Brandon Sanderson',
    blurb: `Probably the easiest Sanderson novel to get into for people looking for fantasy that is not a YA novel. This was written early in his career so
              his writing of characters and dialog is not on par with his more recent works. He does an excellent job of building the world and the magic system.
              All of his books are some what interconnected in what he calls the Cosmere.`,
  },
  {
    link: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659905828i/7235533.jpg',
    externalLink: 'https://www.goodreads.com/book/show/7235533-the-way-of-kings',
    title: 'The Stormlight Archive',
    author: 'Brandon Sanderson',
    blurb: `His best work to date. It is an incredibly long epic fantasy, with only 5 out of the 10 books released so far. The characters are really well 
              fleshed out and he makes you feel like you are actually exploring the world. Action is sparsely distibuted, but I personally prefer reading
              about the characters, world and dialog. When the action actually comes it is epic, but I think that is entirely due to the build up in between.
              The character development is really good and I always felt like I understood how the characters felt going through their struggles.`,
  },
  {
    link: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1548497031i/55399.jpg',
    externalLink: 'https://www.goodreads.com/book/show/55399.Gardens_of_the_Moon',
    title: 'Malazan Book of the Fallen',
    author: 'Steven Erikson',
    blurb: `Definitely the slowest out of all these books I have listed. And the harshest. Erikson is an anthropologist, so the world and cultures/races
              he created for this book series is the best by far out of anything else I have read. At times it feels like reading a history book, but
              based on made-up peoples. Much like in real life, the history is brutal and there are no happy endings for the most part (of course there
              are moments of goodness and joy). There is absolutely no hand-holding in this series and part of the wonder is figuring out the world and
              what is going on.`,
  },
  {
    link: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1329650008i/60211.jpg',
    externalLink: 'https://www.goodreads.com/book/show/60211.The_Shadow_of_the_Torturer',
    title: 'The Book of the New Sun',
    author: 'Gene Wolfe',
    blurb: `This series has become my favourite of all time. The story is very mystical and hard to put your finger on. There are so many clues and moments
              that foreshadow future plot points. You could just keep reading this series over and over again and still find things you missed that help expand
              on the lore. In fact there is still a community of people discussing the meaning behind so many factors of the book. Some you will just need to
              pick up on how something was said, but some will require knowledge of ancient Rome or the like. A magnum opus to be proud of for Gene Wolfe.`,
  },
  {
    link: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1284167912l/944073.jpg',
    externalLink: 'https://www.goodreads.com/series/43644-the-first-law',
    title: 'The First Law',
    author: 'Joe Abercrombie',
    blurb: `Brutal, gory and honest. This book is essentially old stories of war with a tinge of the mystical. Magic clearly exists, but is not a key feature
              of the world. Probably the best character perspective writer I have read. How the characters perceive themselves and each other is so well written.
              Some characters you will hate or love until you get a different perspective. Some characters will grow on you once you get a deeper understanding
              of the world or their background. When I started the books, I never thought I would sympathise with the torturer who is not even a good person.`,
  },
  {
    link: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg',
    externalLink: 'https://www.goodreads.com/book/show/44767458-dune',
    title: 'Dune',
    author: 'Frank Herbert',
    blurb: `I read the book after watching Dune part 1, but it had been recommended to me many times before that. The book is so much more in-depth than the
              movie. The story is essentially "What if we recreated the jihad, but more like Star Wars?". So many interesting concepts and all the science is
              really well thought out considering it was written in 1965. The first book is a fully self-contained story and I would not recommend the sequels.`,
  },
])
</script>

<template>
  <section id="books">
    <p>I absolutely love fantasy books and some with a little science fiction thrown in. These are my favourite
      books/book series I have read and highly recommend them all. Unless you are a more casual reader and want easily
      digestible books.</p>
    <UCarousel v-slot="{ item }" dots :items="books" arrows class-names
      class="w-full h-full mt-15 mb-15 text-xs" :ui="{
      container: 'transition-[height]',
      controls: 'absolute -top-8 inset-x-12',
      dots: '-top-7',
      dot: 'w-6 h-1 max-md:w-1',
      item: 'basis-1/2 transition-opacity [&:not(.is-snapped)]:opacity-10'
    }">
      <div class="grid grid-cols-2 gap-0 max-md:gap-0 w-full h-full max-md:flex flex-col max-md:content-center">
        <img :src="item.link" :title="item.title" width="100%" height="100%" class="rounded-lg col-span-1 shrink-0 m-0.5 aspect-2/3 object-fill">
        <UCard class="flex flex-col col-span-1 h-0.90 m-0.5">
          <template #header class="flex-none">
            <ULink :to="item.externalLink" target="_blank">
              <h1 class="font-bold text-(--ui-text-highlighted)">{{ item.title }}</h1>
            </ULink>
            <p class="text-(--ui-text-muted) italic">by {{ item.author }}</p>
          </template>
          <div class="grow">
            <p class="antialiased">{{ item.blurb }}</p>
          </div>
        </UCard>
      </div>
    </UCarousel>
  </section>
</template>