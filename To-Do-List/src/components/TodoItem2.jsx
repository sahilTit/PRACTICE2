function TodoItem2() {
    let todoName="Good Person ";
    let todoDate="01/01/2024";
    return <div className="container items-container">
        <div className="row st-row">
            <div className="col-6">{todoName}</div>
            <div className="col-4">{todoDate}</div>
            <div className="col-2"><button className="btn btn-danger st-button">Delete</button></div>
        </div>
    </div>
}
export default TodoItem2;