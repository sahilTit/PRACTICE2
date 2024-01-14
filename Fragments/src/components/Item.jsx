import styles from "./Item.module.css"
const Item = ({ foodItem }) => {
    return (
        <li className={`${styles["St-item"]} list-group-item`}><span className={styles["St-span"]}>{foodItem}</span></li>
    );
}
export default Item;