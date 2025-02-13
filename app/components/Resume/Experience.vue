<script setup lang="ts">
const experienceItems = ref([
  {
    label: 'Unemployed',
    date: '2023 Oct',
    dateEnd: 'present',
    descriptions: [
      `We were hosting family members from overseas for a few months after I finished my previous job. 
        Then I had booked a vacation to go visit family in Australia for a couple of months. I did not 
        want to try look for a job before the visit to Australia because then I would have limited my 
        options to companies that would allow me to take such a long break after having just started working.`
    ],
  },
  {
    label: 'UserOrg',
    date: '2021 Mar',
    dateEnd: '2023 Oct',
    position: 'Tech Lead',
    technology: 'Python, JavaScript, SQL, Azure Cloud Stack, SendGrid, NodeJS, Vue, Docker, Git',
    descriptions: [
      `I was employed at this start-up to help convert a skeleton web application into a fully functioning, cloud-hosted web application.`,
      `This required re-factoring the code, setting up the git repository, deploying the code via docker and then using the docker to
        deploy the code on Azure App Services, integrating email capabilities using SendGrid, migrating the local SQL database to Azure
                    SQL, hosting a separate static website for the company website that could be easily altered by the marketing people.`,
      `After this was in place, I saw to improving the efficiency of the SQL operations, setting up database/cloud alarms, improving
        the work-flow between developer and stakeholder with an issue tracking platform, automatic builds and deployment with a dev-ops
        platform. Then after that I worked on maintaining the application, fixing bugs, improving the UX aspects of the web app, adding
        features requested by the stakeholders, giving advice on possible solutions, providing estimates and forecasts for future development work.`
    ],
  },
  {
    label: 'Unemployed',
    date: '2018 Sep',
    dateEnd: '2021 Mar',
    technology: 'Vue, CosmosDB, MariaDB, GraphQL/GremlinDB, NodeJS, TensorFlow, Docker, Kubernetes, Function Apps, Event-based architecture, Message Queues and Publisher/Subscriber flows, WebSockets',
    descriptions: [
      `I spent time on my own projects in order to learn more about technologies that I had not been able to work on as well as to get a
        better understanding of working on a project from the beginning, because before I had only worked on already established apps.
        I also spent time reading white papers/books about development and new ideas surrounding work-flow in development teams and infrastructure design for new apps.`,
      `This break between jobs ended up being longer than anticipated because of the outbreak of Covid-19 and the tumult surrounding the technology industry at the time.`,
      ],
  },
  {
    label: 'Skynamo',
    date: '2015 Nov',
    dateEnd: '2018 Sep',
    position: 'Junior Developer to Intermediate Developer to Lead on a small team',
    technology: 'C#, Javascript, AWS CloudStack, Git, Java, Android/iOS',
    descriptions: [
      `I started at Skynamo as a Junior Developer. I initially worked mostly on fixing bugs and implementing small features
        as well as learning under the Lead Developer.`,
      `Then, because of my success, I was given a project to work on by myself as well as the responsibility to correspond
        with the client on that project. That project involved getting our web app to function entirely on the client's on-site infrastructure.`,
      `Afterwards I continued to help with features and bug fixing on the main project, mostly back-end and front-end of the web development, 
        but sometimes I would help with mobile features/bugs on Android and iOS.`,
      `I was also tasked with converting the version control and DevOps to Git to help with work-flow and automatic deployment/testing(CI).
        As well as being the admin and maintainer of the version control and DevOps, with input from the Lead Developer and other developers
        to ensure we were all on the same page. I was also tasked with refining our development processes by speaking with the other developers
        and figuring out what systems and processes would be suit our changing team and helping the project manager to implement these new processes. `,
      `Eventually, I was made the lead developer of a small team to pursue features adjacent to the main project of the company. This included helping a
        junior developer to adjust to working in our company and corresponding with our project manager to fulfil the needs of our team.`,
    ],
  },
  {
    label: 'Unemployed',
    date: '2015 July',
    dateEnd: '2015 Nov',
    descriptions: [
      `Contract expired. Took a short break and then looked for a job.`,
    ]
  },
  {
    label: 'Reutech',
    date: '2015 Jan',
    dateEnd: '2015 July',
    position: 'Contracted Intern (6 months)',
    technology: 'Delphi, C++, C# and Python, Git',
    descriptions: [
      `I worked under a senior developer to help create the new desktop application that was to be used by clients of the Mining
        Department. It was basically an application that took the raw input from the radar and converted it to human understandable
        metrics in order to display the mine and what changes were occurring over time in a 3d display. This was mostly pair programming,
        but also some features/bug fixes that I was given to do on my own, with oversight.`,
      `The purpose of this contract was to help me
        get a better understanding of working on a large application with a team of other people, as well as to learn better practices
        from experienced developers and engineers.`
    ],
  },
  {
    label: 'Reutech',
    date: '2012 Jun',
    dateEnd: '2014 Dec',
    position: 'Intern (23 weeks in period)',
    technology: 'Delphi, C++, C# and Python, Git, openGL',
    descriptions: [
      `I interned during my university holidays in order to get some experience before I finished my degree. I worked in openGL
        and Delphi to implement small features for the 3d rendering application used to display open pit mines to clients. I modified and fixed
        the emulator used for testing purposes so that we could test new builds without the need of a working radar, this was done in C#.`,
      `I set up the issue tracking system and helped implement agile methodology. I migrated the version control system to git as well as
        integrated the existing build scripts and deploy scripts into a CI pipeline. Then had to create documentation on how to do all of this
        as well as how to maintain it.`
    ],
  },
])
</script>

<template>
  <div class="relative">
    <p class="absolute left-[0px] -bottom-[7px] align-right font-medium text-sm">2012 Jun</p>
    <p class="absolute left-[65px] -bottom-[12px] text-2xl">-</p>
    <UIcon name="lucide:dot" class="absolute left-[56px] -bottom-[19px] size-10" />
    <h3 class="text-lg font-bold pb-2  text-(--ui-text-highlighted)">Experience:</h3>
    <UAccordion :items="experienceItems" class="border-l-2 rounded-md ml-20">
      <template #default="{ item }">
        <div class="relative pb-3">
          <p class="absolute -left-[80px] -top-[25px] align-right">{{ item.dateEnd }}</p>
          <p class="absolute -left-[16px] -top-[33px] text-2xl">-</p>
          <UIcon name="lucide:dot" class="absolute -left-[25px] -top-[34px] size-10" />
          <h3 class="text-lg font-bold mx-5 text-(--ui-text-highlighted)">{{ item.label }}</h3>
          <div class="mx-10">
            <div v-if="item.position">
              <p class="font-bold"><u>Position:</u></p>
              <p class="mx-5">{{ item.position }}</p>
              <br />
            </div>
            <div v-if="item.technology">
              <p class="font-bold"><u>Technologies used:</u></p>
              <p class="mx-5">{{ item.technology }}</p>
            </div>
          </div>
        </div>
      </template>
      <template #content="{ item }">
        <div>
          <USeparator />
          <p v-for="description in item.descriptions" class="m-5">{{ description }}</p>
        </div>
      </template>
    </UAccordion>
  </div>
</template>