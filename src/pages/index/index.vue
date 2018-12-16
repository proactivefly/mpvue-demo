<template>
  <div class="app-container">
    <img src="../../../static/img/newsale/pic_banner@2x.png" alt="" class='header'>
    <div class="main_wapper">
      <div class="main">
        <!-- 权益列表 -->
        <div class='equity'>
          <div class="item" v-for='item in list' :key='item'>
            <img :src="item.icon" alt="item.desc" class='icon'>
            <p :class='[item.flag,"color_text"]'>{{item.desc}}</p>
            <p class='text text1'>{{item.text1}}</p>
            <p class='text text2'>{{item.text2}}</p>
          </div>
        </div>
        <!-- split 为你推荐 -->
        <div class='split'>
          <div class="line"></div>
          <div class="text">为你推荐</div>
          <div class="line"></div>
        </div>
        <!-- 汽车 -->
        <div class="car_wrapper">
          <img src="../../../static/img/newsale/pic_ec180@2x.png" alt="" class='car_img'>
          <div class="car_desc">
            <div class='row1'>
              <span class='car_type'>EC180/灵动版</span>
              <span class='car_money'>首付<span class='money'> 0 </span>元起</span>
            </div>
            <div class='row2'>
              <span class='dur_desc'>北汽新能源/5座/续航180公里</span>
              <span class='money_pay'>月供2300元</span>
            </div>
          </div>
        </div>
        <!-- 用户信息 -->
        <div class="form_contaier index_input">
          <div class="form">
            <p class='leve_info'>留下您的信息</p>
            <p class='service'>专业销售顾问将为您提供一对一专业咨询服务</p>
            <div class="input_container">
              <input type="text" class='input' placeholder="您的姓名" v-model='uname' ref='uname'>
              <input type="number" class='input' placeholder="您的电话" oninput="if(value.length>11){value=value.slice(0,11)}" min='0' v-model='unumber' ref='unumber'>
              <div class="index_select">
                <cube-select 
                  v-model="cityCode" 
                  :options="cityList"
                  :placeholder="defaultplaceholder"
                ></cube-select>
              </div>
            </div>
            <div class='address'>
              <div class='label'>门店地址：</div>
              <div class='text'>三亚市吉阳区迎宾路龙坡村汽车城 联合电动汽车超巿(三亚店)</div>
            </div>
          </div>
          <div class="btn" @click='submit'>提交</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import sf_icon from '../../../static/img/newsale/icon_sf@2x.png'
  import rj_icon from '../../../static/img/newsale/icon_rj@2x.png'
  import js_icon from '../../../static/img/newsale/icon_js@2x.png'
  import yc_icon from '../../../static/img/newsale/icon_wy@2x.png'
  import wb_icon from '../../../static/img/newsale/icon_wb@2x.png'
  import fa_icon from '../../../static/img/newsale/icon_fa@2x.png'
  export default{
    name:'newsale',
    data(){
      return {
        list:[
          {icon:sf_icon,desc:'0首付',text1:'首付0元',text2:'买车无负担',flag:'sf_icon'},
          {icon:rj_icon,desc:'日均75元',text1:'超低月供',text2:'还款无压力',flag:'rj_icon'},
          {icon:js_icon,desc:'极速提车',text1:'免上牌手续',text2:'5分钟提新车',flag:'js_icon'},
          {icon:yc_icon,desc:'用车无忧',text1:'本地牌照',text2:'用车超省心',flag:'yc_icon'},
          {icon:wb_icon,desc:'维保省心',text1:'3年免费保险',text2:'3年免费保养',flag:'wb_icon'},
          {icon:fa_icon,desc:'方案灵活',text1:'租售随心',text2:'可退可过户',flag:'fa_icon'}
        ],
        telReg :/^1\d{10}$/,
        cityList: [{value:0,text:'三亚'}],
        cityCode:0,
        defaultplaceholder:'请选择城市',
        uname:'',
        unumber:'',
      }
    },
    methods:{
      submit(){
        if(!this.uname){
          wx.showToast({
            title: '请输入您的',
            icon: 'error',
            duration: 2000
          })
          this.$refs.uname.focus()
          return
        }
        if(!this.unumber){
          wx.showToast({
            title: '请输入手机号',
            icon: 'error',
            duration: 2000
          })
          this.$refs.unumber.focus()
          return
        }
        if(!this.telReg.test(this.unumber)){
          wx.showToast({
            title: '手机号格式有误',
            icon: 'error',
            duration: 2000
          })
          this.$refs.unumber.focus()
          return
        }
        this.$router.push('/nsd')
      }
    }
  }
