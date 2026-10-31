import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import RideView from './views/RideView.vue'
import SearchView from './views/SearchView.vue'
import StopsView from './views/StopsView.vue'
import PickupView from './views/PickupView.vue'
import TripsView from './views/TripsView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/ride', name: 'ride', component: RideView },
    { path: '/search', name: 'search', component: SearchView },
    { path: '/stops', name: 'stops', component: StopsView },
    { path: '/pickup', name: 'pickup', component: PickupView },
    { path: '/trips', name: 'trips', component: TripsView },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})
