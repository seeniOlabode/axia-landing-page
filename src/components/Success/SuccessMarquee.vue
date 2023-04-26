<template>
  <aside class="testimony-marquee absolute left-0 overflow-hidden mt-[80px]">
    <div class="marquee-inner flex overflow-hidden gap-[20px] lg:gap-[40px]">
      <success-marquee-card
        v-for="testi in data"
        :key="testi.name + 'testimony'"
        :testimonyData="testi"
      />
      <success-marquee-card
        v-for="testi in data"
        :key="testi.name + 'testimony'"
        :testimonyData="testi"
      />
    </div>
  </aside>
</template>

<script>
import SuccessMarqueeCard from "./SuccessMarqueeCard.vue";
import Data from "@/data/data.json";

export default {
  name: "SuccessMarquee",
  components: {
    SuccessMarqueeCard,
  },
  data() {
    return {
      data: Data.testimonies,
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
