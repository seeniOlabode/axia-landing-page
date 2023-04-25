<template>
  <div
    class="w-[375px] bg-[rgb(250,254,238)] py-[24px] px-[20px] min-h-[375px] flex flex-col justify-between"
  >
    <p class="text-sm">
      {{ testimonyData.testimony }}
    </p>
    <div class="flex items-center gap-[20px] mt-[20px]">
      <img src="@/assets/testimony-caption.png" alt="" />
      <h2 class="heading-2">{{ testimonyData.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonyData: {
        name: "Samuel Ogunshino",
        testimony:
          "I always had a knack for designs but I needed the right platform to put me through and teach me properly, I found that with Axia Africa. At Axia Africa, the tutors are very kind to retake a class for you when you don’t understand a thing. If you are looking for a place where you need an efficient and reliable tutoring then Axia Africa is the right place for you.",
      },
    };
  },
};
</script>

<style></style>
