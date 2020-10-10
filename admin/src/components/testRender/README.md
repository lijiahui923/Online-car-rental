# vue-render函数

简单的说，在vue中我们使用模板HTML语法组建页面的，使用render函数我们可以用js语言来构建DOM

因为vue是虚拟DOM，所以在拿到template模板时也要转译成VNode的函数，而用render函数构建DOM，vue就免去了转译的过程。

当使用render函数描述虚拟DOM时，vue提供一个函数，这个函数是就构建虚拟DOM所需要的工具。官网上给他起了个名字叫createElement。还有约定的简写叫h,

简写 
render (h) {
    return h(第一个参数, 第二个参数, 第三个参数);
}

# 第一个参数 （必选）
<ul>
    <li>string:html标签</li>
    <li>object:一个含有数据选项的对象</li>
    <li>function:返回一个含有数据选项的对象</li>
</ul>

Vue.component('child', {
    props: ['level'],
    render: function (createElement) {
        <!-- string:html标签 -->
        return createElement('h1')
        <!-- object：一个含有数据选项的对象 -->
        return createElement({
            template: '<div>谈笑风生</div>'
        })
        <!-- function:返回一个含有数据选项的对象 -->
        var domFun = function () {
            return {
                template: `<div>谈笑风生</div>`
            }
        }
        return createElement(domFun())
    }
})

# 第二个参数 （可选）
<ul>
    <li>类型只能是object</li>
</ul>
Vue.component('child', {
    props: ['level'],
    render: function (createElement) {
        return createElement('div', {
            class: {
                foo: true,
                baz: false
            },
            style: {
                height: '34px',
                background: 'orange',
                fontSize: '16px'
            },
            <!-- 正常的html特性(除了class和style) -->
            attrs: {
                id: 'foo',
                title: 'baz'
            },
            //用来写原生的DOM属性
            domProps: {
                innerHTML: '<span style="color:blue;font-size:24px">江心比心</span>'
            }
        })
    }
})

# 第三个参数 （可选）
<ul>
    <li>类型有String|Array 代表子节点</li>
</ul>
Vue.component('child', {
    props: ['level'],
    render: function (createElement) {
        return createElement('div', [
            createElement('h1', '我是大标题'),
            createElement('h2', '我是二标题'),
            createElement('h3', '我是三标题')
        ])
    }
})