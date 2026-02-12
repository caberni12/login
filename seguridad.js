
const API_AUTH = "https://script.google.com/macros/s/AKfycbyPns15OgDKUCyfnsKGzE-DHePh5-IKEE_bbDHQUVtHcs2Wfj8e_VyrCcVLSoc4F6vM/exec";

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
