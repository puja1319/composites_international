import './Css/Style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navigation from './AppRouter';
import { UserProvider } from '../src/Conetext/UserContext';


const App=()=> {
  return (
      <UserProvider>
          <Navigation/> 
      </UserProvider>
  );
}

export default App;