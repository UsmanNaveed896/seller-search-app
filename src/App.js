import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Headers from './components/header/header';
import AddPosting from './pages/addPosting/addPosting';
import CarSelling from './pages/carSelling/carSelling';
import Chats from './pages/chatss/chats';
import CreateVirtualOffice from './pages/createVirtualOffice/createVirtualOffice';
import Notifications from './pages/notifications/notifications';
import Preview from './pages/preview/preview';
import Profile from './pages/profile/profile';
import Schedulers from './pages/scheduler/scheduler';
import Stories from './pages/storiess/stories';
import Routesd from './routes';

function App() {
  const handleBotApi = async () => {
    try {
      let payLoad = {
        email: "admin@gmail.com",
        password: "12345678"
      };
  
      const response = await axios.post("/api/v1/users/signup", payLoad);
  
      const data = response.data;
      console.log(data, "data");
      // setBot(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      {/* <h1 onClick={handleBotApi}>usman</h1> */}
     <Routesd/>
      
   
    </div>
  );
}

export default App;
