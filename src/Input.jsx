export function Input(props) {
    const { onChange, onKeyUp } = props;

    return (
<<<<<<< HEAD
        <input id='add-todo' type="text" onChange={onChange} onKeyUp={onKeyUp}/>
=======
        <input type="text" id="add-todo" onChange={onChange} onKeyUp={onKeyUp}/>
>>>>>>> b8e0f9d (feat: callback test for checkbox)
    );
}