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
        <el-form-item label="">
          <el-input v-model="form.name" placeholder="项目名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">立即查询</el-button>
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
          prop="id"
          label="ID">
        </el-table-column>
        <el-table-column
          prop="user"
          label="用户名">
        </el-table-column>
        <el-table-column
          prop="name"
          label="项目名称">
        </el-table-column>
        <el-table-column
          prop="interestRate"
          label="利率（%）">
        </el-table-column>
        <el-table-column
          prop="mode"
          label="结算方式">
        </el-table-column>
        <el-table-column
          prop="duration"
          label="时长">
        </el-table-column>
        <el-table-column
          prop="investment"
          label="投资金额">
        </el-table-column>
        <el-table-column
          prop="received"
          label="已收金额">
        </el-table-column>
        <el-table-column
          prop="reward"
          label="预计奖励">
        </el-table-column>
        <el-table-column
          prop="orderTime"
          label="下单时间">
        </el-table-column>
        <el-table-column
          prop="overTime"
          label="结束时间">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="80">
          <template slot-scope="scope">
            <el-row>
              <el-button type="danger" size="mini" @click="deleteRow(scope.$index, tableData)">删除</el-button>
            </el-row>
          </template>
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
          userNmae: '',
          name: ''
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
