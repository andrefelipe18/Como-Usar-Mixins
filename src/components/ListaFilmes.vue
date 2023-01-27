<template>
    <h3>Lista de Filmes</h3>
    <input type="text" placeholder="Nome do filme" v-model="item">
    <button type="button" @click="adicionarItem()">Adicionar</button>
    <ul>
        <li v-for="f in itens" :key="f">{{ f }}</li>
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