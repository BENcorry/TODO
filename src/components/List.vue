<template>
  <div class="item">
     <h3>{{list.name}}</h3>
    <p>{{list.content}}</p>
    <span class="delete" @click.prevent="closeList">×</span>
    <button @click.prevent="deleteList">删除</button>
  </div>
  
  
</template>

<script>
export default {
  name: 'list',
  data(){
      return{
        id:this.$route.params.id,
        list:{}
      }
    },
    methods : {
      deleteList : function(){
        this.$http.delete('https://my-first-vue.firebaseio.com/add/' + this.id + ".json")
        .then((data) => {
          console.log(data)
          this.$router.push({path:'/'})
        })
      },
      closeList : function(){
        this.$router.push({path:'/'})
      }
    },
    created(){
      this.$http.get('https://my-first-vue.firebaseio.com/add/' + this.id + ".json")
        .then(function(data){
          console.log(data);
          return data.json();
          // this.blog = data.body;
        })
        .then(function(data){
          this.list = data
          console.log(this.id)
          console.log(data.name)
        })
    }
    
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
  position: relative;
  margin: 200px auto;
  max-width: 800px;
  min-height: 300px;
  background-color: #f6f6f6;
  padding: 5px 0;
  border-radius: 10px;
}
.delete{
  position: absolute;
  display: block;
  top: 10px;
  right: 20px;
  cursor: pointer;
}
.delete:hover{
  background-color: rgba(0,0,0,.3);
}
h3{
  text-align: center;
  color: #DC1515;
}
p{
  padding: 10px;
  text-indent: 2em;
}
button{
  display: block;
  position: absolute;
  width: 60px;
  height: 30px;
  bottom: 10px;
  left: 50%;
  margin-left: -30px;
  border : 0;
  background-color: #D06B66;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
}
button:hover{
  background-color: red;
}
</style>
