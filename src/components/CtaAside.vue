<template>
  <aside
    class="bg-[rgb(17,17,17)] text-white cta py-[80px] black-parent lg:p-[150px]"
  >
    <header>
      <h2 class="heading-2-headline">Foster your tech knowledge</h2>
    </header>
    <div class="w-full mt-[60px]">
      <div class="md:h-[333px] overflow-hidden">
        <img class="w-full" src="@/assets/cta-img.png" alt="" />
      </div>
      <p class="text-white mt-[40px] mb-[80px]">
        Don’t just wait around, Register and join our students ready to enroll
        and kick start their tech career.
      </p>
      <action-button>Apply Now</action-button>
    </div>
  </aside>
</template>

<script>
import ActionButton from "./shared/ActionButton.vue";

export default {
  name: "CtaAside",
  components: {
    ActionButton,
  },
};
</script>

<style scoped>
.cta {
}
</style>
