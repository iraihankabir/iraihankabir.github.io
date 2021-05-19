<template>
  <div>
    <v-navigation-drawer 
      class="mx-auto" 
      v-model="drawer" 
      temporary app 
      width="100%" 
      height="100%"
      elevation='3'
      style="background: #344d3a"
    >
      <div class="text-right">
        <v-btn text @click.stop="drawer = !drawer">
          <v-icon>fa fa-close</v-icon>
        </v-btn>
      </div>
      <v-list 
        align="center"
        justify="center" 
        class="pt-4 text-center font-weight-bold"
      >
        <v-list-item active-class="green--text" to="/">
          <v-list-item-content>
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item active-class="green--text" to="/resume">
          <v-list-item-content>
            <v-list-item-title>RESUME</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item active-class="green--text" to="/services">
          <v-list-item-content>
            <v-list-item-title>SERVICES</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item active-class="green--text" to="/portfolio">
          <v-list-item-content>
            <v-list-item-title>PORTFOLIO</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item active-class="green--text" to="/contact">
          <v-list-item-content>
            <v-list-item-title>CONTACT</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat dense :color="appBarBG" scroll-off-screen fixed elevation='0'>
      <v-app-bar-nav-icon class="hidden-md-and-up text-right" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-items class="hidden-sm-and-down" style="width: 100%; justify-content: center!important; text-align: center;">
        <v-btn text to="/" active-class="green--text headline">Home</v-btn>
        <v-btn text to="/resume" active-class="green--text headline">Resume</v-btn>
        <v-btn text to="/services" active-class="green--text headline">Services</v-btn>
        <v-btn text to="/portfolio" active-class="green--text headline">Portfolio</v-btn>
        <v-btn text to="/contact" active-class="green--text headline">Contact</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    appBarBG: {
      type: String
    }
  },
  data () {
    return {
      drawer: null,
    }
  }
}
</script>

<style scoped>

</style>
