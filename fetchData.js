/* const url = "https://jsonplaceholder.typicode.com/users";

async function getData(){
       try{
       const res= await fetch(url);
       const data= await res.json()
       console.log(data)
       }catch (error) {
              console.error("Error:", error);
       }
}
getData() 

data.forEach(user => {
       const markup = `<li>${user.name}</li>`
}); */
/* const url = "https://jsonplaceholder.typicode.com/users";

async function getData() {
       try {
              const res = await fetch(url);
              const data = await res.json();
              const list = document.createElement("ul");
              data.map(user => {
                     const li = document.createElement("li");
                     li.textContent = user.name;
                     list.appendChild(li);
              });
              document.body.appendChild(list);
              const email=document.createElement("p")
              data.map(emails=>{
                     const p=document.createElement("p");
                     p.textContent=emails.email;
                     email.appendChild(p)
              })
              console.log(data)
       } catch (error) {
              console.error("Error:look for it", error);
       }
}

getData(); */
const url = "https://jsonplaceholder.typicode.com/users";

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Create a list element to render the user names
    const userList = document.createElement("ul");
    data.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Create a paragraph element to render the user emails
    const emailList = document.createElement("p");
    data.forEach((user) => {
      const emailItem = document.createElement("p");
      emailItem.textContent = user.email;
      emailList.appendChild(emailItem);
    });

    // Append the list and paragraph elements to the document body
    document.body.appendChild(userList);
    document.body.appendChild(emailList);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();


