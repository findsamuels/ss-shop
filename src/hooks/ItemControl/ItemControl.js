import React, {useState, } from 'react'
import classes from './ItemControl.module.scss'
import {useLocation} from 'react-router-dom'
import ItemControlBox from '../../Components/ItemControlBox/ItemControlBox'
import FormElement from '../../Components/Form/FormElement/FormElement'
import Form from '../../Components/Form/Form'
import * as actionCreators from '../../store/index'
import {useDispatch} from 'react-redux'
const ItemControl = (props) => {
    const location = useLocation()
const dispatch = useDispatch()
    const [itemValue, setItemValue] = useState('')
    const [categoryValue, setCategoryValue] = useState('')
    const getTitle = (event) => {
        let value = event.target.value 
        let inputEntered = false
        
        value.length >=1 ? inputEntered = true : inputEntered = false
       
        setItemValue(value)
        switch (location.pathname) {
            case '/':
              dispatch(actionCreators.searchShopItem(value, inputEntered))
                break
            
            default:
                break;
        }
    

        
    }
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


    }
    return (
        <ItemControlBox>
            <div className={classes.ItemControl}>
                
                <Form>
                    <p className={classes.FilterLabel}>FILTERS</p>
                    <FormElement onChange={ getTitle} value={itemValue}  elementType='input' placeholder='Search product name' type='text' />

                    <div className={classes.itemControl}></div>
                    <FormElement elementType='select'>
                        <option >Price: Low To High</option>
                        <option >Price: High To Low</option>
                        <option >Relevant</option>
                        <option >Newest</option>
                    </FormElement>
                   
                    <FormElement onChange={filterCategories} value={categoryValue} elementType='select'>
                        <option >All</option>
                        <option >Item 1</option>
                        <option >Item 2</option>
                        <option >Item 3</option>
                    </FormElement>
                </Form>



            </div>
        </ItemControlBox>

    )
}

export default ItemControl