import React from 'react';
import classes from './ListContents.module.css';
import mediclogo from '../../../assets/images/mediclogo.png'
const ListContents = props =>{
    return(
        <div className={classes.ListContents}>
            {/* <p>hiii</p>
            <h1>1</h1> */}
            <div >
                {/* <span>Tokyo</span> */}
                <img className={classes.Image} src={mediclogo} alt='tokyoGhoul'style={{height:'70%', width:'100%'}}/>
                <div className={classes.Price}>
                <p>name lkjbkd</p>
                </div>
            </div>
            
        </div>
    );
}


export default ListContents;