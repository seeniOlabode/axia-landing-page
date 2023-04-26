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
      class="schools-list flex flex-col gap-10 mt-[48px] sm:flex-row sm:flex-wrap justify-center"
    >
      <single-school-card
        v-for="school in schools"
        :key="school + 'ra'"
        class="sm:basis-[45%]"
        :schoolData="school"
      />
    </section>
  </section>
</template>

<script>
import SingleSchoolCard from "./SingleSchoolCard.vue";

import Data from "@/data/data.json";

export default {
  name: "SchoolsSectin",
  components: { SingleSchoolCard },
  data() {
    return {
      schools: Data.schools,
    };
  },
};
</script>

<style></style>
