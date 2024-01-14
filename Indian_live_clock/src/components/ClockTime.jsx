let ClockTime = ()=>{
    let time = new Date();
    return <p className="lead">This Time is Current Time:{time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}
export default ClockTime;