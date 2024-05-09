// 1.class Movie 
class movie {
    constructor( title, studio, rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(movies){
    const value= movies.filter(movie => movie.rating === "PG");
    return value;
     
    }
}

var movieDetails= new movie("Casino Royale1", "Eon Productions", "PG")
const moviesArray = [    
    new movie("Casino Royale", "Eon Productions", "PG"),  
    new movie("Skyfall", "Eon Productions", "PG"),  
    new movie("GoldFinger", "Eon Productions", "PG"),  
    new movie("Inseption", "Legendary Pictures and Syncopy", "PG-13"),    
    new movie("Movie", "Studio", "R"), 
    new movie("Interstellar", "Christopher Nolan ", "PG-13"),    
    new movie("Movie", "Studio", "R"),    
    ];

 console.log(`1.Movie: ${movieDetails.title}, Studio: ${movieDetails.studio}, Rating: ${movieDetails.rating}`);
 console.log(`1.Details of movie which has PG rating are as follows`);
 console.log(movie.getPG(moviesArray));



// 2. Class Person
 class Person  {
    constructor(name, age, gender, email, phoneNumber){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}

var details = new Person("Charitra", "23", "Female", "vcharitrav25@gmail.com", "6381556546");
console.log("2.Name: ",details.name,", Age: ", details.age,", Gender:",details.gender,", EmailId:", details.email,", Phone Number:", details.phoneNumber);



//3. Class to Calculate Ubar Price
class uderPrice {
    
    static baseFair = 2.0;    
    static mileRate = 1.5;    
    static minuteRate = 0.5; 

    constructor(distance, duration) {    
    this.distance = distance;    
    this.duration = duration;    
    }

    calculateFare() {    
        const distanceFare = this.distance * uderPrice.mileRate;        
        const timeFare = this.duration * uderPrice.minuteRate;        
        return (uderPrice.baseFair + distanceFare + timeFare).toFixed(2);     
               
        }
}

var uberDetails = new uderPrice(5.57678, 15 );
console.log(`3.The Ubar Price for ${uberDetails.distance} miles and ${uberDetails.duration} minutes is Rs.${uberDetails.calculateFare()}`)



















    
   