function AddTodo() {
    return <div className="container items-container">
        <div className="row">
            <div className="col-6"><input type="text" placeholder="Enter Todo Here" /></div>
            <div className="col-4"><input type="date" name="" id="" /></div>
            <div className="col-2"><button className="btn btn-success st-button">Add</button></div>
        </div>
    </div >
}

export default AddTodo;