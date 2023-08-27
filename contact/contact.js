const { createClient } = supabase


const _supabase = createClient('https://lacknclmlylgjprmmfpq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhY2tuY2xtbHlsZ2pwcm1tZnBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxMTI0OTcsImV4cCI6MjAwODY4ODQ5N30.XtPtdG-9xBRYiUuXTtNIp_LwgQEeDSbXWbbabunjY6g')

let x

document.getElementById('contact_form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj)
    const { data, error } = await _supabase
      .from('contact')
      .insert(formDataObj)
    console.log(data)
    console.log(error)
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