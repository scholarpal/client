import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ListSchoolPage from '../views/ListSchoolPage.vue'
import DetailSchoolPage from '../views/DetailSchoolPage.vue'
import ListEventPage from '../views/ListEventPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import ChildEvent from '../views/ChildEvent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '/schools/:slug',
      name: 'school-detail',
      component: DetailSchoolPage
    },
    {
      path: '/events',
      component: ListEventPage,
      children: [
        {
          name: 'list-event',
          path: "",
          component: ChildEvent
        },
        {
          name: 'filter-event',
          path: ":category",
          component: ChildEvent
        }
      ]
    },
    {
      path: '/profile',
      name: 'profile-user',
      component: ProfilePage
    }
  ]
})

export default router
