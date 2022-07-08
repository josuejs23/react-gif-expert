import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs";

describe('Test on getGifs()', () => { 
    test('Should return a list of gifs', async ()=>{

        const gifs = await getGifs('Pokemon');
        // console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
 })