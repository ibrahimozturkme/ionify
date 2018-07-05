$(document).ready(function(){

	$('body').css({
		'paddingTop'	: $('header nav').outerHeight() + 'px',
		'marginBottom'	: $('.footer').outerHeight() + 'px'
	});
	
	/* Examples */
	$.ionify({
		type			: 'prompt',
		notification	: {
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
				avatar	: {
					url		: 'https://secure.gravatar.com/avatar/efd3ffa5fedfce14ee1ab9709b37f237?s=64&d=mm&r=g',
					direction	: 'left'
				}
			},
			footer	: {
				input		: {
					placeholder	: 'Type Message',
					button			: {
						icon			: {
							material	: 'send',
						},
						onType		: 'click',
						onCallback	: function(){
							alert('send')
						}
					}
				}
			}
		}
	})

	$.ionify({
		type			: 'normal',
		notification	: {
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
			},

		}
	})

	$.ionify({
		type			: 'progress',
		notification	: {
			header	: {
				icon		: {
					material	: 'cloud'
				},
				title	: 'App Name',
				time		: '8 min'
			},
			body		: {
				title	: 'Notification Title',
				time		: '2 seconds left',
				progress	: {
					min	: 0,
					max	: 100,
					now	: 50
				}
			},

		}
	})

	$.ionify({
		type			: 'normal',
		notification	: {
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
				avatar	: {
					url		: 'https://secure.gravatar.com/avatar/efd3ffa5fedfce14ee1ab9709b37f237?s=64&d=mm&r=g',
					direction	: 'left'
				}
			},
			footer	: {
				buttons	: [
					{
						text		: 'Reply',
						onType	: 'click',
						onCallback	: function(){
							alert('click')
						}
					},
					{
						text		: 'Archive',
						onType	: 'hover',
						onCallback	: function(){
							alert('hover')
						}
					}
				]
			}
		}
	})

	$.ionify({
		type			: 'normal',
		notification	: {
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
				avatar	: {
					url		: 'https://secure.gravatar.com/avatar/efd3ffa5fedfce14ee1ab9709b37f237?s=64&d=mm&r=g',
					direction	: 'right'
				}
			},

		}
	})

})