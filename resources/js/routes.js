const Welcome = () => import('./components/Welcome.vue')
const ProductList = () => import('./components/Product/List.vue')
const ProducCreate = () => import('./components/Produc/Add.vue')
const ProducEdit = () => import('./components/Produc/Edit.vue')
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
        name: 'categoryEdit',
        path: '/Products/:id/edit',
        component: ProducCreate
    },
    {
        name: 'categoryAdd',
        path: '/Products/add',
        component: ProducEdit
    }
]
