<template>
  <section class="partner py-[50px] relative">
    <h1 class="heading-1-headline text-center">Partner With Us</h1>
    <p class="text-center mt-[20px] body">
      Do you have a passion for making impact and inspiring to the tech space?
      Partner with us at Axia Africa and share our passion of leading a
      generation of tech talents waiting to be tapped.
    </p>
    <div class="w-full text-center mt-[100px]">
      <action-button>Learn More</action-button>
    </div>
    <div class="flex justify-between absolute -bottom-[80px] w-full float-img">
      <img src="@/assets/axia-partner-bubbles-right.svg" alt="" />
      <img src="@/assets/axia-partner-bubbles-left.svg" alt="" />
    </div>
  </section>
</template>

<script>
import ActionButton from "./shared/ActionButton.vue";

export default {
  name: "PartnerSection",
  components: {
    ActionButton,
  },
};
</script>

<style scoped>
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
