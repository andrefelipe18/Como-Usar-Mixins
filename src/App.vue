<template>
  <div style="display: flex; flex-direction: row">
    <div style="flex-basis: 33%">
      <ListaFilmes />
    </div>

    <div style="flex-basis: 33%">
      <ListaPessoas />
    </div>

    <div style="flex-basis: 33%">
      <ListaVideogames />
    </div>
  </div>
</template>

<script>
import ListaFilmes from '@/components/ListaFilmes.vue'
import ListaPessoas from '@/components/ListaPessoas.vue'
import ListaVideogames from '@/components/ListaVideogames.vue'

export default {
  name: 'App',
  components: {
    ListaFilmes,
    ListaPessoas,
    ListaVideogames
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
