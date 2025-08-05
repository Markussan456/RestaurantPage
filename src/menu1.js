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
this.legend1.textContent = "Menu";
this.menu1cont.appendChild(this.legend1);


};
    
    addimage(){
        const food = document.createElement("p");
        this.menu1cont.appendChild(food);
        food.textContent = "Filet mignon Steak";
const image = document.createElement('img');

image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5X21V7zUr8ihio6ZHmDHLhp-e3uRDV8UD_Q&s";
this.menu1cont.appendChild(image);
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
