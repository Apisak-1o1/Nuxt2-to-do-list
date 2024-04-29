export const state = () => ({
  lists: []
})

export const mutations = {
  ADD_LIST (state, newList) {
    // const arrayList = state.lists
    // arrayList.push(newList)
    // state.list = arrayList
    state.lists.push(newList)
  },
  REMOVE_LIST (state, index) {
    // state.lists.splice(state.lists.indexOf(list), 1)
    if (index !== -1) {
      state.lists.splice(index, 1)
    }
  },
  STATUS_LIST (state, list) {
    list.status = !list.status
  }
}

export const actions = {
  addlist ({ state, commit }, data) {
    commit('ADD_LIST', data)
  }
}
