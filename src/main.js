import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入axios
import axios from 'axios'
Vue.prototype.$axios = axios 

import 'element-ui/lib/theme-chalk/index.css'

// 引入vue样式
import {
  Button,
  Link,
  Select,
  Option,
  Form,
  FormItem,
  Input,
  Dialog,
  Card,
  Table,
  Pagination,
  TableColumn,
  Row,
  Col,
  Divider,
  Tabs,
  Menu,
  Submenu,
  MenuItem,
  Container,
  Header,
  Aside,
  Main,
  Message,
  Tooltip,
  Tree,
  Radio,
  RadioGroup,
  RadioButton,
  DatePicker,
  Loading,
} from "element-ui";
Vue.use(Button);
Vue.use(Link);
Vue.use(Select);
Vue.use(Option);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Dialog);
Vue.use(Card);
Vue.use(Table);
Vue.use(Pagination);
Vue.use(TableColumn);
Vue.use(Row);
Vue.use(Col);
Vue.use(Divider);
Vue.use(Tabs);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
// Vue.use(Message);  /* 在页面刷新时，会有一条空的消息提示弹出 */
Vue.component(Message.name, Message)
Vue.use(Tree);
Vue.use(Tooltip);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(DatePicker);
Vue.use(Loading);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
