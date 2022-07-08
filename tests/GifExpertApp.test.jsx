import { render } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('TEST on <GifExpertApp/>', ()=>{
    test('Should match with the snapshot',()=>{
        const {container}= render(<GifExpertApp/>)
        expect(container).toMatchSnapshot();

    })
})