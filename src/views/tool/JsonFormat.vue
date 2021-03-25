<template>
    <div>
        <HeaderBack subTitle="JSON格式化" :buttonList="buttonList"
                    @clickHeaderBtnCallBack="format"></HeaderBack>
        <div>
            <a-textarea placeholder="输入将格式化的json" class="jsonTextarea jsonTextareaFirst"
                        v-model="jsonTextarea1"
                        :style="{height:jsonTextareaHeight}" @pressEnter="format"/>
            <a-textarea class="jsonTextarea" :style="{height:jsonTextareaHeight}" v-model="jsonTextarea2"/>
        </div>
    </div>
</template>

<script>
    import HeaderBack from '@/components/HeaderBack'

    export default {
        name: "JsonFormat",
        data() {
            return {
                jsonTextareaHeight: "",
                jsonTextarea1: "",
                jsonTextarea2: "",
                buttonList: [{name: '格式化'}]
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
            format(data) {
                try {
                    this.jsonTextarea2 = JSON.stringify(JSON.parse(this.jsonTextarea1), null, 4);
                } catch (e) {
                    this.jsonTextarea2 = "格式错误";
                }
            }
        }
    }
</script>

<style scoped>

</style>
