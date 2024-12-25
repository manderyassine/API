// src/UserList.js
import React, { useEffect, useState } from 'react'; // Import React and hooks
import axios from 'axios'; // Import axios for making HTTP requests

const UserList = () => {
    // State to hold the list of users
    const [listOfUsers, setListOfUsers] = useState([]);

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Make a GET request to the JSONPlaceholder API
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                // Update the state with the fetched user data
                setListOfUsers(response.data);
            } catch (error) {
                // Log any errors that occur during the fetch
                console.error('Error fetching users:', error);
            }
        };

        // Call the fetchUsers function
        fetchUsers();
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div>
            <h1>User List</h1> {/* Heading for the user list */}
            <ul>
                {/* Map over the listOfUsers array to create a list item for each user */}
                {listOfUsers.map(user => (
                    <li key={user.id}>{user.name}</li> // Display user name with a unique key
                ))}
            </ul>
        </div>
    );
};

export default UserList; // Export the UserList component
