import {CDN_URL} from "../utils/constants"

const ItemList = ({items}) => {
    return(
    <div>
        {items.map((item) =>(
          <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
            <div className="w-9/12">
              <div className="py-2">
              <span>{item.card.info.name}</span>
                <span> - ₹ {item.card.info.price / 100}</span>
                </div>
                <p className="text-sx">{item.card.info.description}</p>
               </div>
                <div className="p-4 w-3/12 relative">
                <img src={CDN_URL+item.card.info.imageId} className="w-full"></img>
                <button className="p-2 bg-black text-white shadow-lg absolute bottom-2 left-1/2 -translate-x-1/2 rounded-lg">Add +</button>
                </div>
          </div>
        ))} 
      </div>
     )
}

export default ItemList