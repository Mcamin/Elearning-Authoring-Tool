<template>
  <b-container fluid class=" mt-5  px-5 ">
    <b-row align-v="center" align-h="center">
      <b-col align-self="center" class="h-100">

          <div>
            <div class="simple-page">

            </div>
          </div>



      </b-col>
    </b-row>
  </b-container>
</template>

<script>




export default {
    name: "playground",
    components: {  },
    data() {
        return {
            items: generateItems(50, i => ({ id: i, data: "Draggable " + i }))
        };
    },
    methods: {

    }
};
</script>
