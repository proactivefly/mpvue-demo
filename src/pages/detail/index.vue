<template>
  <div class="app-container">
    <div class="top">
      <img src="../../../static/img/newsale/pic_ec180h@2x.png" alt="ec180" class='car_container'>
      <div class='intro'>
        <span class='car_name'>北汽新能源EC180/灵动版</span>
        <span class='espc'>三亚专享</span>
      </div>
    </div>
    <div class="split"></div>
    <div class="level">
      <div class="thr">
        <div class="item"><span class='icon'></span><span>琼B牌照</span></div>
        <div class="item"><span class='icon'></span><span>送三年保险</span></div>
        <div class="item"><span class='icon'></span><span>含三年保养维修</span></div>
      </div>
      <!-- level1 -->
      <div class="level1 level_item">
        <div class="left">
          <h3>方案一</h3>
          <p>0首付开新车</p>
        </div>
        <div class="right">
          <div class="item"><h3>0</h3><p>首付</p></div>
          <div class="item"><h3>2199</h3><p>月供</p></div>
          <div class="item"><h3>36</h3><p>期数</p></div>
          <div class="item"><h3>5000</h3><p>保证金</p></div>
        </div>
      </div>
      <div class="level1 level_item">
        <div class="left">
          <h3>方案二</h3>
          <p>低月供无压力</p>
        </div>
        <div class="right">
          <div class="item"><h3>10800</h3><p>首付</p></div>
          <div class="item"><h3>1899</h3><p>月供</p></div>
          <div class="item"><h3>36</h3><p>期数</p></div>
          <div class="item"><h3>0</h3><p>保证金</p></div>
        </div>
      </div>
      <div class="level1 level_item">
        <div class="left">
          <h3>方案三</h3>
          <p>一次付更便宜</p>
        </div>
        <div class="right">
          <div class="item"><h3 class='one_time'>65800</h3><p>一次性支付</p></div>
        </div>
      </div>
    </div>
    <div class="split"></div>
    <!-- 车辆配置 -->
    <div class="car_config">
      <h2 class='title'>车辆配置</h2>
      <div class="item" v-for='item in contentList' :key='item'>
        <span class='name'>{{item.title}}</span>
        <span class='content'>{{item.text}}</span>
      </div>
    </div>
    <div class="split"></div>
    <div class="need_know">
      <h2 class="title">购车须知</h2>
      <div class="item">
        <div class="left">车源供应</div>
        <div class="right">所有车辆为正规带牌新车，享原厂质保</div>
      </div>
      <div class="item">
        <div class="left">车辆使用</div>
        <div class="right">合约期间拥有车辆和车牌使用权，过户后拥有车辆所有权</div>
      </div>
      <div class="item">
        <div class="left">指标办理</div>
        <div class="right">可协助办理两年社保及申领指标，保障顺利过户</div>
      </div>
    </div>
    <div class="submit_btn" @click='showDialog'>申请购车</div>
    <div class="modal" v-show='modalShow'  catchtouchmove="ture">
      <div class="mask"></div>
      <div class="modal_container">
        <!-- 用户信息 -->
        <div class="form_contaier">
          <div class="form">
            <p class='leve_info'>留下您的信息</p>
            <p class='service'>专业销售顾问将为您提供一对一专业咨询服务</p>
            <div class="input_container">
              <input type="text" class='input' placeholder="您的姓名" v-model='uname'>
              <input type="number" class='input' placeholder="您的电话" v-model='unumber' maxlength='11'>
               <picker 
                  @change="cityChange"
                  :value="cityCode" 
                  :range="cityList" 
                  mode="selector"
                  range-key="name"
                >
                <view class="picker">
                  <input type="text" class='input' placeholder="请选择地址" v-model='cityName' disabled='false'>
                </view>
              </picker>
            </div>
            <div class='address'>
              <div class='label'>门店地址：</div>
              <div class='text'>三亚市吉阳区迎宾路龙坡村汽车城 联合电动汽车超巿(三亚店)</div>
            </div>
          </div>
          <div class="btn_group">
            <div class="cancel btn" @click='cancel'>取消</div>
            <div class="sure btn" @click='submit'>确定</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:"newsaledetail",
    data(){
      return {
        contentList:[
          {title:'车身结构',text:'4门5座小型SUV'},
          {title:'长*宽*高（mm）',text:'3675*1630*1518'},
          {title:'轴距（mm）',text:'2360'},
          {title:'最小离地间隙（mm）',text:'≥120'},
          {title:'NEDC续航里程（km）',text:'156'},
          {title:'最高车速（km/h）',text:'≥100'},
          {title:'整备质量（kg）',text:'1050'},
          {title:'电动车单速变速箱',text:'●'},
          {title:'电子换挡手柄',text:'旋钮式'},
          {title:'经济驾驶模式',text:'●'},
          {title:'运动驾驶模式',text:'●'},
          {title:'最大功率（电机）',text:'≥30'},
          {title:'最大扭矩（电机）',text:'≥140'},
          {title:'电池类型',text:'三元锂'},
          {title:'电池电量（kwh）',text:'20.3'},
          {title:'标准充电线',text:'●'},
          {title:'充电宝',text:'●'},
        ],
        defaultplaceholder:'请选择城市',
        cityList: [{id:0,name:'三亚'}],
        cityCode:0,
        cityName:'三亚',
        defaultplaceholder:'请选择城市',
        uname:'',
        unumber:'',
        modalShow:false,
      }
    },
    methods:{
      showDialog(){
        this.modalShow=true
      },
      submit(){
        if(!this.uname){
          wx.showToast({
            title: '请输入您的姓名',
            icon: 'none',
            duration: 2000
          })
          return
        }
        if(!this.unumber){
          wx.showToast({
            title: '请输入手机号',
            icon: 'none',
            duration: 2000
          })
          return
        }
        if(!this.telReg.test(this.unumber)){
           wx.showToast({
            title: '手机号格式有误',
            icon: 'none',
            duration: 2000
          })
          return
        }
      },
      cityChange(e) {
        var _idx=e.mp.detail.value
        this.cityCode=_idx
        this.cityName=this.cityList[_idx].name
      },
      cancel(){
        this.modalShow=false
      },
    },
    created(){
    },
  }
