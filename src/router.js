import { createRouter, createWebHistory } from 'vue-router'
import MemberList from './components/MemberList.vue'


const routes = [
  {
    path: '/members',
    name: 'Members',
    component: MemberList,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router