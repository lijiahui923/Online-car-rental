let common = {
    // 数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
    data() {
        return {
            list: [],
            height: 0
        }
    },
    mounted() {
        window.addEventListener("resize", this.setViewHeight);
        this.$nextTick(() => {
            this.setViewHeight();
        });
    },
    methods: {
        setViewHeight() {
            this.height = this.$root.$el.clientHeight - this.minHeight;
        }
    }
}

export default common;