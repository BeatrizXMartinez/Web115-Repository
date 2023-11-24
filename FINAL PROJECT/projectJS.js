// function button clicked it goes to section in HTML
function scrollToSection() {
  var formsection = document.getElementById("mealPlanForm");
  formsection.scrollIntoView({ behavior: "smooth" });
}

// Creates Web page "on-the-fly".
document.getElementById("generateButton").addEventListener('click',generateMealPlan)
    function generateMealPlan()
    {
      // Get user input values
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var goal = document.getElementById('goal').value;
      var monday_breakfast = document.getElementById('monday_breakfast').value;
      var monday_morning_snack = document.getElementById('monday_morning_snack').value;
      var monday_lunch = document.getElementById('monday_lunch').value;
      var monday_afternoon_snack = document.getElementById('monday_afternoon_snack').value;
      var monday_dinner = document.getElementById('monday_dinner').value;
      
      // Validate email
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // create the content for the new webpage
      myText = ("<html>\n<head>\n<title>Your Meal Plan</title>\n");
      myText += ("<link rel='stylesheet' type='text/css' href='styles.css'>");
      myText += ("<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Macondo&display=swap'></link>");
      myText += ("</head>\n<body>\n");
      myText += ("<h1 id='welcomeP'>Hello " + name + ",<br>Here is your meal plan!</h1>");
      myText += ("<p id='goalP'>Your Goal for this week is: " + goal + ".</p>");
      myText += ("<table id='mealPlanTable'>");
      myText += ("<tr><th></th><th>DayBreakfast</th><th>Morning Snack</th><th>Lunch</th><th>Afternoon Snack</th><th>Dinner</th></tr>");
      myText += ("<tr><td>Monday"+
      "</td><td>"+monday_breakfast+
      "</td><td>"+monday_morning_snack+
      "</td><td>"+monday_lunch+
      "</td><td>"+monday_afternoon_snack+
      "</td><td>"+monday_dinner+"</td></tr>");
      myText += ("</table>");
      
      // Add buttons: print and download
      myText += ("<button onclick='printPage()'>Print</button>");
      myText += ("<button onclick='downloadPage()'>Download</button>");
      
      myText += ("</body>\n</html>");
    
      flyWindow = window.open('about:blank','myPop','width=800,height=800,left=200,top=200');
      flyWindow.document.write(myText);
    }

// Clear all input fields
  function clearMealPlan() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('goal').value = '';
    document.getElementById('monday_breakfast').value = '';
    document.getElementById('monday_morning_snack').value = '';
    document.getElementById('monday_lunch').value = '';
    document.getElementById('monday_afternoon_snack').value = '';
    document.getElementById('monday_dinner').value = '';
}
