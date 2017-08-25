<template>
  <div class="add">
    <h2>添加事项</h2>
    <div class="name">
      <label>名称:</label>
      <input type="text" v-model="add.name">
    </div>
    <div class="content">
      <label>描述:</label>
      <textarea v-model="add.content"></textarea>
    </div>
    <button @click="post">添加</button>
    
    <!-- <router-link v-bind:to="'/'">
        <button @click="post">添加</button>
    </router-link> -->
  </div>
  
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
      add : {
        name : '',
        content : ''
      }
    }
  },
  methods : {
    post : function(){
      console.log(this.add.name)
      if(this.add.name){
        this.$http.post('https://my-first-vue.firebaseio.com/add.json',this.add)
        .then(function(data){
          console.log(data)
          console.log(this.$router.push({path:'/'}))
          this.add.name = ''
          this.add.content = ''
          this.$router.push({path:'/'})
        })
      }else{
        alert('你没有填写要输入的值')
      }
      
      
      
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add *{
  box-sizing: border-box;
  
}
.add{
  max-width: 800px;
  min-height: 700px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  color: #666;
}
.name{
  margin: 10px 0 20px 0;
}
h2{
  text-align: center;
}
input,textarea{
  width: 97%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
}
textarea{
  height: 150px;
}
button{
  border: 0;
  background-color: #3A97BB;
  width: 60px;
  height: 30px;
  border-radius: 4px;
  font-size: 18px;
  color: #fff;
}

</style>
