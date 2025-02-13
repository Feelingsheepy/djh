<script setup lang="ts">
const images = [
  {
    link: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1421618636i/30659.jpg',
    header: 'Meditations by Marcus Aurelius',
    body: `This is probably my favourite philosophy book. I like the stoics' philosophy in general. There are many
            fantastic quotes and life lessons in this book.But the thing that stuck with me most was the fact that he
            still has thoughts and doubts about himself that the average person will experience even though he was the
            emperor of Rome nearly 2000 years ago.`,
    footer: `“Never let the future disturb you. You will meet it, if you have to, with
              the same weapons of reason which today arm you against the present.”`,
  },
  {
    link: 'https://images.gr-assets.com/authors/1390145726p8/275648.jpg',
    header: 'Socrates',
    body: `Socrates was really my introduction to ancient Greek philosophers. Although I did not read any actual accounts
            from the man himself(as I do not think he wrote any), I read of his philosophy and antics through Plato and Xenophon. 
            He was a bit of an odd person, as he would always approach random people in the marketplace and pose arbitrary ethical 
            dilemmas to debate. He seemed to have a disdain for the Sophists and he would always try to understand the true meaning behind things. 
            My favourite thing about him was that he believed we should stick to our personal values at all costs. 
            Which he demonstrated by refusing to change his mind about his disbelief in the gods and his opposition to the democrats at the time, 
            even under threat of execution.`,
    footer: `“He who is not contented with what he has, would not be contented with what he would like to have.”`,
  },
  {
    link: 'https://images.gr-assets.com/authors/1651532170p8/879.jpg',
    header: 'Plato',
    body: `Student of Socrates. A lot of the stuff I read by him was in fact tales of Socrates. It is hard to tell where the specific philosophy of Socrates
            stops and where Plato's starts except in specific cases where he uses Socrates as a contrarian figure to oppose his own ideas. 
            He had some interesting ideas about love and the soul in particular. He was much more interested the spiritual meaning of ideas rather than their 
            incarnation in the material world. I would highly recommend Plato as it will give you a good insight his own ideas as well as the ideas of Socrates. 
            Some people would consider him the father of Western philosophy.`,
    footer: `“According to Greek mythology, humans were originally created with four arms, four legs and a head with two faces. 
              Fearing their power, Zeus split them into two separate parts, condemning them to spend their lives in search of their other halves.”`,
  },
  {
    link: 'https://images.gr-assets.com/authors/1651532053p8/2192.jpg',
    header: 'Aristotle',
    body: `No doubt one of the greatest men to ever exist. He essentially created the sciences as we know them. The first man to study logic and apply it to metaphysics.
            Any aspiring philosopher, mathematician or scientist would do well to read his books(what remains of them). 
            Although with the breadth of his work I would encourage everyone to read some of his work that appeals to their interests.
            There is far too much for me to go into detail, but know that his work is well regarded by prominent people from all eras and his students went on to become great men. 
            Most notably Alexander the Great`,
    footer: `“It is the mark of an educated mind to be able to entertain a thought without accepting it.”`,
  },
  {
    link: 'https://images.gr-assets.com/authors/1608045067p8/13852.jpg',
    header: 'Epictetus',
    body: `A former slave, turned philosophy teacher. Quite a bit later than the previous 3 greeks I mentioned. Another brilliant stoic philosopher. 
            I read his 4 Discourses and The Enchiridion because Marcus Aurelius mentions Epictetus in his Meditations. 
            His work mostly comprises of distinguishing between the things we can control and those that are outside of our power. 
            As well as the importance of recognizing good and evil. He speaks about many ethical and unethical topics. He believed that everyone is interconnected
            and that we should strive to help others and denounce our own selfishness. He believed that people only do evil things out of ignorance
            and that we should forgive them and show compassion. Rather than let them drive us to anger. A true inspiration.`,
    footer: `“If anyone tells you that a certain person speaks ill of you, do not make excuses about what is said of you but answer, 
               "He was ignorant of my other faults, else he would not have mentioned these alone.”`,
  },
  {
    link: 'https://images.gr-assets.com/photos/1430658721p8/1177216.jpg',
    header: 'Friedrich Nietzsche',
    body: `An incredibly troubled man, but a great thinker. I think when studying his work you need to have a deeper understanding of his life. That's why I
             decided to listen to podcasts and watch videos discussing his life and the ideas he was writing of at that time in his life. Best known for his
             criticism of western society and religion. Mischaracterized as a nihilist, but ultimately he believed that it was our duty to seek purpose and not wallow
             in sorrow. Some of his philosophy borders on psychology and his back and forths with Carl Jung are incredibly interesting. As he got older I think
             he got a bit crazy which is not surprising considering his life prior. Some of his later works exploring the psyche are truly fascinating, but
             ultimately sad. He left a brilliant legacy though and I would recommend him if you are not easily offended and can sift through irony easily.`,
    footer: `“The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently.”`,
  },
  {
    link: 'https://images.gr-assets.com/authors/1435903703p8/2622245.jpg',
    header: 'Tao Te Ching by Lao Tzu',
    body: `Ancient Chinese sage. The text is considered one of the foundations of Taoism. The words are more flowery and ideas are vastly different to western
            philosophy, but there is a lot of commonality between them. There is a heavy emphasis on living in the now and letting the universe guide you. What
            is commonly known as a flow state. Definitely recommend to read it, but it is the type of philosophy you must learn over time and not merely from
            reading about it.`,
    footer: `“The entire world knows me as “great.”
               I am great, and yet bear a resemblance to nothing at all.
               Indeed, it is only because I resemble nothing at all that I am able to be great.
               If I did bear a resemblance to something else,
               For a long time now I would have been of little consequence.
               I really have three prized possessions that I cling to and treasure:
               The first of these is compassion,
               The second, frugality,
               And the third is my reluctance to try to become preeminent in the world.
               It is because of my compassion that I can be courageous;
               It is because of my frugality that I can be generous;
               It is because of my reluctance to try to become preeminent in the world that I am able to become chief among all things.
               To be courageous without compassion,
               To be generous without being frugal,
               And to take the lead without holding back—
               This is courting death.
               Compassion will give you victory in waging war,
               And security in defending your ground.
               When nature sets anything up
               It is as if it fortifies it with a wall of compassion.”`,
  },
  {
    link: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630683326i/10534.jpg',
    header: 'The Art of War by Sun Tzu',
    body: `Not particularly philosophy, more of an ancient war strategy text. There are lots of strategies discussed that can apply to life in general
            and our interactions in every day life. Lots of the ideas are obvious because strategy has evolved so much since this book was written,
            but the fundamentals remain the same. There is also a sprinkling of actual thought provoking philosophy contained within. I would highly
            recommend it as it is a short read and can provide valuable insight into how we can interact with people and various other entities in 
            life. Just replace "enemy" with the thing you are trying to conquer or achieve.`,
    footer: `“Even the finest sword plunged into salt water will eventually rust.”`,
  },
  {
    link: 'https://images.gr-assets.com/authors/1427892345p5/1501668.jpg',
    header: 'Alan Watts',
    body: `This is more of a special shoutout and thanks to Alan Watts. I listened to all his lectures and found it to be an amazing introduction to 
            eastern philosophy for a person living in the western world. I do not think he represented the ideas entirely faithfully, so I think it is
            important to explore and study the ideas he talks about more in depth. His lectures convinced me to study philosophy deeper, after which I
            found The History of Philosophy Without Any Gaps podcast. This podcast lead me to start reading the books of famous philosophers. And so this
            process continued and now I am in love with reading and listening to philosophy content and texts. Highly recommend getting your hands on his
            lectures. Even if it is just for something to listen to in the background.`,
    footer: `“You are an aperture through which the universe is looking at and exploring itself.”`,
  },
]
</script>

