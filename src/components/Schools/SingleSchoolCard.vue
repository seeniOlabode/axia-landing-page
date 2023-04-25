<template>
  <article class="relative">
    <div class="card-caption p-[20px]">
      <h4 class="heading-2 font-bold">
        {{ schoolData.name }}
      </h4>
      <p class="text-sm leading-[20px] mt-[12px] mb-[16px]">
        {{ schoolData.description }}
      </p>
      <action-button buttonType="secondary" icon="arrow">
        View Courses
      </action-button>
    </div>
  </article>
</template>

<script>
import ActionButton from "../shared/ActionButton.vue";

export default {
  name: "SingleCourse",
  // props: {
  //   schoolData: {
  //     type: Object,
  //     required: true,
  //   },
  // },
  data() {
    return {
      schoolData: {
        name: "School of Data",
        description:
          "Even as a newbie in the data analysis space, you can jumpstart your journey and hone your skills by kicking it off with the Axia Africa School of Data Analysis.",
      },
    };
  },
  components: {
    ActionButton,
  },
  computed: {
    courseImgPath() {
      return require("@/assets/" + "course-" + this.schoolData.img + ".png");
    },
  },
};
</script>

<style scoped>
article {
  @apply bg-[rgb(250,245,238)];
}

article::before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transform: translate(-12px, 28px);
  z-index: -1;
  @apply border-[3px] border-black border-r-0 border-t-0;
}
</style>
