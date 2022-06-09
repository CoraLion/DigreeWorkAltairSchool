import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/view/MainPage";
import AboutStage from "@/view/AboutStage";
import HorseStage from "@/view/HorseStage";
import TrainersStage from "@/view/TrainersStage";
import ScheduleStage from "@/view/ScheduleStage";
import PeculStage from "@/view/PeculStage";
import FeedbackStage from "@/view/FeedbackStage";

const routes = [
    {
        path: '/',
        component: MainPage,
        meta: {requiresAuth: true}
    },
    {
        path: '/#about',
        component: AboutStage,
    },
    {
        path: '/#horse',
        component: HorseStage,
    },
    {
        path: '/#trainer',
        component: TrainersStage,
    },
    {
        path: '/#schedule',
        component: ScheduleStage,
    },
    {
        path: '/#pecul',
        component: PeculStage,
    },
    {
        path: '/#feedback',
        component: FeedbackStage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app')


