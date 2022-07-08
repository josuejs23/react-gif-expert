import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Test on useFetchGifs()', ()=>{
    test('Should...', ()=>{
        const { result } = renderHook(()=>useFetchGifs('Pokemon'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
        console.log(result);
    })

    test('Should return a list with images and isLoading in false', async()=>{
        const { result } = renderHook(()=>useFetchGifs('Pokemon'));
        await waitFor(
            ()=> expect(result.current.images.length).toBeGreaterThan(0)
        )
        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
        console.log(result);
    })
})