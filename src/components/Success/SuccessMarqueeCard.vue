<template>
  <div
    class="w-[375px] bg-[rgb(250,254,238)] py-[24px] px-[20px] min-h-[375px] flex flex-col justify-between"
  >
    <p class="text-sm">
      {{ testimonyData.testimony }}
    </p>
    <div class="flex items-center gap-[20px] mt-[20px]">
      <img :src="testimonyImage" alt="" />
      <h2 class="heading-2">{{ testimonyData.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["testimonyData"],
  computed: {
    testimonyImage() {
      return require("@/assets/success/" + this.testimonyData.img + ".png");
    },
  },
};
</script>

<style></style>
