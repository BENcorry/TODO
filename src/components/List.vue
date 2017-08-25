<template>
  <div class="item">
     <h3>{{list.name}}</h3>
    <p>{{list.content}}</p>
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
    created(){
      this.$http.get('https://my-first-vue.firebaseio.com/add/' + this.id + ".json")
        .then(function(data){
          console.log(data);
          return data.json();
          // this.blog = data.body;
        })
        .then(function(data){
          this.list = data;
          console.log(data.name)
        })
    }
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
  margin: 200px auto;
  max-width: 800px;
  min-height: 300px;
  background-color: #f6f6f6;
  padding: 5px 0;
  border-radius: 10px;
}
h3{
  text-align: center;
  color: #DC1515;
}
p{
  padding: 10px;
  text-indent: 2em;
}
</style>
