import PropTypes from 'prop-types'
import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChanged = ({ target }) => {
        console.log(target.value)
        setInputValue(target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if(inputValue.trim()===''){
            return;
        }
        onNewCategory(inputValue.trim())
        setInputValue('');
        console.log('FormValue',inputValue);
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type='text'
                placeholder='search category..'
                value={inputValue}
                onChange={onInputChanged}
            />
        </form>

    )
}

AddCategory.propTypes = {
    onNewCategory:PropTypes.func.isRequired
}