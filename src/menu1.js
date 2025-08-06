class createdomelemnts{
    constructor(){
        this.maincont = document.getElementById("content");
           this.container = document.createElement("div");
        this.maincont.appendChild(this.container);
        this.container.classList.add("containers");
        this.container.id = "kontiks";
        this.menu1cont = document.createElement("div");
        this.menu1cont.classList.add("menu1");
        this.container.appendChild(this.menu1cont);
     
    }
   
    addlegend(){
     
this.legend1 = document.createElement("Legend");
this.legend1.textContent = "Appetizers";
this.menu1cont.appendChild(this.legend1);


};
    
    addimage(){
        const food = document.createElement("p");
        this.menu1cont.appendChild(food);
        food.textContent = "Bread";
         const price = document.createElement("p");
        this.menu1cont.appendChild(price);
        price.textContent = "15$";
        const food1 = document.createElement("p");
        this.menu1cont.appendChild(food1);
        food1.textContent = "Fries";
        const price1 = document.createElement("p");
        this.menu1cont.appendChild(price1);
        price1.textContent = "25$";
        const food2 = document.createElement("p");
        this.menu1cont.appendChild(food2);
        food2.textContent = "Salad";
        const price2 = document.createElement("p");
        this.menu1cont.appendChild(price2);
        price2.textContent = "15$";
        const food3 = document.createElement("p");
        this.menu1cont.appendChild(food3);
        food3.textContent = "Mozarella sticks";
        const price3 = document.createElement("p");
        this.menu1cont.appendChild(price3);
        price3.textContent = "15$";
        const food4 = document.createElement("p");
        this.menu1cont.appendChild(food4);
        food4.textContent = "Boiled potatoes";
        const price4 = document.createElement("p");
        this.menu1cont.appendChild(price4);
        price4.textContent = "15$";
        

    }
  
    menu1add(){
        
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


export default createdomelemnts;
