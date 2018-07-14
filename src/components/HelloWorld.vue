<template>
  <div>
    <md-steps
      :steps="steps"
      :current="currentStep">
    </md-steps>
    <p>woshii都比不上按时对方按时</p>
    <md-button @click="handleClick">点我</md-button>
    <md-button @click="actDialog.open = true">点我</md-button>
    <md-button @click="succeedConfirm">成功弹窗</md-button>
    
    <md-dialog
      title="窗口标题"
      :closable="false"
      v-model="actDialog.open"
      :btns="actDialog.btns"
    >
      据说每个人需要一面镜子，可以常常自照，知道自己是个什么东西。不过，能自知的人根本不用照镜子；不自知的东西，照了镜子也没有用。
    </md-dialog>  
    <md-field>
      <md-input-item
        title="银行卡"
        type="bankCard"
        clearable
        placeholder="bankCard xxxx xxxx xxxx xxxx"
      ></md-input-item>
      <md-input-item
        title="手机号"
        type="phone"
        v-model="phone"
        clearable
        placeholder="phone xxx xxxx xxxx"
      ></md-input-item> 
      <md-field-item
        title="起保年份"
        arrow="arrow-right"
        align="right"
        :value="pickerValue0"
        @click.native="isPickerShow0 = true">
      </md-field-item>  
    </md-field>
    <md-agree
      v-model="agree"
      size="lg"
      @change="onChange(agree, $event)"
    >
      长期有效
    </md-agree>
    <md-date-picker
      ref="picker0"
      title="起始日期"
      v-model="isPickerShow0"
      :default-date="currentDate"
      @confirm="onPickerConfirm(0)"
    ></md-date-picker>

  </div>
</template>

<script>
import { Toast, Dialog } from 'mand-mobile'
export default {
  name: 'HelloWorld',
  data () {
    return {
      agree: true,
      isPickerShow0: false,
      isPickerShow1: false,
      phone: '',
      pickerValue0: '',
      currentDate: new Date(),
      pickerData0: new Date(),
      pickerValue1: '',
      steps: [
        {
          name: '登录',
        },
        {
          name: '开通',
        },
        {
          name: '验证',
        },
        {
          name: '成功',
        },
      ],
      currentStep: 4,
      actDialog: {
        open: false,
        btns: [
          {
            text: '取消',
            handler: this.onActCancel,
          },
          {
            text: '确认操作',
            handler: this.onActConfirm,
          },
        ],
      },
    }
  },
  methods: {
    handleClick() {
      Toast.info('不错哟~')
    },
    // onActCancel() {
    //   Toast({
    //     content: '你点击了取消',
    //   })
    //   this.actDialog.open = false
    // },
    onActConfirm() {
      Toast({
        content: '你点击了确认',
      })
      this.actDialog.open = false
    },
    succeedConfirm() {
      Dialog.succeed({
        title: '成功',
        content: '恭喜您成功完成操作',
        confirmText: '确定',
        onConfirm: () => console.log('[Dialog.succeed] confirm clicked'),
      })
    },
    onPickerConfirm() {
      this.pickerValue0 = this.$refs.picker0.getFormatDate('yyyy/MM/dd')
    },
    onChange(checked) {
      Toast.info(`agree name = ${checked} is ${checked ? 'checked' : 'unchecked'}`)
      console.log(`agree name = ${name} is ${checked ? 'checked' : 'unchecked'}`)
    },
    // onPickerConfirm(index) {
    //   const values = this.$refs[`picker${index}`].getColumnValues()

    //   let res = ''
    //   values.forEach(value => {
    //     value && (res += `${value.text || value.label} `)
    //   })
    //   this[`pickerValue${index}`] = res
    // },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* p{
  font-size: .32rem
} */
.md-picker-column .md-picker-column-item ul.column-list{
  top: -.3rem !important;
}
.md-button{
  margin-bottom: .3rem
}
</style>
