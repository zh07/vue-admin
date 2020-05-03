<template>
  <div class="info-page">
    <div class="header">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="">
          <el-date-picker
            v-model="value"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.userName" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">立即查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">本次结果累计：0</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-box">
      <el-table
        border
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="user"
          label="用户名">
        </el-table-column>
        <el-table-column
          prop="fullName"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="name"
          label="项目名称">
        </el-table-column>
        <el-table-column
          prop="time"
          label="日期">
        </el-table-column>
        <el-table-column
          prop="principal"
          label="本金">
        </el-table-column>
        <el-table-column
          prop="rebate"
          label="返利">
        </el-table-column>
        <el-table-column
          prop="total"
          label="合计">
        </el-table-column>
      </el-table>

      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {tableData} from './tableData'

  export default { 
    methods: {
      deleteRow(index, rows) {
        console.log(index, rows);
        rows.splice(index, 1);
      },
      handleSelectionChange(val) {
        console.log(val)
        this.multipleSelection = val;
      },
      handleSizeChange() {},
      handleCurrentChange() {}
    },
    data() {
      return {
        value: null,
        form: {
          userNmae: ''
        },
        tableData: tableData,
        multipleSelection: []
      }
    }
  }
</script>

<style scoped>
  .header {
    padding: 20px 20px 0;
  }
  .table-box {
    padding: 0 20px 20px;
  }
  .add-div {
    padding-bottom: 20px;
  }
  .pagination {
    padding-top: 20px;
  }
</style>
