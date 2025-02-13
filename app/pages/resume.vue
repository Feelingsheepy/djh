<template>
  <div class="grid grid-cols-16 m-10">
    <div class="col-span-2 max-md:hidden" />
    <div class="col-span-10 max-md:col-span-16">
      <h1 class="text-xl font-bold  text-(--ui-text-highlighted)">Résumé</h1>
      <USeparator class="m-5" />
      <section id="summary">
        <h3 class="text-lg font-bold pb-2  text-(--ui-text-highlighted)">Summary:</h3>
        <p>
          I am a software developer with 5+ years of experience. Most of my experience is in Web Development, but I have
          some experience working with desktop applications and mobile applications. My previous work has comprised
          mostly of back-end web development. I also have good experience working on front-ends, databases, DevOps and
          cloud infrastructure. I am looking for long-term employment at a company with a good company culture and an
          ability to adapt to the needs of the technology industry. I work well under pressure as I am a naturally calm
          person. I get along well with co-workers and clients. I am capable of following orders, but I can also be a
          leader when necessary.
        </p>
      </section>
      <USeparator class="m-5" />
      <section id="contact">
        <h3 class="text-lg font-bold pb-2 text-(--ui-text-highlighted)">Contact Details:</h3>
        <p><b>Email: </b>
          <ULink to="mailto:dylanjeanhusted@gmail.com">dylanjeanhusted@gmail.com</ULink>
        </p>
        <p><b>Cellphone: </b>Refer to physical copy</p>
        <p><b>Address: </b>Refer to physical copy</p>
      </section>
      <USeparator class="m-5" />
      <section id="personal">
        <h3 class="text-lg font-bold pb-2  text-(--ui-text-highlighted)">Personal Details:</h3>
        <p><b>Name: </b>Dylan Jean Husted</p>
        <p><b>Birth Date: </b>18 December 1992</p>
        <p><b>Gender: </b>Male</p>
        <p><b>Current Occupation: </b>Unemployed</p>
      </section>
      <USeparator class="m-5" />
      <section id="education">
        <h3 class="text-lg font-bold pb-2  text-(--ui-text-highlighted)">Education:</h3>
        <p><b>High School: </b>Parel Vallei High School</p>
        <p><b>Matriculated in: </b>2011</p>
        <p><b>Final Average: </b>79%</p>
        <p><b>Additional: </b>Cambridge AS and AL Level Mathematics and Statistics</p>
        <br />
        <p><b>Degree: </b>BSc in Mathematics and Computer Science</p>
        <p><b>University: </b>University of Cape Town</p>
        <p><b>Graduated in: </b>2015</p>
      </section>
      <USeparator class="m-5" />
      <section id="experience">
        <ResumeExperience />
      </section>
      <USeparator class="m-5" />
      <section id="skills">
        <h3 class="text-lg font-bold pb-2  text-(--ui-text-highlighted)">Skills and characteristics:</h3>
        <p>Willing to learn</p>
        <p>Very fast learner</p>
        <p>Responsible</p>
        <p>Trustworthy</p>
        <p>Friendly</p>
        <p>Good communicator</p>
        <p>Leader</p>
        <p>Good in high pressure situations</p>
      </section>
      <USeparator class="m-5" />
      <section id="technology">
        <h3 class="text-lg font-bold pb-2  text-(--ui-text-highlighted)">Technologies known:</h3>
        <p>Javascript</p>
        <p>Python</p>
        <p>C#</p>
        <p>Java</p>
        <p>AWS Cloud Stack</p>
        <p>Azure Cloud Stack</p>
        <p>SQL + NoSQL</p>
        <p>NodeJS</p>
        <p>Vue</p>
        <p>Docker</p>
        <p>C++</p>
      </section>
      <USeparator class="m-5" />
      <section id="additional">
        <h3 class="text-lg font-bold pb-2  text-(--ui-text-highlighted)">Additional:</h3>
        <p>
          I like well structured code as well as systems in place to allow the developers to focus on coding. I like
          learning new things and building relationships with my fellow co-workers.
        </p>
        <br />
        <p>
          I am hoping to work for a company that has friendly people, a good work culture and puts the people first. But
          I also want to work for a company that is ambitious and wants to put out the best product they possibly can.
        </p>
      </section>
    </div>
  </div>
</template>