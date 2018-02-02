import Vue from 'vue'
import Router from 'vue-router'
import TopPage from '@/components/Top'
import WhoAmI from '@/components/WhoAmI'
import Contacts from '@/components/Contacts'
import LinkPage from '@/components/Links'
import Projects from '@/components/Projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: TopPage
    },
    {
      path: '/WhoAmI',
      component: WhoAmI
    },
    {
      path: '/Contacts',
      component: Contacts
    },
    {
      path: '/Links',
      component: LinkPage
    },
    {
      path: '/Projects',
      component: Projects
    }
  ]
})
