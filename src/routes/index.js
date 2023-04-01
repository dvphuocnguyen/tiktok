import HeaderOnly from '../components/Layout/HeaderOnly';

import Following from '../pages/Following';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/Profile', component: Profile },
    { path: '/Upload', component: Upload, layout: HeaderOnly },
    { path: '/Search', component: Search, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };