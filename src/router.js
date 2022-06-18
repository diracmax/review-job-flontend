import { createRouter, createWebHistory } from 'vue-router'
import MemberList from './components/pages/MemberList.vue'
import UserJobList from './components/pages/UserJobList.vue'
import JobContent from './components/pages/JobContent.vue'
import CategorySearch from './components/pages/CategorySearch.vue'
import ReviewPost from './components/pages/ReviewPost.vue'
import SelectGroup from './components/pages/SelectGroup'


const routes = [
  {
    path: '/groups/:groupId/members',
    name: 'Members',
    component: MemberList,
  },
  {
    path: '/groups/:groupId/members/:userId/jobs',
    name: 'UserJobs',
    component: UserJobList,
  },
  {
    path: '/groups/:groupId/members/:userId/jobs/:jobId',
    name: 'JobContent',
    component: JobContent,
  },
  {
    path: '/category',
    name: 'CategorySearch',
    component: CategorySearch,
  },
  {
    path: '/groups/:groupId/review',
    name: 'ReviewPost',
    component: ReviewPost,
  },
  {
    path: '/groups',
    name: 'SelectGroup',
    component: SelectGroup,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router