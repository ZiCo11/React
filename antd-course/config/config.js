export default {
    singular: true,
    routes: [{
        path: '/',
        // 这里配置了路径  将根路径'/'，改为helloworld的路径了
        component: './HelloWorld',
    }],
    plugins: [
        ['umi-plugin-react', {
        // some code
        }],
    ],
};
