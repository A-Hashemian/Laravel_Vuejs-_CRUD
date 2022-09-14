const Welcome = () => import('./components/Welcome.vue')
const ProductList = () => import('./components/Products/List.vue')
const ProducCreate = () => import('./components/Products/Add.vue')
const ProducEdit = () => import('./components/Products/Edit.vue')
export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'ProductList',
        path: '/Products',
        component: ProductList
    },
    {
        name: 'ProductEdit',
        path: '/Products/:id/edit',
        component: ProducCreate
    },
    {
        name: 'ProductAdd',
        path: '/Products/add',
        component: ProducEdit
    }
]
