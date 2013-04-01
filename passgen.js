function PassGenCtrl($scope) {
  
	
	$scope.password = '';
	$scope.type = '...';
	

	var filePath = "dictionary.txt";
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET",filePath,false);
	xmlhttp.send(null);
	var data = xmlhttp.responseText;
	$scope.array = data.split('\n');
	

	$scope.generatePassword = function() {
		var tempPassword = '';
		if($scope.type.indexOf("characters") != -1) {
			for(var i = 0; i < $scope.num; i++) {
				var temp = 0;
				if($scope.type == "characters-lower") {
					while(!(temp > 97 && temp < 122))
						temp = Math.floor(Math.random() * 74) + 48;
				}
				if($scope.type == "characters-upper") {
					while(!((temp > 65 && temp < 90) || (temp > 97 && temp < 122)))
						temp = Math.floor(Math.random() * 74) + 48;
				}
				if($scope.type == "characters-mixed") {
					while(!((temp > 48 && temp < 57) || (temp > 65 && temp < 90) || (temp > 97 && temp < 122)))
						temp = Math.floor(Math.random() * 74) + 48;
				}
				
				tempPassword += String.fromCharCode(temp);
			}
		}
		else if($scope.type.indexOf("words") != -1) {
			for(var i = 0; i < $scope.num; i++)
			{
				var tempWord = $scope.array[Math.floor(Math.random() * $scope.array.length)];
				if($scope.type == "words")
				{
					tempPassword += tempWord;	
				}
				if($scope.type == "words-camelcase")
				{
					tempPassword += tempWord.charAt(0).toUpperCase() + tempWord.slice(1);
				}
				if($scope.type == "words-dashes")
				{
					tempPassword += tempWord + "-";
				}
							
			}

		}
		else
		{
			tempPassword = "Please make a selection";
		}
		// if($scope.button == "generate")
			$scope.password = tempPassword;
		
	};


}
