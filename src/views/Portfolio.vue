<template>
  <v-container grid-list-xl style="margin-top: 70px">
    <h2 class="pl-4 text-center pt-5">
      <span>Port</span>
      <span class="green--text">folio</span>
    </h2>
    <v-layout row justify-center align-center wrap class="mt-4">
      <v-dialog
        v-model="project.dialog"
        max-width="1000"
        v-for="project in projects"
        :key="project.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                :src="project.poster"
                :alt="project.title"
                height="230"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-card-title style="font-size: 1rem!important" primary-title class="justify-center">{{project.title}}</v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="project.dialog">
          <v-img :src="project.poster"></v-img>
          <v-card-text class="mt-4 text-center">
            <span v-for="tag in project.tags" :key="tag.title">
              <v-chip class='mr-2' style="max-width: 200px" color="green" text-color="white">{{tag.title}}</v-chip>
            </span>
            
          </v-card-text>
          <v-card-actions  class="justify-center">
            <a style="text-decoration: none; font-size: 1.2rem" class="green--text mr-2 font-weight-bold" :href="project.git" target="_blank">
              Source
            </a> | 
            <a style="text-decoration: none; font-size: 1.2rem" class="ml-2 green--text font-weight-bold" :href="project.demo" target="_blank">
              Demo
            </a>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: 'Portfolio',
    titleTemplate: "%s ← Raihan Kabir",
  },
  data () {
    return {
      dialog: false,
      projects: [
        {
          dialog: false,
          title: 'Electricity Provider & Consumer Client',
          git: '#!',
          demo: '#!',
          tags: [
            { title: "JavaScript" }, 
            { title: "VueJS" }, 
            { title: "Vuex" }, 
            { title: "Axios" },
          ],
          poster: require('@/assets/portfolio/morpheus.gif')
        },
        {
          dialog: false,
          title: 'Electricity Provider & Consumer API',
          git: '#!',
          demo: '#!',
          tags: [
            { title: "Google Cloud Functions" }, 
            { title: "NodeJS" }, 
            { title: "ExpressJS" }, 
            { title: "Firestore" },
            { title: "JWT Token" },
            {  title: "Cloud Firestore" }
          ],
          poster: require('@/assets/portfolio/morpheus_api.png')
        },
        {
          dialog: false,
          title: 'Forex Listing Site',
          git: '#!',
          demo: 'http://bestecn.com/',
          tags: [
            { title: "PHP" }, 
            { title: "jQuery" }, 
            { title: "Bootstrap" },
            { title: "python" }, 
            { title: "Data Scrappig" },
          ],
          poster: require('@/assets/portfolio/bestecn.png')
        },
        {
          dialog: false,
          title: 'Arun-HPCC Portal',
          git: 'https://github.com/rk4bir/',
          demo: 'https://arun-hpcc.ru.ac.bd/',
          tags: [
            { title: "Python" }, 
            { title: "Django" }, 
            { title: "MDBootstrap" }, 
            { title: "JavaScript" },
            { title: "MySQL" },
          ],
          poster: require('@/assets/portfolio/arun-hpcc-portal.png')
        },
        {
          dialog: false,
          title: 'Arun-HPCC Docs',
          git: 'https://gitlab.com/arun-hpcc/arun-hpcc.gitlab.io',
          demo: 'http://arun-hpcc.gitlab.io/',
          tags: [
            { title: "JavaScript" }, 
            { title: "VueJS" }, 
            { title: "VuePress" }, 
          ],
          poster: require('@/assets/portfolio/arun-hpcc-docs.png')
        },
        {
          dialog: false,
          title: 'Wordbridge Ltd.',
          git: '#!',
          demo: '#!',
          tags: [
            { title: "Python" }, 
            { title: "Django" }, 
            { title: "jQuery" }, 
            { title: "Bootstrap" },
            { title: "MySQL" },
          ],
          poster: require('@/assets/portfolio/wordbridge.jpg')
        },
        {
          dialog: false,
          title: 'Emedicoplus',
          git: '#!',
          demo: '#!',
          tags: [
            { title: "Python" }, 
            { title: "Django" }, 
            { title: "jQuery" }, 
            { title: "Bootstrap" },
            { title: "MySQL" },
          ],
          poster: require('@/assets/portfolio/emedicoplus.png')
        },
        {
          dialog: false,
          title: 'Tic Tac Toe',
          git: 'https://github.com/rk4bir/tic-tac-toe',
          demo: 'https://rk4bir.github.io/tic-tac-toe/',
          tags: [
            { title: "JavaScript" }
          ],
          poster: require('@/assets/portfolio/tic-tac-toe.jpg')
        },
        {
          dialog: false,
          title: 'Pandemic Live',
          git: 'https://github.com/rk4bir/pandemic-live',
          demo: 'https://youtu.be/jIMlt_Z3GgI',
          tags: [
            { title: "Dart" }, 
            { title: "Flutter" }, 
            { title: "Android" }, 
            { title: "API" },
          ],
          poster: require('@/assets/portfolio/pandemic-live.png')
        },
      ]
    }
  }
}
</script>

<style  scoped>
</style>
