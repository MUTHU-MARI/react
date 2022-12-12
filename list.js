/*function List() {
    const array=[1,2,3,4,5];
    return(
        <div>
            {array.map(data =><h1>data</h1>)}
        </div>
    )
   // map1=array.map(x=>x);
    //console.log(map1);
}
export default List;*/

/*function List()
{
    const array=[1,2,3,4,5];
    const result=array.map(data =>(<h1>{data}</h1>))
    return(
    
        <div>
            {result}
            {array.map(data => <h1>{data}</h1>)}
           
        </div>
    );
}

function List()
{
    const array=[1,2,3,4,5];
    return(
    
        <div>
            {array.map(data => <h1>{data}</h1>)}
        </div>
    );
}*/
function List() {
    const details=[
        {
        id:1,
        name:'mon',
        roll:'23'
    },
    {
        id:2,
        name:'bts',
        roll:'24'
    },
    {
        id:3,
        name:'shawn',
        roll:'25'
    },
];
    return(
   <div>
   {details.map(data =>
        (
        <div key={data.id}>
        <p> {data.id}</p>
        <p>I'm {data.name}</p>
        <p style={{background:'red'}}>My name is {data.name} </p>
        <p> my roll no is {data.roll}</p>
        </div>
       
        ))
  } 
   </div>
  )
}
  export default List;
