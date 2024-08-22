export default function ItemContainer(props){
     return (
          <div className="item-container" style={{ backgroundImage: props.itemBgUrl }}>
               <span style={{ backgroundImage: props.itemUrl }} />
               <p className='item-amount'>{props.itemAmount}</p>
               <p className='item-desc'>{props.itemDesc}</p>
          </div>
     )
}