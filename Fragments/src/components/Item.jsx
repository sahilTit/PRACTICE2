import styles from "./Item.module.css"
const Item = ({ foodItem }) => {

    const handleByButtonClicked=(event)=>{
        console.log(event);
        console.log(`${foodItem} Being Bought`)
    }

    return (
        <li className={`${styles["St-item"]} list-group-item`}>
            <span className={styles["St-span"]}>{foodItem}</span>
            <button className={`${styles.button} btn btn-info`}
            onClick={(event)=>handleByButtonClicked(event)}
            
            >buy</button>
        </li>
    );
}
export default Item;