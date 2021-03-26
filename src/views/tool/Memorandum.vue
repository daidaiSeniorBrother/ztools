<template>
    <div id="Memorandum">
        <HeaderBack subTitle="备忘录" :buttonList="buttonList"
                    @clickHeaderBtnCallBack="buttonListFunc"></HeaderBack>
        <a-tabs v-model="activeKey" tab-position="left" type="editable-card" @edit="edit" @change="tabChange" closable>
            <template v-for="(item,i) in tabDataList">
                <a-tab-pane :key="i">
                        <span slot="tab"
                              style="width: 116px;display: block;white-space: nowrap;overflow: hidden!important;text-overflow: ellipsis!important;">
                            {{item.name}}
                        </span>
                    <a-input v-model="titleInput" placeholder="标题" style="margin-bottom: 10px"
                             @change="()=>inputChange(i)"/>
                    <a-textarea :style="{height:jsonTextareaHeight}"
                                v-model="textarea">
                    </a-textarea>
                </a-tab-pane>
            </template>
        </a-tabs>
    </div>
</template>

<script>
    import HeaderBack from "@/components/HeaderBack";
    import {getMemorandum, MemorandumFileRead, MemorandumFileWrite, delFile} from '@/utils/file';


    export default {
        name: "Memorandum",
        data() {
            return {
                oldFileName: "",
                activeKey: 0,
                titleInput: "",
                textarea: "",
                jsonTextareaHeight: "",
                buttonList: [{
                    name: '保存'
                }],
                defaultTabData: [{
                    name: 'New Tab'
                }],
                tabDataList: []
            }
        },
        components: {
            HeaderBack
        },
        mounted() {
            getMemorandum(data => {
                if (data) {
                    data.forEach(d => {
                        let split = d.split('.')[0].split('@');
                        this.tabDataList.push({
                            name: split[0],
                            id: split[1]
                        })
                    })
                }
                if (this.tabDataList.length <= 0) {
                    this.tabDataList = JSON.parse(JSON.stringify(this.defaultTabData));
                } else {
                    this.tabChange(0);
                }
            })
            const _this = this;
            _this.setSize();
            window.addEventListener('resize', function () {
                _this.setSize();
            }, false);
        },
        methods: {
            setSize() {
                this.jsonTextareaHeight = (document.documentElement.clientHeight - 245) + 'px';
            },
            buttonListFunc(data) {
                let id = "";
                let type = "";
                let tabDataListElement = this.tabDataList[this.activeKey];
                if (tabDataListElement.id) {
                    type = 'update';
                    id = tabDataListElement.id;
                } else {
                    type = 'new';
                    id = new Date().getTime();
                    this.tabDataList[this.activeKey].id = id;
                }
                MemorandumFileWrite(this.oldFileName, this.titleInput, this.textarea, id, type);
                this.$message.success('保存成功');
            },
            tabChange(targetKey) {
                let tabDataListElement = this.tabDataList[targetKey];
                if (tabDataListElement.id) {
                    this.titleInput = tabDataListElement.name;
                    this.oldFileName = tabDataListElement.name;
                    this.textarea = MemorandumFileRead(tabDataListElement.name + '@' + tabDataListElement.id);
                } else {
                    this.titleInput = "";
                    this.oldFileName = "";
                    this.textarea = "";
                }
            },
            edit(targetKey, action) {
                if (action === 'add') {
                    this.tabDataList.push({name: 'New Tab'});
                    this.activeKey = this.tabDataList.length - 1;
                    this.titleInput = "";
                    this.oldFileName = "";
                    this.textarea = "";
                }
                if (action === 'remove') {
                    let tabDataListElement = this.tabDataList[targetKey];
                    if (tabDataListElement.id) {
                        delFile('memorandum', this.oldFileName + '@' + tabDataListElement.id);
                    }
                    this.tabDataList.splice(targetKey, 1);
                    if (this.tabDataList.length > 0) {
                        this.activeKey = 0;
                    } else {
                        this.tabDataList = JSON.parse(JSON.stringify(this.defaultTabData));
                    }
                    this.$message.success('删除成功');
                }
            },
            inputChange(index) {
                this.tabDataList[index].name = this.titleInput;
            }
        }
    }
</script>

<style scoped>
    /deep/ .ant-tabs-tab {
        color: rgba(255, 255, 255, 0.65) !important;
        background: #001529 !important;
    }

    /deep/ .ant-tabs-close-x {
        position: absolute;
        top: 12px;
    }

    /deep/ .ant-tabs-nav .ant-tabs-tab-active {
        color: #1890ff !important;
    }

    /deep/ .ant-tabs-left-bar {
        width: 150px;
    }

    /deep/ .ant-tabs-new-tab {
        color: rgba(255, 255, 255, 0.65) !important;
    }

    /deep/ .ant-tabs-close-x {
        color: rgba(255, 255, 255, 0.65) !important;
    }

    #Memorandum input, textarea {
        color: rgba(255, 255, 255, 0.65) !important;
        background: #001529 !important;
    }
</style>
