<!-- 每一个vue有三个部分，分别是template、script和style
 其中template只能有一个根标签 -->
<template>
  <div>
    <!-- 插值语法，支持表达式 -->
    {{ name }} <!-- 获取属性的值-->
    {{ age > 20 ? '已经是大人' : '还是小孩' }} <!-- 支持运算 -->
    <div><input type="text" v-bind:value="name"></div> <!--v-bind是给标签的属性绑定值-->
    <div><input type="text" :value="age"></div> <!-- 可以省略v-bind:, 简写为:xxx-->
    <div><img :src="src"></div>

    <!-- 给组件绑定事件，使用v-on:具体事件 或者 @事件 -->
    <input type="button" value="保存" v-on:click="handleSave" />
    <input type="button" value="保存" @click="handleSave" />
    <!-- 双向绑定，data数据和表单数据同步，一方改变会影响另一方 -->
    <input type="text" v-model="name" />
    <input type="button" value="修改name的值" @click="handleModify" />
    <!-- v-if 的演示 -->
    <div>
      <div v-if="sex == 1">男</div>
      <div v-else-if="sex == 0">女</div>
      <div v-else>未知</div>
    </div>
    <!-- axios使用演示 -->
    <!-- 请求sky-takeout后端用户登录模块 -->
    <!-- 需要配置跨域，否则报错。域的区分: 端口号、IP、协议 -->
    <input type="button" value="登录" @click="handleLogin" />
    <input type="button" value="测试" @click="handleLogin2" />
    <input type="button" value="统一请求方式" @click="handleLoginUnify" />

    <!-- router使用演示 -->
     <nav>
      <!-- 1）使用超链接 -->
      <router-link to="/hello">hello</router-link> | 
      <router-link to="/hi">hi</router-link> | 
      <!-- 2）使用JS事件 -->
       <input type="button" value="访问不存在的页面" @click="handleRedirect"/>
     </nav>
     <router-view/>

    <!-- vuex使用 -->
      In HelloWorld.vue, 当前用户: <span>{{ $store.state.name }}</span> |
      <input tyep="button" value="修改name" @click="modifyName"> | 
      <input tyep="button" value="修改nameAsyn" @click="modifyNameAsyn">
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      name: 'xs',
      age: 25,
      src: '/images/xs.jpg',
      sex: 0
    }
  },
  methods: {
    handleSave() {
      alert("点击了保存按钮");
    },
    handleModify() {
      this.name = "cr";
    },
    handleLogin() {
      axios.post('/api/admin/employee/login',
        {
          username: 'admin',
          password: '123456'
        }
      ).then(res2 => {
        /**
         * 查看console的输出可知，res2为后端的响应数据，名称不唯一，是由programmer指定的
         * 包括config、data、headers、request、status、statusText等
         */
        console.log(res2);
        console.log(res2.data);  // 所以这里的data是后端服务器返回的业务数据
        console.log(res2.data.data);  // 第二个data是返回的业务数据中的data
      }).catch(e => {
        console.log(e);
      })
    },
    handleLogin2() {
      axios.post('/api/admin/employee/login',
        {
          username: 'admin',
          password: '123456'
        }
      ).then(({data}) => {
        console.log(data);  // 拿到的是response.data，即后端返回的业务数据
      }).catch(e => {
        console.log(e);
      })
    },
    handleLoginUnify() {
      axios({
        url: '/api/admin/employee/login',
        method: 'post',
        data: {
          username: 'admin',
          password: '123456'
        }
      }
      ).then(({data}) => {
        console.log(data);
        console.log(data.data);
        console.log(data.data.token);
        axios({
          url: '/api/admin/shop/status',
          method: 'get',
          headers: {
            token: data.data.token
          }
        }).then(({data}) => {
          console.log(data);
        })
      }).catch(e => {
        console.log(e);
      })
    },
    handleRedirect() {
      this.$router.push('/xs')  // 访问不存在的页面
    },
    modifyName() {
      this.$store.commit('modifyName', 'cr');  // 调用mutation中的方法，1st是方法名，2nd是方法参数
    },
    modifyNameAsyn() {
      this.$store.dispatch('modifyNameAsyn');  // 调用mutation中的方法，1st是方法参数
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
