<template>
    <v-app-bar flat class="px-8">
        <h2>Lestar's Portfolio</h2>
        <v-spacer></v-spacer>
        <v-btn text @click="scroll('home')">Home</v-btn>
        <v-btn text @click="scroll('projects')">Projects</v-btn>
        <v-btn text @click="scroll('about')">About</v-btn>
        <v-btn text @click="scroll('contact')">Contact</v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        methods: {
            scroll(refName) {
                const element = document.getElementById(refName)
                element.scrollIntoView({behavior: 'smooth'})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>