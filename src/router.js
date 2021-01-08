import { createRouter, createWebHistory } from 'vue-router';

import MonthView from './pages/MonthView.vue';
import WeekView from './pages/WeekView.vue';
import DayView from './pages/DayView.vue';
import ScheduleView from './pages/ScheduleView.vue';
import DetailsView from './pages/DetailsView.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/month' },
    { path: '/month', component: MonthView },
    { path: '/week', component: WeekView },
    { path: '/day', component: DayView },
    { path: '/schedule', component: ScheduleView },
    { path: '/details/:id', component: DetailsView, props: true },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
