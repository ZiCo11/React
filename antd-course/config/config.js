export default {
    singular: true,
    routes: [{
        path: '/',
        // 这里配置了路径  将根路径'/'，改为helloworld的路径了
        component: '../layout',
        routes: [
            {
                path: '/',
                component: 'Helloworld',
            },
            {
              path: '/helloworld',
              component: 'Helloworld',
            },
            {
              path: '/dashboard',
              routes: [
                  {
                    path: '/dashboard/analysis',
                    component: 'DashBoard/Analysis',
                  },
                  {
                      path: '/dashboard/monitor',
                      component: 'DashBoard/Monitor',
                  },
                  {
                      path: '/dashboard/workplace',
                      component: 'DashBoard/Workplace'
                  },
              ],
            },
        ]
    }],
    plugins: [
        ['umi-plugin-react', {
            antd: true
        }],
    ],
};
