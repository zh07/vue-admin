<template>
  <div class="page">
    <div class="header">
      <el-form :inline="true" :model="form" class="form-inline">
        <el-form-item label="时间范围">
          <el-date-picker
            v-model="form.date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="form.type" placeholder="类型">
            <el-option label="充值" value="1"></el-option>
            <el-option label="提现" value="2"></el-option>
            <el-option label="签到" value="3"></el-option>
            <el-option label="注册" value="1"></el-option>
            <el-option label="商品购买" value="2"></el-option>
            <el-option label="冻结" value="3"></el-option>
            <el-option label="加款" value="1"></el-option>
            <el-option label="佣金" value="2"></el-option>
            <el-option label="抽奖奖励" value="3"></el-option>
            <el-option label="提现失败" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.userNmae" placeholder="用户名"></el-input>
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
        style="width: 100%">
        <el-table-column
          prop="id"
          label="ID"
          width="100">
        </el-table-column>
        <el-table-column
          prop="userName"
          label="用户名"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="150">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          width="150">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="金额"
          width="150">
        </el-table-column>
        <el-table-column
          prop="newAmount"
          label="最新金额"
          width="150">
        </el-table-column>
        <el-table-column
          prop="date"
          label="记录时间">
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

  export default {
    methods: {
      handleSizeChange() {},
      handleCurrentChange() {}
    },
    data() {
      return {
        form: {
          userNmae: '',
          date: '',
          type: ''
        },
        tableData: [
          {
            id: '1111',
            userName: 'test',
            name: 'test',
            type: '注册',
            amount: '1000',
            newAmount: '1000',
            date: '2019-11-01 16:17:37'
          },
          {
            id: '1111',
            userName: 'test',
            name: 'test',
            type: '注册',
            amount: '1000',
            newAmount: '1000',
            date: '2019-11-01 16:17:37'
          },
          {
            id: '1111',
            userName: 'test',
            name: 'test',
            type: '注册',
            amount: '1000',
            newAmount: '1000',
            date: '2019-11-01 16:17:37'
          },
        ],
        multipleSelection: []
      }
    }
  }
</script>

<style>
  .header {
    padding: 20px;
  }
  .table-box {
    padding: 20px;
  }
  .pagination {
    padding-top: 20px;
  }
</style>
