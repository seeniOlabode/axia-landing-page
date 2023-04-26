<template>
  <section class="success py-[80px] h-[800px] sm:px-[150px] overflow-hidden">
    <header>
      <h2 class="heading-2-headline">Our success story</h2>
    </header>
    <p class="font-medium text-axia-darkgrey text-lg mt-[20px]">
      What our students are saying about their learning experience.
    </p>
    <success-marquee />
  </section>
</template>

<script>
import SuccessMarquee from "./SuccessMarquee.vue";

export default {
  name: "SuccessSection",
  components: {
    SuccessMarquee,
  },
};
</script>

<style></style>