</script>
<style ref='stylesheet/stylus' lang='stylus' scoped>
  .app-container
    background:#f1f2f5
    letter-spacing: 2px
    position:relative
    .top
      .car_container
        width:750px
        height:260px
      .intro
        padding:47px 0px 42px 40px
        background:#fff
        .car_name
          font-size:32px;/*px*/
          font-family:PingFangSC-Medium
          font-weight:600
          color:rgba(100,100,100,1)
        .espc
          background-image:linear-gradient(to right,#f1a060 0%,#ee8b75 100%)
          color:#fff
          font-size:24px;/*px*/
          padding:5px 10px
          border-radius:6px
          margin-left:10px
          letter-spacing: 0px
    .split
      height:22px
      background:#f1f2f5
    .level
      padding:30px 20px 20px 20px
      background:#fff
      .thr
        display:flex
        flex-direction: row
        justify-content:space-around
        align-items: center
        padding:31px 0px 43px 0px
        .item
          display:flex
          flex-direction: row
          align-items: center
          color:#646464
          font-size:24px;/*px*/
          .icon
            display:inline-block
            width:24px
            height:24px
            background:url('../../../static/img/newsale/icon_qy@2x.png') no-repeat
            background-size:100% 100%
            margin-right:10px
      .level_item
        display:flex    
        flex-direction: row
        align-items: center
        background:#f9fbfc
        text-align: center
        padding:32px 0px 32px 0px
        color:#8491A8
        border-radius:10px
        font-size:24px;/*px*/
        margin-bottom:20px
        .left
          flex-basis: 186px
          border-right:2px solid #E3E9F0
          h3
            font-size:28px;/*px*/
            font-family:PingFangSC-Medium;
            color:rgba(30,30,30,1);
            font-weight:bold
          p
            margin-top:21px
            color:#8491A8
            font-size:24px;/*px*/
        .right
          flex:1
          display:flex
          flex-direction: row
          justify-content: space-around
          .item
            h3
              font-size:28px;/*px*/
              color:#FF683B
              margin-bottom:16px
              font-weight:bold
              &.one_time
                font-size:44px;/*px*/
                font-weight:bold
    .car_config
      background:#fff
      padding:27px 30px 0px 30px
      .title
        font-size:32px;/*px*/
        font-family:PingFangSC-Medium;
        font-weight:600
        color:rgba(100,100,100,1);
        margin-bottom:36px
      .item
        height:90px
        line-height:90px
        font-size:26px;/*px*/
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(100,100,100,1);
        border-top:1.5px solid #F1F2F5;/*no*/
        &:after
          content:''
          display:block
          clear:both
        .name
          float:left
        .content
          float:right   
    .need_know
      padding:0px 30px 90px 30px
      background:#fff
      .title  
        height:124px
        line-height:124px
        font-size:32px;
        font-family:PingFangSC-Medium;
        font-weight:600;
        color:rgba(100,100,100,1);
      .item 
        display:flex
        flex-direction: row
        justify-content: flex-start
        line-height:36px
        margin-bottom:50px
        .left
          flex-basis:143px
          font-size:26px;/*px*/
          color:#646464
        .right
          flex:1
          font-size:26px;/*px*/
          color:#82858D
    .submit_btn
      position:fixed
      bottom:0px
      cursor: pointer
      width:750px
      height:100px
      line-height:100px
      color:#fff
      font-size:32px;/*px*/
      letter-spacing: 2px
      transform: translateZ(0);
      text-align: center
      font-weight:500
      font-family:PingFangSC-Medium
      background:linear-gradient(296deg,rgba(253,120,80,1) 0%,rgba(247,82,92,1) 100%);
    .modal
      .mask
        position:absolute
        background:rgba(84,94,113,.2)
        top:0px
        left:0px
        right:0px
        bottom:0px
      .modal_container
        position:fixed
        overflow:hidden
        z-index:100
        background:#fff
        width:670px
        top:10%
        left:50%
        transform:translate(-50%,0)
        min-height:200px
        border-radius:10px
        box-shadow: 0px 0px 25px 7px rgba(0,0,0,0.1);/*no*/
        .form_contaier
          margin-top:20px
          .form
            padding:20px 30px 30px 30px
            min-height:200px
            border-bottom:none
            .leve_info
              font-size:32px;/*px*/
              font-family:PingFangSC-Medium;
              font-weight:500;
              color:#1E1E1E;
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
                color:#646464
                outline:none
                font-size:28px;/*px*/
                letter-spacing:2px
                width:100%
                height:102px
                border-bottom:1px solid #F0F0F0;/*no*/
                background:transparent
            .address
              display:flex
              flex-direction: row
              font-size:28px;/*px*/
              font-family:PingFangSC-Regular;
              font-weight:400;
              color:#646464
              line-height:40px
              margin-top:30px
              .label
                white-space:nowrap
          .btn_group
            display:flex
            flex-direction: row
            .btn
              height:104px
              line-height:104px
              color:#fff
              font-size:32px;/*px*/
              flex:1
              text-align: center
              &.cancel
                background:#F1F2F5
                color:#646464
              &.sure
                color:#fff
                background:linear-gradient(296deg,rgba(253,120,80,1) 0%,rgba(247,82,92,1) 100%);
</style>
<style>
  .input-placeholder{
    color:#646464;
    font-size:28px;/*px*/
    letter-spacing:2px
  }
</style>