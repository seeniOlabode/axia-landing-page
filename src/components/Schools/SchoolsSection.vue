<template>
  <section class="schools py-[96px]">
    <header>
      <h2 class="heading-2-headline">
        Discover the right school for your journey
      </h2>
    </header>
    <p class="body mt-[25px]">
      Axia Africa offers you the chance to explore schools which has variety of
      courses to learn from, like product design, Front end,
    </p>

    <section
      class="schools-list grid grid-cols-1 sm:grid-cols-2 gap-10 mt-[48px]"
    >
      <single-school-card v-for="school in schools" :key="school + 'ra'" />
    </section>
  </section>
</template>

<script>
import SingleSchoolCard from "./SingleSchoolCard.vue";

export default {
  name: "SchoolsSectin",
  components: { SingleSchoolCard },
  data() {
    return {
      schools: [1, 2, 4],
    };
  },
};
</script>

<style></style>
