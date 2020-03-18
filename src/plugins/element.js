import Vue from "vue";
import { Button, Form, FormItem, Input } from "element-ui";
//import tankuang cpt
import { Message } from "element-ui";
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
// toast 组件 挂载到vue 上面;
Vue.prototype.$message = Message;
