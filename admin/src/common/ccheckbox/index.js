export default {
    name: 'cCheckbox',
    props: {
        code: {
            type: String,
            default: ''
        },
        type: {
          type: String,
          default: ''
        }
    },
    data () {
        return {
            checkedCities: [],
            cityOptions: []
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
        return h('el-checkbox-group', 
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
                this.cityOptions.map(item => {
                    const tagName = this.type === 'button' ? 'el-checkbox-button' : 'el-checkbox';
                    return h(tagName, {
                        props: {
                            key: item['value'],
                            label: item['label']
                        },
                        attrs: {
                            ...this.$attrs
                        }
                    },item['label']);
                })
            ]
        );
    },
    methods: {
        queryKeyValue (code) {
            let data = this.$KeyValue.getItem(code);
            this.cityOptions = data;
        }
    }
}