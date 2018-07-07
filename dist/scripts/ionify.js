(function($){

	var	ionify_count	= 0;
	this.ionify	= function(){

		var defaults	= {
			theme			: 'default',
			close_button		: true,
			timeout			: 5000,
			max_notification	: 3,
			group			: false
		}

		if(arguments[0] && typeof arguments[0] === "object"){
			this.options = extendDefaults(defaults, arguments[0])
		}

		function extendDefaults(source, properties){
			var property;
			for(property in properties){
				if(properties.hasOwnProperty(property)){
					source[property]	= properties[property];
				}
			}
			return source;
		}

		/* ionify Wrappers */
		if(!$('#ionify').length){
			$('<div id="ionify"></div>').appendTo('body')
		}
		
		this.notification	= function(args){
			var notification	= ''
			ionify_count++;

			this.notification.header	= function(header){
				var header_output	= ''

				this.header.icon		= function(icon){
					var icon_output	= ''
					if(icon){
						if(icon.url){
							icon_output	= '<img src="' + icon.url + '">'
						}

						if(icon.class){
							icon_output	= '<i class="' + icon.class + '"></i>'
						}
							
						if(icon.material){
							icon_output	= '<i class="material-icons">' + icon.material + '</i>'
						}
					}
					icon_output	= '<div class="ionify_icon">' + icon_output + '</div>';
					return icon_output;
				}
				
				this.header.title		= function(title){
					return '<div class="ionify_title">' + title + '</div>';
				}
				
				this.header.time		= function(time){
					return '<div class="ionify_time">' + time + '</div>';
				}

				this.header.close_button	= function(){
					return '<button class="ionify_close" data-index="' + ionify_count + '"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg></button>';
				}

				this.header.ionify_collapse_button	= function(){
					return '<button class="ionify_collapse_button" data-index="' + ionify_count + '"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z"/><path fill="none" d="M0,0h24v24H0V0z"/></svg></button>';
				}

				var	icon				= (header.icon) ? this.header.icon(header.icon) : '',
					title			= (header.title) ? this.header.title(header.title) : '',
					time				= (header.time) ? this.header.time(header.time) : '',
					close_button		= (defaults.close_button) ? this.header.close_button() : false,
					collapse_button	= this.header.ionify_collapse_button()

				header_output	= '<div class="ionify_header">' + icon + title + time + close_button + collapse_button + '</div>'
				return header_output;
			}

			this.notification.body	= function(body){
				var body_output	= ''

				this.body.title	= function(title){
					return '<div class="ionify_title">' + title + '</div>';
				}

				this.body.text		= function(text){
					return '<div class="ionify_text">' + text + '</div>'
				}

				this.body.time		= function(time){
					return '<div class="ionify_time">' + time + '</div>'
				}
				
				this.body.icon		= function(icon){
					var output	= ''
					if(icon){
						if(icon.url){
							output	= '<img src="' + icon.url + '" alt="" class="ionify_avatar">'
						}

						if(icon.class){
							output	= '<i class="' + icon.class + '"></i>'
						}
							
						if(icon.material){
							output	= '<i class="material-icons">' + icon.material + '</i>'
						}
					}
					output	= '<div class="ionify_icon">' + output + '</div>';
					return output;
				}

				this.body.progress	= function(progress){
					return	'<progress min="' + progress.min + '" max="' + progress.max + '" value="' + progress.now + '"></progress>'
				}

				var	title	= (body.title) ? this.body.title(body.title) : '',
					text		= (body.text) ? this.body.text(body.text) : '',
					time		= (body.time) ? this.body.time(body.time) : '',
					icon		= (body.icon) ? this.body.icon(body.icon) : '',
					progress	= (body.progress) ? this.body.progress(body.progress) : '',
					content	= ''

				if(args.type == 'normal' || args.type == 'prompt'){
					content	= '<div class="ionify_content">' + title + text + '</div>'
				}

				if(args.type == 'progress'){
					var	details	= '<div class="ionify_details">' + title + time + '</div>',
						content	= '<div class="ionify_progress">' + details + progress + '</div>'
				}
				if(body.icon == undefined){
					body_output	= '<div class="ionify_body">' + content + '</div>'
				}else{
					body_output	= (body.icon.direction == 'left') ? '<div class="ionify_body">' + icon + content + '</div>' : '<div class="ionify_body">' + content + icon + '</div>'
				}
				return body_output;
			}
			
			this.notification.footer	= function(footer){
				var footer_output	= ''

				this.footer.buttons	= function(buttons){
					var buttons_output	= ''
					for(var i = 0; i < buttons.length; i++){
						if(buttons[i]){
							buttons_output	+= '<button class="ionify_button" data-index="' + ionify_count + '_' + i + '">' + buttons[i].text + '</button>'
						}
					}
					buttons_output	= '<div class="ionify_buttons">' + buttons_output + '</div>'
					return buttons_output;
				}

				this.footer.input	= function(input){
					var input_output	= ''

					this.input.button	= function(button){
						var button_output = ''

						this.button.icon		= function(icon){
							var icon_output	= ''
							if(icon){
								if(icon.url){
									icon_output	= '<img src="' + icon.url + '" alt="" class="ionify_avatar">'
								}
		
								if(icon.class){
									icon_output	= '<i class="' + icon.class + '"></i>'
								}
									
								if(icon.material){
									icon_output	= '<i class="material-icons">' + icon.material + '</i>'
								}
							}
							icon_output	= '<div class="ionify_icon">' + icon_output + '</div>'
							return icon_output;
						}
						
						var icon		= (input.button) ? this.button.icon(button.icon) : ''
						button_output	= '<button class="ionify_prompt_button" type="button" data-index="' + ionify_count + '">' + icon + '</button>'
						return button_output;
					}

					var	display		= (footer.input.display) ? 'show' : '',
						input_output	= '<input type="text" class="ionify_prompt_input" data-index="' + ionify_count + '" placeholder="' + input.placeholder + '">',
						button		= (input.button) ? this.input.button(input.button) : ''
						

					input_output	= '<div class="ionify_prompt ' + display + '">' + input_output + button + '</div>'
					return input_output;
				}

				if(footer){
					var	buttons	= (footer.buttons) ? this.footer.buttons(footer.buttons) : '',
						input	= (footer.input) ? this.footer.input(footer.input) : ''
					
					footer_output	= '<div class="ionify_footer">' + buttons + input + '</div>'
				}
				return footer_output;
			}

			this.notification.sound	= function(sound){
				sound	= (args.sound) ? args.sound : defaults.sound
				return '<audio controls autoplay><source src="' + sound + '" type="audio/mpeg"></audio>'
			}

			var	header	= this.notification.header(args.header),
				body		= this.notification.body(args.body),
				footer	= this.notification.footer(args.footer),
				sound	= this.notification.sound(args.sound),
				theme	= (args.theme) ? args.theme : defaults.theme

			notification	= '<div class="ionify ' + theme + '">' + header + body + footer + sound + '</div>'
			this.add(notification)
	
			if(args.footer){
				this.prompt(args)
				this.buttons(args)
			}

			this.group()

		}

		ionify.prototype.add			= function(notification){
			$(notification).appendTo('#ionify').delay(100).queue(function(){
				ionify.prototype.show($(this))
				ionify.prototype.close($(this))
			})
		}
		
		ionify.prototype.remove			= function(notification){
			setTimeout(function(){
				notification.remove()
				ionify_count--
				ionify.prototype.group()
			}, 300)
		}
	
		ionify.prototype.removeAll 		= function(){
			$('#ionify .ionify').each(function(i, e){
				ionify.prototype.remove(e)
			})
		}

		ionify.prototype.show			= function(notification){
			notification.addClass('show')
			ionify.prototype.hide(notification)
		}
	
		ionify.prototype.hide			= function(notification, timeout = true){
			if(timeout){
				setTimeout(function(){
					notification.removeClass('show')
					ionify.prototype.remove(notification)
				}, defaults.timeout)
			}else{
				notification.removeClass('show')
				ionify.prototype.remove(notification)
			}
		}

		ionify.prototype.close			= function(notification){
			$(notification).find('.ionify_close').on('click', function(){
				ionify.prototype.hide(notification, false)
			})
		}

		ionify.prototype.buttons			= function(args){
			if(args.footer.buttons){
				for(var i = 0; i < args.footer.buttons.length; i++){
					if(args.footer.buttons[i]){
						var	eClass	= '.ionify_button[data-index="' + ionify_count + '_' + i + '"]',
							type		= args.footer.buttons[i].onType,
							callback	= args.footer.buttons[i].onCallback
						
						$(eClass).on(type, callback)
					}
				}
			}
		}

		ionify.prototype.prompt			= function(args){
			if(args.footer.input){
				var	type		= args.footer.input.onType,
					callback	= args.footer.input.onCallback

				$('.ionify_prompt_input[data-index="' + ionify_count + '"]').on(type, callback)

				if(args.footer.input.button){
					var	type		= args.footer.input.button.onType,
						callback	= args.footer.input.button.onCallback
					$('.ionify_prompt_button[data-index="' + ionify_count + '"]').on(type, callback)
				}
			}
		}

		ionify.prototype.group			= function(args){
			defaults.group	= defaults.max_notification <= ionify_count
			if(defaults.group){
				$('#ionify .ionify').addClass('collapse')
				$('#ionify .ionify .ionify_header').on('click', function(){
					if($(this).parents('.ionify').hasClass('collapse')){
						$('#ionify .ionify:not(:eq(' + $(this).parents('.ionify').index() + '))').addClass('collapse')
						$(this).parents('.ionify').removeClass('collapse')
					}else{
						if(defaults.group){
							$(this).parents('.ionify').addClass('collapse')
						}else{
							$(this).parents('.ionify').removeClass('collapse')
						}
					}
				})
			}else{
				$('#ionify .ionify').removeClass('collapse')
			}
		}

	}

	 
})(jQuery) 