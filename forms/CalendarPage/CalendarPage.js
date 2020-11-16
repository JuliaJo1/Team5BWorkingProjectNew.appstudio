 btnNext8.onclick=function(){
  ChangeForm(LoginPage);
}

hmbCalendar.onclick=function(s){
 if (typeof(s) == "object") { // do nothing - they just clicked on the control
       return
    } else {
       switch(s) {
            case "Table Status":
                ChangeForm(OpenTablesPage)
                break
            case "Home Page":
                ChangeForm(HomePage)
                break
            case "Study Buddy":
                ChangeForm(StudyBuddyPage)
                break
            case "Nearby Coffee Shops":
                ChangeForm(NearbyCoffeePage)
                break
            case "Starbucks":
                window.open("https://www.starbucks.com/")
                break
       }  
   } 
}