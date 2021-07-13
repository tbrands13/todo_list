import React from 'react';



const Input = (props) => {
    const { list, setList } = props;
    let task = {
        name: "",
        isComplete: false
    };
    const onChange = (e) => {
        task.name = e.target.value;
    };

    const onClick = (e) => {
        setList([...list, task]);
        e.target.value = "";
        task = "";
    };
    return(
        <div className="container w-50">
            <input className="form-control" onChange={onChange} type="text" name="task"/>
            <button className="btn btn-info" onClick={onClick}>Add Task</button>
        </div>
    );
};


export default Input;