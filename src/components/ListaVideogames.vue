<template>
    <h3>Lista de Videogame</h3>
    <input type="text" placeholder="Nome do videogame" v-model="item">
    <button type="button" @click="adicionarItem()">Adicionar</button>
    <ul>
        <li v-for="v in itens" :key="v">{{ v }}</li>
    </ul>
    <button type="button" @click="removerItem()">Remover</button>
</template>
<script>
import ListaMixin from '@/mixins/ListaMixin';
import RemoverItemListaMixin from '@/mixins/RemoverItemListaMixin';
export default {
    mixins: [ListaMixin, RemoverItemListaMixin],
}
</script>