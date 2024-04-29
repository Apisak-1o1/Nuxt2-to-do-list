<template>
  <main>
    <h1 class="title">
      Main Page
    </h1>
    <NuxtLink class="GBTN" to="/AddList">
      Add List
    </nuxtlink>
    <div class="search">
      <input
        v-model="keyword"
        placeholder="Cant find it? search"
      >
      <div>
        <ul
          v-for="(item, index) in $store.state.lists"
          :key="item.id"
        >
          <li>
            <span>{{ item }}</span>
            <span><button @click="deleteItem(index)">
              DEL
            </button></span>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>

export default ({
  name: 'IndexPage',
  data () {
    return {
    }
  },
  methods: {
    deleteItem (index) {
      this.$store.commit('REMOVE_LIST', index)
    }
  }
}
)

</script>

<style>
ul{
  display:flex;
  justify-content: center;
  list-style-type: none;
}
li span{
  color: red;
  border: solid black;
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  text-align: center;
  font-size: 3rem;
  width:50vh;
  height: 10vh;
  margin: auto;
  padding: auto;
}
span button{
  background: red;
  font-size: 2rem;
}
.GBTN{
  display: block;
  background: green;
  color:white;
  text-decoration: none;
  width:30vh;
  height: 6vh;
  text-align: center;
  margin: auto;
  padding: auto;
  font-size:3rem;
}
.title{
  font-size:3rem;
  margin: auto;
  padding: auto;
  text-align: center;
}
</style>
