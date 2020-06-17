import React, {useState} from 'react'
import FormElement from '../../Components/Form/FormElement/FormElement'

import { useLocation } from 'react-router-dom'
import * as actionCreators from '../../store/index'
import { useDispatch } from 'react-redux'

const Search = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const [itemValue, setItemValue] = useState('')

    const getTitle = (event) => {
        let value = event.target.value
        let inputEntered = false

        value.length >= 1 ? inputEntered = true : inputEntered = false

        setItemValue(value)
        switch (location.pathname) {
            case '/':
                dispatch(actionCreators.searchShopItem(value, inputEntered))
                break

            default:
                break;
        }



    }


    return(
      
        <FormElement onChange={getTitle} shape='rounded' value={itemValue} elementType='input' placeholder='Search product name' type='text' />
    )
}

export default Search

