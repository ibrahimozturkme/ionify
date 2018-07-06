(function($){
	"use strict"

	var ionify_count	= 0
	$.ionify	= function(param){
		ionify_count++

		/* Defaults */
		var defaults	= {
			type		: 'normal',
			theme	: 'default',
		}

		var ionify_type	= (param.type) ? param.type : defaults.type
		
		if(!$('#ionify').length){
			var ionify	= document.createElement('div')
			ionify.setAttribute('id', 'ionify')
			document.body.appendChild(ionify)
		}
	
		var ionify_header	= ''
		if(param.notification.header){
			var	ionify_header_icon	= '',
				ionify_header_title	= (param.notification.header.title) ? '<div class="ionify_title">' + param.notification.header.title + '</div>' : '',
				ionify_header_time	= (param.notification.header.time) ? '<div class="ionify_time">' + param.notification.header.time + '</div>' : ''

			if(param.notification.header.icon){
				if(param.notification.header.icon.url)
					ionify_header_icon	= '<img src="' + param.notification.header.icon.url + '">'

				if(param.notification.header.icon.class)
					ionify_header_icon	= '<i class="' + param.notification.header.icon.class + '"></i>'
					
				if(param.notification.header.icon.material)
					ionify_header_icon	= '<i class="material-icons">' + param.notification.header.icon.material + '</i>'

				ionify_header_icon	= '<div class="ionify_icon">' + ionify_header_icon + '</div>'
			}

			ionify_header	= '<div class="ionify_header">' + ionify_header_icon + ionify_header_title + ionify_header_time  + '</div>'

		}

		var ionify_body	= ''
		if(param.notification.body)
			var	ionify_body_content			= '',
				ionify_body_progress_detail	= '',
				ionify_body_progressbar		= '',
				ionify_body_time			= (param.notification.body.time) ? '<div class="ionify_time">' + param.notification.body.time + '</div>' : '',
				ionify_body_avatar			= (param.notification.body.avatar) ? '<img src="' + param.notification.body.avatar.url + '" alt="" class="ionify_avatar">' : '',
				ionify_body_title			= (param.notification.body.title) ? '<div class="ionify_title">' + param.notification.body.title + '</div>' : '',
				ionify_body_text			= (param.notification.body.text) ? '<div class="ionify_text">' + param.notification.body.text + '</div>' : ''

			if(ionify_type == 'normal' || ionify_type == 'prompt'){
				ionify_body_content		+= (param.notification.body.avatar) ? (param.notification.body.avatar.direction == 'left') ? ionify_body_avatar : '' : ''
				ionify_body_content		+= '<div class="ionify_content">' + ionify_body_title + ionify_body_text + '</div>'
				ionify_body_content		+= (param.notification.body.avatar) ? (param.notification.body.avatar.direction == 'right') ? ionify_body_avatar : '' : ''
			}
			
			if(ionify_type == 'progress'){
				ionify_body_progress_detail	= '<div class="ionify_details">' + ionify_body_title + ionify_body_time + '</div>'
				ionify_body_progressbar		= '<progress min="' + param.notification.body.progress.min + '" max="' + param.notification.body.progress.max + '" value="' + param.notification.body.progress.now + '"><div class="ionify_progress_bar"><span style="width: ' + param.notification.body.progress.now + '%;">Progress: ' + param.notification.body.progress.now + '%</span></div></progress>'
				ionify_body_content			+= '<div class="ionify_progress">' + ionify_body_progress_detail + ionify_body_progressbar + '</div>'
			}

			ionify_body	= '<div class="ionify_body">' + ionify_body_content + '</div>'

		var ionify_footer	= ''
		if(param.notification.footer){

			var ionify_footer_buttons	= ''
			if(param.notification.footer.buttons){
				for(var i = 0; i < param.notification.footer.buttons.length; i++){
					if(param.notification.footer.buttons[i]){
						var	text		= param.notification.footer.buttons[i].text,
							type		= param.notification.footer.buttons[i].onType,
							callback	= param.notification.footer.buttons[i].onCallback

						ionify_footer_buttons	+= '<button class="ionify_' + ionify_count + '_' + i + '">' + text + '</button>'
						$('.ionify_1_1' + ionify_count + '_' + i).on(type, callback)
					}
				}
			}

			var ionify_footer_prompt	= ''
			if(param.notification.footer.input){
				ionify_footer_prompt	= '<div class="ionify_prompt"><input type="text" placeholder="' + param.notification.footer.input.placeholder + '"><button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/><path d="M0 0h24v24H0z" fill="none"/></svg></button></div>'
			}
			
			ionify_footer_buttons	= '<div class="ionify_buttons">' + ionify_footer_buttons + '</div>'
			ionify_footer	= '<div class="ionify_footer">' + ionify_footer_buttons + ionify_footer_prompt + '</div>'
		}
		var	notification	= '<div class="ionify ' + ionify_type + '">' + ionify_header + ionify_body + ionify_footer + '</div>'

		/* Append ionify */
		$('#ionify').append(notification)
	}

})(jQuery)