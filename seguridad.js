
const API_AUTH = "https://script.google.com/macros/s/AKfycbzE8qEqegDEndfMmKUVKr3jqvb_ND7BtHy6aeyExqUcyV_L8G25FYa1XbXjcQofG2Hd/exec";

async function checkAuth(){
  const token = localStorage.getItem("token");
  if(!token){
    location.href="login.html";
    return;
  }

  const r = await fetch(API_AUTH+"?action=verify&token="+token);
  const data = await r.json();

  if(!data.valid){
    localStorage.clear();
    location.href="login.html";
  }
}
