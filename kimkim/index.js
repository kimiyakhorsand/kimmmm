
// const inputt = document.getElementById('inputt');
// const textt = document.getElementById('textt');
// const submitt = document.getElementById('submitt');

// // const handel = (name) => {
// //     // name.preventDefault;
// //     // const uppercace = name.toUppercase();
// //     // console.log(uppercace); 
// //     // const splitted = uppercace.splitt();
// //     // console.log(`hi {splitted}`)

// //     name.preventDefault();

// //     const spilled = name.splited("");
// //     console.log(spilled)


// // }

// // handel("kimiya");
// // submitt.addEventListener("click" , handel("kimiya"))



// // })

// const todotitle = document.getElementById("title")
// const tododesc = document.getElementById("desc")
// const submittodobutton = document.getElementById("submit")






// function handlecreatnewtodo(e) {
//     e.preventDefault();
//    //  console.log("submit new todo");
                    
//      const newtodo = {
//             title: todotitle.value ,
//             desc: tododesc.value,

//      };
//      console.log(newtodo.title);
//     console.log(newtodo.desc);
//   //   todotitle.innerHTML = newtodo.title;
//   //   console.log('todotitle')
//   //   console.log(newtodo)
//   //   console.log({e})

//    //   const listitem = document.createElement("li");
//    //   const todolistheading = document.createElement("h3");
//    //   todolistheading.innerHTML = newtodo.title
//    //   todolistheading.style.background = "tomato"
//    //  const tododescpara = document.createElement("p");
//    //  tododesc.innerHTML = newtodo.desc


//    //   console.log(listitem , todolistheading , tododesc);

//    //   listitem.appendChild(todolistheading);
//    //   listitem.appendChild(tododesc);
//    //  console.log(listitem);

//    //   mainlist.appendChild(listitem);
//    //    console.log(mainlist);

//    const h3 = document.createElement('h3');
//    h3.innerHTML = newtodo.title;
//    h3.style.backgroundColor = "tomato"

//    const p = document.createElement('p');
//    p.innerHTML = newtodo.desc;


//      const li = document.createElement('li');

   
//      li.appendChild(h3);
//      li.appendChild(p);

//      const main = document.getElementById('main');

//      main.appendChild(li);
     
//      if (!todotitle.value) return handelalarem('please enter a valid number');

     
//        const handel = (m) => {
// // name.preventDefault;
// // const uppercace = name.toUppercase();
// // console.log(uppercace); 
// // const splitted = uppercace.splitt();
// // console.log(`hi {splitted}`)

//         // e.preventDefault();
//         const uppercace = e.toUpperCase();

//         const spilled = uppercace.split(" ");
//         const joinbyy = spilled.join("_");
//         document.body.append((document.createElement("h2").innerHTML = joinbyy));


//         console.log(spilled);
//         console.log(`hi {joinbyy}`);



//  }

// handel("kimiya");
// submitt.addEventListener("click" , handel("kimiya"))




    // }



// const form = document.getElementById('myform');
// const handelsubmitt = (e) => {
//     e.preventDefault();

// }
// form.addEventListener("submit" , handelsubmitt)




  
const handel = (mss) => {
     
    // name.preventDefault;
    // const uppercace = name.toUppercase();
    // console.log(uppercace); 
    // const splitted = uppercace.splitt();
    // console.log(`hi {splitted}`)
  
    // mss.preventDefault();
    
            const uppercace = mss.toUpperCase();
  
            const spilled = uppercace.split(" ");
            const joinbyy = spilled.join("_");
            document.body.append((document.createElement("h2").innerHTML = joinbyy));
  
  
            console.log(spilled);
            console.log({joinbyy});

  }

  handel("kimiya khorsand");

//   function submittt() {
//       var title = document.getElementById("title").value;
//     //   allNames.push(title)
//       localStorage.setItem("title" , title)

//   }
//   document.getElementById("namelist").innerHTML = title
// let user = 0;

  const person = document.getElementById('title').value;
//   person = JSON.stringify(person);
  localStorage.setItem('user' , person)
  let users = localStorage.getItem('user');
//   user = JSON.parse(user);
document.getElementById('namelist').innerHTML = users
document.getElementById('submit').addEventListener('click' , () => {
    let users = localStorage.getItem('user');
    document.getElementById('namelist').innerHTML = users
    console.log(users)

})


  console.log(users)


  