// function button clicked it goes to section in HTML
function scrollToSection() {
  var formsection = document.getElementById("mealPlanForm");
  formsection.scrollIntoView({ behavior: "smooth" });
}

// Creates Web page "on-the-fly".
document.getElementById("generateButton").addEventListener('click',generateMealPlan)
    function generateMealPlan(){
      // Get user input values.
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var goal = document.getElementById('goal').value;
      // Function to get user input from meal table with a loop.
      function getUserInput(dayName, mealName) {
        var mealId = dayName.toLowerCase() + "_" + mealName;
        var userInput = document.getElementById(mealId).value;
        return userInput;
      }

      // Validate email on the form.
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // create the content for the new webpage.
      myText = ("<html>\n<head>\n<title>Your Meal Plan</title>\n");
      myText += ("<link rel='stylesheet' type='text/css' href='styles.css'>");
      myText += ("<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Macondo&display=swap'></link>");
      myText += ("</head>\n<body>\n");
      myText += ("<div id='welcomeContainer'>");
      myText += ("<h1 id='welcomeP'>Hello " + name + ",<br>Here is your meal plan!</h1>");
      myText += ("</div>");
      myText += ("<p id='goalP'>Your Goal for this week is: " + goal + ".</p>");
      myText += ("<table id='mealPlanTable'>");
      myText += ("<tr><th></th><th>Breakfast</th><th>Morning Snack</th><th>Lunch</th><th>Afternoon Snack</th><th>Dinner</th></tr>");
      
      // For loop to get each day.
      var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      var meals = ['breakfast', 'morning_snack', 'lunch', 'afternoon_snack', 'dinner'];

      for(let i = 0; i < days.length; i++) {
        var day = days[i];
        
        myText += ("<tr><td>" + day);
        
        // For loop to get each meal.
        for(let j = 0; j < meals.length; j++) {
          var meal = meals[j];
          var mealValue = getUserInput(day, meal);

          myText += "</td><td>" + mealValue;
        }

        myText += "</td></tr>";
        }

        myText += ("</table>");

        // Add buttons: print and download
        myText += ("<div id='printContainer'>");
        myText += ("<button id= 'printButton'>Print</button>");
        myText += ("<button id = 'downloadButton' onclick='downloadPage()'>Download</button>");
        myText += ("</div>");

        myText += ("</body>\n</html>");
      
      flyWindow = window.open('about:blank','myPop','width=800,height=800,left=200,top=200');
      flyWindow.document.write(myText);
      
      // Add function print to the button.
      flyWindow.document.getElementById('printButton').addEventListener('click', function(){
        flyWindow.print();
      });

      // Add function Download to the button.
      flyWindow.document.getElementById('downloadButton').addEventListener('click', function(){
        var htmlContent = flyWindow.document.documentElement.outerHTML;
        var blob = new Blob([htmlContent], { type: 'text/html' });
        var downloadLink = document.createElement('a');
        downloadLink.download = 'MyMealPlan.html';
        downloadLink.href = window.URL.createObjectURL(blob);
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        });
    }

// Function to clear all input fields from the form.
function clearMealPlan() {

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('goal').value = '';

  var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  var meals = ['breakfast', 'morning_snack', 'lunch', 'afternoon_snack', 'dinner'];

  for (let i = 0; i < days.length; i++) {
    var day =  days[i];

    for (let j = 0; j < meals.length; j++) {
      var meal = meals[j];
      var mealId = day + "_" + meal;
      document.getElementById(mealId).value = '';
    }
  }
}