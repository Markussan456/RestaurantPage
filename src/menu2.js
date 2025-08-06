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
this.legend1.textContent = "Main course";
this.menu1cont.appendChild(this.legend1);


};
    
    addimage(){
       
 const food6 = document.createElement("p");
        this.menu1cont.appendChild(food6);
        food6.textContent = "Steak";
         const price = document.createElement("p");
        this.menu1cont.appendChild(price);
        price.textContent = "15$";
        const food1 = document.createElement("p");
        this.menu1cont.appendChild(food1);
        food1.textContent = "Filet Mignon";
        const price1 = document.createElement("p");
        this.menu1cont.appendChild(price1);
        price1.textContent = "25$";
        const food2 = document.createElement("p");
        this.menu1cont.appendChild(food2);
        food2.textContent = "Yorkshire pie";
        const price2 = document.createElement("p");
        this.menu1cont.appendChild(price2);
        price2.textContent = "15$";
        const food3 = document.createElement("p");
        this.menu1cont.appendChild(food3);
        food3.textContent = "Jazzy moose";
        const price3 = document.createElement("p");
        this.menu1cont.appendChild(price3);
        price3.textContent = "15$";
        const food4 = document.createElement("p");
        this.menu1cont.appendChild(food4);
        food4.textContent = "Creme de patate";
        const price4 = document.createElement("p");
        this.menu1cont.appendChild(price4);
        price4.textContent = "15$";
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
