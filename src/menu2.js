class createdomelemnts2{
    constructor(){
        this.maincont = document.getElementById("content");
           this.container = document.getElementById("kontiks");
           
        this.maincont.appendChild(this.container);
        this.menu1cont = document.createElement("div");
        this.menu1cont.classList.add("menu2");
        this.container.appendChild(this.menu1cont);
        this.menu1cont.classList.add("hidden");
    }
   
    addlegend(){
     
this.legend1 = document.createElement("Legend");
this.legend1.textContent = "Allergens";
this.menu1cont.appendChild(this.legend1);


};
    
    addimage(){
        const food = document.createElement("p");
        this.menu1cont.appendChild(food);
        food.textContent = "Peanut allergy";
const image = document.createElement('img');

image.src = "https://peanut-institute.com/wp-content/uploads/2023/02/about-peanuts.jpg";
this.menu1cont.appendChild(image);
    }
  
    menu2add(){
        
this.addlegend();
this.addimage();

    }
    hidemenu(){
this.menu1cont.classList.add("hidden");
        }
        showmenu(){
            this.menu1cont.classList.remove("hidden");
        }
}


export default createdomelemnts2;
