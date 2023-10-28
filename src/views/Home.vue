<template>
  <v-app id="home">
    <Navbar />
    <v-container fluid>
        <section class="head">
          <v-row>
            <v-col cols="5">
              <article style="position: relative;" class="mt-16">
                <h1>Soy Juan Gomez</h1>
                <h3 class="text-grey">también conocido como Lestar</h3>
                <span class="text-grey">Desarrollador web</span><br>
                <v-btn tile dark class="text-blue mt-8" variant="outlined">Contactame</v-btn>
              </article>
            </v-col>
            <v-col cols="2">
              <article style="position: absolute; z-index: 1; bottom: 0; margin-left: auto; margin-right: auto; left: 0; right: 0; text-align: center;"><v-icon>fas fa-angle-double-down</v-icon></article>
            </v-col>
            <v-col cols="5">
              <article style="position: relative; z-index: 1;" class="mt-16">
                <v-img src="" contain max-height="300"></v-img>
              </article>
            </v-col>
          </v-row>
        </section>
    </v-container>
  </v-app>
</template>

<script setup>
  import Navbar from '@/components/Navbar.vue'
</script>

<style scoped>
  .v-container {
    padding: 16px 0;
  }
  .head {
    position: relative;
    text-align: center;
    padding: 12px;
    margin-bottom: 6px;
    height: 400px;
    width: 100%;
    color: white;
  }
  .head::before{
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    background: black;
    transform: skew(0deg, 5deg);
  }
  .head::after{
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background: black;
    transform: skew(0deg, -5deg);
  }
</style>