<style scoped >
    @import "../../styles/common.less";
    @import '../../styles/table.less';
    .head{border-bottom: 1px solid #e9eaec; margin-bottom: 10px; padding: 0;}  
    .sel_state1{
		text-align: left;

	}
	.sel_state1.ivu-select-multiple .ivu-select-selection{
		overflow: auto;
		height: 32px;
    }
    .ivu-poptip-rel{display: block;}
</style>
<template>
    <Card dis-hover shadow>
        <div class="head">
            <Row :gutter="10">

                <Col :xs="12" :md="5">
                   <search-tree :clearable="sclear" @on-change="getids"></search-tree>
                </Col>

                <Col :xs="12" :md="4">
                    <select-media class="smedia" @on-change="setMedia"></select-media>
                </Col>

                <Col :xs="12" :md="2">
                    <!-- 版本: -->
                    <Select  @on-change="setVersion" placeholder="--全部版本--"  class="margin-bottom-10">
                        <Option v-for="item in versionList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>                                      
                </Col> 

                <Col :xs="2" :md="2">  
                    <diy-index @on-change="getIndex" :check="checkAllGroup" class="margin-bottom-10"></diy-index>    
                </Col>               

                <Col :xs="8" :md="3" offset="4">
                    <DatePicker  @on-change="changeDate" type="daterange" placement="bottom-end" placeholder="自定义时间" style="width: 100%"></DatePicker>
                </Col>
                <Col :xs="12" :md="2">  
                    <select-author @on-change="setPrincipal"></select-author>
                </Col>

                <Col :xs="12" :md="2">
                    <Button icon="document-text"  @click="exportData()" style="float:right" class="margin-bottom-10">下载报表</Button>
                </Col>

            </Row>
        </div>   

        <Table stripe :size="tableSize" :loading="loading" :columns="tableColumns" :data="list"  ref="tableCsv"  @on-sort-change="sortChange" :height="height"></Table>

        <Row class="margin-top-10">
            <Col span="10">
            <Radio-group v-model="tableSize" type="button">
                <Radio label="large">大</Radio>
                <Radio label="default">中</Radio>
                <Radio label="small">小</Radio>
            </Radio-group>
              每页显示
            <Select v-model="page_size" style="width:80px" placement="top" transfer @on-change="getTableData()">
                <Option v-for="item in 500" :value="item" :key="item" v-if="item%50==0">{{ item }}</Option>
            </Select>
            </Col>
            <Col span="14" style="text-align: right;">
                <Page :total="total_number" :page-size="page_size" ref="pages" @on-change="getTableData" show-elevator show-total></Page>
            </Col>
        </Row>
    </Card>
</template>
<script>
import Axios from "@/api/index"
import searchTree from '@/components/select-tree/searchTree.vue';
import diyIndex from './components/diyIndex.vue';
import selectMedia from '@/components/select-media/index.vue';
import selectAuthor from '@/components/select-author/index.vue';

export default {
    components: {
        searchTree,
        diyIndex,
        selectMedia,
        selectAuthor
    },
    data () {
        return {
            height:document.body.clientHeight - 225,
            loading : true,  
            //每页数量 
            page: 1,
            page_size: 50, 
            total_number: 1, //总数量
            total_page: 1, //总页数
            tableSize: 'small',
            //searchTree 组件清除属性
            sclear:false,
            versionList:[
                {value: '', label:'全部'},
                {value: '2', label:'iOS'},
                {value: '3', label:'安卓'},
            ],
            //表格头部
            tableColumns: [],
            //排序
            orderField:'',
            orderDirection: 'SORT_ASC',
            //默认自定义指标选项
            checkAllGroup:['impression','click','install','install_per','reg_imei','activation','reg_per','reg_imei_cost','reg_cost','login','act_per','act_cost','pay_num','pay_total','pay_per','reg_arpu','pay_arpu','income_per','ltv'],
            current_game:'',
            current_media:'',
            current_version:'',
            current_time:[],
            current_author:[],
            list:[]
        }
    },
    //computed :{ 
        //所有游戏
        // game(){
        //     return this.$store.state.channel.game;
        // },
    //},
    // watch: {
    //     list(data){
    //         //这里监听list变化了 把表格里loading隐藏  后期要考虑这样做是否妥当
    //         if(data.length == 0){
    //             this.$Message.info('没有查找到数据');
    //         }
    //         this.loading = false;
    //     }
    // },
    methods : {
        //导出表单
        exportData(){
            this.$refs.tableCsv.exportCsv({
                filename: '渠道产品总览'
            });
        },
        //获取产品总览表格数据
        getTableData(page){
            if(page === undefined) {
                this.$refs['pages'].currentPage = 1;
                this.page = 1;
            } else {
                this.page = page;
            };
            let param = { 
                    action : 'api',
                    opt : 'getGameTotalDay',
                    do : 'products',
                    game_id : this.current_game,
                    media_type : this.current_media,
                    os : this.current_version,
                    page : this.page,
                    page_size: this.page_size,
                    author : this.current_author,
                    orderField: this.orderField, 
					orderDirection: this.orderDirection //排序的方向值SORT_ASC顺序 SORT_DESC倒序
            };

            if(this.current_time.length > 0){
                param.tdate = this.current_time[0];
                param.tdate2 = this.current_time[1];
            }
            this.loading = true;
            Axios.get('api.php',param)
            .then( 
                res=>{
                    if(res.ret == '1'){
                        console.log(res.data)
                        this.list = res.data.list;
                        this.total_page = res.data.total_page;
                        this.total_page = res.data.total_page;
                        this.loading = false;
                    }
                }
            ).catch( 
                err=>{ console.log( err) }
            );
           // this.$store.dispatch('getChannelData',param);
        },
        //排序
        sortChange(column) {
            this.orderField = column.key;
            if(column.order == "asc"){
                this.orderDirection = "SORT_ASC";
            }else if(column.order == "desc"){
                this.orderDirection = "SORT_DESC";
            }else{
                this.orderField = '';
                this.orderDirection = "";
            }           
            this.getTableData();        
        },                 
        //自定义时间
        changeDate(date){
            this.current_time = date;
            this.getTableData();
        },
        //获取选中的游戏id
        getids(gid){
            let id = gid.join(',');
            this.current_game = id;
            this.getTableData();
        },        
        //选择媒体
        setMedia(data){            
            this.current_media = data;
            this.getTableData();
        },
        //选择版本
        setVersion(data){
            this.current_version = data;
            this.getTableData();
        },
        //选择负责人
        setPrincipal(data){
            this.current_author = data;
            this.getTableData();
        },
        //获取自定义指标
        getIndex(data){
            this.checkAllGroup = data;                 
            this.tableColumns = this.getTableColumns();
        },
        //设置表格头部
        getTableColumns(){
            const tableColumnList = {
                game_name : {title: '产品名称', key: 'game_name', "fixed": "left", sortable: 'custom', "width": 150 },
                data : {title: '日期', key: 'date',  sortable: 'custom', "width": 120 },                
                cost : {title: '投入', key: 'cost', sortable: 'custom', "width": 100 },
                impression : {title: '展示IP', key: 'impression', sortable: 'custom', "width": 100 },
                click : {title: '点击IP', key: 'click', sortable: 'custom', "width": 150 },
                click_per : {title: '点击率', key: 'click_per', sortable: 'custom', "width": 100 },
                install : {title: '激活安装', key: 'install', sortable: 'custom', "width": 120 },
                install_per : {title: '激活安装率', key: 'install_per', sortable: 'custom', "width": 120 },
                reg_imei : {title: '注册设备数', key: 'reg_imei', sortable: 'custom', "width": 120 },
                activation : {title: '注册', key: 'activation', sortable: 'custom', "width": 100 },
                reg_per : {title: '注册率', key: 'reg_per', sortable: 'custom', "width": 100 },
                reg_imei_cost : {title: '注册设备成本', key: 'reg_imei_cost', sortable: 'custom', "width": 130 },
                reg_cost : {title: '注册成本', key: 'reg_cost', sortable: 'custom', "width": 130 },
                login : {title: '次日活跃', key: 'login', sortable: 'custom', "width": 120 },
                act_per : {title: '活跃率', key: 'act_per', sortable: 'custom', "width": 120 },
                act_cost : {title: '活跃成本', key: 'act_cost', sortable: 'custom', "width": 120 },
                pay_num : {title: '付费人数', key: 'pay_num', sortable: 'custom', "width": 120 },
                pay_total : {title: '付费金额', key: 'pay_total', sortable: 'custom', "width": 120 },
                pay_per : {title: '付费率', key: 'pay_per', sortable: 'custom', "width": 100 },
                reg_arpu : {title: '注册ARPU', key: 'reg_arpu', sortable: 'custom', "width": 120 },
                pay_arpu : {title: '付费ARPU', key: 'pay_arpu', sortable: 'custom', "width": 120 },
                income_per : {title: '回本率', key: 'income_per', sortable: 'custom', "width": 100 },
                ltv : {title: 'LTV', key: 'ltv', sortable: 'custom', "width": 80 }, 
            };            
            //固定选项
            let data = [
                tableColumnList.data,
                tableColumnList.game_name,
                tableColumnList.click_per,
                tableColumnList.cost,
            ];
            
            this.checkAllGroup.forEach( col => data.push(tableColumnList[col]) ); 
            return data;
        },
        changeTableColumns(){
            this.tableColumns = this.getTableColumns();
        }
    },
    mounted(){        
        this.changeTableColumns();
        this.getTableData();
    }
}
</script>