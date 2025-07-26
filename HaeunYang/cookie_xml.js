 // cookie_xml.js/ Haeun Yang/ 14/10/2023
 
		// set cookie
		function setCookie(category_type) {
			const visited = new Date();
			<!-- category viewed date and time -->
			document.cookie = category_type+"="+visited;
		}
		
		// get cookie
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
		
		// set and get cookie
		function Cookie(category_type) {
			var category = category_type;
			setCookie(category);
			var dateTime = getCookie_dateTime(category);
			var viewed = "Last viewed: "+dateTime;
			document.getElementById("viewed_id").innerHTML = viewed;
		}