<template>
  <b-container class="h-100">
    <b-row   class="h-100"  style="background:url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80');
            background-repeat: no-repeat;
            background-size: cover;" >
      <b-col class="d-flex justify-content-center align-items-center">
        <div class=" p-5" style="background-color: #fff; border-radius:30px;">
          <div class=" text-center m-5">
            <h1 class="my-2">Element Title </h1>
            <p>Element description </p>
            <b-button class="my-4" @click="handleStartClicked(nextPage)"><span style="font-size: 24px;">Start</span> </b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {
        name: "StartPage"
    }
</script>
