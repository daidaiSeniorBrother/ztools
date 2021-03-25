<template>
    <div>
        <HeaderBack subTitle="备忘录"></HeaderBack>
        <a-tabs default-active-key="1" tab-position="left" :style="{height:jsonTextareaHeight}">
            <a-tab-pane key="1" tab="Tab 1">
                <a-textarea :style="{height:jsonTextareaHeight}"
                            v-model="textarea">
                </a-textarea>
            </a-tab-pane>
            <a-tab-pane key="2" tab="Tab 2">
                Content of Tab 2
            </a-tab-pane>
            <a-tab-pane key="3" tab="Tab 3">
                Content of Tab 3
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
    import HeaderBack from "@/components/HeaderBack";

    export default {
        name: "Memorandum",
        data() {
            return {
                textarea: "",
                jsonTextareaHeight: ""
            }
        },
        components: {
            HeaderBack
        },
        mounted() {
            const _this = this;
            _this.setSize();
            window.addEventListener('resize', function () {
                _this.setSize();
            }, false);
        },
        methods: {
            setSize() {
                this.jsonTextareaHeight = (document.documentElement.clientHeight - 203) + 'px';
            },
        }
    }
</script>

<style scoped>

</style>
