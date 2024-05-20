const CategoryItemList = ({itemCards}) => {
    console.log(itemCards)
    return (
        <div>
           
            {itemCards.map((items) => <div key={items?.card?.info?.id}></div>)}
          
        </div>
    )
}

export default CategoryItemList