import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Componentes/Home';
import Formu from './Componentes/Formu';
import Pokemon from './Componentes/Pokemon';
import { useContext, useState } from 'react';
import { Context } from './context/Context';
import styles from './styles/app.module.css';
import stylesF from './styles/form.module.css';
import Favoritos from './Componentes/Favoritos';


function App() {

  const {data,handleOnSubmit} = useContext(Context)
  const [theme, setTheme] = useState('dark');
  
  let text = theme=='dark'? <h3>dark</h3>: <h3>light</h3>

  function handleClick(){
    theme == 'dark'? setTheme('light'): setTheme('dark')
  }

  

  return (

    <>
        <div className={styles.conteiner}>
        <Router>
          <header className={styles}>
            <Link to={"/"} className={styles.link}><img src="../public/logo1.png" alt="logo" className={styles.logo} /></Link>
            <div className={styles.vinculos}>
              <Link to={"/"} className={styles.link}><h3 className={styles.text}>Home</h3></Link>
              <Link to={"/login"} className={styles.link}><h3 className={styles.text}>Login</h3></Link>
              <Link to={"/favoritos"} className={styles.link}><h3 className={styles.text}>Favoritos</h3></Link>
            </div>
            <button className={styles.button} onClick={handleClick}>{text}</button>
          </header>
          <main className={styles.body}  >
            <Routes>
              <Route path="/login" element={<Formu/>}/>
              <Route path="/pokemon/:id" element={<Pokemon data={data} />} />
              <Route path="/favoritos" element={<Favoritos/> } />
              <Route path="/" element={<Home/>}/>
            </Routes>
          </main>

          <footer>
            <h2>ESTO ES EL FOOTER</h2>
          </footer>
        </Router>
      </div>
    </>
  )
}

export default App
