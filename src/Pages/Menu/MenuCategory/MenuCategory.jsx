import MenuItem from "../../Shared/MenuItem/MenuItem"


const MenuCategory = ({items}) => {
  return (
    <>
     <div className="grid md:grid-cols-2 gap-4 ">
      {
        items.map(item => (
          <MenuItem key={item.id} item={item}/>
        ))
      }
    </div>
    </>
  )
}

export default MenuCategory