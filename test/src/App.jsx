import React from 'react';
import DataList from './Data';

function App() {
    const data = ["Omran" ,"Ahmad"]; 

    return (
        <div className="App">
            <h1>Data in List</h1>
            <DataList items={data} />
        </div>
    );
}
export default App;
