// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import TableList from './pages/TableList';
import Typography from './pages/Typography';
import Icons from './pages/Icons';
import Notifications from './pages/Notifications';
import Page8 from './pages/Page8';
import DefaultLayout from './layouts/DefaultLayout';
import Upgrade from './pages/Upgrade';

const routerConfig = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/user',
    name: 'User Profile',
    component: UserProfile,
  },
  {
    path: '/table',
    name: 'Table List',
    component: TableList,
  },
  {
    path: '/typography',
    name: 'Typography',
    component: Typography,
  },
  {
    path: '/icons',
    name: 'Icons',
    component: Icons,
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications,
  },
  {
    upgrade: true,
    path: '/upgrade',
    name: 'Upgrade to PRO',
    component: Upgrade,
  },
  {
    redirect: true,
    path: '/',
    to: '/dashboard',
    name: 'Dashboard',
  },
  {
    path: '/page8',
    layout: DefaultLayout,
    component: Page8,
  },
];

export default routerConfig;
