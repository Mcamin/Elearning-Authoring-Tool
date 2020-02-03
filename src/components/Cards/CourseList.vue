<template>
  <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
    <b-card-text>
      Some quick example text to build on the card and make up the bulk of the card's content.
    </b-card-text>
  </b-card>
</template>

<script>
  import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from "@fortawesome/fontawesome-svg-core";
  library.add(
    faPlusCircle,
  );
  export default {
        name: "CourseCard",
        data() {
          return {
            image: "https://sanitationsolutions.net/wp-content/uploads/2015/05/empty-image.png",
          }
        },
        components:{
          'font-awesome-icon': FontAwesomeIcon
        },
        props:{
            id:"",
            title:"",
            courseCategory:"",
            courseLanguages:"",
            courseDuration:"",
            url:"",
            img:""
        }
    }
</script>

<style scoped>
.card{
}
</style>
