<template>
  <div>
    <el-row>
      <el-col :xs="20" :sm="18" :md="8" :lg="6">
        <label>姓名:</label>
        <el-input v-model="info.name" placeholder="请输入姓名"></el-input>
        <label>年龄:</label>
        <el-input v-model="info.age" placeholder="请输入年龄"></el-input>
        性别:
        <el-select v-model="info.sex" placeholder="请选择">
          <el-option v-for="item in options" :key="item" :value="item">
          </el-option>
        </el-select>
        <el-button @click="create" type="success" class="btn-auto">创建</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
          <el-table :data="tableData" align="left" @cell-click="xs">
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="age" label="年龄"></el-table-column>
            <el-table-column prop="sex" label="性别"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="del(scope.$index)">
                  删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import store from '../store/store'
export default {
  name: 'addPeople',
  data () {
    return {
      options: ['男', '女', '保密'],
      info: {
        name: '',
        age: null,
        sex: ''
      },
      tableData: store.fetch()
    }
  },
  methods: {
    create () {
      if (this.info.name && this.info.age && this.info.sex) {
        this.tableData.push(this.info)
        this.info = {name: '', age: null, sex: ''}
      }
    },
    xs (row, column, cell, event) {
      console.log(row, column, cell, event)
    },
    del (index) {
      this.tableData.splice(index, 1)
    }
  },
  watch: {
    tableData: {
      handler: function (items) {
        store.save(items);
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
<style scope>
.el-col {
  margin: 0 auto;
  float: none;
}
.el-input {
  padding: 10px 0;
}
.el-select {
  display: block;
}
.btn-auto {
  width: 100%;
}
</style>
