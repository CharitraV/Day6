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


 //2 .Convert the UML diagram to Typescript class. - use number for double
class Circle {
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
     get getRadius(){
        return this.radius;
    }
    set setRadius(value){
        if (typeof value ==="number" && value.length >0){
            this.radius= value;
        }
         else{
            console.log("inValid")
         }
    }
    get getColor(){
        return this.color;
    }
    set setColor(value){
        if (typeof value === "string" && value.length >0){
            this.radius= value;
        }
         else{
            console.log("inValid")
         }
    }

  toString(){
    var string= (`2.Circle[radius= ${this.radius}, color= "${this.color}"]`);
    console.log(string);
    return string;
  }
  getArea(){
    var area= (Math.PI*this.radius*this.radius).toFixed(2)
    console.log("2.Area of the circle of Radius",this.radius,"is",area)
    return area
  }
  getCircumference(){        
        var circumference= (2*Math.PI*this.radius).toFixed(2)
        console.log("2.Circumference of the circle of Radius",this.radius,"is",circumference)
        return circumference
  }
}
var circleDetails= new Circle(1.0, "red")
circleDetails.toString()
circleDetails.getArea()
circleDetails.getCircumference()



// 3. Class Person
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
console.log("3.Name: ",details.name,", Age: ", details.age,", Gender:",details.gender,", EmailId:", details.email,", Phone Number:", details.phoneNumber);



//4. Class to Calculate Ubar Price
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
console.log(`4.The Ubar Price for ${uberDetails.distance} miles and ${uberDetails.duration} minutes is Rs.${uberDetails.calculateFare()}`)



















    
   