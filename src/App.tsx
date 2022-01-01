import React from 'react';
import './App.css';
import {petApi} from "./api/axios-api";

function App() {

    const findPet = () => {
        petApi.findPetsByStatus('available')
            .then(res => {
                console.log(res.data)
            }).catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className="App">
            <h1>Pet API with generated typescript-axios client</h1>
            <button onClick={findPet}>Find Pet</button>
        </div>
    );
}

export default App;
