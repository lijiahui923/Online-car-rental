export default {
    name: 'main-menu',
    props: {
        menuData: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {
            indexPath: ''
        }
    },
    render (h) {
        return h(
            'el-menu',
            {
                prop: this.$attrs,
                on: {
                    ...this.$listeners,
                    select: (index, indexPath)  => {
                        this.indexPath = indexPath;
                    }
                }
            },
            this.menuData.filter(item => !(Number(item.disable))).map(item => this.createdMenuItem(h, item))
        );
    },
    methods: {
        createdMenuItem (h, item) {
            let haveChildren = Object.prototype.toString.call(item.children) && item.children.length;
            const index = item.no;
            let props = { ...item, index };
            if (haveChildren) {
                return h(
                    'el-submenu',
                    { props, key: index },
                    [
                        h('template', {slot: 'title'}, this.createdIconTitle(h, item)),
                        ...item.children.filter(item => !(Number(item.disable))).map(item => this.createdMenuItem(h, item))
                    ]
                );
            } else {
                props.index = this.getItemUrl(item.path);
                return h(
                    'el-menu-item',
                    {
                        props,
                        key: index,
                        on: {
                            click: () => {
                                this.$emit('select', item, this.indexPath);
                            }
                        }
                    },
                    this.createdIconTitle(h, item)
                )
            }
        },
        createdIconTitle (h, item) {
            let nodes = [];
            if (item.icons) {
                nodes.push(h('i', { 'class': item.icons}));
            }
            nodes.push(h('span', { slot: 'title' }, item.title));
            return nodes;
        },
        getItemUrl (url) {
            const reg = new RegExp(/\{.+?}/);
            let path = url;
            if (reg.test(url)) {
                const arr = url.split('/');
                path = `/${arr[1]}`;
            }
            return path;
        }
    }
}