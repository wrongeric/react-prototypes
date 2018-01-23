import React from 'react';
import Table from './table';

const students = [
    {
        name: "Will Huang",
        course: "React Master",
        grade: 100
    },
    {
        name: "Eric Wong",
        course: "React Master",
        grade: 100
    },
    {
        name: "Joseph Huang",
        course: "React Baby",
        grade: 20
    },

];

const App = () =>
    <div className={"container"}>
        <h1>Student Grade Table</h1>
        <Table data={students}/>
    </div>

export default App;

