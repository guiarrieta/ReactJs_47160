//Components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//Styles
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <nav className={styles.navContainer}>
        <NavBar />
      </nav>
      <main className={styles.mainContainer}>
        <ItemListContainer greeting="Bienvenidos a muyDeco!!" />
      </main>
    </div>
  );
};

export default App;
