import styles from "./Item.module.css"
const Item = ({ foodItem }) => {

    const handleByButtonClicked=()=>{
        console.log(`${foodItem} Being Bought`)
    }

    return (
        <li className={`${styles["St-item"]} list-group-item`}>
            <span className={styles["St-span"]}>{foodItem}</span>
            <button className={`${styles.button} btn btn-info`}
            onClick={()=>handleByButtonClicked()}
            >buy</button>
        </li>
    );
}
export default Item;