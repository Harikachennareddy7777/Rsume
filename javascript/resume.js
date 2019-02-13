(function(){
  function loadJson(file,callback){
  var rawFile=new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET",file,true);
  rawFile.onreadystatechange=function(){
    if(rawFile.readyState===4 & rawFile.status=="200"){
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
  }
  loadJson("javascript/resume.json",function(text)
{
  var data=JSON.parse(text);
  console.log(data);
  leftData(data.profile);
  education(data.Education);
  skills(data.skills);
});
var left=document.querySelector(".leftDiv");
var right=document.querySelector(".rightDiv");

function leftData(leftdetails){

  var image=document.createElement("img");
  image.src=leftdetails.image;
  image.alt="profile";
  left.appendChild(image);

  var name=document.createElement("h2");
  name.textContent=leftdetails.name;
  left.appendChild(name);

  var comname=document.createElement("h3");
  comname.textContent=leftdetails.comname;
  left.appendChild(comname);

  var number=document.createElement("h4");
  number.textContent=leftdetails.number;
  left.appendChild(number);

  var mail=document.createElement("h5");
  mail.textContent=leftdetails.mail;
  left.appendChild(mail);

  // rightDiv data

  var co=document.createElement("h1");
  co.textContent="Carrer Object";
  right.appendChild(co);
  right.appendChild(document.createElement("hr")
);
let p=document.createElement("p");
p.textContent=leftdetails.career;
right.appendChild(p);
}
//rightDiv creation
//Educational leftdetails

function education(edu){
  Educational=document.createElement("h1");
  Educational.textContent="Educational Information";
  right.appendChild(Educational);
  right.appendChild(document.createElement("hr")
);

for( i in edu)
{
  let h3=document.createElement("h3");
  h3.textContent=edu[i].degree;
  right.appendChild(h3);

  let ul=document.createElement("ul");
  right.appendChild(ul);

  //create list's (li1, li2 & li3)
  let li1=document.createElement("li");
  li1.textContent="College:"+edu[i].college;
  ul.appendChild(li1);

  let li2=document.createElement("li");
  li2.textContent="Branch:"+edu[i].branch;
  ul.appendChild(li2);

  let li3=document.createElement("li");
  li3.textContent="Marks:"+edu[i].marks;
  ul.appendChild(li3);

  let li4=document.createElement("li");
  li4.textContent="EndDate:"+edu[i].endDate;
  ul.appendChild(li4);

}
}
function skills(skill){
  var sk=document.createElement("h1");
  sk.textContent="Skills";
  right.appendChild(sk);
   var p=document.createElement("p");
   p.textContent=skill.OS;
   right.appendChild(p);
   var p1=document.createElement("p");
   p1.textContent=skill.PS;
   right.appendChild(p1);
}

})()
