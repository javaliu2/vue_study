import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    // 共享数据
    state: {
        name: "xs"
    },
    getters: {

    },
    // 通过在mutation中定义的函数修改共享数据，必须都是同步操作
    mutations: {
        modifyName(state, newName) {
            state.name = newName;
        }
    },
    // 通过actions调用mutation，在actions中可以进行异步操作
    actions: {
        modifyNameAsyn(context) {
            axios({
                url: '/api/admin/employee/login',
                method: 'post',
                data:{
                    username: 'admin',
                    password: '123456'
                }
            }
            ).then(({data}) => {
                context.commit('modifyName', data.data.name);
            })
        }
    },
    modules: {

    }
})