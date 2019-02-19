/**
 * 元素绑定事件
 * @param {Element} elem 需要绑定事件的元素
 * @param {string} type 事件类型，不要加on
 * @param {Function} handle 绑定的事件
 */
function addEvent(elem, type, handle) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handle, false);
    } else if (elem.attachEvent) { //ie 独有，但默认事件中this指向window
        elem.attachEvent("on" + type, function () {
            handle.call(elem);
        })
    } else {
        elem["on" + type] = handle;
    }
}
/**
 * 阻止事件冒泡
 * @param {Event} event 事件
 */
function stopBubble(event) {
    event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
}