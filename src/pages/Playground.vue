<template>
  <div class="content-wrapper">
  <TopNavBar/>
  <b-container fluid class="  px-5 " style="background:red; height:500px">

  </b-container>
</div>
</template>

<script>
  /*import Accordion from "../components/Accordions/Accordion";
  import AddSectionModal from "../components/Modals/AddSectionModal";
  import AddBtn from "../components/Buttons/AddBtn";
  import AddContentModal from "../components/Modals/AddContentModal";
*/
    import TopNavBar from "../layout/WrapperElements/TopNavBar";
  export default {
        name: "playground",
      data () {
          return {
          }
      },
      components: {
        TopNavBar
       /* AddContentModal,
        Accordion,
        AddSectionModal,
        AddBtn*/
      },
    }
</script>

<style scoped>

</style>
