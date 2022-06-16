console.log("hello");
let count=0;
const member = [{
    image : "Team/Photos/3Freshi(2K20)/Shailja_Rani.jpg",
    name1 : "Shailja Rani"
},
{
    image : "Team/Photos/3Freshi(2K20)/SHARIQUE_HABIB.jpg",
    name1 : "Sharique Habib"
}
,{
    image : "Team/Photos/3Freshi(2K20)/Sonam_Kumari.jpg",
    name1 : "Sonam kumari"
},
{
    image : "Team/Photos/3Freshi(2K20)/Anushka_Sharma.jpg",
    name1 : "Anushka Sharma"
}
,
{
    image : "Team/Photos/3Freshi(2K20)/Sanya_Sinha.jpg",
    name1 : "Sanya Sinha"
}
,{
    image : "Team/Photos/3Freshi(2K20)/Samar_Pratap_Singh.jpg",
    name1 : "Samar Pratap Singh"
},
{
    image : "Team/Photos/3Freshi(2K20)/Shubham_Kumar.jpeg",
    name1 : "Shubham Kumar"
},
{
    image : "Team/Photos/3Freshi(2K20)/Akanksha_Sinha.jpeg",
    name1 : "Akanksha Sinha"
},
{
    image : "Team/Photos/3Freshi(2K20)/Tannu_Priya.jpg",
    name1 : "Tannu Priya"
}
,{
    image : "Team/Photos/3Freshi(2K20)/Shipra _Jha.jpeg",
    name1 : "Shipra jha"
},
{
    image : "Team/Photos/3Freshi(2K20)/Abhishek _Singh.jpg",
    name1 : "Abhishek Singh"
}
,
{
    image : "Team/Photos/3Freshi(2K20)/Saumya_Chauhan.jpg",
    name1 : "Saumya Chauhan"
}
,{
    image : "Team/Photos/3Freshi(2K20)/Rohan_Kumar.jpg",
    name1 : "Rohan Prasad"
}
         ,{
    image : "Team/Photos/3Freshi(2K20)/Siddharth_Singh.jpg",
    name1 : "Siddharth Singh"
}
               ];

window.addEventListener("DOMContentLoaded", function()
{
    showMember(count);
});
const imageSrc = document.querySelectorAll(".image-coordinator");
const nameText = document.querySelectorAll(".nameText");
console.log(imageSrc);
let flag=0;
function showMember(count)
{
    
    if(flag >= 1)
    {
        count = member.length - 1 - 4 + flag;

    } 
   
    const item1= member[count];
   
    let nextcount1 = setcount(count);
   
    const item2= member[nextcount1];
    let nextcount2 = setcount(nextcount1);
    
    const item3= member[nextcount2];

    let nextcount3= setcount(nextcount2);
   
    const item4= member[nextcount3];
   
    imageSrc[0].src = item1.image;
    nameText[0].textContent = item1.name1;
    imageSrc[1].src = item2.image;
    nameText[1].textContent = item2.name1;
    imageSrc[2].src = item3.image;
    nameText[2].textContent = item3.name1;
    imageSrc[3].src = item4.image;
    nameText[3].textContent = item4.name1;
}
const prevbtn= document.querySelector(".prevbutton");
const nextbtn= document.querySelector(".nextbutton");

function setcount(ct)
{
   
        if(ct== member.length - 1)
         return 0;

        else 
         return (ct+1);
        
  
}
prevbtn.addEventListener("click", function()
{
    count -=1 ;
    if(count < 0)
     {
        count = member.length - 1;
     }
     showMember(count);
});

nextbtn.addEventListener("click", function()
{
    count += 1 ;
    console.log(count);
    if(count > member.length - 4 )
     {
        flag += 1;
        if(count == member.length)
         {
            count=0;
            flag=0;
         }
     }
  
     showMember(count);
});
