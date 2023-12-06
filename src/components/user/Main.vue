<template>
    <div>
      
      <el-row :gutter="20">
          <el-col :span="2">
              <div style="font-weight: bold;">用户管理</div>
          </el-col>
          
          <el-col :span="6">
              <div>
                  <el-input placeholder="请输入用户名" v-model="user.userName" clearable style="width: 200px;"></el-input>
                  <el-button size="small" type="success" style="margin-left: 15px;" @click="search()">
                      <i class="el-icon-search"></i> 查询
                  </el-button>
                  <el-button size="small" style="margin-left: 15px;" @click="refresh()">
                      <i class="el-icon-refresh"></i> 刷新
                  </el-button>
              </div>
          </el-col>
          <el-col :span="6"><div class="grid-content bg-white"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-white"></div></el-col>
          <el-col :span="4" style="text-align: right;">
              <el-button size="small" type="primary" @click="add()"><i class="el-icon-user" style="font-weight: bold;"></i> 新增用户</el-button>
          </el-col>
      </el-row>

      <el-table 
          :data="tableData"
          border
          :header-cell-style="{ background : '#f2f5fc'}"
          style="width: 100%">
          <el-table-column prop="no" label="账号" width="180"></el-table-column>
          <el-table-column prop="name" label="用户名" width="120"></el-table-column>
          <el-table-column prop="phone" label="电话" width="180"></el-table-column>
          <el-table-column prop="sex" label="性别" width="120">
              <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.sex === 1 ? 'primary' : 'success'"      
                    disable-transitions>{{scope.row.sex === 1 ? '男' : '女'}}</el-tag>
              </template>
          </el-table-column>
          <el-table-column prop="roleId" label="角色" width="120">
              <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.roleId === 1 ? 'warning' : (scope.row.roleId === 0 ? 'danger' : 'success')"      
                    disable-transitions>{{scope.row.roleId === 1 ? '管理员' : (scope.row.roleId === 0 ? '超级管理员' : '普通用户')}}</el-tag>
              </template>
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="180"></el-table-column>
          <el-table-column label="操作" width="auto">
              <template slot-scope="scope">
                  <el-button size="mini" @click="modifyUser(scope.row)"><i class="el-icon-edit-outline"></i> 编辑</el-button>
                  <el-button size="mini" type="danger" @click="removeUser(scope.row)"><i class="el-icon-delete"></i> 删除</el-button>
              </template>
          </el-table-column>
        </el-table>

        <el-dialog
          title="新增用户"
          :visible.sync="addDialogVisible"
          width="40%">
          <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="账号" prop="no">
                    <el-input v-model="form.no" style="width: 50%;"></el-input>
                </el-form-item>
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="form.name" style="width: 50%;"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model.number="form.age" style="width: 30%;"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password" autocomplete="off" style="width: 50%;"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="form.checkPass" autocomplete="off" style="width: 50%;"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="form.phone" style="width: 50%;"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="form.sex">
                        <el-radio label="1">男</el-radio>
                        <el-radio label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="角色">
                    <el-radio-group v-model="form.roleId">
                        <!-- 管理员用户只有超级管理员才能够授权 -->
                        <el-radio label="1">管理员</el-radio>
                        <el-radio label="2">普通用户</el-radio>
                    </el-radio-group>
                </el-form-item>
          </el-form>
              <span slot="footer" class="dialog-footer">
                  <el-button size="small" @click="addDialogVisible = false">取消</el-button>
                  <el-button size="small" type="primary" @click="confirmAddUser()">新增</el-button>
              </span>
        </el-dialog>

        <el-dialog
          title="修改用户"
          :visible.sync="modifyDialogVisible"
          width="40%">
          <el-form ref="form" :model="form" :rules="rules" label-width="80px">
              <el-form-item label="用户名" prop="name">
                  <el-input v-model="form.name" style="width: 50%;"></el-input>
              </el-form-item>
              <el-form-item label="年龄" prop="age">
                  <el-input v-model.number="form.age" style="width: 30%;"></el-input>
              </el-form-item>
              <el-form-item label="电话">
                  <el-input v-model="form.phone" style="width: 50%;"></el-input>
              </el-form-item>
              <el-form-item label="性别">
                  <el-radio-group v-model="form.sex">
                      <el-radio label="1">男</el-radio>
                      <el-radio label="0">女</el-radio>
                  </el-radio-group>
              </el-form-item>
              <el-form-item label="角色">
                  <el-radio-group v-model="form.roleId">
                      <!-- 管理员用户只有超级管理员才能够授权 -->
                      <el-radio label="1">管理员</el-radio>
                      <el-radio label="2">普通用户</el-radio>
                  </el-radio-group>
              </el-form-item>

          </el-form>
              <span slot="footer" class="dialog-footer">
                  <el-button size="small" @click="modifyDialogVisible = false">取消</el-button>
                  <el-button size="small" type="primary" @click="confirmModifyUser()">修改</el-button>
              </span>
        </el-dialog>
    </div>
