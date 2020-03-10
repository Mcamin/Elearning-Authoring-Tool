<template>
  <b-container fluid>
    <b-row align-h="center" class=" vh-100" align-content="center">
      <b-col class="h-100 bg-login jr" cols="8">
        <b-container class="mt-5 ">
          <b-row>
            <b-col class="bg-semi-transparent p-5" md="6">
              <h2>Welcome!</h2>
              <hr/>
              <br>
              <h6>OpenStudio - Your space for creating learning content</h6>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
      <b-col class="mt-5 pt-5" align="start" align-self="top">
          <span class="login100-form-title p-5">
						Login to continue
					</span>
        <el-tabs v-model="activePane" stretch=true class="px-5">
          <el-tab-pane label="Sign In" name="first">
            <el-input placeholder="Email or Username" v-model="email" class="mb-1 "/>
            <el-input placeholder="Password" v-model="password" show-password class="mb-1 "/>
            <el-button @click.native="redirectToHome" type="success" native-type="button" class="mt-3 px-5 py-2 w-100">
              Log in
            </el-button>
          </el-tab-pane>
          <el-tab-pane label="Sign Up" stretch=true name="second">
            <el-input placeholder="Email" v-model="email" class="mb-1 "/>
            <el-input placeholder="Username" v-model="username" class="mb-1 "/>
            <el-input placeholder="Password" v-model="password" show-password class="mb-1 "/>
            <el-input placeholder="Password" v-model="confirmPassword" show-password class="mb-1 "/>
            <el-button type="success" class="mt-3 px-5 py-2 w-100" @click.native="redirectToHome">Continue</el-button>
          </el-tab-pane>
        </el-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import {Input, TabPane, Tabs, Button} from "element-ui"

  export default {
    name: "Login",
    data() {
      return {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        activePane: "first"
      }
    },
    components: {
      "el-input": Input,
      "el-tab-pane": TabPane,
      "el-tabs": Tabs,
      "el-button": Button
    },
    methods: {
      redirectToHome() {
        this.$router.push('home')
      }
    }
  }
</script>

