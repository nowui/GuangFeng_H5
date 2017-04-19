<template>
  <div class="vote">
    <div class="form">
      <input type="text" id="name" placeholder="姓名" v-model="name"/>
      <input type="text" id="sex" placeholder="性别" v-model="sex" readonly="readonly" @click="handleSex()"/>
      <input type="text" id="phone" placeholder="手机" v-model="phone"/>
      <input type="text" id="province" placeholder="所在省份" v-model="province" readonly="readonly"
             @click="handleProvince()"/>
      <input type="text" id="city" placeholder="所在城市" v-model="city" readonly="readonly" @click="handleCity()"/>
      <input type="text" id="distributor" placeholder="选择经销商" v-model="distributor" readonly="readonly" @click="handleDistributor()"/>
      <div class="submit" @click="handleSubmit()"></div>
      <div class="agree" @click="handleAgree()"></div>
      <div class="back" @click="handleBack()"></div>
      <i class="weui-icon-success-no-circle check" v-if="is_check"></i>
    </div>
  </div>
</template>

<script>
  import 'weui';
  import weui from 'weui.js';

  function checkPhone(phone) {
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(phone))) {
      return false;
    }
    return true;
  }

  export default {
    data () {
      return {
        name: '',
        sex: '',
        phone: '',
        province: '',
        city: '',
        distributor: '',
        is_check: false,
        province_list: [
          {
            "province": "内蒙古自治区",
            "city": "包头市",
            "distributor": "包头市福江汽车销售有限公司"
          },
          {
            "province": "河北省",
            "city": "保定市",
            "distributor": "保定市元盛汽车贸易有限公司"
          },
          {
            "province": "北京市",
            "city": "北京市",
            "distributor": "北京昌海福江汽车销售服务有限公司"
          },
          {
            "province": "北京市",
            "city": "北京市",
            "distributor": "北京福铃汽车技术发展有限公司"
          },
          {
            "province": "北京市",
            "city": "北京市",
            "distributor": "北京京铃顺汽车销售有限公司"
          },
          {
            "province": "河北省",
            "city": "沧州市",
            "distributor": "沧州市华成汽车贸易有限公司"
          },
          {
            "province": "辽宁省",
            "city": "大连市",
            "distributor": "大连立扬汽车销售有限公司"
          },
          {
            "province": "河北省",
            "city": "石家庄市",
            "distributor": "河北福江汽车贸易有限公司"
          },
          {
            "province": "吉林省",
            "city": "长春市",
            "distributor": "吉林九和汽车销售有限公司"
          },
          {
            "province": "辽宁省",
            "city": "沈阳市",
            "distributor": "辽宁全顺江铃汽车销售服务有限公司"
          },
          {
            "province": "内蒙古自治区",
            "city": "呼和浩特市",
            "distributor": "内蒙古三和汽车销售服务有限责任公司"
          },
          {
            "province": "河北省",
            "city": "秦皇岛市",
            "distributor": "秦皇岛福铃汽车销售服务有限公司"
          },
          {
            "province": "河北省",
            "city": "唐山市",
            "distributor": "唐山广福汽车销售服务有限公司"
          },
          {
            "province": "天津市",
            "city": "天津市",
            "distributor": "天津全顺江铃汽车销售服务有限公司"
          },
          {
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "distributor": "哈尔滨天拓欣格汽车销售服务有限公司"
          },
          {
            "province": "山东省",
            "city": "滨州市",
            "distributor": "滨州盛福汽车销售服务有限公司"
          },
          {
            "province": "江苏省",
            "city": "常熟市",
            "distributor": "常熟贺骏汽车销售服务有限公司"
          },
          {
            "province": "江苏省",
            "city": "常州市",
            "distributor": "常州江铃汽车销售服务有限公司"
          },
          {
            "province": "浙江省",
            "city": "慈溪市",
            "distributor": "慈溪市友邦汽车销售有限公司"
          },
          {
            "province": "山东省",
            "city": "东营市",
            "distributor": "东营顺福铃汽车销售服务有限公司"
          },
          {
            "province": "福建省",
            "city": "福州市",
            "distributor": "福州江铃全顺汽车销售服务有限公司"
          },
          {
            "province": "江苏省",
            "city": "淮安市",
            "distributor": "上海科达汽车销售服务淮安有限公司"
          },
          {
            "province": "山东省",
            "city": "济宁市",
            "distributor": "济宁江铃全顺汽车销售服务有限公司"
          },
          {
            "province": "江苏省",
            "city": "江阴市",
            "distributor": "江阴市广吉江铃汽车销售有限公司"
          },
          {
            "province": "浙江省",
            "city": "金华市",
            "distributor": "浙江金华顺铃汽车销售服务有限公司"
          },
          {
            "province": "江苏省",
            "city": "宿迁市",
            "distributor": "上海科达汽车销售服务宿迁有限公司"
          },
          {
            "province": "江苏省",
            "city": "徐州市",
            "distributor": "上海科达徐州汽车销售服务有限公司"
          },
          {
            "province": "江苏省",
            "city": "昆山市",
            "distributor": "昆山贺骏汽车销售服务有限公司"
          },
          {
            "province": "江苏省",
            "city": "连云港市",
            "distributor": "连云港市汽车修理有限公司"
          },
          {
            "province": "山东省",
            "city": "临沂市",
            "distributor": "临沂顺铃汽车销售服务有限公司"
          },
          {
            "province": "山东省",
            "city": "烟台市",
            "distributor": "龙口顺通汽车销售服务有限公司"
          },
          {
            "province": "江苏省",
            "city": "南京市",
            "distributor": "南京凯腾汽车贸易有限公司"
          },
          {
            "province": "江苏省",
            "city": "南通市",
            "distributor": "南通市江铃汽车销售有限公司"
          },
          {
            "province": "江苏省",
            "city": "宁波市",
            "distributor": "宁波丰顺汽车销售服务有限公司"
          },
          {
            "province": "福建省",
            "city": "莆田市",
            "distributor": "​莆田市江铃全顺汽车销售服务有限公司"
          },
          {
            "province": "山东省",
            "city": "胶州市",
            "distributor": "青岛福全顺汽车销售有限公司"
          },
          {
            "province": "山东省",
            "city": "青岛市",
            "distributor": "青岛六和汽车销售有限公司"
          },
          {
            "province": "山东省",
            "city": "即墨市",
            "distributor": "青岛双林源汽车销售服务有限公司"
          },
          {
            "province": "浙江省",
            "city": "衢州市",
            "distributor": "衢州凯铃汽车销售服务有限公司"
          },
          {
            "province": "福建省",
            "city": "泉州市",
            "distributor": "泉州全顺汽车销售服务有限公司"
          },
          {
            "province": "福建省",
            "city": "厦门市",
            "distributor": "厦门江铃全顺汽车销售有限公司"
          },
          {
            "province": "山东省",
            "city": "济南市",
            "distributor": "山东江铃全顺汽车销售服务有限公司"
          },
          {
            "province": "上海市",
            "city": "上海市",
            "distributor": "上海江铃汽车销售服务有限公司"
          },
          {
            "province": "上海市",
            "city": "上海市",
            "distributor": "上海九和汽车销售服务有限公司"
          },
          {
            "province": "上海市",
            "city": "上海市",
            "distributor": "上海科达汽车销售服务有限公司"
          },
          {
            "province": "上海市",
            "city": "上海市",
            "distributor": "上海雄威汽车销售有限公司"
          },
          {
            "province": "江苏省",
            "city": "苏州市",
            "distributor": "苏州贺骏金顺汽车销售服务有限公司"
          },
          {
            "province": "浙江省",
            "city": "台州市",
            "distributor": "浙江台州江铃汽车销售服务有限公司"
          },
          {
            "province": "江苏省",
            "city": "泰州市",
            "distributor": "泰州市福顺汽车销售服务有限公司"
          },
          {
            "province": "山东省",
            "city": "威海市",
            "distributor": "威海江铃汽车销售服务有限公司"
          },
          {
            "province": "山东省",
            "city": "潍坊市",
            "distributor": "潍坊金恒源汽车贸易有限公司"
          },
          {
            "province": "江苏省",
            "city": "无锡市",
            "distributor": "无锡市祥顺汽车销售服务有限公司"
          },
          {
            "province": "山东省",
            "city": "烟台市",
            "distributor": "烟台江铃汽车销售服务有限公司"
          },
          {
            "province": "江苏省",
            "city": "盐城市",
            "distributor": "盐城福顺江铃汽车销售服务有限公司"
          },
          {
            "province": "浙江省",
            "city": "义乌市",
            "distributor": "义乌市福顺汽车销售服务有限公司"
          },
          {
            "province": "浙江省",
            "city": "金华市",
            "distributor": "永康市康铃汽车销售有限公司"
          },
          {
            "province": "浙江省",
            "city": "温州市",
            "distributor": "红旭集团股份公司"
          },
          {
            "province": "浙江省",
            "city": "湖州市",
            "distributor": "浙江江铃汽车销售服务有限公司湖州分公司"
          },
          {
            "province": "浙江省",
            "city": "嘉兴市",
            "distributor": "浙江江铃汽车销售服务有限公司嘉兴分公司"
          },
          {
            "province": "浙江省",
            "city": "绍兴市",
            "distributor": "浙江江铃汽车销售服务有限公司绍兴分公司"
          },
          {
            "province": "浙江省",
            "city": "杭州市",
            "distributor": "浙江江铃汽车销售服务有限公司萧山分公司"
          },
          {
            "province": "浙江省",
            "city": "杭州市",
            "distributor": "浙江康顺汽车有限公司"
          },
          {
            "province": "浙江省",
            "city": "杭州市",
            "distributor": "浙江万里汽车有限公司"
          },
          {
            "province": "山东省",
            "city": "淄博市",
            "distributor": "淄博鲁中江铃汽车销售服务有限公司"
          },
          {
            "province": "四川省",
            "city": "达州市",
            "distributor": "达州市江铃汽车销售服务有限公司"
          },
          {
            "province": "云南省",
            "city": "大理市",
            "distributor": "大理江铃汽车销售服务有限公司"
          },
          {
            "province": "广东省",
            "city": "东莞市",
            "distributor": "东莞市顺特汽车销售服务有限公司"
          },
          {
            "province": "广东省",
            "city": "佛山市",
            "distributor": "佛山市禅铃汽车销售有限公司"
          },
          {
            "province": "广西省",
            "city": "南宁市",
            "distributor": "广西云汇汽车服务有限公司"
          },
          {
            "province": "广东省",
            "city": "广州市",
            "distributor": "广州市顺福铃汽车有限公司"
          },
          {
            "province": "贵州省",
            "city": "贵阳市",
            "distributor": "贵州江铃汽车销售服务有限责任公司"
          },
          {
            "province": "海南省",
            "city": "海口市",
            "distributor": "海口顺铃汽车销售有限公司"
          },
          {
            "province": "云南省",
            "city": "蒙自市",
            "distributor": "红河福顺汽车销售服务有限公司"
          },
          {
            "province": "广东省",
            "city": "惠州市",
            "distributor": "惠州市江铃汽车贸易有限公司"
          },
          {
            "province": "广东省",
            "city": "江门市",
            "distributor": "江门市江铃汽车销售有限公司"
          },
          {
            "province": "云南省",
            "city": "昆明市",
            "distributor": "昆明健中冈汽车销售有限公司"
          },
          {
            "province": "广西省",
            "city": "柳州市",
            "distributor": "柳州健中冈汽车有限公司"
          },
          {
            "province": "广东省",
            "city": "清远市",
            "distributor": "清远市江铃汽车销售有限公司"
          },
          {
            "province": "广东省",
            "city": "汕头市",
            "distributor": "振业汽车服务有限公司"
          },
          {
            "province": "广东省",
            "city": "深圳市",
            "distributor": "深圳市国顺江铃汽车销售服务有限公司"
          },
          {
            "province": "广东省",
            "city": "深圳市",
            "distributor": "深圳市国顺昌汽车有限公司"
          },
          {
            "province": "广东省",
            "city": "佛山市",
            "distributor": "佛山市顺德区江铃汽车销售有限公司"
          },
          {
            "province": "四川省",
            "city": "成都市",
            "distributor": "四川福顺汽车销售服务有限公司"
          },
          {
            "province": "云南省",
            "city": "文山市",
            "distributor": "文山惠玲汽车销售服务有限公司"
          },
          {
            "province": "西藏自治区",
            "city": "拉萨市",
            "distributor": "西藏睿欧汽车销售服务有限公司"
          },
          {
            "province": "云南省",
            "city": "景洪市",
            "distributor": "西双版纳健中冈隆盛汽车销售服务有限公司"
          },
          {
            "province": "广东省",
            "city": "湛江市",
            "distributor": "湛江顺铃汽车销售服务有限公司"
          },
          {
            "province": "广东省",
            "city": "肇庆市",
            "distributor": "肇庆顺铃汽车销售有限公司"
          },
          {
            "province": "广东省",
            "city": "中山市",
            "distributor": "中山市江铃汽车销售有限公司"
          },
          {
            "province": "四川省",
            "city": "重庆市",
            "distributor": "重庆江铃汽车销售服务有限公司"
          },
          {
            "province": "广东省",
            "city": "珠海市",
            "distributor": "珠海江铃汽车有限公司"
          },
          {
            "province": "贵州省",
            "city": "遵义市",
            "distributor": "遵义永翔汽车销售有限责任公司"
          },
          {
            "province": "甘肃省",
            "city": "兰州市",
            "distributor": "甘肃全顺江铃汽车销售服务有限公司"
          },
          {
            "province": "新疆维吾尔自治区",
            "city": "库尔勒市",
            "distributor": "库尔勒宏大全顺江铃汽车销售服务有限责任公司"
          },
          {
            "province": "宁夏回族自治区",
            "city": "银川市",
            "distributor": "宁夏顺铃汽车销售服务有限公司"
          },
          {
            "province": "山西省",
            "city": "太原市",
            "distributor": "山西福铃汽车销售服务有限公司"
          },
          {
            "province": "陕西省",
            "city": "西安市",
            "distributor": "陕西江铃全顺汽车销售服务有限公司"
          },
          {
            "province": "新疆维吾尔自治区",
            "city": "乌鲁木齐市",
            "distributor": "新疆瑞福顺隆汽车销售服务有限责任公司"
          },
          {
            "province": "新疆维吾尔自治区",
            "city": "伊宁市",
            "distributor": "伊犁恒聚汽车销售服务有限责任公司"
          },
          {
            "province": "山西省",
            "city": "运城市",
            "distributor": "运城市顺福铃汽车销售服务有限公司"
          },
          {
            "province": "安徽省",
            "city": "宿州市",
            "distributor": "安徽宏安汽车销售服务有限公司"
          },
          {
            "province": "安徽省",
            "city": "宣城市",
            "distributor": "安徽宏帆汽车销售有限公司"
          },
          {
            "province": "安徽省",
            "city": "合肥市",
            "distributor": "安徽宏实汽车销售有限公司"
          },
          {
            "province": "安徽省",
            "city": "蚌埠市",
            "distributor": "蚌埠市福兴汽车贸易有限公司"
          },
          {
            "province": "湖南省",
            "city": "常德市",
            "distributor": "常德天顺汽车销售有限公司"
          },
          {
            "province": "江西省",
            "city": "上饶市",
            "distributor": "江西赣东北江铃汽车销售服务有限公司"
          },
          {
            "province": "江西省",
            "city": "赣州市",
            "distributor": "赣州铃卡汽车销售服务有限公司"
          },
          {
            "province": "河南省",
            "city": "郑州市",
            "distributor": "河南福顺汽车销售有限公司"
          },
          {
            "province": "湖南省",
            "city": "长沙市",
            "distributor": "湖南鑫顺汽车销售服务有限公司"
          },
          {
            "province": "江西省",
            "city": "南昌市",
            "distributor": "江西百合铃顺汽车销售服务有限公司"
          },
          {
            "province": "河南省",
            "city": "洛阳市",
            "distributor": "洛阳顺铃汽车销售有限公司"
          },
          {
            "province": "河南省",
            "city": "商丘市",
            "distributor": "商丘市恒隆汽车销售服务有限公司"
          },
          {
            "province": "湖南省",
            "city": "邵阳市",
            "distributor": "邵阳市宝顺汽车销售服务有限公司"
          },
          {
            "province": "湖北省",
            "city": "武汉市",
            "distributor": "武汉威汉汽车服务有限公司"
          },
          {
            "province": "河南省",
            "city": "新乡市",
            "distributor": "新乡市福铃汽车销售有限公司"
          },
          {
            "province": "河南省",
            "city": "驻马店市",
            "distributor": "驻马店市顺铃汽车销售有限公司"
          },
          {
            "province": "四川省",
            "city": "重庆市",
            "distributor": "重庆怡和万铃汽车销售服务有限公司"
          },
          {
            "province": "湖北省",
            "city": "宜昌市",
            "distributor": "宜昌威汉机电有限责任公司"
          },
          {
            "province": "湖南省",
            "city": "邵阳市",
            "distributor": "邵阳市宝顺汽车销售服务有限公司"
          },
          {
            "province": "上海市",
            "city": "上海市",
            "distributor": "上海菱云汽车销售服务有限公司"
          }
        ],
        city_list: []
      }
    },
    methods: {
      handleSex: function () {
        weui.picker([{
          label: '男',
          value: '男'
        }, {
          label: '女',
          value: '女'
        }], {
          defaultValue: ['男'],
          onChange: function (result) {

          },
          onConfirm: function (result) {
            this.sex = result[0].value;
          }.bind(this),
          id: 'multiPickerBtn'
        });
      },
      handleProvince: function () {
        weui.picker([
          {
            "label": "内蒙古自治区",
            "value": "内蒙古自治区"
          },
          {
            "label": "河北省",
            "value": "河北省"
          },
          {
            "label": "北京市",
            "value": "北京市"
          },
          {
            "label": "辽宁省",
            "value": "辽宁省"
          },
          {
            "label": "吉林省",
            "value": "吉林省"
          },
          {
            "label": "天津市",
            "value": "天津市"
          },
          {
            "label": "黑龙江省",
            "value": "黑龙江省"
          },
          {
            "label": "山东省",
            "value": "山东省"
          },
          {
            "label": "江苏省",
            "value": "江苏省"
          },
          {
            "label": "浙江省",
            "value": "浙江省"
          },
          {
            "label": "福建省",
            "value": "福建省"
          },
          {
            "label": "上海市",
            "value": "上海市"
          },
          {
            "label": "四川省",
            "value": "四川省"
          },
          {
            "label": "云南省",
            "value": "云南省"
          },
          {
            "label": "广东省",
            "value": "广东省"
          },
          {
            "label": "广西省",
            "value": "广西省"
          },
          {
            "label": "贵州省",
            "value": "贵州省"
          },
          {
            "label": "海南省",
            "value": "海南省"
          },
          {
            "label": "西藏自治区",
            "value": "西藏自治区"
          },
          {
            "label": "甘肃省",
            "value": "甘肃省"
          },
          {
            "label": "新疆维吾尔自治区",
            "value": "新疆维吾尔自治区"
          },
          {
            "label": "宁夏回族自治区",
            "value": "宁夏回族自治区"
          },
          {
            "label": "山西省",
            "value": "山西省"
          },
          {
            "label": "陕西省",
            "value": "陕西省"
          },
          {
            "label": "安徽省",
            "value": "安徽省"
          },
          {
            "label": "湖南省",
            "value": "湖南省"
          },
          {
            "label": "江西省",
            "value": "江西省"
          },
          {
            "label": "河南省",
            "value": "河南省"
          },
          {
            "label": "湖北省",
            "value": "湖北省"
          }
        ], {
          value: [this.province],
          onChange: function (result) {

          },
          onConfirm: function (result) {
            this.province = result[0].value;

            let city_list = [];
            for (let i = 0; i < this.province_list.length; i++) {
              let item = this.province_list[i];

              if (item.province == this.province) {
                let newItem = {
                  label: item.city,
                  value: item.city
                };

                let is_city = true;
                for (let j = 0; j < city_list.length; j++) {
                    if (item.city == city_list[j].value) {
                      is_city = false;

                      break;
                    }
                }

                if (is_city) {
                  city_list.push(newItem);
                }
              }
            }
            this.city_list = city_list;
            this.city = city_list[0].value;

            let distributor_list = [];
            for (let i = 0; i < this.province_list.length; i++) {
              let item = this.province_list[i];

              if (item.city == this.city) {
                distributor_list.push({
                  label: item.distributor,
                  value: item.distributor
                });
              }
            }
            this.distributor_list = distributor_list;
            this.distributor = distributor_list[0].value;
          }.bind(this),
          id: 'multiPickerBtn'
        });
      },
      handleCity: function () {
        weui.picker(this.city_list, {
          defaultValue: [this.city],
          onChange: function (result) {

          },
          onConfirm: function (result) {
            this.city = result[0].value;

            let distributor_list = [];
            for (let i = 0; i < this.province_list.length; i++) {
              let item = this.province_list[i];

              if (item.city == this.city) {
                distributor_list.push({
                  label: item.distributor,
                  value: item.distributor
                });
              }
            }
            this.distributor_list = distributor_list;
            this.distributor = distributor_list[0].value;
          }.bind(this),
          id: 'multiPickerBtn'
        });
      },
      handleDistributor: function () {
        weui.picker(this.distributor_list, {
          defaultValue: [this.distributor],
          onChange: function (result) {

          },
          onConfirm: function (result) {
            this.distributor = result[0].value;
          }.bind(this),
          id: 'multiPickerBtn'
        });
      },
      handleSubmit: function () {
        if (this.name == "") {
          weui.topTips("请输入您的姓名");

          return;
        }

        if (this.sex == "") {
          weui.topTips("请选择您的性别");

          return;
        }

        if (this.phone == "") {
          weui.topTips("请输入您的手机号码");

          return;
        }

        if (!checkPhone(this.phone)) {
          weui.topTips("手机号码有误，请重填");
          return;
        }

        if (this.province == "") {
          weui.topTips("请选择省份");

          return;
        }

        if (this.city == "") {
          weui.topTips("请选择城市");

          return;
        }

        if (this.distributor == "") {
          weui.topTips("请选择经销商");

          return;
        }

        if (!this.is_check) {
          weui.topTips("请接受福特途睿欧隐私条款");

          return;
        }

        let loading = weui.loading('loading', {});

        this.$http({
          method: 'POST',
          url: 'http://api.jiyiguan.nowui.com/fute/save',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '',
            'platform': 'WEB',
            'version': '1.0.0'
          },
          body: JSON.stringify({
            fute_name: this.name,
            fute_sex: this.sex,
            fute_phone: this.phone,
            fute_province: this.province,
            fute_city: this.city,
            fute_distributor: this.distributor
          })
        }).then(response => {
          loading.hide();

          let that = this;

          if (response.body.code == 200) {
            weui.toast('提交成功', {
              duration: 1500,
              callback: function () {
                that.$router.push('/');
              }
            });
          } else {
            weui.alert("网络发生错误");
          }
        }, response => {
          loading.hide();

          weui.alert("网络发生错误");
        });
      },
      handleAgree: function () {
        this.is_check = !this.is_check;
      },
      handleBack: function () {
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  .vote {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-image: url('/static/image/vote_bg.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -354px;
    margin-top: -424px;
    width: 710px;
    height: 848px;
    background-image: url('/static/image/vote_form.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  #name {
    position: absolute;
    top: 178px;
    left: 42px;
    width: 290px;
    height: 66px;
    border: 0px;
    background-color: transparent;
    color: #ffffff;
    font-size: 30px;
  }

  #sex {
    position: absolute;
    top: 178px;
    left: 380px;
    width: 290px;
    height: 66px;
    border: 0px;
    background-color: transparent;
    color: #ffffff;
    font-size: 30px;
  }

  #phone {
    position: absolute;
    top: 270px;
    left: 42px;
    width: 630px;
    height: 66px;
    border: 0px;
    background-color: transparent;
    color: #ffffff;
    font-size: 30px;
  }

  #province {
    position: absolute;
    top: 360px;
    left: 42px;
    width: 316px;
    height: 66px;
    border: 0px;
    background-color: transparent;
    color: #ffffff;
    font-size: 30px;
  }

  #city {
    position: absolute;
    top: 360px;
    left: 380px;
    width: 630px;
    height: 66px;
    border: 0px;
    background-color: transparent;
    color: #ffffff;
    font-size: 30px;
  }

  #distributor {
    position: absolute;
    top: 450px;
    left: 42px;
    width: 630px;
    height: 66px;
    border: 0px;
    background-color: transparent;
    color: #ffffff;
    font-size: 30px;
  }

  .submit {
    position: absolute;
    top: 520px;
    left: 0px;
    width: 1320px;
    height: 120px;
  }

  .agree {
    position: absolute;
    top: 690px;
    left: 0px;
    width: 100%;
    height: 120px;
  }

  .check {
    position: absolute;
    top: 695px;
    left: 35px;
    width: 60px;
    height: 60px;
  }

  .back {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 82px;
  }

  ::-webkit-input-placeholder { /* WebKit browsers */
    color: #ffffff;
  }

  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #ffffff;
    opacity: 1;
  }

  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #ffffff;
    opacity: 1;
  }

  :-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #ffffff;
  }
</style>
