<template>

</template>

<script>
import {
  XHeader, Flexbox, FlexboxItem, XButton, Card, Grid, GridItem, Group, GroupTitle
} from "vux";
import { userInfoQuery } from "../../api/memberData";
export default {
  data () {
    return {
      status2: {
        pulldownStatus: "default"
      },
      dialogShow: true, //退还说明显示
      name: "",//姓名
      grade: "",//等级
      gradeFloor: '',//等级
      inviteCode: "",//推荐码
      imgUrl: "",//头像
    };
  },
  components: {
    XHeader, Flexbox, FlexboxItem, XButton, Card, Grid, GridItem, Group, GroupTitle
  },
  created () {
    this.getInformation();
  },
  methods: {
    //返回
    goBack () {
      this.$router.go(-1)
    },
    //获取个人信息
    getInformation () {
      userInfoQuery(localStorage.userId).then(res => {
        if (res.data.code == '200') {
          let data = res.data.data;
          if (data) {
            this.name = data.fullname;
            this.inviteCode = data.inviteCode;
            this.imgUrl = data.userHeadUrl;
            this.grade = data.grade;
            this.gradeFloor = data.gradeFloorId;
          }
        } else {
          this.toastMsg(res.data.msg)
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>

