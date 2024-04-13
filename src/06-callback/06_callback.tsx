export const User = () => {
    const deleteUser = () => {
        alert('delete');
    }
    const saveUser = () => {
        alert('save');
    }
    const onNameChanged = () => {
        alert('name has changed');
    }


    return <div><textarea onChange={onNameChanged}>Dimych</textarea>
        <input type="text"/>
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}