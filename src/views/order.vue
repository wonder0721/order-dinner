<template>
  <div id="order">
    <div class="container-box">
      <div class="menu">
        <h2>今日菜单</h2>
        <p>{{menu}}</p>
      </div>

      <div class="food">
        <h3>请选择套餐类别</h3>
        <el-radio-group v-model="radio1" @change="foodChange(radio1)">
          <el-radio label="A" border>A套餐（饭 + 水果）</el-radio>
          <el-radio label="B" border>B套餐（仅水果）</el-radio>
        </el-radio-group>
      </div>

      <div class="group">
        <h3>请选择组别</h3>
        <el-radio-group v-model="radio2">
          <el-radio-button label="产品"></el-radio-button>
          <el-radio-button label="前端"></el-radio-button>
          <el-radio-button label="测试"></el-radio-button>
          <el-radio-button label="运维"></el-radio-button>
        </el-radio-group>
      </div>

      <div class="fruit">
        <h3>可选水果类</h3>
        <div class="fruit-box">
          <el-row :gutter="20">
            <el-col :xs="12" :sm="6" :md="4" :lg="4" v-for="(item,i) in fruitList" :key="item.id">
              <el-card :body-style="{ padding: '0px' }" :class="{active: item.active}">
                <img :src="item.src" class="card-image" />
                <div style="padding: 5px; backgroundColor: lightblue">
                  <div class="fruit-select">
                    <span>{{item.name}}</span>
                    <el-switch
                      v-model="item.active"
                      active-color="#409EFF"
                      inactive-color="#DCDFE6"
                      @change="switchChange(i)"
                      :disabled="isDisable(item.active)"
                    ></el-switch>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>

      <div class="snack">
        <h3>可选零食类</h3>
        <div class="snack-select">
          <div
            class="snacks"
            v-for="(item) in snackList"
            :key="item.id"
            :class="{active: item.active}"
            @click="item.active = !item.active"
          >{{item.name}}</div>
        </div>
      </div>

      <div class="submit">
        <el-button type="primary" @click="save()">提交</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#order {
  text-align: center;
  color: #2c3e50;
  background-color: #f8f8f8;
  .container-box {
    width: 100%;
    max-width: 1200px;
    // min-width: 500px;
    background-color: #fff;
    // padding-bottom: 30px;
    margin: 0 auto;
    overflow: hidden;
    .menu {
      width: 100%;
      background-color: #409eff;
      height: 100px;
      color: #fff;
      overflow: hidden;
      h2 {
        font-size: 30px;
        color: #fff;
        margin: 10px auto;
      }
      p {
        font-size: 18px;
      }
    }
    .food {
      margin-top: 30px;
      h3 {
        font-size: 24px;
        margin-bottom: 20px;
        color: #409eff;
      }
    }
    .group {
      margin-top: 30px;
      h3 {
        font-size: 24px;
        margin-bottom: 20px;
        color: #409eff;
      }
    }
    .fruit {
      padding: 0 20px;
      margin-top: 30px;
      h3 {
        font-size: 24px;
        margin-bottom: 20px;
        color: #409eff;
      }
      .fruit-select {
        display: flex;
        justify-content: space-between;
      }
      .card-image {
        width: 100%;
        height: 100%;
        display: block;
      }
      // .el-card {
      //   // min-width: 140px;
      // }
      .active {
        box-shadow: 0 2px 12px 0 rgba(255, 0, 0, 0.7);
      }
      /deep/ .el-col {
        padding-bottom: 10px;
        padding-top: 10px;
      }
    }
    .snack {
      padding: 0 20px;
      margin-top: 30px;
      h3 {
        font-size: 24px;
        margin-bottom: 20px;
        color: #409eff;
      }
      .snack-select {
        .el-checkbox {
          margin-bottom: 20px;
        }
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        .snacks {
          min-width: 50px;
          padding: 0 10px;
          margin-bottom: 20px;
          height: 30px;
          font-size: 16px;
          line-height: 30px;
          color: #409eff;
          text-align: center;
          border: 1px solid #409eff;
          border-radius: 15px;
          background-color: #fff;
          cursor: pointer;
          // &:hover {
          //   background-color: lightblue;
          // }
        }
        .active {
          background-color: #409eff;
          color: #fff;
        }
      }
    }
    .submit {
      width: 100%;
      margin: 50px 0;
      box-sizing: border-box;
      /deep/ .el-button--primary {
        width: 100%;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      radio1: "A",
      radio2: "产品",
      menu: "",
      fruitNumber: 1,
      canOrderFruit: true,
      selectedFruit: "无",
      selectedSnack: "无",
      menuList: [
        "无",
        "鸡腿，啤酒鸭，酱爆猪干，炒生菜",
        "红烧牛肉，鸭翅根，木须肉酸辣白菜",
        "红烧虾，土豆烧鸡，肉沫茄子，平菇毛白菜",
        "红烧鲫鱼，咸鸭烧毛豆，杭辣炒蛋，麻辣豆腐",
        "雪菜黑鱼，土豆烧鸡，蒜台香肠，大蒜香干",
        "无"
      ],
      fruitList: [
        {
          name: "青色脆皮金桔",
          id: "1",
          src: require("../assets/fruit/金桔.jpg"),
          active: false
        },
        {
          name: "红脆李",
          id: "2",
          src: require("../assets/fruit/红脆李.jpg"),
          active: false
        },
        {
          name: "冬桃",
          id: "3",
          src: require("../assets/fruit/冬桃.jpg"),
          active: false
        },
        {
          name: "水果黄瓜",
          id: "4",
          src: require("../assets/fruit/水果黄瓜.jpg"),
          active: false
        },
        {
          name: "青葡萄",
          id: "5",
          src: require("../assets/fruit/青葡萄.jpg"),
          active: false
        },
        {
          name: "黑美人",
          id: "6",
          src: require("../assets/fruit/黑美人.jpg"),
          active: false
        },
        {
          name: "阳光玫瑰葡萄",
          id: "7",
          src: require("../assets/fruit/阳光玫瑰葡萄.jpg"),
          active: false
        },
        {
          name: "猕猴桃",
          id: "8",
          src: require("../assets/fruit/猕猴桃.jpg"),
          active: false
        },
        {
          name: "橙子",
          id: "9",
          src: require("../assets/fruit/橙子.jpg"),
          active: false
        },
        {
          name: "龙眼",
          id: "10",
          src: require("../assets/fruit/龙眼.jpg"),
          active: false
        },
        {
          name: "枣子",
          id: "11",
          src: require("../assets/fruit/枣子.jpg"),
          active: false
        },
        {
          name: "火龙果",
          id: "12",
          src: require("../assets/fruit/火龙果.jpg"),
          active: false
        },
        {
          name: "凤梨",
          id: "13",
          src: require("../assets/fruit/凤梨.jpg"),
          active: false
        },
        {
          name: "红柚",
          id: "14",
          src: require("../assets/fruit/红柚.jpg"),
          active: false
        },
        {
          name: "白柚",
          id: "15",
          src: require("../assets/fruit/白柚.jpg"),
          active: false
        },
        {
          name: "哈密瓜",
          id: "16",
          src: require("../assets/fruit/哈密瓜.jpg"),
          active: false
        },
        {
          name: "芒果",
          id: "17",
          src: require("../assets/fruit/芒果.jpg"),
          active: false
        },
        {
          name: "西瓜",
          id: "18",
          src: require("../assets/fruit/西瓜.jpg"),
          active: false
        },
        {
          name: "苹果",
          id: "19",
          src: require("../assets/fruit/苹果.jpg"),
          active: false
        },
        {
          name: "千禧",
          id: "20",
          src: require("../assets/fruit/千禧.jpg"),
          active: false
        },
        {
          name: "青提",
          id: "21",
          src: require("../assets/fruit/青提.jpg"),
          active: false
        },
        {
          name: "红提",
          id: "22",
          src: require("../assets/fruit/红提.jpg"),
          active: false
        },
        {
          name: "菠萝蜜",
          id: "23",
          src: require("../assets/fruit/菠萝蜜.jpg"),
          active: false
        },
        {
          name: "黄桃",
          id: "24",
          src: require("../assets/fruit/黄桃.jpg"),
          active: false
        },
        {
          name: "橘子",
          id: "25",
          src: require("../assets/fruit/橘子.jpg"),
          active: false
        },
        {
          name: "榴莲",
          id: "26",
          src: require("../assets/fruit/榴莲.jpg"),
          active: false
        },
        {
          name: "葡萄",
          id: "27",
          src: require("../assets/fruit/葡萄.jpg"),
          active: false
        }
      ],
      snackList: [
        { name: "核桃仁", id: "1", active: false },
        { name: "海苔", id: "2", active: false },
        { name: "蛋白鱼皮", id: "3", active: false },
        { name: "水果干", id: "4", active: false },
        { name: "散称饼干小零食", id: "5", active: false },
        { name: "乡巴佬鸭腿", id: "6", active: false },
        { name: "锅巴", id: "7", active: false },
        { name: "牛肉干", id: "8", active: false },
        { name: "辣条", id: "9", active: false },
        { name: "散称面包", id: "10", active: false },
        { name: "豆干", id: "11", active: false },
        { name: "普通面包", id: "12", active: false }
      ],
      checkList: [],
      orderList: []
    };
  },
  created() {
    let date = new Date();
    this.menu = this.menuList[date.getDay()];
  },
  methods: {
    // 更换套餐类别
    foodChange(value) {
      // 能选择的最多水果数目
      if (value == "A") {
        this.fruitNumber = 1;
      } else {
        this.fruitNumber = 2;
      }
      // 套餐类别更换后重置所有水果按钮
      this.fruitList.forEach(item => {
        item.active = false;
      });
      this.canOrderFruit = true;
    },
    // 选择水果
    switchChange(index) {
      console.log(index);
      let number = 0;
      this.fruitList.forEach(item => {
        if (item.active === true) {
          number++;
        }
      });
      this.canOrderFruit = number == this.fruitNumber ? false : true;
    },
    isDisable(c) {
      return !c && !this.canOrderFruit;
    },
    save() {
      this.orderList.food = this.radio1;
      this.orderList.group = this.radio2;
      this.orderList.fruitList = [];
      this.orderList.snackList = [];
      let arr1 = [];
      let arr2 = [];
      this.fruitList.forEach(item => {
        if (item.active == true) {
          this.orderList.fruitList.push(item);
          arr1.push(item.name);
          this.selectedFruit = arr1.join(" ");
        }
      });
      this.snackList.forEach(item => {
        if (item.active == true) {
          this.orderList.snackList.push(item);
          arr2.push(item.name);
          this.selectedSnack = arr2.join(" ");
        }
      });
      console.log(this.orderList);

      this.$confirm(
      `<p>套餐：${this.radio1}</p>
      <p>组别：${this.radio2}</p>
      <p>水果：${this.selectedFruit}</p>
      <p>零食：${this.selectedSnack}</p>`,
        "请确认所选内容",
        {
          dangerouslyUseHTMLString: true,
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true
        }
      )
        .then(() => {
          // this.$axios.post('/api/order/add/',this.orderList)
          // .then(res => {
          //   if (res.status == 200) {
          //     console.log('ok')
          //   }
          //   else{
          //     console.log(res.data.msg)
          //   }
          // })
          this.$message({
            type: "success",
            message: "提交成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
          this.orderList = [];
          this.selectedSnack = this.selectedFruit = "无";
        });
    }
  },
  computed: {}
};
</script>