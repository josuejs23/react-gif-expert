import { GifGrid } from "../../src/components/GifGrid"
import { render, screen} from '@testing-library/react'
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock("../../src/hooks/useFetchGifs")

describe('Test on <GifGRid/> compnent', ()=>{

    const category = 'Pokemon'

    test('Should show the loading at first time', ()=>{

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        })

        render(<GifGrid category={category}/>);
        expect(screen.getByText('.... Is loading'));
        // screen.debug();
    })

    test('Should show the image when the image is loaded from useFetch', ()=>{


        const gifs = [
            {
                id : '123',
                title : 'Goku',
                url : 'https://local.hos/image.jpg'
            },
            {
                id : '1234',
                title : 'Goku+',
                url : 'https://local.hos/image+.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:false
        })

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
        screen.debug();


    })
})