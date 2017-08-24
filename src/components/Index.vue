<template>
  <div class="list">
    <h2>todo列表</h2>
    <div>
      <input type="text" v-model="search">
    </div>
    <div class="list-item" v-for="item in filterItem">
      <router-link v-bind:to="'/list/' + item.id">
        <p>{{item.name}}</p>
      </router-link>
    </div>
    <!-- <div class="button">
      <button @click.prevent="upPage">上一页</button>
      <button @click.prevent="nextPage">下一页</button>
    </div> -->
  </div>
  
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      items : [],
      search : '',
      pageFlag : false
    }
  },
  created () {
    this.$http.get('https://my-first-vue.firebaseio.com/add.json')
    .then((data) => {
      console.log(data.json())
      return data.json()
    })
    .then(data => {
      let arr = []
      for(let key in data){
        //console.log(key)
        //console.log(data[key])
        data[key].id = key
        arr.push(data[key])
      }
      this.items = arr
      if(this.items.length > 10){
        this.pageFlag = true;
        this.items.slice(0, 10)
      }
    })
  },
  methods : {
    upPage : () =>{


    },
    nextPage : () => {

    }
  },
  computed : {
    //filterItem : () => this.items.filter(item => item.name.match(this.search))
    filterItem : function(){
      return this.items.filter((item) =>{
        return item.name.match(this.search);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{
  box-sizing: border-box;
  max-width: 800px;
  margin: 0 auto;
}
input{
  width: 97%;
  height: 30px;
  padding: 0 10px;
}
.list-item{
  background-color: #f3f3f3;
  margin-top: 10px;
  min-height: 40px;
  line-height: 40px;
  padding-left: 10px
}
.list-item > p{
 
  line-height: 40px;
  text-indent: 2em;
}
h2,h3{
  text-align: center;
}
.button{
  /*margin: 0 auto;*/
  text-align: center;
}
a{
  text-decoration: none;
  color: red;
}
button{
  border: 0;
  background-color: #3A97BB;
  width: 60px;
  height: 30px;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
}

</style>
