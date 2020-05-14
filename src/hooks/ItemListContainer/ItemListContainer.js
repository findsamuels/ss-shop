import React from 'react'
import classes from './ItemListContainer.module.scss'
import {Card, Col} from 'react-bootstrap'
import Button from '../../Components/Button/Button'
import FormElement from '../../Components/Form/FormElement/FormElement'
import {useSelector} from 'react-redux'
const ItemListContainer = (props) => {
   let id = props.id
    return(
        
        <Col key={id}  md="4">

            <Card className={classes.ItemList} >
                    <Card.Img  src={props.itemImg} alt="bedroom" />
                    <Card.Body>
                        <Card.Title className={classes.Title}>{props.itemTitle}</Card.Title>
                        <Card.Title >{props.itemDescription.substr(0, 150)}</Card.Title>
                        <Card.Text>Select Quantity</Card.Text>
                    <FormElement id={id} onChange={props.selectQuantity} value={props.selectedValue}  elementType='select'>
    {props.options}
                    </FormElement>
                        <Card.Text className={classes.Price}>${props.itemPrice}</Card.Text>
                        
                    <Button disabled={props.disabled} onClick={props.addToCart} btnColor="primary" btnType="block" >{props.btnText}</Button>
                    </Card.Body>
                </Card>

            </Col>
      
    )
}

export default ItemListContainer