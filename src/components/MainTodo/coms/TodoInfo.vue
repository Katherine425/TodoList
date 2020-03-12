<template>
  <div class="todo-info">
    <span class="total">{{total}} items left</span>
    <div class="tabs">
      <a
        v-for="(item,index) in states"
        :key="index"
        @click="toggleState(item)"
        :class="[state == item ? 'actived':'']"
      >{{item}}</a>
    </div>
    <button class="clear" @click="clear">Clear Completed</button>
  </div>
</template>

<script>
  export default {
    name: 'TodoInfo',
    props: {
      total: Number
    },
    data() {
      return {
        states: ['all', 'active', 'completed'],
        state: 'all'
      }
    },
    methods: {
      toggleState(state) {
        this.state = state
        this.$emit('toggleState', state)
      },
      clear() {
        this.$emit('clear')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'

  .todo-info
    display: flex
    justify-content: space-between
    padding: 5px 10px
    border-top: 1px solid rgba(0, 0, 0, 0.4)
    line-height: 30px
    background-color: rgba(0, 0, 0, 0.2)

    .total
      color: $yellow

    .tabs
      display: flex
      justify-content: space-between
      width: 200px

      a
        border: 1px solid $yellow
        padding: 0 10px
        border-radius: 5px
        cursor: pointer

        &.actived
          background-color: rgba(249, 205, 173, 0.7)

    button
      background-color: rgba(131, 175, 155, 0.8)
      padding: 0 10px
      border-radius: 15px
      appearance: none
      border: none
      outline: none
      cursor: pointer
</style>