class createdomelemnts3{
    constructor(){
        this.maincont = document.getElementById("content");
           this.container = document.getElementById("kontiks");
           
        this.maincont.appendChild(this.container);
        this.menu1cont = document.createElement("div");
        this.menu1cont.classList.add("menu3");
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
        food.textContent = "Lol";
const image = document.createElement('img');

image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxtn3PbQfZ50EUHcQ-ZueD_FQj24JwrYF3JQ&s";
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


export default createdomelemnts3;
