/**
	Custom scripts for global use
 **/
 //Contact Form
	var contactForm = document.getElementById( 'contactForm' );
	var userInfo = $('.questions input').val();
	new stepsForm( contactForm, {
		onSubmit : function( form ) {
			// hide form
			classie.addClass( contactForm.querySelector( '.mainForm-inner' ), 'hide' );
				//url:'https://docs.google.com/spreadsheets/d/15w2DbaKQg0zXHXIYW42_g85XiYvMrSUyqKDwRQsdgHs/edit#gid=0',			
		        if (userInfo !== "") {
		            $.ajax({
		                url: "https://docs.google.com/spreadsheets/d/15w2DbaKQg0zXHXIYW42_g85XiYvMrSUyqKDwRQsdgHs",
		                data: {"entry.1" : userInfo.val()},
		                type: "POST",
		                dataType: "xml",
		                statusCode: {
		                    0: function (){
		                         userInfo.val("");
		                        //Success message
		                    },
		                    200: function (){
		                        userInfo.val("");
		                        //Success Message
		                    }
		                }
		            });
		        }
		        else {
		            console.log('weve got emptry strings'+userInfo);
		        }


			/*
			form.submit()
			or
			AJAX request (maybe show loading indicator while we don't have an answer..)

			<!--Jannaee to do: have script go to google docs form: https://wiki.base22.com/pages/viewpage.action?pageId=72942000-->

			https://docs.google.com/spreadsheets/d/15w2DbaKQg0zXHXIYW42_g85XiYvMrSUyqKDwRQsdgHs/edit#gid=0
			*/

			// let's just simulate something...
			var messageEl = contactForm.querySelector( '.message' );
			messageEl.innerHTML = 'Thank you for your interest.<br /> I\'ll be in touch.<br /> <button>Refresh</button';
			classie.addClass( messageEl, 'show' );
		}
	});
// AJAX call for contact form
// $('#contactForm').click(function(){
//  alert('hello');
// })

        