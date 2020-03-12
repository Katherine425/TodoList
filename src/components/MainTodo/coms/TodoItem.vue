<template>
  <div :class="['todo-item', todo.completed?'completed': '']">
    <input type="checkbox" v-model="todo.completed" />
    <label>{{ todo.content }}</label>
    <button @click="remove"></button>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      todo: Object
    },
    methods: {
      remove() {
        this.$emit('del', this.todo.id)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'

  .todo-item
    display: flex
    justify-content: space-between
    padding: 10px
    font-size: 24px
    border-top: 1px solid rgba(0, 0, 0, 0.1)

    &:hover
      button:after
        content: '\2716'
        font-size: 24px
        color: $lightred

    &.completed
      label
        color: rgba(0, 0, 0, 0.5)
        text-decoration: line-through

  input
    width: 50px
    height: 30px
    outline: none
    appearance: none
    border: none
    cursor: pointer
    text-align: center

    &:after
      content: url('~images/unchecked.svg')

    &:checked:after
      content: url('~images/checked.svg')

  label
    flex: 1
    transition: color 0.6

  button
    width: 40px
    appearance: none
    border: none
    outline: none
    background-color: transparent
    cursor: pointer
</style>