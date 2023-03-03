<template>
  <div>
    {{ params }}
    <el-form layout="inline">
      <!-- <el-form-item label="密码">
        <el-input
          v-model.trim="inbound.settings.clients[0].password"
        ></el-input>
      </el-form-item>
      <el-form-item v-if="inbound.xtls" label="flow">
        <el-select
          v-model="inbound.settings.clients[0].flow"
          style="width: 150px"
        >
          <el-select-option value="">无</el-select-option>
          <el-select-option
            :key="key"
            v-for="key in FLOW_CONTROL"
            :value="key"
            >{{ key }}</el-select-option
          >
        </el-select>
      </el-form-item> -->
    </el-form>

    <el-form layout="inline">
      <!-- <el-form-item label="fallbacks">
        <el-row>
          <el-button
            type="primary"
            size="small"
            @click="inbound.settings.addTrojanFallback()"
          >
            +
          </el-button>
        </el-row>
      </el-form-item> -->
    </el-form>
    <!-- trojan fallbacks -->
    <!-- inbound.settings.fallbacks -->
    <el-form
      v-for="(fallback, index) in 2"
      :key="index"
      layout="inline"
    >
    
      <!-- <el-divider>
        fallback{{ index + 1 }}
        <el-icon
          type="delete"
          @click="() => inbound.settings.delTrojanFallback(index)"
          style="color: rgb(255, 77, 79); cursor: pointer"
        />
      </el-divider>
      <el-form-item label="name">
        <el-input v-model="fallback.name"></el-input>
      </el-form-item>
      <el-form-item label="alpn">
        <el-input v-model="fallback.alpn"></el-input>
      </el-form-item>
      <el-form-item label="path">
        <el-input v-model="fallback.path"></el-input>
      </el-form-item>
      <el-form-item label="dest">
        <el-input v-model="fallback.dest"></el-input>
      </el-form-item>
      <el-form-item label="xver">
        <el-input type="number" v-model.number="fallback.xver"></el-input>
      </el-form-item>
      <el-divider v-if="inbound.settings.fallbacks.length - 1 === index" /> -->
    </el-form>
  </div>
</template>
<script>
export default {
  name: "trojan",
  props:{
    params:  {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      inbound: 33,
    };
  },
  methods:{
    getForm(){
      console.log(3);
      return this.inbound
    }
  }

};
</script>