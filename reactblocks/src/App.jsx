import './App.css';
import style from './modules/style.module.css'
import Header from './components/Header'
import Main from './components/Main'
import Navigation from './components/Navigation'
import SubContent from './components/SubContent'
import Advertisement from './components/Advertisement'


function App() {
  return (
    <div className={ style.app }>
      <Header/>
      <div className={style.footer}>
        <Navigation/>
        <Main>
          <div className={style.content}>
            <SubContent/>
            <SubContent/>
            <SubContent/>
          </div>
          <Advertisement/>
        </Main>
      </div>
    </div>

  );
}

export default App;
