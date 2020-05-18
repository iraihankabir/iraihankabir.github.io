<template>
  <v-app :dark="goDark">
    <v-content>
      <v-container align-center>
        <Header :goDark="goDark" :appBarBG="appBarBG" @changeTheme="updateTheme($event)"/>

        <transition
          name="router-animation"
          mode="out-in"
          enter-active-class="animated fadeIn fast"
          leave-active-class="animated fadeOut faster"
        >
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  metaInfo: {
    title: 'Home',
    titleTemplate: "%s ← Kabir's Space",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: "Raihan Kabir's Portfolio" },
      { charset: 'utf-8' },
      { property: 'og:title', content: "Raihan Kabir's Portfolio" },
      { property: 'og:site_name', content: "Raihan Kabir's Portfolio" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://rk4bir.github.io' },
      {
        property: 'og:image',
        content: 'https://i.imgur.com/a8TeA0D.png'
      },
      { property: 'og:description', content: "Raihan Kabir's Portfolio" }
    ]
  },
  components: {
    Header,
    Footer
  },
  data () {
    return {
      goDark: false,
      appBarBG: '#ffffff'
    }
  },
  methods: {
    updateTheme (updatedTheme) {
      this.goDark = !updatedTheme
      this.$vuetify.theme.dark = this.goDark

      // change app bar bg color
      if ( this.goDark == true ) {
        this.appBarBG = '#121212'
      } else {
        this.appBarBG = '#ffffff'
      }
    }
  }
}
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
</style>
