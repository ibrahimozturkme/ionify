$(document).ready(function(){

	$('body').css({
		'paddingTop'	: $('header nav').outerHeight() + 'px',
		'marginBottom'	: $('.footer').outerHeight() + 'px'
	});

	$.ionify	= new ionify({
		group			: true,
		theme			: 'blue_grey',
		max_notification	: 5,
		timeout			: 1000000,
		sound			: 'dist/sounds/waterdrop.mp3',
	});
	
	/* Examples */
	$.ionify.notification({
		sound	: 'dist/sounds/waterdrop.mp3',
		type		: 'prompt',
		theme	: 'yellow',
		header	: {
			icon		: {
				url	: 'https://image.flaticon.com/icons/svg/252/252035.svg'
			},
			title	: 'App Name',
			time		: '8 min'
		},
		body		: {
			title	: 'Notification Title',
			text		: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
			icon	: {
				material	: 'home'
			}
		},
		footer	: {
			buttons	: [
				{
					text			: 'Reply',
					onType		: 'click',
					onCallback	: function(){
						$(this).parents('.ionify_footer').find('.ionify_buttons').addClass('hidden')
						$(this).parents('.ionify_footer').find('.ionify_prompt').toggleClass('show')
					}
				},
				{
					text			: 'Archive',
					onType		: 'mouseover',
					onCallback	: function(){
						alert('hover')
					}
				}
			],
			input		: {
				show			: false,
				placeholder	: 'Type Message',
				onType		: 'keyup',
				onCallback	: function(e){
					var keyCode	= e.wich || e.keyCode
					if(keyCode == 13){
						alert($(this).val())
					}
				},
				button			: {
					icon			: {
						material	: 'send',
					},
					onType		: 'click',
					onCallback	: function(){
						alert($(this).prev('input').val())
					}
				}
			}
		}
	})

	$.ionify.notification({
		type			: 'normal',
		header	: {
			icon		: {
				material	: 'cloud'
			},
			title	: 'App Name',
			time		: '8 min'
		},
		body		: {
			title	: 'Notification Title',
			text		: 'Lorem Ipsum is simply dummy text of the printing.'
		}
	})

	$.ionify.notification({
		type			: 'progress',
		theme		: 'teal',
		header		: {
			icon		: {
				material	: 'get_app'
			},
			title	: 'Download Manager',
			time		: '68%'
		},
		body		: {
			title	: 'App Name',
			time		: '2 seconds left',
			progress	: {
				min	: 0,
				max	: 100,
				now	: 80
			}
		},
		footer	: {
			buttons	: [{
				text			: 'Cancel',
				onType		: 'click',
				onCallback	: function(){
					alert('Cancel')
				}
			}]
		}
	})

	$.ionify.notification({
		type			: 'normal',
		header	: {
			icon		: {
				url	: 'https://image.flaticon.com/icons/svg/252/252035.svg'
			},
			title	: 'App Name',
			time		: '8 min'
		},
		body		: {
			title	: 'Notification Title',
			text		: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum a optio dolor quas corrupti illo incidunt.',
			icon	: {
				url		: 'https://secure.gravatar.com/avatar/efd3ffa5fedfce14ee1ab9709b37f237?s=64&d=mm&r=g',
				direction	: 'left'
			}
		},
		footer	: {
			buttons	: [
				{
					text			: 'Reply',
					onType		: 'click',
					onCallback	: function(){
						alert('click')
					}
				},
				{
					text			: 'Archive',
					onType		: 'mouseover',
					onCallback	: function(){
						alert('hover')
					}
				}
			]
		}
	})

	$.ionify.notification({
		type			: 'normal',
		header	: {
			icon		: {
				material	: 'cloud'
			},
			title	: 'App Name',
			time		: '8 min'
		},
		body		: {
			title	: 'Notification Title',
			text		: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			icon		: {
				url		: 'https://secure.gravatar.com/avatar/efd3ffa5fedfce14ee1ab9709b37f237?s=64&d=mm&r=g',
				direction	: 'right'
			}
		},

	})
})
