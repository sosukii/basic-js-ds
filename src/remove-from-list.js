const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let start = l; // когда переписываем ссылки на некст - они меняются и в оригинальном объекте, потому, что в start лежит ССЫЛКА на объект (а не объект)

  if (start.value === k) {
    l = l.next; // 1 reassign головы (потому что далее она не проверяется)
  }

  while (start.next !== null) {
    if (start.next.value === k) {
      // проверка - есть ли в сл. элементе value === k
      start.next = start.next.next; // перескакиваем через один элемент
    } else {
      start = start.next;
    }
  }
  // внутри цикла вайл меняем next, если value next элемента === k (тогда некст скипаем, меняя ссылку текущего элемента на ссылку некст следующего)
  return l;
}

module.exports = {
  removeKFromList,
};
