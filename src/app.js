import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'



Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.use(plugin)

import createElement from 'vue'

const h = createElement


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'value:双向绑定'
    },
    created(){

    },
    methods: {

        showToast(){
            this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
                position: 'bottom',
                enableHtml: false,
                closeButton: {
                    text: '已充值',
                    callback () {
                        console.log('他说已经充值智商了')
                    }
                },
                autoClose: false,
                autoCloseDelay: 3
            })
        }
    }
})
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
const expect = chai.expect
try {

    // 单元测试
    {
        '可以设置 icon'
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        })
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('href')
        expect(href).to.eq('#i-settings')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true
            }
        })
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('href')
        expect(href).to.eq('#i-loading')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        })
        vm.$mount()
        let spy = chai.spy(function () {
        })
        vm.$on('click', spy)
        // 希望这个函数被执行
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()
    }
} catch (error) {
    window.errors = [error]
} finally {
    window.errors && window.errors.forEach((error) => {
        console.error(error.message)
    })
}
