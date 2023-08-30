const { createClient } = supabase

let _supabase
let adminAuthClient 

document.getElementById("login").addEventListener("submit",(e)=>{
    e.preventDefault()
    const key = e.target[0].value

   _supabase = createClient("https://lacknclmlylgjprmmfpq.supabase.co", key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

adminAuthClient = _supabase.auth.admin
getAllUsers()
document.getElementById("login").style.display = "none"
// Access auth admin api
})


async function getAllUsers() {
    const { data, error } = await _supabase
      .from('contact')
      .select()

    if(error){
        console.log(error)
        return
    }
    console.log(data)

    // data = {
    //     "name":"sanket",
    //     "email":"",
    //     subject:"",
    //     message:"",
    //     created_at:""
    // }

    let tableDiv = document.getElementById("response_table")
    tableDiv.innerHTML = `<table id="responses">
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Subject</th>
        <th>Message</th>
        <th>Created At</th>
    </tr>
    </table>`
    for(let i=0;i<data.length;i++){
        document.getElementById("responses").innerHTML += `<tr>
        <td>${data[i].name}</td>
        <td>${data[i].email}</td>
        <td>${data[i].subject}</td>
        <td>${data[i].message}</td>
        <td>${data[i].created_at}</td>
    </tr>`
    }
}

