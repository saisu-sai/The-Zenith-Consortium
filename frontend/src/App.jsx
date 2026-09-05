import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function Vrfy({handleVerify}){
  const [code,setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  
  async function verify(text) {
    if (!text) return;
    setIsLoading(true); 

    const API_URL = import.meta.env.PROD 
      ? "https://the-zenith-consortium.onrender.com/api/verify" 
      : "http://localhost:3000/api/verify";

    try {
      const response = await axios.post(API_URL, {
        code: text
      });
      
      console.log("Server responded:", response.data);
      handleVerify(true, true);
      
    } catch (error) {
      console.log("Access Denied.");
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
    <div style={{ transition: 'opacity 0.5s', opacity: isLoading ? 0.5 : 1 }}>
      <h1>The Zenith Consortium</h1>
      
      <div className = 'box'>
        <input 
          className = 'input'
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          autoFocus
          value={code}
          disabled={isLoading}
        />
        <button 
          className='btn' 
          onClick={handleBtn}
          disabled={isLoading} 
        >
          {isLoading ? "..." : "ok"}
        </button>

      </div>

      {isLoading && (
        <p style={{ color: '#555', marginTop: '20px', letterSpacing: '0.2em', fontSize: '0.8rem' }}>
          ESTABLISHING SECURE CONNECTION...
        </p>
      )}
    </div>
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
      marginBottom: '1rem',
      textTransform: 'uppercase',
    },
    subtitle: {
      fontSize: '0.75rem',
      fontWeight: '400',
      letterSpacing: '0.3em',
      marginRight: '-0.3em',
      color: '#666', 
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