import React from 'react'

function ErrorPage() {
  return (
    <div>
    <div style={{display:'flex',justifyContent: 'center', alignItems: 'center',height: '100vh', padding: '30px'}}>
       <p style = {{ backgroundColor: 'lightblue', padding: '30px'}}>OOps! Something went wrong</p> 
    </div>
    </div>
  )
}

export default ErrorPage