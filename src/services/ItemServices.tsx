import http from '../http-common';
import {Item} from '../types/item'; 

async function getAll() {

    return http.get<Array<Item>>("/items");
}


const get = async(id: string) => {

    return http.get<Item>(`/items/${id}`);
}

const remove = async(id:string) =>{
    return http.delete(`/items/${id}`)
}


const put = async(data: Item) => {

    return http.put('/items', data);

}

const ItemService = {

    getAll,
    get,
    remove,
    put
}

export default ItemService;