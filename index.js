export default function trimNull(obj) {
  const str = JSON.stringify(obj);
  if (str === void 0) {
    return;
  }

  const trimedObj = JSON.parse(str, function(k, v) {
    if (v === null) {
      return;
    }
    if (Array.isArray(v)) {
      for(let i = 0; i < v.length; i++) {
        if (v[i] == undefined) {
          // 主要是empty换为undefined, 方便结果可以使用map等方法遍历到这一项
          v[i] = void 0
        }
      }
    }
    return v;
  })
  return trimedObj;
}
