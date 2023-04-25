<template>
  <section class="hero text-center sm:flex sm:items-center">
    <div>
      <h1 class="heading-1-headline text-center sm:text-left">
        Accelerate your career with
        <span class="heading-gradient">Job-ready </span>tech skills.
      </h1>
      <p class="body text-center mt-[10px] sm:text-left">
        Begin your tech journey and expand your career opportunities in the tech
        space by learning tech skills in demand.
      </p>
      <div class="mt-[48px]">
        <div
          class="flex flex-col items-center sm:items-start md:flex-row md:gap-[50px] ite"
        >
          <action-button class="mx-auto mt[] sm:mx-0">
            Apply Now
          </action-button>
          <action-button
            buttonType="secondary"
            icon="arrow"
            class="mt-[26px] sm:mt-0"
          >
            Speak with an Advisor
          </action-button>
        </div>
      </div>
    </div>
    <div class="hero-image mt-[20px]">
      <img src="@/assets/axia-hero.svg" alt="" />
    </div>
  </section>
</template>

<script>
import ActionButton from "./shared/ActionButton.vue";

export default {
  name: "SiteHero",
  components: {
    ActionButton,
  },
};
</script>

<style scoped>
.hero {
  @apply py-[59px];
}

.heading-gradient {
  background: linear-gradient(65deg, #ab2638, #f0b73f);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-image img {
  width: 100%;
  padding: 20px;
}
</style>
