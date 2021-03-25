<template>
    <div>
        <HeaderBack :subTitle="subTitle" :buttonList="buttonList"
                    @clickHeaderBtnCallBack="format"></HeaderBack>
        <div>
            <a-textarea class="jsonTextarea jsonTextareaFirst"
                        placeholder="中文"
                        v-model="jsonTextarea1"
                        :style="{height:jsonTextareaHeight}" @pressEnter="format">
            </a-textarea>
            <div>
                <a-textarea class="jsonTextarea" placeholder="英文" :style="{height:jsonTextareaHeight}"
                            v-model="jsonTextarea2">
                </a-textarea>
                <a-spin :spinning="spinning">
                </a-spin>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderBack from "@/components/HeaderBack";
    import baidu from '@/utils/baidu';
    import {uuid} from 'vue-uuid';

    export default {
        name: "Translation",
        data() {
            return {
                subTitle: "翻译(Baidu)",
                jsonTextareaHeight: "",
                jsonTextarea1: "",
                jsonTextarea2: "",
                spinning: false,
                buttonList: [{
                    name: '中转英'
                }, {
                    name: '英转中'
                }, {
                    name: '切换源',
                    type: 'dropdown',
                    menuItem: ['Baidu', 'Google', 'Youdao']
                }]
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
                if (data.name === '中转英') {
                    this.baiduTranslate('en');
                }
                if (data.name === '英转中') {
                    this.baiduTranslate('zh');
                }
                if (data.name === '切换源') {
                    this.subTitle = "翻译(" + data.dropName + ")"
                }
            },
            baiduTranslate(type) {
                this.spinning = true;
                let s = uuid.v1();
                let t = type === 'en' ? this.jsonTextarea1 : this.jsonTextarea2;
                let a = baidu.baiduTranslate(t, s, type);
                baidu.baiduInstance().get(a).then(res => {
                    if (res) {
                        let d = res.data['trans_result'][0]['dst'];
                        if (type === 'en') {
                            this.jsonTextarea2 = d;
                        } else {
                            this.jsonTextarea1 = d;
                        }
                    }
                    this.spinning = false;
                })
            }
        }
    }
</script>

<style scoped>
</style>
