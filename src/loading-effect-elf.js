/*!
 * loading-effect-elf
 * Copyright(c) 2020 天火流光 <gc.thlg@gmail.com>
 * MIT Licensed
 */
;(function (root, entity) {
	if (typeof define === 'function' && define.amd) {
		define(entity)
	} else if (typeof exports === 'object') {
		module.exports = entity()
	} else {
		root.Elf = entity()
	}
})(this, function () {
	class Elf {
		version = '0.1.0'
		V = '0.1.0'
		constructor() {
			this.type = 'top-indicator' // top-indicator conent-indicator
			this.el = 'body'
			this.bgcolor = '#1d6baf'
			this.iconClass = 'icon icon-rotate'
			this.incoInnerhtml = ''
		}
		/**
		 * @description 渲染加载DOM
		 *
		 * @param {any} options 配置
		 */
		render(options) {
			let parent,
				child = document.createElement('div')
			child.id = 'Elf-root'
			child.className = 'elf-coat'
			if (options.type === 'top-indicator') {
				parent = document.querySelector(options.el)
				child.innerHTML = `<div class="groove"><div class="progress-bar"></div></div><div class="icon-coat"><div class="${this.iconClass} rotate"></div></div>`
			}
			if (options.type === 'conent-indicator') {
				parent = document.querySelector('body')
				child.innerHTML = `<div class="masking"><div class="${this.iconClass} rotate ">${this.incoInnerhtml}</div></div>`
				parent.className = 'adssd123'
			}
			parent.appendChild(child)
		}
		/**
		 * @description 加载开始
		 *
		 * @param {any} options 配置
		 */
		start(options) {
			this.render({ ...this, ...options })
		}

		loading() {
			let progress = document.querySelector('.progress-bar')
		}

		/**
		 * @description 移除加载DOM
		 *
		 * @param {any} selector 选择器
		 */
		removeElement(selector) {
			document
				.querySelector(selector)
				.parentNode.removeChild(document.querySelector(selector))
		}
		/**
		 * @description  加载状态停止
		 *
		 */
		stop() {
			document.querySelector('.progress-bar').style.animation =
				'loading-stop 1s forwards'
			setTimeout(() => {
				this.removeElement('#Elf-root')
			}, 1000)
		}
	}
	return new Elf()
})
