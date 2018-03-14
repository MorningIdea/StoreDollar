import router from "../router";

export const saveUserInfo = (state, userObj) => {
  sessionStorage.setItem('userName', userObj.userName);
  sessionStorage.setItem('userPwd', userObj.userPwd);
  state.user.userName = userObj.name;
  state.user.passWord = userObj.pwd;
}

export const logout = (state) => {
  sessionStorage.removeItem('userName');
  sessionStorage.removeItem('userPwd');
  state.user.userName = "";
  state.user.passWord = "";
}

export const setDataList = (state, dataList) => {
    state.dataList = dataList;
}

export const setLoading = (state, flag) => {
    console.log("setLoading...")
    state.loadingStatus = flag;
}

export const setTips = (state, tipTxt) => {
  console.log("tips...")
  state.tips = tipTxt;
}

export const getMsg = (state, payload) => {
  state.msg = payload.msg;
}
