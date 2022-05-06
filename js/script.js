const app = new Vue({
  el: '#app',
  data:{
    lists:[
      {
        text: 'Comprare pane',
        done: false
      },
      {
        text: 'Comprare olio auto',
        done: true
      },
      {
        text: 'Pagare multa',
        done: false
      }
    ],
    newList: ''
  },
  methods:{
    
    addList(){
      
      if(this.newList.length > 1) {
        
        const newListPush = {
          text: this.newList,
          done: false
        }
        this.lists.push(newListPush);
        this.newList = '';
      }   
    },
   
    removeList(index){

      if(confirm(`Sicuro di voler eliminare l'elemento dalla lista?S`)){
        this.lists.splice(index, 1);
      }
    },
    toggleDone(index){
      this.lists[index].done = !this.lists[index].done;
    }
  }
})