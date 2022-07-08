import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Test on <GifItem /> component', ()=>{
    
    const title = 'Any title';
    const url = 'https://imagenes.com/image.gif';

    test('Should match with the snapshot', ()=>{
        const { container } = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    })

    test('Should have the url the image and the ALT', ()=>{
        render(<GifItem title={title} url={url}/>);
        const {src, alt} = screen.getByRole('img'); 
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Should show the title at the component', ()=>{
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })

})