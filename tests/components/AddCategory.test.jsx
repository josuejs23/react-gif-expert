import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('Test on <AddCategory /> component', ()=>{
    test('Should change the value of the text-box', ()=>{
        render(<AddCategory onNewCategory={ ()=>{}}/>);
        const input = screen.getByRole("textbox");
        fireEvent.input(input, {target : {value:'Pokemon'}});
        // screen.debug();
        expect(input.value).toBe('Pokemon')
    })

    test('Should call onNewCategory if the input has value',()=>{
        const inputValue = 'Pokemon';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole('form');
        fireEvent.input(input, {target : {value:inputValue}});
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        // screen.debug();
        // fireEvent.form(SubmitEvent);
    })

    test('Should not call the onNewCategory when the input is emptyy',()=>{
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).not.toHaveBeenCalled();
    })
})