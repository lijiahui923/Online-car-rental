export default {
    name: 'cRadio',
    inheritAttrs: false,
    props: {
        code: {
            type: String,
            default: ''
        },
        type: {
          type: String,
          default: 'normal'
        }
    },
    data() {
        return {
            selectData: '',
            options: []
        };
    },
    watch: {
        code:{
            handler (code) {
                this.queryKeyValue(code);
            },
            immediate:true
        }
    },
    render (h) {
        let self = this;
        return h('el-radio-group',
            {
                props: {
                    ...this.$props,
                    ...this.$attrs
                },
                on: {
                    ...this.$listeners
                }
            },
            [
                self.options.map(item => {
                    const tagName = self.type === 'normal' ? 'el-radio' : 'el-radio-button';
                    return h(tagName, {
                        props: {
                            key: item['value'],
                            label: item['label'],
                            value: item['value']
                        },
                        attrs: {
                            ...self.$attrs
                        }
                    },item['label']);
                })
            ]
        );
    },
    methods: {
        queryKeyValue (code) {
            let data = this.$KeyValue.getItem(code);
            this.options = data;
        }
    }
}