class createdomelemnts{
    constructor(){
        this.maincont = document.getElementById("content");
           this.container = document.createElement("div");
        this.maincont.appendChild(this.container);
        this.container.classList.add("containers");
    }
   
    addlegend(text){
this.legend1 = document.createElement("legend");
this.legend1.textContent = text;
this.container.appendChild(this.legend1);
    }
    addimage(){
const image = document.createElement('img');
image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5X21V7zUr8ihio6ZHmDHLhp-e3uRDV8UD_Q&s";
this.container.appendChild(image);
    }
  
    adddom(text){
        
this.addlegend(text);
this.addimage();

    }

}
export default createdomelemnts;
