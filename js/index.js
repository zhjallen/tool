/**
 *
 * 简单的深复制
 * @param {*} obj
 * @returns
 */
function deepCopy(obj) {
  if (!isObject(obj)) {
    return obj;
  }
  let newObj = isArray(obj) ? [...obj] : {
    ...obj
  };
  for (let att in newObj) {
    newObj[att] = deepCopy(newObj[att])
  }
  return newObj;
}

/**
 *
 *判断是否是对象
 * @param {*} obj
 * @returns {boolean}
 */
function isObject(obj) {
  return (typeof obj === "object" || typeof obj === "function") && obj !== null;
}

/**
 *
 * 判断是否为数组
 * @param {*} array
 * @returns
 */
function isArray(array) {
  return Array.isArray(array);
}