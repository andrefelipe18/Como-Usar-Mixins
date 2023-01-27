export default {
    data(){
        return {
          itens: [],
          item: ''
        }
    },
    methods:{
        adicionarItem(){
            this.itens.push(this.item)
            this.item = ''
        }
    }
}