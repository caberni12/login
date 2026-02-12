
const API_AUTH = "https://script.google.com/macros/s/AKfycbz_xj7XCKqPsZEBv4is02nZQFz4b8TNra4sHTP8m_GnbdYrgUVCwP3OzGEuPZjt3Nxy/exec";

async function checkAuth(){
  const token = localStorage.getItem("token");
  if(!token){
    location.href="index.html";
    return;
  }

  const r = await fetch(API_AUTH+"?action=verify&token="+token);
  const data = await r.json();

  if(!data.valid){
    localStorage.clear();
    location.href="login.html";
  }
}