</template>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-white {
    background: #ffffff;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<script>
export default {
    data() {
        var checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('年龄不能为空'));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字'));
                } else {
                    if (value < 0) {
                        callback(new Error('年龄必须大于0'));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.form.checkPass !== '') {
                    this.$refs.form.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.form.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };

        return {
            addDialogVisible : false,
            modifyDialogVisible : false,
            tableData: [],
            user: {
                'userName' : ''
            },
            form :{
                'id':'',
                'name':'',
                'no' : '',
                'sex':'1',
                'age' : '',
                'password' : '',
                'checkPass' : '',
                'roleId': '2',
                'isValid': '1'
            },
            rules: {
                no :[
                    { required : true, message: '请输入账号', trigger : 'blur'},
                    { min: 1, max: 8, message: '长度在 1 到 8 个字符', trigger: 'blur' }
                ],
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { min: 1, max: 8, message: '长度在 1 到 6 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6,  message: '密码长度至少为 6 个字符', trigger: 'blur' }
                ],
                checkPass: [
                    { required: true, message: '请确认密码', trigger: 'blur' },
                    { validator: validatePass2, trigger: 'blur' }
                ],
                age: [
                    { required: true, message: '请输入年龄', trigger: 'blur' },
                    { validator: checkAge, trigger: 'blur' }
                ]
            }
        }
    },

    // 进入页面的时候预加载数据
    beforeMount () {
        this.loadUser();
    },

    methods :{
        loadUser () {
            this.$axios.get(this.$httpUrl + '/user/listAll').then(res => {
                if (res.data.code === 0) { // 请求成功
                    this.tableData = res.data.data
                } else {
                    this.$message({
                        type: 'error',
                        message : '获取用户信息失败：' + res.data.message
                    })
                }          
            })
        },

        refresh () {
            this.loadUser();
            this.user.userName = '' 
            this.$message({
                type : 'success',
                message : '刷新成功'
            })
        },

        search () {
            this.$axios({
                url: this.$httpUrl + '/user/list',
                method: 'post',
                headers:{
                    'Content-Type' : 'application/json'
                },
                data : this.user
            }).then((res) => {
                if (res.data.code === 0) {
                    this.tableData = res.data.data
                    this.$message({
                        type : 'success',
                        message : '搜索成功'
                    })
                } else {
                    this.$message({
                          type: 'error',
                          message : '搜索用户信息失败：' + res.data.message
                    })
                }
            })
        },

        add () {
            this.addDialogVisible = true
        },

        confirmAddUser () {

            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.addDialogVisible = false
                    this.$axios({
                        url: this.$httpUrl + '/user/add',
                        method: 'post',
                        headers:{
                            'Content-Type' : 'application/json'
                        },
                        data : this.form
                    }).then((res) => {
                        if (res.data.code === 0) {
                            this.$message({
                                type : 'success',
                                message : '新增用户成功'
                            })
                            this.loadUser();
                        } else {
                            this.$message({
                                  type: 'error',
                                  message : '新增用户失败：' + res.data.message
                            })
                        }
                        this.resetForm();
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });    
        },

        removeUser (rowData) {
            this.$confirm('是否删除用户 ' + rowData.name + '?', '删除用户', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {

              this.$axios({
                  url: this.$httpUrl + '/user/delete/' + rowData.id,
                  method: 'post'
              }).then((res) => {
                  if (res.data.code === 0) {
                      this.tableData = res.data.data
                      this.$message({
                          type: 'success',
                          message: '删除成功!'
                      })
                      this.loadUser()
                  } else {
                      this.$message({
                            type: 'error',
                            message : '删除用户失败'
                      })
                  }
              })
            }).catch(() => {
                  this.$message({
                  type: 'info',
                  message: '已取消删除'
                });          
            });
        },

        modifyUser (rowData) {

            this.form.id = rowData.id
            this.form.name = rowData.name
            this.form.no = rowData.no
            this.form.age = rowData.age
            this.form.sex = rowData.sex.toString()
            this.form.phone = rowData.phone 
            this.form.roleId = rowData.roleId.toString()
            this.form.isValid = rowData.isValid

            if (rowData.roleId == '0') {
                this.$message({
                    type: 'error',
                    message: '超级管理员用户不允许修改!'  
                })
                return false
            }

            if (rowData.isVaild == '0') {
                this.$message({
                    type: 'error',
                    message: '该用户已被冻结！'  
                })
                return false
            }
            this.modifyDialogVisible = true     
        },

        confirmModifyUser () {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.modifyDialogVisible = false
                    this.$axios({
                        url: this.$httpUrl + '/user/update',
                        method: 'post',
                        headers:{
                            'Content-Type' : 'application/json'
                        },
                        data : this.form
                    }).then((res) => {
                        if (res.data.code === 0) {
                            this.$message({
                                type : 'success',
                                message : '修改用户成功'
                            })
                            this.loadUser();
                        } else {
                            this.$message({
                                  type: 'error',
                                  message : '修改用户失败：' + res.data.message
                            })
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });    
        },
      
        // 重置表单
        resetForm() {
            this.$refs.form.resetFields();
        }
    }

}
</script>