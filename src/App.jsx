import './App.css';
import Item from './Components/Item';
import ItemDate from './Components/ItemDate';

function App(){

  const response=[
     {
        itemName:"Nirma",
        itemDate: "28",
        itemMonth:"June",
        itemYear:"1998"
     },

     {
      itemName:"Surfexcel",
      itemDate: "28",
      itemMonth:"June2",
      itemYear:"1997"
   },

   {
    itemName:"Nirma3",
    itemDate: "28",
    itemMonth:"June",
    itemYear:"1998"
 },



  ];

  return (
    <div className='App'>
      <Item name={response[0].itemName} />
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}/>

      <Item name={response[1].itemName} />
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}/>

      <Item name={response[2].itemName} />
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}/>
      
      <div className='App'>Hello</div>
    </div>
  )
}

export default App;