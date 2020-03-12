<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="what to do?"
      @keyup.enter="addTodo"
      v-model="content"
      autofocus
    />
    <todo-item
      v-for="(item, index) in filterData"
      :key="index"
      :todo="item"
      @del="handleRemoveItem"
    ></todo-item>
    <todo-info
      :total="total"
      @toggleState="handleToggleState"
      @clear="handleClearItem"
    ></todo-info>
  </div>
</template>

<script>
  import TodoItem from './coms/TodoItem.vue'
  import TodoInfo from './coms/TodoInfo.vue'

  let id = 0
  export default {
    name: 'MainTodo',
    data() {
      return {
        todoData: [],
        content: '',
        total: 0,
        filter: 'all'
      }
    },
    computed: {
      filterData() {
        switch (this.filter) {
          case 'all':
            return this.todoData
            break
          case 'active':
            return this.todoData.filter(item => item.completed == false)
            break
          case 'completed':
            return this.todoData.filter(item => item.completed == true)
        }
      }
    },
    methods: {
      addTodo() {
        if (this.content === '') return
        this.todoData.unshift({
          id: id++,
          content: this.content,
          completed: false
        })
        this.content = ''
      },
      handleRemoveItem(id) {
        this.todoData.splice(
          this.todoData.findIndex(item => item.id === id),
          1
        )
      },
      handleToggleState(state) {
        this.filter = state
      },
      handleClearItem() {
        this.todoData = this.todoData.filter(item => item.completed == false)
      }
    },
    watch: {
      todoData: {
        deep: true,
        handler() {
          this.total = this.todoData.filter(
            item => item.completed === false
          ).length
        }
      }
    },
    components: {
      TodoItem: TodoItem,
      TodoInfo
    }
  }
</script>

<style lang="stylus" scoped>
  .main-todo
    margin: 0 auto
    width: 600px
    background-color: transparent
    box-shadow: 0 0 5px #666

  .add-todo
    padding: 16px 16px 16px 32px
    width: 100%
    font-size: 24px
    font-family: inherit
    font-weight: inherit
    color: inherit
    border: none
    outline: none
    box-sizing: border-box
    background-color: rgba(0, 0, 0, 0.2)
</style>