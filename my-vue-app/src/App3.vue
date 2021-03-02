<template>
  <div id="app" v-show="show" >App3
    <button id="hide" @click="hide">click me</button>
    <button id="add" @click="add">add</button>
    <p>{{number}}</p>
    <Reactive :msg="number"></Reactive>
    <CurrentInstance />
  </div>
</template>


<script>
import { onMounted, onUpdated, onUnmounted, ref, onBeforeMount } from 'vue'
import Reactive from './components/Reactive.vue'
import CurrentInstance from './components/CurrentInstance.vue'
export default {
  name: 'App2',
  components: {
    Reactive,
    CurrentInstance
  },

  data() {
    return {
      show: true
    }
  },
  created() {
    console.log('---default created ---')
  },
  beforeCreate() {
    console.log('---default beforeCreated ---')
  },
  beforeMount() {
    console.log('---beforeMount ---')
  },
  mounted() {
    console.log('---default mounted ---')
  },
  methods: {
    hide() {
      console.log('----clicked-----')
      this.show = !this.show
    }
  },
  computed: {
  },
  setup() {
    let number = ref(0)
    function add() {
      number.value ++
    }
    onMounted(() => {
      console.log('setup mounted--------------')
    }),
    onBeforeMount(() => {
      console.log('setup onBeforeMount--------------')

    })
    console.log('--setup--------------')
    return {number, add}
  }
  // setup() {
  //  // 2. 用 ref 函数包装一个响应式变量 number
  //   let number = ref(0)
    
  //   // 3. 设定一个方法
  //   function add() {
  //    // number是被ref函数包装过了的，其值保存在.value中
  //     number.value ++
  //   }
  //   onMounted(() => {
  //     console.log('app3 mounted--------------')
  //   })
  //   // 4. 将 number 和 add 返回出去，供template中使用
  //   return {number, add}
  // }
  
  
}
</script>