/*!
 * loading-effect-elf
 * Copyright(c) 2020 天火流光 <gc.thlg@gmail.com>
 * MIT Licensed
 */
'use strict'
var __assign =
	(this && this.__assign) ||
	function () {
		__assign =
			Object.assign ||
			function (t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i]
					for (var p in s)
						if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
				}
				return t
			}
		return __assign.apply(this, arguments)
	}
exports.__esModule = true
var LoadingElf = (function () {
	function LoadingElf() {
		this.type = 'article_loaded'
		this.name = ''
		this.mask_bgcolor = 'rgba(0,0,0,0.3)'
		this.line_color = 'red'
		this.icon_size = ''
		this.icon_className = 'icon icon-rotate'
		this.icon_Innerhtml = ''
		this.el = 'body'
	}
	LoadingElf.prototype.init = function (options) {
		var parent = document.querySelector(options.el)
		var child = document.createElement('div')
		child.id = 'Elf-root'
		child.className = 'elf-coat'
		if (options.name) {
			child.setAttribute('data-name', options.name)
		}
		if (options.type === 'article_loaded') {
			child.innerHTML =
				'<div class="groove"><div class="progress-bar"></div></div><div class="icon-coat"><div class="' +
				options.icon_className +
				' rotate"\n\t\t\tstyle="' +
				(options.icon_size.trim() === ''
					? ''
					: 'width:' +
					  options.icon_size +
					  ';height:' +
					  options.icon_size +
					  ';') +
				'"></div></div>'
		}
		if (options.type === 'mask_loaded') {
			child.innerHTML =
				'<div class="masking"><div class="' +
				(options.icon_Innerhtml.trim() === '' ? options.icon_className : '') +
				' rotate ">' +
				options.icon_Innerhtml +
				'</div></div>'
		}
		if (!parent) {
			parent = document.querySelector('body')
		}
		parent.appendChild(child)
	}
	LoadingElf.prototype.removeElement = function (selector) {
		var child = document.querySelector(selector)
		if (child) {
			var parentnode = child.parentNode
			parentnode.removeChild(child)
		}
	}
	LoadingElf.prototype.start = function (options) {
		var setting = __assign(__assign({}, this), options)
		this.init(setting)
	}
	LoadingElf.prototype.stop = function (options) {
		var _this = this
		var setting = __assign(__assign({}, this), options)
		var element = document.querySelector('.progress-bar')
		if (element) {
			element.style.animation = 'loading-stop 1s forwards'
			setTimeout(function () {
				_this.removeElement(
					'#Elf-root' + (setting.name ? '[data-name=' + setting.name + ']' : '')
				)
			}, 1000)
		}
	}
	return LoadingElf
})()
var Elf = new LoadingElf()
exports['default'] = Elf
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1lZmZlY3QtZWxmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvYWRpbmctZWZmZWN0LWVsZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBaUJBO0lBa0RDO1FBM0NBLFNBQUksR0FBVyxnQkFBZ0IsQ0FBQTtRQU0vQixTQUFJLEdBQVcsRUFBRSxDQUFBO1FBTWpCLGlCQUFZLEdBQVcsaUJBQWlCLENBQUE7UUFNeEMsZUFBVSxHQUFXLEtBQUssQ0FBQTtRQU0xQixjQUFTLEdBQVcsRUFBRSxDQUFBO1FBTXRCLG1CQUFjLEdBQVcsa0JBQWtCLENBQUE7UUFNM0MsbUJBQWMsR0FBVyxFQUFFLENBQUE7UUFNM0IsT0FBRSxHQUFXLE1BQU0sQ0FBQTtJQUNKLENBQUM7SUFFaEIseUJBQUksR0FBSixVQUFLLE9BQWlCO1FBQ3JCLElBQUksTUFBTSxHQUF1QixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNuRSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3pDLEtBQUssQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFBO1FBQ3JCLEtBQUssQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFBO1FBQzVCLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDN0M7UUFDRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLEVBQUU7WUFDdEMsS0FBSyxDQUFDLFNBQVMsR0FBRyx5R0FBZ0csT0FBTyxDQUFDLGNBQWMsa0NBQy9ILE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUcsRUFBRSxDQUFBLENBQUMsQ0FBQSxFQUFFLENBQUEsQ0FBQyxDQUFBLFdBQVMsT0FBTyxDQUFDLFNBQVMsZ0JBQVcsT0FBTyxDQUFDLFNBQVMsTUFBRyxxQkFBZ0IsQ0FBQTtTQUNuSDtRQUNELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxhQUFhLEVBQUU7WUFDbkMsS0FBSyxDQUFDLFNBQVMsR0FBRywwQ0FDakIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsb0JBQ3RELE9BQU8sQ0FBQyxjQUFjLGlCQUFjLENBQUE7U0FDakQ7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1osTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFnQixDQUFBO1NBQ3REO1FBQ0QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMxQixDQUFDO0lBQ0Qsa0NBQWEsR0FBYixVQUFjLFFBQWdCO1FBQzdCLElBQUksS0FBSyxHQUF1QixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2hFLElBQUksS0FBSyxFQUFFO1lBQ1YsSUFBSSxVQUFVLEdBQVMsS0FBSyxDQUFDLFVBQWtCLENBQUE7WUFDL0MsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM3QjtJQUNGLENBQUM7SUFDRCwwQkFBSyxHQUFMLFVBQU0sT0FBaUI7UUFDdEIsSUFBSSxPQUFPLHlCQUFRLElBQUksR0FBSyxPQUFPLENBQUUsQ0FBQTtRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ25CLENBQUM7SUFFRCx5QkFBSSxHQUFKLFVBQUssT0FBaUI7UUFBdEIsaUJBV0M7UUFWQSxJQUFJLE9BQU8seUJBQVEsSUFBSSxHQUFLLE9BQU8sQ0FBRSxDQUFBO1FBQ3JDLElBQUksT0FBTyxHQUF1QixRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQ3pFLElBQUksT0FBTyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsMEJBQTBCLENBQUE7WUFDcEQsVUFBVSxDQUFDO2dCQUNWLEtBQUksQ0FBQyxhQUFhLENBQ2pCLGVBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWMsT0FBTyxDQUFDLElBQUksTUFBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUUsQ0FDL0QsQ0FBQTtZQUNGLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUNSO0lBQ0YsQ0FBQztJQUNGLGlCQUFDO0FBQUQsQ0FBQyxBQWxHRCxJQWtHQztBQUVELElBQU0sR0FBRyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUE7QUFHNUIscUJBQWUsR0FBRyxDQUFBIn0=
