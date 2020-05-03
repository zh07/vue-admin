<template>
  <div class="page">
    <div class="header">
      <el-form :inline="true" :model="form" class="form-inline">
        <el-form-item label="充值时间">
          <el-date-picker
            v-model="form.date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="form.type" placeholder="支付状态">
            <el-option label="已支付" value="1"></el-option>
            <el-option label="待审核" value="2"></el-option>
            <el-option label="已拒绝" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="form.mode" placeholder="支付方式">
            <el-option label="微信" value="1"></el-option>
            <el-option label="支付宝" value="2"></el-option>
            <el-option label="银行卡" value="3"></el-option>
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
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <!--<el-table-column-->
          <!--type="selection"-->
          <!--width="55">-->
        <!--</el-table-column>-->
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
          prop="mode"
          label="付款方式"
          width="150">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="支付金额"
          width="200">
        </el-table-column>
        <el-table-column
          prop="date"
          label="注册时间"
          width="200">
        </el-table-column>
        <el-table-column
          prop="status"
          label="订单状态"
          width="200">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作">
          <template slot-scope="scope">
            <el-row>
              <el-button type="success " size="mini" @click="dialogVisible = true">编辑</el-button>
              <!--<el-button type="danger" size="mini" @click="deleteRow(scope.$index, tableData)">删除</el-button>-->
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
    <el-dialog
      title="编辑"
      :visible.sync="dialogVisible"
      width="40%">
      <el-form ref="form" :model="formInline" label-width="80px">
        <el-form-item label="">
          <el-select v-model="formInline.type" placeholder="支付状态">
            <el-option label="一支付" value="1"></el-option>
            <el-option label="待审核" value="2"></el-option>
            <el-option label="已拒绝" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="formInline.mode" placeholder="支付方式">
            <el-option label="微信" value="1"></el-option>
            <el-option label="支付宝" value="2"></el-option>
            <el-option label="银行卡" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="formInline.userNmae" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">立即提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>

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
        dialogVisible: false,
        form: {
          userNmae: '',
          date: '',
          mode: '',
          type: ''
        },
        formInline: {
          userNmae: '',
          name: '',
          mode: '',
          type: ''
        },
        tableData: [
          {
            userName: 'test',
            name: 'test',
            mode: '支付宝',
            amount: '1000',
            date: '2019-11-01 16:17:37',
            status: '已支付'
          },
          {
            userName: 'test',
            name: 'test',
            mode: '支付宝',
            amount: '1000',
            date: '2019-11-01 16:17:37',
            status: '已支付'
          },
          {
            userName: 'test',
            name: 'test',
            mode: '支付宝',
            amount: '1000',
            date: '2019-11-01 16:17:37',
            status: '已支付'
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
