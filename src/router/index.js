import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: () => import('@/views/Index'),
            children: [
                {
                    path: '/ToolGrid',
                    name: 'ToolGrid',
                    component: () => import('@/views/ToolGrid'),
                },
                {
                    path: '/ToolGrid/JsonFormat',
                    name: 'JsonFormat',
                    component: () => import('@/views/tool/JsonFormat'),
                },
                {
                    path: '/ToolGrid/Translation',
                    name: 'Translation',
                    component: () => import('@/views/tool/Translation'),
                },
                {
                    path: '/ToolGrid/Memorandum',
                    name: 'Memorandum',
                    component: () => import('@/views/tool/Memorandum'),
                },
                {
                    path: '/Music',
                    name: 'Music',
                    component: () => import('@/views/Music')
                }
            ]
        }
    ]
})

export default router;
