const { createClient } = supabase


const _supabase = createClient('https://lacknclmlylgjprmmfpq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhY2tuY2xtbHlsZ2pwcm1tZnBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0MDkwMTAsImV4cCI6MjAwODk4NTAxMH0.EYlg4BAKlP4zF07PnjgWAbdtoEqNF_CAnoMAx3FxKHM')

let x

document.getElementById('contact_form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formDataObj = Object.fromEntries(formData.entries())
    const { data, error } = await _supabase
      .from('contact')
      .insert(formDataObj)
    if(error){
        SnackBar({
          status: "error",
          timeout: 5000,
          position: "bc",
          message: "Only one submission per email address is allowed.",
      })
    }
    else{
        SnackBar({
          status: "success",
          timeout: 5000,
          position: "bc",
          message: "Thanks for your submission!",
      })
      e.target.reset()
    }
})