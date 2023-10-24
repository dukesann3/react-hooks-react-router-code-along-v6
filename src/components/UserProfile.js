// UserProfile.js
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function UserProfile() {

    const params = useParams();
    const userId= params.id;

    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/users/${userId}`)
            .then(r => r.json())
            .then(data => setUser(data))
            .catch(error => console.error(error));
    }, [userId]);

    if(!user.name){
        return <h2>Loading...</h2>
    }


    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>{user.name}</h1>
            </main>
        </>
    );
};

export default UserProfile;