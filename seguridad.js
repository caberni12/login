
const API_AUTH = "PEGA_AQUI_TU_URL_APPS_SCRIPT";

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
