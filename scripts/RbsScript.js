var pass = "";

function getUserDetails() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {		
		if (this.readyState == 4 && this.status == 200) {			
		
			var a = this.responseText;
			var b = JSON.parse(a);	

			if(b.length > 0)
			{
				var nameText = document.getElementById("txtName");
				
				 b.forEach(function(element) {
				  if (element.hasOwnProperty("empName")) {
					var val = element["empName"];
					nameText.value = val;		
				  }
				  
				  if (element.hasOwnProperty("location")) {
					var val = element["location"];
					document.getElementById("drpdwnLocation").value = val;		
					populateSubLocation();
				  }
				  
				  if (element.hasOwnProperty("sublocation")) {
					var val = element["sublocation"];
					document.getElementById("drpdwnSubLocation").value = val;		
				  }
				  
				  if (element.hasOwnProperty("businessgroup")) {
					var val = element["businessgroup"];
					document.getElementById("drpdwnBusinessGroup").value = val;	
					populateBusinessUnit();
				  }
				  
				  if (element.hasOwnProperty("businessunit")) {
					var val = element["businessunit"];
					document.getElementById("drpdwnBusinessUnit").value = val;		
				  }
				  
				  if(element.hasOwnProperty("isAdmin")) {
					var val = element["isAdmin"];
					if(val.toLowerCase() == "yes")
					{
						document.getElementById("adminPanel").style.display = 'block';
						document.getElementById("innovationFields").style.display = 'none';
					}
					else
					{
						document.getElementById("adminPanel").style.display = 'none';
						document.getElementById("innovationFields").style.display = 'block';
					}				
				  }
				  else
				  {
					  document.getElementById("adminPanel").style.display = 'none';
					  document.getElementById("innovationFields").style.display = 'block';
				  }
				  
				  if (element.hasOwnProperty("password")){
					  pass = element["password"];	
				  }
				});
			}
			else
			{
				document.getElementById("txtName").value = "";
				document.getElementById("adminPanel").style.display = 'none';
				document.getElementById("innovationFields").style.display = 'block';
			}
		}
	};
	xhttp.open("GET", "https://twswgb46ui.execute-api.ap-south-1.amazonaws.com/prod/getuserdetails?email=" + document.getElementById("txtEmail").value, true);	
	xhttp.send();
}

function populateLocation() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {		
		if (this.readyState == 4 && this.status == 200) {			
		
			var a = this.responseText;
			var b = JSON.parse(a);			
			var locationSelect = document.getElementById("drpdwnLocation");
			var blank = document.createElement("option");
			blank.textContent = "";
			blank.value = "blank";
			locationSelect.appendChild(blank);	
			
			 b.forEach(function(element) {
			  if (element.hasOwnProperty("Name")) {
				var val = element["Name"];
				var el = document.createElement("option");
				el.textContent = val;
				el.value = val;
				locationSelect.appendChild(el);				
			  }
			});

			populateSubLocation();
		}
	};
	xhttp.open("GET", "https://twswgb46ui.execute-api.ap-south-1.amazonaws.com/prod/getlocation", true);	
	xhttp.send();
}

function populateSubLocation() {
	
	document.getElementById("drpdwnSubLocation").innerHTML = "";
	
	if(document.getElementById("drpdwnLocation").value != "") {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {		
			if (this.readyState == 4 && this.status == 200) {			
			
				var a = this.responseText;
				var b = JSON.parse(a);		

				if(b.length > 0)
				{
					var SublocationSelect = document.getElementById("drpdwnSubLocation");
					var blank = document.createElement("option");
					blank.textContent = "";
					blank.value = "blank";
					SublocationSelect.appendChild(blank);	
					
					 b.forEach(function(element) {
					  if (element.hasOwnProperty("Name")) {
						var val = element["Name"];
						var el = document.createElement("option");
						el.textContent = val;
						el.value = val;
						SublocationSelect.appendChild(el);				
					  }
					});
				}			
			}
		};	
		
		xhttp.open("GET", "https://twswgb46ui.execute-api.ap-south-1.amazonaws.com/prod/getsublocation?location=" + document.getElementById("drpdwnLocation").value, false);	
		xhttp.send();
	}
}

function populateBusinessGroup() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {		
		if (this.readyState == 4 && this.status == 200) {			
		
			var a = this.responseText;
			var b = JSON.parse(a);			
			var businessGroupSelect = document.getElementById("drpdwnBusinessGroup");
			var blank = document.createElement("option");
			blank.textContent = "";
			blank.value = "blank";
			businessGroupSelect.appendChild(blank);	
					
			 b.forEach(function(element) {
			  if (element.hasOwnProperty("Name")) {
				var val = element["Name"];
				var el = document.createElement("option");
				el.textContent = val;
				el.value = val;
				businessGroupSelect.appendChild(el);				
			  }
			});

			populateBusinessUnit();
		}
	};
	xhttp.open("GET", "https://twswgb46ui.execute-api.ap-south-1.amazonaws.com/prod/getbusinessarea", true);	
	xhttp.send();
}

function populateBusinessUnit() {
	
	document.getElementById("drpdwnBusinessUnit").innerHTML = "";
	
	if(document.getElementById("drpdwnBusinessGroup").value != "") {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {		
			if (this.readyState == 4 && this.status == 200) {			
			
				var a = this.responseText;
				var b = JSON.parse(a);		

				if(b.length > 0)
				{
					var BUSelect = document.getElementById("drpdwnBusinessUnit");
					
					var blank = document.createElement("option");
					blank.textContent = "";
					blank.value = "blank";
					BUSelect.appendChild(blank);	
					
					 b.forEach(function(element) {
					  if (element.hasOwnProperty("Name")) {
						var val = element["Name"];
						var el = document.createElement("option");
						el.textContent = val;
						el.value = val;
						BUSelect.appendChild(el);				
					  }
					});
				}			
			}
		};	
		
		xhttp.open("GET", "https://twswgb46ui.execute-api.ap-south-1.amazonaws.com/prod/getbusinessunit?businessarea=" + document.getElementById("drpdwnBusinessGroup").value, false);	
		xhttp.send();
	}
}

