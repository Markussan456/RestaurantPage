import "./styles.css";
import createdomelemnts from './menu1.js';
import createdomelemnts2 from './menu2.js';
import createdomelemnts3 from './menu3.js';
const adddom = new createdomelemnts();
adddom.menu1add();
const menu2 = new createdomelemnts2();
menu2.menu2add();
const menu3 = new createdomelemnts3();
menu3.menu2add();
class handlemenu{
    constructor(){
        this.btncont = document.getElementsByClassName("containers")[0];
        this.menu1show = document.createElement("button");
        this.btncont.appendChild(this.menu1show);
        this.menu2show = document.createElement("button");
        this.btncont.appendChild(this.menu2show);
           this.menu3show = document.createElement("button");
        this.btncont.appendChild(this.menu3show);

    }

menu1handler(){
    
    this.menu1show.textContent = "Menu 1";
    this.menu1show.id = "menu1btn";
    this.menu1show.addEventListener("click",()=>{
      adddom.showmenu();
            menu2.hidemenu();
            menu3.hidemenu();
        
    });
}
menu2handler(){
    let hidden = true;
     this.menu2show.textContent = "Allergens";
     this.menu2show.id = "menu2btn";
    this.menu2show.addEventListener("click",()=>{
menu2.showmenu();
           adddom.hidemenu();
           menu3.hidemenu();
        
    })
}
menu3handler(){
 
     this.menu3show.textContent = "third";
     this.menu3show.id = "menu3btn";
    this.menu3show.addEventListener("click",()=>{
menu3.showmenu();
         menu2.hidemenu();
         adddom.hidemenu();
        
    })
}


}
const menuhandler = new handlemenu();
menuhandler.menu1handler();
menuhandler.menu2handler();
menuhandler.menu3handler();
