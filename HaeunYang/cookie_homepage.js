 // cookie_homepage.js/ Haeun Yang/ 14/10/2023
		//get cookie
		function getCookie_dateTime(category_type) {
			var category = category_type+"=";
			var cookies_all = document.cookie;
			var cookie_array = cookies_all.split(";");
			for(var i = 0; i<cookie_array.length; i++) {
				var cookie = cookie_array[i];
				while (cookie.charAt(0) == ' ') {
					cookie = cookie.substring(1);
				}
				if (cookie.indexOf(category) == 0) {
					var gmt_index = cookie.indexOf('GMT');
					var dateTime = cookie.substring(category.length,gmt_index);
					return dateTime;
				}
			}
		}
		
		// view cookie for homepage
		function viewed_cookie() {
			var viewed;
			if(document.cookie == '') {
				viewed = "Last viewed: ";
			} else {
				var video_dateTime = getCookie_dateTime('video');
				var tabletop_dateTime = getCookie_dateTime('tabletop');
				if(video_dateTime==''&&tabletop_dateTime!='')
				{
					viewed = "Last viewed: Tabletop Game - "+tabletop_dateTime;
				}
				else if(video_dateTime!=''&&tabletop_dateTime=='')
				{
					viewed = "Last viewed: Video Game - "+video_dateTime;
				}
				else if(video_dateTime!=''&&tabletop_dateTime!='')
				{
					if(video_dateTime<tabletop_dateTime) {
						viewed = "Last viewed: Tabletop Game - "+tabletop_dateTime;
					} else {
						viewed = "Last viewed: Video Game - "+video_dateTime;
					}
				}
				else 
				{
					viewed = "Last viewed: ";
				}
			}
			if(document.getElementById("viewed_id")) {
				document.getElementById("viewed_id").innerHTML = viewed;
			}
		}