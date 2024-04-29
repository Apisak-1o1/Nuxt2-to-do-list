<template>
  <main>
    <div class="AddPage">
      <NuxtLink class="GBTN" to="/">
        Home Page
      </nuxtlink>
      <h1>This is a add List page</h1>
      <input v-model="newlist" placeholder="What youre going to do?" @keypress.enter="addlist()">
      <h1>{{ newlist }}</h1>
      <h1>{{ $store.state.lists }}</h1>
      <button class="GBTN" @click="addlist()">
        Add to List!!
      </button>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
export default ({
  data () {
    return {
      newlist: ''

    }
  },
  methods: {
    ...mapActions({
      addlistStore: 'addlist'
    }),
    addlist () {
      // this.addlistStore(this.newlist)
      if (this.newlist) {
        this.$store.commit('ADD_LIST', this.newlist)
        this.newlist = ''
      }
    }
  }
})
</script>

<style>
.title{
  font-size:3rem;
  margin: auto;
  padding: auto;
  text-align: center;
}
input{
  justify-content: center;
  align-content: center;
  text-align: center;
  width:30%;
  height: 2rem;
  font-size: 2rem;
}
.AddPage{
  display: block;
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>
