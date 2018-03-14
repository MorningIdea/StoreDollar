import router from '../router'
import fetch from '../util/http-client.js'

export const goBack = ({commit, state},url) => {
    router.push({path: url, params:{}});
};

export const doLogin = ({commit, state}) => {
    var userName = state.user.userName;
    var userPwd = state.user.passWord;
    if(userName == "" || userPwd==""){
        alert("请输入用户名或密码！");
        return false;
    }
    var params = {
        userName:userName,
        userPwd:userPwd
    }

    commit("setLoading", true);
    var sucFun = function(value){
      console.log("success...");
      commit("setLoading", false);
      commit("saveUserInfo", params);
      commit("setTips", "");
      //router.push({ name: 'UserCenterAAA', params:{usr:userName} });
      router.push({ path: 'UserCenter', query:{usr:userName} });
    }
    var failureFun = function(error){
      console.log("failure...");
      commit("setLoading", false);
      commit("setTips", error);
    }
    fetch("login.php", params).then(sucFun, failureFun)
};

export const showDataList = ({commit, state}) => {
    var params = {}
    var sucFun = function(value){
      console.log("showDataList success...")
      commit("setDataList", value.dataArr); //设置数据信息
    }
    var failureFun = function(error){
      console.log("showDataList failure... " + error)
    }
    fetch("showList.php", params).then(sucFun, failureFun)
};

export const logout = ({commit, state}) => {
  if(window.confirm("确定退出当前系统么？")) {
      commit('logout');
      router.push({path: '/Login', query: {}});
  }
};
