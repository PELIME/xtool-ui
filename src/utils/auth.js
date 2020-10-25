//保存token的实现，打包成app时可改用sqllite数据库进行加密保存
const TokenKey = 'xtool_token'
export function getToken() {
  var to=localStorage.getItem(TokenKey);
  if(to){
      return JSON.parse(to);
  }
  else{
      return {};
  }
}
export function setToken(token) {
  return localStorage.setItem(TokenKey,token);
}

export function removeToken() {
  return localStorage.removeItem(TokenKey);
}
