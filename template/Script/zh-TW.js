// ==UserScript==
// @name        XX 漢化
// @namespace   https://github.com/MCGA1976/XX
// @match       修改網站
// @version     XX
// @author      MCGA
// @license     MCGA License
// @description 漢化 XX 介面的部分選單及內容
// @grant       none
// @downloadURL XX
// @updateURL   XX
// ==/UserScript==


(function() {
  'use strict';

  const lang = 'zh-TW'; // 設定默認語言

  const i18n = new Map([ // 翻譯字典
    ['原文', '譯文'],
  ])

  replaceText(document.body) // body 文本替換

  const bodyObserver = new MutationObserver(mutations => { // 監聽 DOM 變更
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(addedNode => replaceText(addedNode))
    })
  })

  bodyObserver.observe(document.body, { childList: true, subtree: true })

  function replaceText(node) { // 替換文本函數
    nodeForEach(node).forEach(htmlnode => {
      i18n.forEach((value, index) => {
        const textReg = new RegExp(index, 'g')
        if (htmlnode instanceof Text && htmlnode.nodeValue.includes(index))
          htmlnode.nodeValue = htmlnode.nodeValue.replace(textReg, value)
        else if (htmlnode instanceof HTMLInputElement && htmlnode.value.includes(index))
          htmlnode.value = htmlnode.value.replace(textReg, value)
      })
    })
  }

  function nodeForEach(node) {  // 遍歷所有節點函數
    const list = []
    if (node.childNodes.length === 0) list.push(node)
    else {
      node.childNodes.forEach(child => {
        if (child.childNodes.length === 0) list.push(child)
        else list.push(...nodeForEach(child))
      })
    }
    return list
  }
})();