<template>
  <aside class="testimony-marquee absolute left-0 overflow-hidden mt-[80px]">
    <div class="marquee-inner flex overflow-hidden gap-[20px]">
      <success-marquee-card v-for="dat in data" :key="dat + 'rr'" />
      <success-marquee-card v-for="dat in data" :key="dat + 'rr'" />
    </div>
  </aside>
</template>

<script>
import SuccessMarqueeCard from "./SuccessMarqueeCard.vue";

export default {
  name: "SuccessMarquee",
  components: {
    SuccessMarqueeCard,
  },
  data() {
    return {
      data: [1, 2, 3, 4, 5],
    };
  },
};
</script>

<style scope>
.marquee-inner {
  animation: marqueeAnim 50s linear infinite;
}

.marquee-inner:hover {
  animation-play-state: paused;
}

@keyframes marqueeAnim {
  100% {
    transform: translate(-50%);
  }
}
</style>
