export default function compareObjectValue(objA, objB) {
  let aProperty = Object.getOwnPropertyNames(objA);
  let bProperty = Object.getOwnPropertyNames(objB);
  // 判断属性名的长度是否相等
  if(aProperty.length !== bProperty.length) {
    return false;
  }
  // 循环取出属性名，再判断属性值是否一致
  for(let i = 0; i < aProperty.length; i++) {
    let proKey = aProperty[i];
    if(objA[proKey] !== objB[proKey]) {
      console.log(objA[proKey], objB[proKey])
      return false;
    }
  }
  return true;
}