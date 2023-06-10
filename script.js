let button = document.querySelector(".button");
let input = document.querySelector(".notice");
let divbox = document.querySelector(".box");
let titile = document.querySelector(".title");
let divchangeinp = document.querySelector(".divchangeinp");
let changetitile = document.querySelector(".changetitle");
let changenotice = document.querySelector(".changenotice");
let closechange = document.querySelector(".closechange");
let changebott = document.querySelector(".changebott");
let arr = [];
let divbox1 = document.querySelector(".box1");
let OldItem = localStorage.getItem("mas") || "[]";
let random = Math.floor(Math.random() * 1000);
OldItem = JSON.parse(OldItem);
function inp() {
  let math = Math.floor(Math.random() * 1000);
  return [
    arr.push({
      val: input.value,
      tit: titile.value,
      id: `${math}`,
      changeid: `change${math}`,
      change: `button${math}`,
      pid: `p${math}`,
      h5id: `h5${math}`,
      true: "true",
    }),
  ];
}

button.addEventListener("click", () => {
  if (titile.value.length >= 1 || input.value.length >= 1) {
    inp();
    bild(
      
      arr[arr.length - 1].tit,
      arr[arr.length - 1].val,
      arr[arr.length - 1].id
    );
    OldItem.push(arr[arr.length - 1]);
    localStorage.setItem("mas", JSON.stringify(OldItem));

    console.log(arr);
    console.log(OldItem);

    input.value = "";
    titile.value = "";

  }
});

function creat() {
  for (i = 0; i < OldItem.length; i++) {
    bild(OldItem[i].tit, OldItem[i].val, OldItem[i].id,OldItem[i].true);
  }
}
creat();
function bild(name, title, ide,state) {
  let buttonClose = document.createElement("button");
  let div = document.createElement("div");
  let cardBody = document.createElement("div");
  let changeButton = document.createElement("button");
  let p = document.createElement("p");
  let pchange = document.createElement("p");
  let divButton = document.createElement("div");
  let inputradio = document.createElement("input");
  let label=document.createElement("label");
  div.classList.add("card");
  div.setAttribute("id", ide);
  
  let h5 = document.createElement("h5");
  h5.classList.add("card-title");
  h5.setAttribute("id", `h5${ide}`);
  p.setAttribute("id", `p${ide}`);
  p.classList.add("card-text");
  cardBody.classList.add("card-body");
  cardBody.classList.add(`div${ide}`);
  div.appendChild(cardBody);
  cardBody.appendChild(h5);
  cardBody.appendChild(p);
  changeButton.appendChild(pchange);
  // changeButton.classList.add('btncahnge')
  buttonClose.classList.add("btn-close");
  changeButton.setAttribute("id", `change${ide}`);
  buttonClose.setAttribute("id", ide);
  divButton.classList.add("divbutton");
  div.appendChild(divButton);
  // pchange.classList.add("textchange")
  divButton.appendChild(changeButton);
  divButton.appendChild(inputradio);
  divButton.appendChild(buttonClose);
  inputradio.setAttribute("id", ide);
  inputradio.setAttribute("type", "checkbox");
  changeButton.textContent = "change button";
  inputradio.classList.add("consoleToggle");
  inputradio.appendChild(label);
  label.setAttribute("for", "checkbox");
  inputradio.setAttribute("value", 'false');
  h5.textContent = name;
  p.textContent = title;
 divbox1.appendChild(div);
  inputradio.addEventListener("click", (e) => {
    let id = e.target.id;
    for (i = 0; i < OldItem.length; i++) {
      if (id == OldItem[i].id) {
        inputradio = Boolean(OldItem[i].true);
        
      }
    }
    
    inputradio = !inputradio;
   
    for (i = 0; i < OldItem.length; i++) {
      if (id == OldItem[i].id) {
        OldItem[i].true = inputradio;
        console.log(OldItem[i])
        localStorage.setItem("mas", JSON.stringify(OldItem));
      }
    }
 console.log( inputradio)
       if(inputradio===true){
     for(i=0;i<OldItem.length;i++){
            var h5 = document.getElementById(OldItem[i].pid)
            var p = document.getElementById(OldItem[i].h5id)
            if(id==OldItem[i].id){

                p.classList.add('textder')
                h5.classList.add('textder')

         }
   }
    }
    if(inputradio==false){
        for(i=0;i<OldItem.length;i++){
            var h5 = document.getElementById(OldItem[i].pid)
            var p = document.getElementById(OldItem[i].h5id)
            if(id==OldItem[i].id){
               p.classList.remove("textder")
               h5.classList.remove("textder")

       }

       }
    }
  });

  buttonClose.addEventListener("click", function (e) {
    let id = e.target.id;
    console.log(id);
    div.remove(id);

    for (i = 0; i < OldItem.length; i++) {
      if (id == OldItem[i].id) {
        OldItem.splice(i, 1);
        console.log(OldItem);
        localStorage.setItem("mas", JSON.stringify(OldItem));
      }
    }
  });
  changeButton.addEventListener("click", function (e) {
    let ie = e.target.id;
    divchangeinp.classList.add("bthn");

    for (i = 0; i < OldItem.length; i++) {
      if (ie == OldItem[i].changeid) {
        changetitile.value = OldItem[i].tit;
        changenotice.value = OldItem[i].val;
        changebott.setAttribute("id", OldItem[i].change);
      }
    }
  });
  closechange.addEventListener("click", function () {
    divchangeinp.classList.remove("bthn");
  });
  changebott.addEventListener("click", function (g) {
    let ig = g.target.id;
    divchangeinp.classList.remove("bthn");

    for (i = 0; i < OldItem.length; i++) {
      if (ig == OldItem[i].change) {
        var h5 = document.getElementById(OldItem[i].pid);
        var p = document.getElementById(OldItem[i].h5id);
        OldItem[i].tit = changetitile.value;
        OldItem[i].val = changenotice.value;
        h5.textContent = changenotice.value;
        p.textContent = changetitile.value;
        localStorage.setItem("mas", JSON.stringify(OldItem));

        console.log(OldItem[i].pid);
      }
    }
  });
}

localStorage.setItem("mas", JSON.stringify(OldItem));
console.log(OldItem);