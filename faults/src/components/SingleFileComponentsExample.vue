<template>
  <component
    v-bind:is="`h${$props.level}`"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Sfc',
  props: ['level']
}
</script>
