const ErrorMessage = ({ items }) => {
    return <>  {items.length === 0 && <h3>List Empty</h3>}
    </>
}
export default ErrorMessage;