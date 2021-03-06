import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/layout';

export const defaultRoutesMap = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: 'dashboard',
            component: () =>
                import ('@/views/dashboard/index'),
            meta: { title: '首页', icon: 'dashboard' }
        }]
    },
    {
        path: '/example',
        component: Layout,
        redirect: '/example/table',
        name: 'Example',
        meta: { title: '例子', icon: 'el-icon-s-help' },
        children: [{
                path: 'table',
                name: 'Table',
                component: () =>
                    import ('@/views/table/index'),
                meta: { title: 'Table', icon: 'table' }
            },
            {
                path: 'tree',
                name: 'Tree',
                component: () =>
                    import ('@/views/tree/index'),
                meta: { title: 'Tree', icon: 'tree' }
            }
        ]
    },
    {
        path: '/parking-lot',
        component: Layout,
        redirect: '/parking-lot/index',
        name: 'parking',
        meta: { title: '停车场', icon: 'el-icon-s-help' },
        children: [{
                path: 'index',
                name: 'Index',
                component: () =>
                    import ('@/views/parking-lot/index'),
                meta: { title: '列表管理', icon: 'table' }
            },
            {
                path: 'parkingAdd',
                name: 'ParkingAdd',
                component: () =>
                    import ('@/views/parking-lot/add'),
                meta: { title: '新增停车场', icon: 'tree' },
                hidden: true
            }
        ]
    },
    {
        path: '/brand',
        component: Layout,
        redirect: '/brand/brandIndex',
        name: 'brand',
        meta: { title: '品牌管理', icon: 'el-icon-s-help' },
        children: [{
            path: 'brandIndex',
            name: 'BrandIndex',
            component: () =>
                import ('@/views/brand/index'),
            meta: { title: '品牌列表', icon: 'table' }
        }]
    },
    {
        path: '/cars',
        component: Layout,
        redirect: '/cars/carsIndex',
        name: 'cars',
        meta: { title: '车辆管理', icon: 'el-icon-s-help' },
        children: [{
                path: 'carsIndex',
                name: 'CarsIndex',
                component: () =>
                    import ('@/views/cars/index'),
                meta: { title: '车辆列表', icon: 'table' }
            },
            {
                path: 'carsAdd',
                name: 'CarsAdd',
                component: () =>
                    import ('@/views/cars/cars-add'),
                meta: { title: '新增车辆', icon: 'table' }
            }
        ]
    },
    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
];

export default new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: defaultRoutesMap
});