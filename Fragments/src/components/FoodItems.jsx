import Item from "./item";

const FoodItems = ({ items }) => {
    return (
        <ul className="list-group">{
            items.map((item) => (
                <Item key={item} foodItem={item}
                handleBuyButton={()=>console.log(`${item}Bought`)}
                ></Item>
            ))
        }</ul>
    )
}

export default FoodItems;