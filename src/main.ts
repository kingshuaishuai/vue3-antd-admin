import { createApp } from 'vue';
import { installPinia } from './store';
import './style.css';
import App from './App.vue';
import '@/styles/index.less';

const app = createApp(App);

// 注册插件
installPinia(app);

// 挂载项目
app.mount('#app');
