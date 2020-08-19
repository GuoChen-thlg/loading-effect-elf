/*!
 * loading-effect-elf
 * Copyright(c) 2020 天火流光 <gc.thlg@gmail.com>
 * MIT Licensed
 */
/**
 * @description 设置参数
 *
 * @interface IOptions
 */
interface IOptions {
	type: string // 展示类型
	name: string // 名字
	el: string // 待添加Elf容器的选择器
	mask_bgcolor: string // 加载蒙版背景色
	line_color: string // 加载条颜色
	icon_size: string // 旋转图标大小
	icon_className: string // 旋转图标样式名称
	icon_Innerhtml: string // 旋转图标填充HTML
}

class LoadingElf implements IOptions {
	/**
	 * @description 加载状态类型
	 *
	 * @type {string} type 可选值 article_loaded  mask_loaded
	 *
	 */
	type: string = 'article_loaded'
	/**
	 * @description Elf name
	 *
	 * @type {string} name
	 */
	name: string = ''
	/**
	 * @description 加载蒙版的背景色
	 *
	 * @type {string} mask_bgcolor
	 */
	mask_bgcolor: string = 'rgba(0,0,0,0.3)'
	/**
	 * @description 加载进度条颜色
	 *
	 * @type {string} line_color
	 */
	line_color: string = 'red'
	/**
	 * @description 加载旋转图标的大小
	 *
	 * @type {string} icon_size
	 */
	icon_size: string = ''
	/**
	 * @description 加载旋转图标样式名称
	 *
	 * @type {string} icon_className
	 */
	icon_className: string = 'icon icon-rotate'
	/**
	 * @description 加载旋转图标填充元素内容
	 *
	 * @type {string} icon_Innerhtml
	 */
	icon_Innerhtml: string = ''
	/**
	 * @description 添加 Elf 容器的选择器
	 *
	 * @type {string} el
	 */
	el: string = 'body'
	constructor() {}

	init(options: IOptions): void {
		let parent: HTMLElement | null = document.querySelector(options.el)
		let child = document.createElement('div')
		child.id = 'Elf-root'
		child.className = 'elf-coat'
		if (options.name) {
			child.setAttribute('data-name', options.name)
		}
		if (options.type === 'article_loaded') {
			child.innerHTML = `<div class="groove"><div class="progress-bar"></div></div><div class="icon-coat"><div class="${options.icon_className} rotate"
			style="${options.icon_size.trim()===''?'':`width:${options.icon_size};height:${options.icon_size};`}"></div></div>`
		}
		if (options.type === 'mask_loaded') {
			child.innerHTML = `<div class="masking"><div class="${
				options.icon_Innerhtml.trim() === '' ? options.icon_className : ''
			} rotate ">${options.icon_Innerhtml}</div></div>`
		}
		if (!parent) {
			parent = document.querySelector('body') as HTMLElement
		}
		parent.appendChild(child)
	}
	removeElement(selector: string): void {
		let child: HTMLElement | null = document.querySelector(selector)
		if (child) {
			let parentnode: Node = child.parentNode as Node
			parentnode.removeChild(child)
		}
	}
	start(options: IOptions): void {
		let setting = { ...this, ...options }
		this.init(setting)
	}

	stop(options: IOptions): void {
		let setting = { ...this, ...options }
		let element: HTMLElement | null = document.querySelector('.progress-bar')
		if (element) {
			element.style.animation = 'loading-stop 1s forwards'
			setTimeout(() => {
				this.removeElement(
					`#Elf-root${setting.name ? `[data-name=${setting.name}]` : ''}`
				)
			}, 1000)
		}
	}
}

const Elf = new LoadingElf()


export default Elf