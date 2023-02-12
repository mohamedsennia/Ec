const formation=document.getElementById("formation");
const dropDown1=document.getElementById("block");
const distanceH=document.getElementById("distanceH");
const presentiel=document.getElementById("presentielH");
const dropDownDistance=document.getElementById("distance");
const dropDownPresentiel=document.getElementById("presentiel");
var BO=false
var BT=false
formation.addEventListener("mouseover",()=>{
dropDown1.style.display="block";

})
formation.addEventListener("mouseleave",()=>{
    dropDown1.style.display="none";
    dropDownDistance.style.display="none"
    dropDownPresentiel.style.display="none"
    formation.style.marginLeft="-15%";
    BT=false
    BO=false
    dropDown1.style.marginBottom="-80%"
    })
distanceH.addEventListener("click",()=>{
    if(BO==false){
        dropDownDistance.style.display="block";
        if(BT==true){
            dropDown1.style.marginBottom="-90%"
        }
        formation.style.marginLeft="0";
        BO=true
    }else{
        dropDownDistance.style.display="none";
        if(BT==false){
            formation.style.marginLeft="-15%";
        }
    BO=false
    }
    
    
})
presentiel.addEventListener("click",()=>{
    if(BT==false){
        dropDownPresentiel.style.display="block"
    formation.style.marginLeft="0";
    if(BO==true){
            dropDown1.style.marginBottom="-90%"
        }
    BT=true
    }else{
        dropDownPresentiel.style.display="none"
        if(BO==false){
    formation.style.marginLeft="-15%";
}
BT=false
    }
})
