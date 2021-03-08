<template>
  <button @click="openModal = true">open modal</button>
  <teleport to="body">
    <div v-if="openModal" class="modal">
      <div>
         I'm a teleported modal! 
          (My parent is "body")
          <button @click="openModal = false">
            close
          </button>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'modal',
}
</script>