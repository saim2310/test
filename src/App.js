import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import UserList from './components/UserList';
function App() {
  return (
    <>
      <Navbar />

      <div className="cont">

        <div className="side">

          <Sidebar />
        </div>
        <div className="listing">
          <UserList />
        </div>



      </div>



    </>
  );
}

export default App;
