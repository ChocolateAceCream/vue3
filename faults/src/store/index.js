import _ from 'lodash'
import { createStore } from 'vuex'

import app from './modules/app'
// import designer from './modules/designer'
// import designable from './modules/designable'
// import depDesignable from './modules/depDesignable'

// const store = {
//   currentDesignerId: null,
//   app: {
//   },
//   designers: {
//     ['id']: {
//       /* designer data */
//     }
//   },
//   designables: {
//     ['gid']: {
//       resources: {

//       }
//     }
//   },
//   depDesignables: {
//     ['gid']: {
//       resources: {
//         /* designable content */
//       }
//     }
//   }
// }

const state = () => ({})
const getters = {}
const mutations = {}
const actions = {}

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
    app,
    // designer,
    // designable,
    // depDesignable
  }
})