</script>
<style ref='stylesheet/stylus' lang='stylus'>
  .app-container
    letter-spacing: 2px
    .header
      width:750px
      height:300px
    .main_wapper
      padding:0px 20px
      .main
        margin-bottom:50px
        .equity
          display:flex
          flex-direction: row
          flex-wrap:wrap
          .item
            flex-basis: 33.33%
            text-align: center
            margin-top:38px
            font-family: 'PingFangSC'
            .icon
              width:80px
              height:80px
            .color_text
              font-size:28px;/*px*/
              margin-top:20px
              &.sf_icon
                color:#E8C893
              &.rj_icon
                color:#FFBE50
              &.js_icon
                color:#769EDE
              &.yc_icon
                color:#C87A97
              &.wb_icon
                color:#3CC8A8
              &.fa_icon
                color:#7281BA
            .text   
              color:#B4B4B4
              font-size:22px;/*px*/
              &.text1
                margin-top:20px
              &.text2
                margin-top:8px  
        .split
          display:flex
          flex-direction: row
          align-items: center
          margin-top:50px
          .line
            border-top:2px solid #F0F0F0
            flex:1
          .text
            flex-basis: 220px
            font-size:36px;/*px*/
            color:#646464
            text-align: center
        .car_wrapper
          margin-top:46px 
          .car_img
            width:100%
            height:294px
          .car_desc
            background:#f9fbfc
            border-bottom-left-radius:10px
            border-bottom-right-radius:10px
            padding:54px 30px 27px 30px
            .row1
              &:after
                content:''
                display:block
                clear:both
              .car_type
                font-size:32px;/*px*/
                font-family:PingFangSC-Medium
                font-weight:500
                color:rgba(82,82,82,1)
                float:left
              .car_money
                font-size:28px;/*px*/
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(247,133,58,1);
                float:right
                .money
                  font-size:30px;/*px*/
                  font-weight:bold
            .row2
              &:after
                content:''
                display:block
                clear:both
              font-size:24px;/*px*/
              font-family:PingFangSC-Regular
              font-weight:400
              color:rgba(100,100,100,1)
              margin-top:25px
              .dur_desc
                float:left
              .money_pay
                float:right
        .form_contaier
          margin-top:20px
          .form
            padding:40px 30px 30px 30px
            min-height:200px
            border:2px solid #FFDEA7
            border-top-left-radius:10px
            border-top-right-radius:10px
            border-bottom:none
            background:#FFFDFA
            .leve_info
              font-size:32px;/*px*/
              font-family:PingFangSC-Medium;
              font-weight:500;
              color:rgba(100,100,100,1);
            .service
              font-size:24px;/*px*/
              font-family:PingFangSC-Regular;
              font-weight:400;
              color:rgba(100,100,100,1);
              margin-top:18px
            .input_container
              margin-top:10px
              .input
                display:block
                color:#F5A623
                outline:none
                font-size:28px;/*px*/
                letter-spacing:2px
                width:100%
                height:102px
                border-bottom:1px solid #FFDEA7;/*no*/
                background:transparent
            .address
              display:flex
              flex-direction: row
              font-size:28px;/*px*/
              font-family:PingFangSC-Regular;
              font-weight:400;
              color:rgba(245,166,35,1);
              line-height:40px
              margin-top:30px
              .label
                white-space:nowrap
          .btn
            width:100%
            height:104px
            font-size:32px;/*px*/
            text-align: center
            line-height:104px
            color:#fff
            border-bottom-left-radius:10px
            border-bottom-right-radius:10px
            background:linear-gradient(296deg,rgba(253,120,80,1) 0%,rgba(247,82,92,1) 100%);
            cursor:pointer
</style>
