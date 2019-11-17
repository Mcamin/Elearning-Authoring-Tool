<template>
  <b-col cols="3" class="card" :class="[type && `card-${type}`]">
    <b-card
      :title="title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text :description="description">
        {{description}}
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </b-col>
</template>
<script>
  export default {
    name: "card",
    props: {
      title: {
        type: String,
        description: "Card title"
      },
      description: {
        type: String,
        description: "Course description"
      },
      type: {
        type: String,
        description: "Card type (e.g primary/danger etc)"
      },
      headerClasses: {
        type: [String, Object, Array],
        description: "Card header css classes"
      },
      bodyClasses: {
        type: [String, Object, Array],
        description: "Card body css classes"
      },
      footerClasses: {
        type: [String, Object, Array],
        description: "Card footer css classes"
      }
    }
  };
</script>
<style>
</style>
