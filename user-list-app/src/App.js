import React from 'react'; // Import React
import UserList from './UserList'; // Import the UserList component
import './App.css';

function App() {
    return (
        <div className="App"> {/* Main container for the app */}
            <UserList /> {/* Render the UserList component */}
        </div>
    );
}

export default App; // Export the App component
