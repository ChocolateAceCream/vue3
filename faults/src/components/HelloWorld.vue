<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <Test v-model:title="msg"></Test>
  <Heading level="4">asdf</Heading>
  <Sfc level="3" id="aa">SFC</Sfc>
  <div class="tabs">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', {active: currentTab === tab}]"
      @click="currentTab = tab"
    >
    {{tab}}
    </button>
    <keep-alive>
      <component :is="currentTabComponent" class="tab" />
    </keep-alive>
  </div>
  <render-example />

</template>



<script>
import { onMounted, ref, computed, defineProps, reactive} from 'vue'
import Test from '@/components/Test.vue'
import RenderExample from '@/components/RenderExample.vue'
import Heading from '@/components/FunctionalComponentExample.js'
import Sfc from '@/components/SingleFileComponentsExample.vue'
import PostsTab from '@/components/tabs/PostsTab.vue'
import HomeTab from '@/components/tabs/HomeTab.vue'
import ArchiveTab from '@/components/tabs/ArchiveTab.vue'

export default {
  name: 'HelloWorld',
  components: {
    Test,
    Heading,
    Sfc,
    PostsTab,
    HomeTab,
    ArchiveTab,
    RenderExample
  },
  setup() {
    let msg = ref('title')
    let currentTab = ref('Home')
    const state = reactive({ count: 0 })
    const tabs = reactive(['Home', 'Posts', 'Archive'])
    const currentTabComponent = computed(() => {
      console.log(currentTab.value.toLowerCase()+'-tab')
      return currentTab.value.toLowerCase()+'-tab'
    })
    return {
      msg,
      state,
      tabs,
      currentTab,
      currentTabComponent
    }
  },

}
</script>


<style lang="scss" scoped>
a {
  color: #42b983;
}
.tabs {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;

  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }
  .tab-button:hover {
    background: #e0e0e0;
  }
  .tab-button.active {
    background: #e0e0e0;
  }
}
</style>
