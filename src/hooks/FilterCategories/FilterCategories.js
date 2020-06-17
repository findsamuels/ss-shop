import React, {useState, } from 'react'
import classes from './FilterCategories.module.scss'
import FormElement from '../../Components/Form/FormElement/FormElement'
import * as actionCreators from '../../store/index'
import {useDispatch} from 'react-redux'

const FilterCategories = (props) => {

const dispatch = useDispatch()

    const [categoryValue, setCategoryValue] = useState('')
 
    const filterCategories = (event) => {
        let value = event.target.value 
        let categorySelected = false;
        setCategoryValue(value)
        if (value === 'All'){
            categorySelected = false
        } else if (value !== 'All'){
            categorySelected = true
        }
        console.log(value)
        console.log(categorySelected)
        dispatch(actionCreators.filterCategories(value, categorySelected))
        dispatch(actionCreators.closeSideBarBackdrop())
        dispatch(actionCreators.closeSideBar())
        

    }
    return (
                    <FormElement shape='rounded' onChange={filterCategories} value={categoryValue} elementType='select'>
                        <option >All</option>
                        <option >Item 1</option>
                        <option >Item 2</option>
                        <option >Item 3</option>
                    </FormElement>

    )
}

export default FilterCategories