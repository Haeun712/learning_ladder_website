 // game_registration.js/ Haeun Yang/ 14/10/2023
 var equipmentcount=2;
 var total=0;
 if(document.getElementById("total_id")) {
 document.getElementById("total_id").value = total+"- Free";
 }
	 
			function addEquipment() {
			var equipmentBox_id = "equipment"+equipmentcount;
			const newbox = document.createElement("div");
			newbox.setAttribute("id",equipmentBox_id);
		
			//add Equiment Name
			const newEquipment_name = "equipment_name_id"+equipmentcount;
            const newNamelabel = document.createElement("label");
            newNamelabel.setAttribute("for",newEquipment_name);
            const newName = document.createTextNode("Equipment Name");
            newNamelabel.appendChild(newName);
			const required = document.createElement("span");
			required.setAttribute("class","required");
			const requiredMark = document.createTextNode("*\u00a0\u00a0\u00a0");
			required.appendChild(requiredMark);
			newNamelabel.appendChild(required);
			
			
            const newNameinput = document.createElement("input");
            newNameinput.setAttribute("type", "text");
			newNameinput.setAttribute("id",newEquipment_name);
			const name_name = "equipment_name"+equipmentcount;
            newNameinput.setAttribute("name", name_name);
            newNameinput.setAttribute("required","");
			
            const br1 = document.createElement("br");
            const br2 = document.createElement("br");
            const br3 = document.createElement("br");
            const br4 = document.createElement("br");
			
           //add Equipment Cost
			const newEquipment_cost = "equipment_cost_id"+equipmentcount;
            const newCostlabel= document.createElement("label");
            newCostlabel.setAttribute("for",newEquipment_cost);
            const newCost = document.createTextNode("Equipment Cost\u00a0\u00a0\u00a0");
            newCostlabel.appendChild(newCost);
            
            const newCostinput = document.createElement("input");
            newCostinput.setAttribute("type", "number");
			newCostinput.setAttribute("id",newEquipment_cost);
			const cost_name = "equipment_cost"+equipmentcount;
            newCostinput.setAttribute("name", cost_name);
			newCostinput.setAttribute("class","number_info");
			const caculateTotalFuction = "caculateTotal('"+cost_name+"')"
			newCostinput.setAttribute("onchange",caculateTotalFuction);
            
            const newdeleteButton = document.createElement("input");
            newdeleteButton.setAttribute("type","button");
            newdeleteButton.setAttribute("value","-");
          	newdeleteButton.setAttribute("onclick","deleteEquipment()");
            
			newbox.appendChild(newNamelabel);
            newbox.appendChild(newNameinput);
            newbox.appendChild(br1);
            newbox.appendChild(br2);
            newbox.appendChild(newCostlabel);
            newbox.appendChild(newCostinput);
            newbox.appendChild(newdeleteButton);
            newbox.appendChild(br3);
			newbox.appendChild(br4);
			const target = document.getElementById("equipments");
			target.insertAdjacentElement("beforeend",newbox);
			equipmentcount++;
		}
		
		function deleteEquipment(){
			const lastEquipment = equipmentcount-1;
			
			
			const deleteEquipment_id = "equipment"+lastEquipment;
			const equipment = document.getElementById(deleteEquipment_id);
			equipment.remove();
			equipmentcount--;
			caculateTotal();
		}
		
		// total cost caculation
		function caculateTotal() {
			total=0;
			var cost_value = document.game_form.cost.value;
			if(cost_value == "") {
				cost_value = "0";
			}
			const cost = parseFloat(cost_value);
			total += cost;
			
			for(var i=1;i<equipmentcount;i++) {
				var cost_name = "equipment_cost"+i;
				var equipment_cost_str = document.game_form[cost_name].value;
				if(equipment_cost_str == "") {
					equipment_cost_str = "0";
				}
				var equipment_cost = parseFloat(equipment_cost_str);
				total += equipment_cost;
			}
			
			document.getElementById("total_id").value = total+"- Affordable";
			if(total==0) {
				document.getElementById("total_id").value = total+"- Free";
			} else if(total < 25) {
				if(total<0) {
					document.getElementById("total_id").value = total;
				}else {
					document.getElementById("total_id").value = total+"- Cheap";
				}	
			} else if(total > 100) {
				document.getElementById("total_id").value = total+"- Expensive";
			}
		} 
		
		//total cost validaton
		function totalCostCheck() {
			if(total<0) {
				document.getElementById("error_total").innerHTML="Error: Total cost should be positive.";
				return false;
			} else {
				document.getElementById("error_total").innerHTML="";
				return true;
			}
		}
		
		//review star validation
		function starCheck() {
			var pattern = /^(\d*)[\.]?(\d{1})?$/; 
			var check = "vaild";
			for(var i=1;i<4;i++)
			{
				var star = "star"+i;
				var error = "error_star"+i;
				var star_value = document.game_form[star].value;
				if(star_value!="")
				{
					if(pattern.test(star_value))
					{
						if(star_value>=0&&star_value<=5)
						{
							document.getElementById(error).innerHTML="";
						}
						else
						{
							document.getElementById(error).innerHTML="Error: Star must be a number from 0 to 5.";
							check = "unvalid";
						}
					}
					else
					{
						document.getElementById(error).innerHTML="Error: Star is allowed only to the first decimal place.";
						check = "unvalid";
					}
				}
			}
			if(check=="unvalid")
			{
				return false;
			}
			else
			{
				return true;
			}
		}
		
		// validation star and total cost
		function validation() {
			var star_valid = starCheck();
			var total_valid = totalCostCheck();
			
			if(star_valid && total_valid) {
				return true;
			} else {
				return false;
			}
		}