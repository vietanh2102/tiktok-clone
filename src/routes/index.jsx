import Home from '../page/home'
import Following from '../page/following'
import Profile from '../page/profile'
import HeaderOnly from '../component/Layout/headerOnly'
const publicRoutes = [
    {path:'/' , component: Home},
    {path:'/following', component: Following},
    {path:`/:nickname`, component: Profile}
]
const privateRoutes=[]
export {publicRoutes,privateRoutes}