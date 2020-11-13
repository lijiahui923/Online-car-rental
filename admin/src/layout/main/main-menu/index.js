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
            this.menuData.map(item => this.createdMenuTitle(h, item))
        );
    },
    methods: {
        createdMenuTitle (h, item) {
            console.log(Object.prototype.toString.call(item.children));
            // console.log(h, item);
            let haveChildren = Object.prototype.toString.call(item.children) && item.children.length;
        }
    }
}