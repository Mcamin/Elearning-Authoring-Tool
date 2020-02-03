<template>
  <b-container fluid class=" mt-5  px-5 ">
    <b-row align-v="center" align-h="center">
      <b-col align-self="center" class="h-100">
        <CourseList>Y</CourseList>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import CourseList from "@/components/Cards/CourseList";
  export default {
      name:"playground",
    components: {CourseList},

  };
</script>
