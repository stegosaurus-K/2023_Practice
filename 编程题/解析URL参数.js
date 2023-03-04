let baseUrlStr = 'httpa://coder.itclan.cn?name=itclanCoder&study=css';
function queryURL(url) {
  let paramsArr = url.split("?")[1];
  let params = paramsArr.split("&");
  const paramsObj = {};
  for (let i = 0; i < params.length; i++){
    let key = params[i].split("=")[0];
    let value = params[i].split("=")[1];
    paramsObj[key] = value;
  }
  return paramsObj;
}
console.log(queryURL(baseUrlStr))