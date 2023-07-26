import React, {useState} from "react";

function LoginForm() {

    const [ userOrMail, setUserOrMail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!userOrMail || !password) {
            setErrorMessage("All fields are required");
            return;
          }

        try {
            const user = {
                'userOrMail': userOrMail,
                'password': password
            }
            await fetch('/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ user: user})
            })
          } catch (error) {
            console.error('Error checking user:', error);
          } 
    }
        

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group-row text-white">    
                <label htmlFor="username" className="col-sm-2 col-form-label">Username or Email</label>
                <input
                type="text"
                value={userOrMail}
                onChange={(e) => setUserOrMail(e.target.value)}
                />
            </div>
            
            <div className="form-group-row text-white">   
            <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button type="submit" className='btn btn-success my-4'>Log in</button>
            {errorMessage && <h5 className="text-danger my-3">{errorMessage}</h5>}
        </form>
    )
    
}

export default LoginForm