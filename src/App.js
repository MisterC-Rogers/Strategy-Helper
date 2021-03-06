import styles from "./App.module.css";
import FromComponent from "./Components/Form";

function App() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to The Strategy Helper</h1>

        <p className={styles.description}>
          Strategy Helper is a light weight web app to help you identify your
          trading strategy faster and with ease
        </p>
        {/* this is just a test for the dropdown to render and see */}
        <FromComponent />
      </main>

      <footer className={styles.footer}>
        <p>Powered by: Charlie Rogers</p>
      </footer>
    </div>
  );
}

export default App;
