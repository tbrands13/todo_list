import React from 'react';


const Task = (props) => {
    const {task, index, list, setList} = props;
    const onClick = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index);
    });
};

    const onChange = () =>{
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    };

    return(
        <div className="container bg-secondary">
            <h4>{task.name}</h4>
            <div className="container">
                <label htmlFor="checkbox">Just did it</label>
                <input type="checkbox" onChange={onChange} checked={task.isComplete} name=""/>
                <button onClick={onClick} className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
};



export default Task;