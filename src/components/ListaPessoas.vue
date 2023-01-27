<template>
    <h3>Lista de Pessoas</h3>
    <input type="text" placeholder="Nome da pessoa" v-model="item">
    <button type="button" @click="adicionarItem()">Adicionar</button>
    <ul>
        <li v-for="p in itens" :key="p">{{ p }}</li>
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