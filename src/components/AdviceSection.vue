<template>
  <section
    class="advice mt-[160px] bg-axia-blue text-white py-[80px] blue-parent md:flex md:items-center md:gap-[20px] lg:gap-[50px] lg:py-[144px]"
  >
    <div>
      <h2 class="heading-2-headline">Confused about what to learn?</h2>
      <p class="text-white mt-[20px] mb-[30px]">
        Speak with our professional tech advisors to help kick start your tech
        journey and pilot you to being an expert in your desired field.
      </p>
      <action-button> Speak with an Advisor </action-button>
    </div>
    <div class="mt-[100px] md:basis-[100%] lg:basis-[50%] xl:basis-[100%]">
      <img src="@/assets/img/advice-img.svg" alt="" />
    </div>
  </section>
</template>

<script>
import ActionButton from "./shared/ActionButton.vue";

export default {
  name: "AdviceSection",
  components: {
    ActionButton,
  },
};
</script>

<style></style>
