import { useEffect, useState } from "react"; 

import ItemService from "../services/ItemServices"; 

import { Item } from "../types/item"; 

import { Link } from "react-router-dom"; 


export default function Items() { 


    const [items, setItems] = useState<Item[]>([]);
    const [itemUpdate, setItemupdate] = useState<Item>({
        name:"",
        id:"",
        price:""
    })

    const handleChange = (event:any)=> {
        setItemupdate({...itemUpdate, [event.target.name] : event.target.value});
    }


    const getItems = () => { 


        ItemService.getAll() 

            .then((response: any) => { 

                setItems(response.data); 

                console.log(items); 


            }) 

            .catch((e: Error) => { 

                console.log(e); 

                alert(e.message); 

            }) 

    } 

const deleteItems =(id:string) => {
    ItemService.remove(id)
    .then((response:any) => {
        alert(response.data);
        getItems();
    })
    .catch((e:Error) => {
        console.log(e);
        alert(e.message);
    })
}

const updateItem = (inItem:Item) => { 

        setItemupdate(inItem); 
    
      } 
    
    
      const saveItem = () => { 
    
        const item = {...itemUpdate}; 
    
        ItemService.put(item) 
    
        .then((response:any) => { 
    
          alert(response.data); 
    
          getItems(); 
    
        }) 
    
        .catch((e:Error) => { 
    
          console.log(e); 
    
          alert(e.message); 
    
        }) 
    
      }


const resetform = () => (
    setItemupdate({
        id:"",
        name:"",
        price:"",
    })
)    
    

    useEffect(() => { 

        getItems(); 

    }, []); 

   return (

    <div className="container is-fluid"> 

            <section className="section"> 

                <h1 className="title">Item Catalogue</h1> 

            </section> 
            <section className="section">
                <form>
                    <div className="Card">
                        <div className="card-content">
                            <p>Item ID </p>
                            <input className="input" type="text" name="id" value={itemUpdate.id} onChange={handleChange}/>
                            <p>Item Name </p>
                            <input className="input" type="text" name="name" value={itemUpdate.name} onChange={handleChange}/>
                            <p>Item Price </p>
                            <input className="input" type="text" name="price" value={itemUpdate.price} onChange={handleChange}/>
                            <button className="button is-roundeed is-danger" onClick={() => {saveItem()}}>Add or Update Item</button>
                            <button className="button is-roundeed is-danger" onClick={() => {resetform()}}>Reset</button>
                        </div>
                    </div>
                </form>


            </section>

            <div className="columns is-multiline"> 

                { 

                    items.map((item, index) => ( 

                        <div className="column"> 

                            <div className="card"> 

                                <div className="card=header"> 

                                    <h2 className="card-header-title"> {item.name}</h2> 

                                </div> 

                                <div className="card-content"> 

                                    <p className="content">{item.id}</p> 

                                    <p className="content">${item.price}</p> 

                                </div> 

                                <div className="card-footer"> 

                                    <Link className="button is-rounded is-danger" to={`/items/${item.id}`}>View Item</Link> 
                                    <button className="button is-rounded is-info" onClick={() => {deleteItems(item.id)}}>Delete Item</button>


                                </div> 

                            </div> 

                        </div> 

                    )) 

                } 

            </div> 

        </div> 

    ); 

}

