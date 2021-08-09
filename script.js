let randNum = Math.floor(Math.random() * 50) + 50;

fetch("https://randomuser.me/api/?results=" + randNum)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);

        let submit = document.querySelector("#submit");
        let input = document.querySelector("#filter");

        submit.onclick = function() {
            event.preventDefault();
        
            if (input.value == "gender" ) {
                myJson.results[i].gender = "female"
            }
        }
            for (let i = 0; i < myJson.results.length; i++) {
                // get reference
                let profiles = document.querySelector("#profiles");
                let firstName = myJson.results[i].name.first;
                let lastName = myJson.results[i].name.last;
                let phoneNumber = myJson.results[i].phone;
                let imageURL = myJson.results[i].picture.large;
                let fullName = firstName + " " + lastName;
    
                //create elements
                let newHeader = document.createElement("h1");
                let newImage = document.createElement("img");
                let newP = document.createElement("p");
    
                // adding content variables
                newHeader.innerHTML = "random user:";
                newImage.src =  imageURL;
                newP.innerHTML = "My name is " + fullName + "<br>" + "My phone number: " + phoneNumber;
    
                //adding content to page
                profiles.appendChild(newHeader);
                profiles.appendChild(newImage);
                profiles.appendChild(newP);
            }
        }
    );


//requirements 
// filter by first name, last name, and gender.
//The web page should be responsive and work properly on a mobile device
//between 50 to 100 users
//hosted on github
