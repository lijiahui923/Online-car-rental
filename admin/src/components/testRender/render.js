import Vue from 'vue';
// Vue.component('test-render', {
//     render: function (createElement) {
//         return createElement ('h' + this.level, this.$slots.default);
//     },
//     props: {
//         level: {
//             type: Number,
//             default: 1
//         }
//     }
// })
var getChildrenTextContent = function (children) {
    return children.map(function (node) {
        return node.children ? getChildrenTextContent(node.children) : node.text
    }).join('')
}
Vue.component('test-render', {
    render: function (createElement) {
        // 创建kebab-case 风格的ID
        var headingId = getChildrenTextContent(this.$slots.default).toLowerCase().replace(/\W+/g, '-').replace(/(^-|-$)/g,'');
        return createElement(
            'h' + this.level,
            [
                createElement('a', {
                    attrs: {
                        name: headingId + this.level,
                        href: `#${headingId}${this.level}`
                    }
                }, this.$slots.default)
            ]
        );
    },
    props: {
        level: {
            type: Number,
            default: 1
        }
    }
})