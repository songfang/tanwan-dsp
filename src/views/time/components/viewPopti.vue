<style scoped>
.bottom_line {
  border-bottom: 1px solid rgb(233, 233, 233);
  padding-bottom: 10px;
}

.poptipdiv {
  white-space: normal;
  text-align: left;
  padding: 20px;
}

.checklist {
  padding-bottom: 5px;
  padding-top: 20px;
}

.Poptiptap .ivu-poptip-body-content {
  overflow: inherit;
}
</style>

<template>
    <div style="display: inline-block;">
        <Poptip ref="poptip" placement="bottom-start" width="500" class="Poptiptap" trigger="hover">
            <Button type="primary" @click="handleShow">自定义指标</Button>
            <div slot="content" class="poptipdiv">
                <div class="bottom_line">
                    <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">全选</Checkbox>
                </div>
                <div class="checklist">
                    媒体列
                </div>
                <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                    <Checkbox label="configured_status">广告开关</Checkbox>
                    <Checkbox label="cpc">点击均价（cpc）</Checkbox>
                    <Checkbox label="click">点击量</Checkbox>
                    <Checkbox label="ctr">点击率(CTR)</Checkbox>
                </CheckboxGroup>
                <div class="checklist">
                    落地页
                </div>
                <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                    <Checkbox label="fetch">到达数</Checkbox>
                    <Checkbox label="fetch_per">到达率</Checkbox>
                    <Checkbox label="down_ins_per">下载率</Checkbox>
                    <Checkbox label="download">下载数</Checkbox>
                </CheckboxGroup>
                <div class="checklist">
                    激活注册
                </div>
                <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                    <Checkbox label="install">激活总量</Checkbox>
                    <Checkbox label="click_install">点击注册率</Checkbox>
                    <Checkbox label="reg_dev">注册设备数</Checkbox>
                    <Checkbox label="activation">注册数</Checkbox>
                    <Checkbox label="reg_per_click">点击注册率</Checkbox>
                    <Checkbox label="cost_per_reg">注册成本</Checkbox>
                    <Checkbox label="cost_per_dev">注册设备成本</Checkbox>
                    <Checkbox label="reg_per_activation">激活安装率</Checkbox>
                    <Checkbox label="activation_per_download">下载激活率</Checkbox>
                </CheckboxGroup>
                <div class="checklist">
                    活跃付费
                </div>
                <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                    <Checkbox label="login">活跃数</Checkbox>
                    <Checkbox label="active_per_reg">活跃率</Checkbox>
                    <Checkbox label="pay_num">付费人数</Checkbox>
                    <Checkbox label="pay_total">付费金额</Checkbox>
                    <Checkbox label="pay_per_reg">付费率</Checkbox>
                    <Checkbox label="reg_arpu">注册ARPU</Checkbox>
                    <Checkbox label="roi">回本率</Checkbox>
                </CheckboxGroup>
                <div class="checklist">
                    其他
                </div>
                <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                    <Checkbox label="show_pv">展示PV</Checkbox>
                    <Checkbox label="show_ip">展示IP</Checkbox>
                    <Checkbox label="down_ip">下载IP</Checkbox>
                    <Checkbox label="campaign_id">计划</Checkbox>
                    <Checkbox label="game_name">产品名称</Checkbox>
                </CheckboxGroup>
                <div class="margin-top-20">
                    <Button type="ghost" @click="set_user_memo">保存操作</Button>
                </div>
            </div>
        </Poptip>
    </div>
</template>
<script>
import Axios from "@/api/index";
export default {
    name: "viewTab",
    props: ["action", "opt", "check"],
    data() {
        return {
            indeterminate: true,
            checkAll: false,
            checkAllGroup: [], //默认选中
            checkAllGroups: [
                "configured_status",
                "cpc",
                "click",
                "ctr",
                "fetch",
                "fetch_per",
                "down_ins_per",
                "download",
                "install",
                "click_install",
                "reg_dev",
                "activation",
                "reg_per_click",
                "cost_per_reg",
                "cost_per_dev",
                "reg_per_activation",
                "activation_per_download",
                "login",
                "active_per_reg",
                "pay_num",
                "pay_total",
                "pay_per_reg",
                "reg_arpu",
                "roi",
                "show_pv",
                "show_ip",
                "down_ip",
                "campaign_id",
                "game_name"
            ]
        };
    },
    mounted() {
        Axios.get("api.php", {
            action: "sys",
            opt: "get_user_memo",
            taction: this.action,
            topt: this.opt
        })
            .then(res => {
                if (res.ret == 1) {
                    let check = res.data.split(",");
                    if (check.length == 0) {
                        this.checkAllGroup = this.check;
                    } else {
                        this.checkAllGroup = check;
                        this.checkChange();
                    }
                }
            })
            .catch(err => {
                console.log(err);
            });
    },
    methods: {
        //保存自定义指标
        set_user_memo() {
            if (this.checkAllGroup.length == "0") {
                this.$Message.info("至少您得选择一个自定义指标吧");
                return;
            }
            Axios.get("api.php", {
                action: "sys",
                opt: "set_user_memo",
                taction: this.action,
                topt: this.opt,
                memo: this.checkAllGroup.join(",")
            })
                .then(res => {
                    if (res.ret == 1) {
                        const poptip = this.getPoptip().querySelector('.ivu-poptip-popper')
                        poptip.style.display = 'none'
                        this.$Message.info(res.msg);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        //自定义指标全选
        handleCheckAll() {
            if (this.indeterminate) {
                this.checkAll = false;
            } else {
                this.checkAll = !this.checkAll;
            }
            this.indeterminate = false;
            if (this.checkAll) {
                this.checkAllGroup = this.checkAllGroups;
            } else {
                this.checkAllGroup = [];
            }
            this.checkChange();
        },
        //自定义指标
        checkAllGroupChange(data) {
            if (data.length === 29) {
                this.indeterminate = false;
                this.checkAll = true;
            } else if (data.length > 0) {
                this.indeterminate = true;
                this.checkAll = false;
            } else {
                this.indeterminate = false;
                this.checkAll = false;
            }
            this.checkChange();
        },
        //点击树节点时触发
        checkChange() {
            let uncheck = [];
            this.checkAllGroups.forEach(item => {
                let is = true;
                this.checkAllGroup.forEach(col => {
                    if (item == col) {
                        is = false;
                    }
                });
                if (is) {
                    uncheck.push(item);
                }
            });
            this.$emit("on-change", uncheck);
        },
        getPoptip() {
            return this.$refs.poptip.$el
        },
        handleHide() {
            this.getPoptip().querySelector('.ivu-poptip-popper').style.display = 'none'
        },
        handleShow() {
            const poptip = this.getPoptip().querySelector('.ivu-poptip-popper')
            setTimeout(() => {
                poptip.style.display = 'block'
            }, 500)
            this.getPoptip().addEventListener('mouseleave', this.handleHide)
        }
    },
    beforeDestroy() {
        this.getPoptip().removeEventListener('mouseleave', this.handleHide)
    }
};
</script>

<style>

</style>