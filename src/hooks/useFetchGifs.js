
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category)=>{

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() =>{
        const newImages = await getGifs(category);
        console.log('newImages=>',newImages)
        setImages(newImages);
        setIsLoading(false);
        setI
        console.log('images XD => ',images)
    }

    useEffect( ()=>{
        getImages();
    },[])

    return {
        images,
        isLoading
    }
}