<template>
  <section id="philosophy">
    <p class="antialiased">I am always thinking about the world. Both the physical world and the spiritual side of
      things. These are some of the philosophers whose catalogues I have read either partially or entirely. In no
      particular order.
    </p>
    <UCarousel v-slot="{ item }" dots :items="images" arrows class="w-full h-full mt-15 mb-15" :ui="{
      container: 'transition-[height]',
      controls: 'absolute -top-8 inset-x-12',
      dots: '-top-7',
      dot: 'w-6 h-1 max-md:w-1'
    }">
      <div class="grid grid-cols-2 gap-0 w-full h-full max-md:flex flex-col max-md:content-center">
        <img :src="item.link" :title="item.header" width="100%" height="100%"
          class="rounded-lg col-span-1 shrink-0 m-0.5 w-full aspect-2/3">
        <UCard class="flex flex-col col-span- h-0.95 m-0.5">
          <template #header class="flex-none">
            <h1 class="font-bold text-(--ui-text-highlighted)">{{ item.header }}</h1>
          </template>
          <div class="grow">
            <p class="antialiased">{{ item.body }}</p>
          </div>
          <template #footer class="flex-none">
            <p class="text-(--ui-text-muted) italic">{{ item.footer }}</p>
          </template>
        </UCard>
      </div>
    </UCarousel>
  </section>
</template>