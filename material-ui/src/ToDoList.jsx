import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListComponent from './ListComponent';

const ToDoList = () => {
    const [item, setItem] = useState("");
    const [newItem, setNewItem] = useState([])
    const ItemEvent = (event) => {
        setItem(event.target.value);


    }
    const ListOfItems = () => {
        setNewItem((prevValue) => {
            return [...prevValue, item]
        });
        setItem("  ")

    }
    return (
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>TO DO LIST</h1>
                <br />
                <input type="text" 
                 value ={item}
                 placeholder="Add an Items" 
                 onChange={ItemEvent} />
                 
                <Button className="new-btn " onClick={ListOfItems}>
                    <AddIcon />

                </Button>
                <br />
                <ol>

                    {newItem.map((val, index) => {
                        return <ListComponent key = {index} text ={ val}/>
                        


                    })}
                </ol>
                <br />

            </div>
        </div>
    )
}
export default ToDoList;