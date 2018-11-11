import React from 'react';
import './App.css';
import Form from './Components/Form';
import List from './Components/List';

function App ({data, create, update, remove}) {
    return (
        <div className="container">
            <Form onSubmit={create} />
            <List 
                todos={data}
                onToggle={update}
                onRemove={remove}
            />
        </div>
    )
}