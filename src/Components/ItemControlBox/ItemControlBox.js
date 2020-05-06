import React from 'react'

import classes from './ItemControlBox.module.scss'

const itemControlBox = (props) => {

    return(
        <div className={classes.ItemControlBox}>
            {props.children}
        </div>
    )
}

export default itemControlBox