<template>
  <div class="info-page">
    <div class="header">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="">
          <el-select v-model="form.level" placeholder="类型选择">
            <el-option label="类型选择" value="0"></el-option>
            <el-option label="单页列表" value="1"></el-option>
            <el-option label="新闻列表" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="">立即查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addFunc">新增单页</el-button>
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
          prop="title"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="time"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="mode"
          label="结算方式">
        </el-table-column>
        <el-table-column
          prop="father"
          label="所属父级">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="147">
          <template slot-scope="scope">
            <el-row>
              <el-button type="success " size="mini" @click="editFunc">编辑</el-button>
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

    <el-dialog
      :title="hoverTitle"
      :visible.sync="dialogVisible"
      width="1000">
      <el-form ref="form" :model="formInline" label-width="100px">
        <el-form-item label="标题">
          <el-input v-model="formInline.name" placeholder="请输入项目标题"></el-input>
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
      // 添加
      addFunc() {
        this.hoverTitle = "增加";
        this.dialogVisible = true;
      },
      // 编辑
      editFunc() {
        this.hoverTitle = "编辑";
        this.dialogVisible = true;
      },
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
        hoverTitle: "增加",
        dialogVisible: false,
        form: {
          level: ''
        },
        formInline: {
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
