import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ()=>{
    
    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory)=>{
        if(categories.includes(newCategory)) return;
        console.log(newCategory)
        setCategories([newCategory, ...categories]);
    }

    console.log(categories)
    return(
        <>
            <h1>Gif-Expert-App</h1>

            <AddCategory 
                onNewCategory={ (category)=>onAddCategory(category)}
            />
            
            {
                categories.map( (categorie )=> (
                    <GifGrid category={categorie} key={categorie}/>
                )
                )
            }
        </>
    )
}