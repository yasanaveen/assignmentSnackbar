import logo from './logo.svg';
import './App.css';
import SnackbarProvider, { Dogs } from './Snackbar';
import SnackbarExample from './Samplesnack';
import Fetch from './Fetch';

function App() {
  return (
    <div className="App">
      <SnackbarProvider>
      <Dogs/>
      </SnackbarProvider>
      {/* <Fetch/> */}
     
    </div>
  );
}

export default App;
