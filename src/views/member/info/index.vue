<template>
  <div class="info-page">
    <div class="header">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="">
          <el-input size="medium" v-model="input" placeholder="输入超级密码获得跟多权限"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary">立即提交</el-button>
          <el-button type="success">新增用户</el-button>
          <el-button type="primary">当前在线人数：0</el-button>
        </el-form-item>
        <br>
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
          <el-input v-model="form.userNmae" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.phone" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="form.level" placeholder="选择VIP等级">
            <el-option label="VIP1" value="1"></el-option>
            <el-option label="VIP1" value="2"></el-option>
            <el-option label="VIP3" value="3"></el-option>
            <el-option label="VIP4" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">查询</el-button>
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
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="80">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="level"
          label="会员等级"
          width="80">
        </el-table-column>
        <el-table-column
          prop="referrer"
          label="推荐人"
          width="80">
        </el-table-column>
        <el-table-column
          prop="ip"
          label="注册IP"
          width="120">
        </el-table-column>
        <el-table-column
          prop="date"
          label="注册时间"
          width="160">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="可用金额"
          width="100">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="冻结金额"
          width="100">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="投资总额"
          width="100">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="已收利息"
          width="100">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="待收利息"
          width="100">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="360">
          <template slot-scope="scope">
            <el-row>
              <el-button type="success " size="mini" @click="dialogVisible = true">编辑</el-button>
              <el-button type="success" size="mini">锁定</el-button>
              <el-button type="danger" size="mini" @click="deleteRow(scope.$index, tableData)">删除</el-button>
              <el-button type="primary" size="mini">明细</el-button>
              <el-button type="success" size="mini">离线</el-button>
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
        <el-form-item label="登陆密码">
          <el-input placeholder="请输入登陆密码"></el-input>
        </el-form-item>
        <el-form-item label="支付密码">
          <el-input placeholder="请输入支付密码"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="formInline.phone" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item label="推荐人">
          <el-input v-model="formInline.referrer" placeholder="请输入推荐人"></el-input>
        </el-form-item>
        <el-form-item label="会员等级">
          <el-select v-model="formInline.level" placeholder="请选择会员等级">
            <el-option label="VIP1" value="1"></el-option>
            <el-option label="VIP2" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="加款">
          <el-input placeholder="请输入全部资金"></el-input>
        </el-form-item>
        <el-form-item label="减款">
          <el-input placeholder="请输入数字"></el-input>
        </el-form-item>
        <el-form-item label="增减款备注">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="冻结资金">
          <el-input placeholder="请输入冻结资金"></el-input>
        </el-form-item>
        <el-form-item label="冻结资金">
          <el-input placeholder="请输入冻结资金"></el-input>
        </el-form-item>
        <el-form-item label="开户人">
          <el-input placeholder="请输入开户人"></el-input>
        </el-form-item>
        <el-form-item label="所属银行">
          <el-input placeholder="请输入开户银行"></el-input>
        </el-form-item>
        <el-form-item label="开户行">
          <el-input placeholder="请输入开户行"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="身份证">
          <el-input placeholder="请输入身份证"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">立即提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
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
        input: null,
        value: null,
        dialogVisible: false,
        form: {
          userNmae: '',
          name: '',
          phone: '',
          level: ''
        },
        formInline: {
          userNmae: '',
          name: '',
          phone: '',
          referrer: '',
          level: ''
        },
        tableData: tableData,
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
