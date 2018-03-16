import Vue from 'vue'
import Vuex from 'vuex'

import * as mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    draft: {
      location: null,
      photos: [],
      comments: null
    }
  },
  mutations
})

export default store
