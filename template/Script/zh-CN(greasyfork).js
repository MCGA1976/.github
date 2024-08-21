// ==UserScript==
// @name        XX 汉化
// @namespace   https://github.com/MCGA1976/XX
// @match       修改网站
// @version     XX
// @author      MCGA
// @license     MCGA License
// @description 汉化 XX 界面的部分菜单及内容
// @grant       none
// @downloadURL XX
// @updateURL   XX
// ==/UserScript==


(function() {
    'use strict';

    const lang = 'zh-CN'; // 设置默认语言

    const i18n = new Map([ // 翻译字典
      ['原文', '译文'],
    ])

    replaceText(document.body) // body 文本替换

    const bodyObserver = new MutationObserver(mutations => { // 监听 DOM 变更
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(addedNode => replaceText(addedNode))
      })
    })

    bodyObserver.observe(document.body, { childList: true, subtree: true })

    function replaceText(node) { // 替换文本函数
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

    function nodeForEach(node) {  // 遍历所有节点函数
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