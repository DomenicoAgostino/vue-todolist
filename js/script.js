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
      if(this.newList.length > 2){
        this.lists.push(this.newList);
        this.newList = '';
      }
    }
  },
})