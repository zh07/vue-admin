<template>
  <div class="page">
    <div class="header">
      <el-form :inline="true" :model="form" class="form-inline">
        <el-form-item label="提现时间">
          <el-date-picker
            v-model="form.date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="form.type" placeholder="审核状态">
            <el-option label="一支付" value="1"></el-option>
            <el-option label="待审核" value="2"></el-option>
            <el-option label="已拒绝" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">立即查询</el-button>
          <el-button type="primary" @click="">累计提现成功0</el-button>
          <el-button type="primary" @click="">累计提现失败0</el-button>
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
          prop="userName"
          label="用户名"
          width="100">
        </el-table-column>
        <el-table-column
          prop="cardNumber"
          label="卡号"
          width="200">
        </el-table-column>
        <el-table-column
          prop="accountHolder"
          label="开户人"
          width="100">
        </el-table-column>
        <el-table-column
          prop="bank"
          label="所属银行"
          width="150">
        </el-table-column>
        <el-table-column
          prop="accountBank"
          label="开户行"
          width="150">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="金额"
          width="150">
        </el-table-column>
        <el-table-column
          prop="date"
          label="审核时间"
          width="200">
        </el-table-column>
        <el-table-column
          prop="status"
          label="审核状态"
          width="100">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="160">
          <template slot-scope="scope">
            <el-row>
              <el-button type="success " size="mini" @click="dialogVisible = true">通过</el-button>
              <el-button type="danger" size="mini" @click="deleteRow(scope.$index, tableData)">拒绝</el-button>
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

  export default {
    methods: {
      deleteRow(index, rows) {
        console.log(index, rows);
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
        form: {
          date: '',
          type: ''
        },
        tableData: [
          {
            userName: 'test',
            cardNumber: '78632757674',
            accountHolder: 'test',
            bank: '中国银行',
            accountBank: '中国银行',
            amount: '1000',
            date: '2019-11-01 16:17:37',
            status: '通过'
          },
          {
            userName: 'test',
            cardNumber: '78632757674',
            accountHolder: 'test',
            bank: '中国银行',
            accountBank: '中国银行',
            amount: '1000',
            date: '2019-11-01 16:17:37',
            status: '通过'
          },
          {
            userName: 'test',
            cardNumber: '78632757674',
            accountHolder: 'test',
            bank: '中国银行',
            accountBank: '中国银行',
            amount: '1000',
            date: '2019-11-01 16:17:37',
            status: '通过'
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
