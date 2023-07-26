import React, {useState} from "react";

function SignUpForm() {

    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ password2, setPassword2 ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!username || !email || !password || !password2) {
            setErrorMessage("All fields are required");
            return;
          }
      
          if (password !== password2) {
            setErrorMessage("Passwords do not match");
            return;
          }

        try {
            const newUser = {
                'username': username,
                'email': email,
                'password': password,
                'items': []
            }
              await fetch('/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ user: newUser})
            })
            
            window.location.reload()

          } catch (error) {
            console.error('Error adding item:', error);
          }
          
    }
        

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group-row text-white">    
                <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group-row text-white">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <div className="form-group-row text-white">   
            <label htmlFor="password2" className="col-sm-2 col-form-label">Confirm Password</label>
            <input
                type="password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
            />
            </div>
            <button type="submit" className='btn btn-success my-4'>Sign Up</button>
            {errorMessage && <h5 className="text-danger my-3">{errorMessage}</h5>}
        </form>
    )
    
}

export default SignUpForm