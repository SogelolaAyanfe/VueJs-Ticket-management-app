import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/pages/LandingPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import SignupPage from '@/pages/SignupPage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import TicketsPage from '@/pages/TicketsPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'Landing', component: LandingPage },
        { path: '/auth/login', name: 'Login', component: LoginPage },
        { path: '/auth/signup', name: 'Signup', component: SignupPage },
        { path: '/dashboard', name: 'Dashboard', component: DashboardPage },
        { path: '/tickets', name: 'Tickets', component: TicketsPage },
    ]
})

export default router
