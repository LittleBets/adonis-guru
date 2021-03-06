import Vue from 'vue'

const globalComponents = {
  CopyCode: () => import('../../components/global/CopyCode.vue' /* webpackChunkName: "components/global/CopyCode" */).then(c => c.default || c),
  YouTube: () => import('../../components/global/YouTube.vue' /* webpackChunkName: "components/global/YouTube" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
