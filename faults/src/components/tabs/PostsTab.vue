<template>
    <div @click="showDetails=!showDetails">Posts
      <span v-if="showDetails">asdf asdf asdfasd fasdf asdf asdfasdf </span>
    </div>
</template>

<script>

export default {
  data() {
    return {
      showDetails: false
    }
  }
}
</script>
