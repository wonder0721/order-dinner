<template>
  <div id="order">
    <div class="container-box">
      <h2>点餐</h2>
      <div>
        <el-radio v-model="radio1" label="1" border>A套餐（饭 + 水果）</el-radio>
        <el-radio v-model="radio1" label="2" border>B套餐（仅水果）</el-radio>
      </div>
      <div class="fruit">
        <el-row :gutter="20">
          <el-col :span="6" v-for="(item) in fruitData" :key="item.id">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.src" class="image" />
              <div style="padding: 14px;">
                <span>{{item.name}}</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#order {
  text-align: center;
  color: #2c3e50;
  .container-box {
    width: 1200px;
    background-color: lightyellow;
    margin: 0 auto;
    overflow: hidden;
    h2 {
      font-size: 30px;
      margin: 30px;
      color: #409eff;
    }
    .fruit {
      margin-top: 30px;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      radio1: "1",
      fruitData: [
        {
          name: "青色脆皮金桔（一盒20元）",
          id: "1",
          src: "../assets/logo.png"
        },
        {
          name: "红脆李",
          id: "2",
          src: "../assets/logo.png"
        },
        {
          name: "冬桃",
          id: "3",
          src: "../assets/logo.png"
        },
        {
          name: "水果黄瓜",
          id: "4",
          src: "../assets/logo.png"
        },
        {
          name: "青葡萄",
          id: "5",
          src: "../assets/logo.png"
        },
        {
          name: "黑美人",
          id: "6",
          src: "../assets/logo.png"
        },
        {
          name: "阳光玫瑰葡萄",
          id: "7",
          src: "../assets/logo.png"
        },
        {
          name: "猕猴桃",
          id: "8",
          src: "../assets/logo.png"
        },
        {
          name: "橙子",
          id: "9",
          src: "../assets/logo.png"
        },
        {
          name: "龙眼",
          id: "10",
          src: "../assets/logo.png"
        },
        {
          name: "枣子",
          id: "11",
          src: "../assets/logo.png"
        },
        {
          name: "火龙果",
          id: "12",
          src: "../assets/logo.png"
        },
        {
          name: "凤梨",
          id: "13",
          src: "../assets/logo.png"
        },
        {
          name: "红柚",
          id: "14",
          src: "../assets/logo.png"
        },
        {
          name: "白柚",
          id: "15",
          src: "../assets/logo.png"
        },
        {
          name: "哈密瓜",
          id: "16",
          src: "../assets/logo.png"
        },
        {
          name: "芒果",
          id: "17",
          src: "../assets/logo.png"
        },
        {
          name: "西瓜",
          id: "18",
          src: "../assets/logo.png"
        },
        {
          name: "苹果",
          id: "19",
          src: "../assets/logo.png"
        },
        {
          name: "千禧",
          id: "20",
          src: "../assets/logo.png"
        },
        {
          name: "青提",
          id: "21",
          src: "../assets/logo.png"
        },
        {
          name: "红提",
          id: "22",
          src: "../assets/logo.png"
        },
        {
          name: "菠萝蜜",
          id: "23",
          src: "../assets/logo.png"
        },
        {
          name: "黄桃",
          id: "24",
          src: "../assets/logo.png"
        },
        {
          name: "橘子",
          id: "25",
          src: "../assets/logo.png"
        },
        {
          name: "榴莲",
          id: "26",
          src: "../assets/logo.png"
        }
      ]
    };
  }
};
</script>