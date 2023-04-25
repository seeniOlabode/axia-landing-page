<template>
  <section
    class="advice mt-[160px] bg-axia-blue text-white py-[80px] blue-parent"
  >
    <div>
      <h2 class="heading-2-headline">Confused about what to learn?</h2>
      <p class="text-white mt-[20px] mb-[30px]">
        Speak with our professional tech advisors to help kick start your tech
        journey and pilot you to being an expert in your desired field.
      </p>
      <action-button> Speak with an Advisor </action-button>
    </div>
    <div class="mt-[100px]">
      <img src="@/assets/advice-img.svg" alt="" />
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
