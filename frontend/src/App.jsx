import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function Vrfy({handleVerify, handleUser}){
  const [code,setCode] = useState("");
  
  async function verify(text){
    
    try {
      const response = await axios.post("/api/verify", {
        code:text,
      })
      handleVerify(true, true);
    } catch (error){
      handleVerify(true, false);
    }
  }

  function handleChange(e){
    setCode(e.target.value);
  }

  function handleKeyDown(e){
    if(e.key === 'Enter'){
      verify(code);
      setCode("");
    }
  }
  function handleBtn(){
    verify(code);
    setCode("");
  }

  return (
    <>
      <h1>The Zenith Consortium</h1>
      
      <div className = 'box'>
        <input 
          className = 'input'
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          autoFocus
          value={code}
        />
        <button className='btn' onClick={handleBtn}>ok</button>

      </div>
    </>
  )
}

function Decoy(){
  return(
    <div style={{ backgroundColor: '#232323', height: '100vh', padding: '10px' }}>
      <center>
        <h1 style={{ color: 'blue', textDecoration: 'underline' }}>Hello World!!!</h1>
      </center>
      <h1>My fullstack App</h1>

      <h3 >There is nothing to see here. Just a simple page, developed by simple person, for simple people.</h3>
    </div>
  )
}

function Home(){
  const styles = {
    container: {
      height: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#e0e0e0', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      textAlign: 'center',
      padding: '0 20px',
    },
    title: {
      fontSize: '2rem',
      fontWeight: '300',
      letterSpacing: '0.6em',
      marginRight: '-0.6em', 
      marginBottom: '1rem', // Reduced margin to group title and subtitle
      textTransform: 'uppercase',
    },
    subtitle: {
      fontSize: '0.75rem',
      fontWeight: '400',
      letterSpacing: '0.3em',
      marginRight: '-0.3em',
      color: '#666', // Much darker silver so it recedes into the background
      marginBottom: '3rem',
      textTransform: 'uppercase',
    },
    divider: {
      width: '40px',
      height: '1px',
      backgroundColor: '#333',
      border: 'none',
      marginBottom: '3rem',
    },
    text: {
      fontSize: '0.9rem',
      fontWeight: '300',
      letterSpacing: '0.15em',
      lineHeight: '2.5',
      maxWidth: '600px',
      opacity: '0.7',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Project E.P.O.C.H.</h1>
      <h2 style={styles.subtitle}>Executive Protocol for Order, Control, and Harmony</h2>
      
      <hr style={styles.divider} />
      
      <div style={styles.text}>
        <p>THE ARCHITECTS HAVE CONVENED.</p>
        <p>THE BLUEPRINT FOR THE NEW ERA IS BEING DRAFTED.</p>
        <br />
        <p>REMAIN VIGILANT AND RETURN TO THESE COORDINATES.</p>
        <p>THIS IS THE EPICENTER.</p>
      </div>
    </div>
  );
}

function App() {
  const [vrfd, setVrfd] = useState(false);
  const [user, setUser] = useState(false);

  function handleVerify(verified, result){
    setVrfd(verified);
    setUser(result);
  }
  return(
    <>
      {vrfd ? (user ? <Home /> : <Decoy />): <Vrfy handleVerify = {handleVerify} />}
    </>
  )
}
export default App