function populateBenefit() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {		
		if (this.readyState == 4 && this.status == 200) {			
		
			var a = this.responseText;
			var b = JSON.parse(a);			
			var benefitSelect = document.getElementById("drpdwnBenefit");
			var blank = document.createElement("option");
			blank.textContent = "";
			blank.value = "blank";
			benefitSelect.appendChild(blank);	
			
			 b.forEach(function(element) {
			  if (element.hasOwnProperty("Name")) {
				var val = element["Name"];
				var el = document.createElement("option");
				el.textContent = val;
				el.value = val;
				benefitSelect.appendChild(el);				
			  }
			});
		}
	};
	xhttp.open("GET", "https://twswgb46ui.execute-api.ap-south-1.amazonaws.com/prod/getbenefit", true);	
	xhttp.send();
}

function populateCategory() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {		
		if (this.readyState == 4 && this.status == 200) {			
		
			var a = this.responseText;
			var b = JSON.parse(a);			
			var categorySelect = document.getElementById("drpdwnCategory");
			
			var blank = document.createElement("option");
			blank.textContent = "";
			blank.value = "blank";
			categorySelect.appendChild(blank);
			
			 b.forEach(function(element) {
			  if (element.hasOwnProperty("Name")) {
				var val = element["Name"];
				var el = document.createElement("option");
				el.textContent = val;
				el.value = val;
				categorySelect.appendChild(el);				
			  }
			});
		}
	};
	xhttp.open("GET", "https://twswgb46ui.execute-api.ap-south-1.amazonaws.com/prod/getcategory", true);	
	xhttp.send();
}

function populateTechnology() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {		
		if (this.readyState == 4 && this.status == 200) {			
		
			var a = this.responseText;
			var b = JSON.parse(a);			
			var technologySelect = document.getElementById("drpdwnTechnology");
			
			var blank = document.createElement("option");
			blank.textContent = "";
			blank.value = "blank";
			technologySelect.appendChild(blank);
			
			 b.forEach(function(element) {
			  if (element.hasOwnProperty("Name")) {
				var val = element["Name"];
				var el = document.createElement("option");
				el.textContent = val;
				el.value = val;
				technologySelect.appendChild(el);				
			  }
			});
		}
	};
	xhttp.open("GET", "https://twswgb46ui.execute-api.ap-south-1.amazonaws.com/prod/gettechnology", true);	
	xhttp.send();
}

function Submit() {
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {		
		if (this.readyState == 4 && this.status == 200) {			
		
			var a = this.responseText;
			var b = JSON.parse(a);		

			if(b.length > 0)
			{
				var locationSelect = document.getElementById("drpdwnSubLocation");
				
				 b.forEach(function(element) {
				  if (element.hasOwnProperty("Name")) {
					var val = element["Name"];
					var el = document.createElement("option");
					el.textContent = val;
					el.value = val;
					locationSelect.appendChild(el);				
				  }
				});
			}	

			document.getElementById("submitionLabel").style.display = 'block';
		}
	};	
	
	xhttp.open("POST", "https://twswgb46ui.execute-api.ap-south-1.amazonaws.com/prod/createinnovation", true);	
	var data = {
		"benefit": document.getElementById("drpdwnBenefit").value,
		"category": document.getElementById("drpdwnCategory").value,
		"description1": document.getElementById("txtareaDescription").value,
		"email": document.getElementById("txtEmail").value,
		"technology": document.getElementById("drpdwnTechnology").value,
		"title": document.getElementById("txtTitle").value,
		"empName": document.getElementById("txtName").value,
		"estimatedcost" : document.getElementById("txtEstimatedcost").value,
		"timetomarket" : document.getElementById("txtTimetomarket").value,
		"businessgroup" : document.getElementById("drpdwnBusinessGroup").value,
		"businessunit" : document.getElementById("drpdwnBusinessUnit").value,
		"location" : document.getElementById("drpdwnLocation").value,
		"sublocation" : document.getElementById("drpdwnSubLocation").value
	};
	xhttp.send(JSON.stringify(data));
}

function Reset() {
	
	document.getElementById("txtEmail").value = "";
	document.getElementById("txtName").value = "";
	document.getElementById("drpdwnLocation").value = "";
	document.getElementById("drpdwnSubLocation").value = "";
	document.getElementById("drpdwnBusinessGroup").value = "";
	document.getElementById("drpdwnBusinessUnit").value = "";
	document.getElementById("txtPass").value = "";
	document.getElementById("drpdwnBenefit").value = "";
	document.getElementById("drpdwnCategory").value = "";
	document.getElementById("drpdwnTechnology").value = "";
	document.getElementById("txtEstimatedcost").value = "";
	document.getElementById("txtTimetomarket").value = "";
	document.getElementById("txtareaDescription").value = "";
	document.getElementById("description1").value = "";
	document.getElementById("txtTitle").value = "";
	
	document.getElementById("submitionLabel").style.display = 'none';
}

function AdminSubmit() {
	
	//Validate Password
	var inputPass = document.getElementById("txtPass").value;
	
	if(inputPass == pass)
	{
		document.getElementById("reportDash").style.display = 'block';
		document.getElementById("wrongPassLabel").style.display = 'none';
	}
	else
	{
		document.getElementById("reportDash").style.display = 'none';
		document.getElementById("wrongPassLabel").style.display = 'block';
	}
	
}


