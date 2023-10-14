import{ useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import "../styles/admin.css"

export default function AdminPage() {
    
    const [login, setLogin] = useState()
    const [supabase, setSupabase] = useState()
    const [data, setData] = useState()

    const Login = async (e) => {
        e.preventDefault()
        const key = e.target.elements.key.value
        console.log(key)
        const supabase = createClient("https://lacknclmlylgjprmmfpq.supabase.co", key, {
            auth: {
              autoRefreshToken: false,
              persistSession: false,
              detectSessionInUrl: false,
            }
          })
        setSupabase(supabase)
        setLogin(true)
    }

    useEffect(() => {
        getAllData()
    }, [supabase])

    const getAllData = async () => {
        try{
        const { data, error } = await supabase
          .from('contact')
          .select()
    
        if(error){
            console.log(error)
            return
        }
        setData(data)
    }
    catch{
        setSupabase(null)
        setLogin(false)
    }
    }
    
    
    const download = ()=>{
        let csvContent = "";
        csvContent += "Name,Email,Subject,Message,Created At\n"
        data.forEach(function(rowArray) {
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

    return(
        <>
        <h1>Admin Panel</h1>

        {login ?
            <>
                <div id="response_table">
                <table id="responses">
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Created At</th>
                    </tr>
                {
                   data && (data.map((item, index) => {
                        // create a table for data2
                        return(
                            <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.subject}</td>
                            <td>{item.message}</td>
                            <td>{item.created_at}</td>
                            </tr>
                        )
                    }))
                }
                </table>
                {data && <button id="download" onClick={download}>Download</button>}
                </div>
            </>
        :
            <div id="admin-panel">
            <form id="login" onSubmit={Login}>
                <input type="text" name="key" placeholder="Enter admin key" required />
                <button type="submit">Login</button>
            </form>
            </div>
        }
        </>
    )
}