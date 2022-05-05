// istanzio un oggetto Vue

const app = new Vue({
  el: '#app',

  data:{
    lists:[
      'Comprare acqua',
      'Comprare olio auto'
    ],

    newList:''
  
  },

  methods: {
    addList(){
      this.lists.push(this.newList)
    }
  },
})