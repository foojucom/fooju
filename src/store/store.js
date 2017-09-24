import vuex from 'vuex'
import Vue from 'vue'
Vue.use(vuex)

export default new vuex.Store({
  /* state必须 */
  state: {
    record: [],
    num: '',
    oldRecord: [],
    order: ''
  },
  mutations: {
    jiLu (state, v) {
      state.record.push(v)
    },
    clear (state, v) {
      state.record = []
    },
    clearOne (state, v) {
      var index = state.record.indexOf('v')
      console.log(index)
      state.record.splice(index, 1)
    },
    memory (state, v) {
      if (state.num === v) {
        document.getElementById('daoHang').style = 'visibility:visible'
        document.getElementById('nav').style = 'display:none'
        document.getElementById('detail').style = 'display:none'
      } else {
        state.num = v
      }
    },
    OldRecord (state, v) {
      state.oldRecord.push(v)
    },
    oldRemoveOne (state, v) {
      var cc = state.oldRecord.indexOf('v')
      state.oldRecord.splice(cc, 1)
    },
    order (state, v) {
      state.order = v
    }
  }
})
