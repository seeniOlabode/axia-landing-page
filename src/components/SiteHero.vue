<template>
  <section class="hero text-center sm:flex sm:items-center relative">
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
    <div class="hero-image mt-[20px] md:basis-[100%]">
      <img class="w-full" src="@/assets/axia-hero.svg" alt="" />
    </div>
    <img
      src="@/assets/axia-bubbles.svg"
      class="absolute -bottom-[150px] float-img"
      alt=""
    />
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

.float-img {
  animation: float 5s ease-in-out infinite;
  animation-direction: alternate;
}

@keyframes float {
  0% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(20px);
  }
}
</style>
