const { createClient } = supabase

let _supabase
let adminAuthClient 
let g_data

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
        document.getElementById("login").style.display = "flex"
        return
    }
    g_data = data
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
    const button = document.createElement("button")
    button.innerHTML = "Download"
    button.id = "download"
    button.onclick = download
    button.style.margin = "10px"
    button.style.padding = "10px"
    button.style.borderRadius = "5px"
    button.style.backgroundColor = "#000"
    button.style.color = "#fff"
    button.style.border = "none"
    button.style.cursor = "pointer"
    button.style.outline = "none"
    
    tableDiv.appendChild(button)
}


const download = ()=>{
    let csvContent = "";
    csvContent += "Name,Email,Subject,Message,Created At\n"
    g_data.forEach(function(rowArray) {
      let row = rowArray.name+","+rowArray.email+","+rowArray.subject+","+rowArray.message+","+rowArray.created_at+"\n";
      csvContent += row;
    });

    var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
  
    // Create a link to download it
    var pom = document.createElement('a');
    pom.href = url;
    pom.setAttribute('download', "export.csv");
    pom.click();

}