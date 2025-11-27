import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  // 状态
  const users = ref([
    { id: 1, name: '张三', email: 'zhangsan@example.com' },
    { id: 2, name: '李四', email: 'lisi@example.com' }
  ])
  
  const currentUser = ref(null)

  // 计算属性
  const userCount = computed(() => users.value.length)

  // 方法
  const addUser = (user) => {
    users.value.push({
      id: users.value.length + 1,
      ...user
    })
  }

  const setCurrentUser = (user) => {
    currentUser.value = user
  }

  return {
    users,
    currentUser,
    userCount,
    addUser,
    setCurrentUser
  }
})