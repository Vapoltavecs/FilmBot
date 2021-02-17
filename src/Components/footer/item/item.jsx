import classes from './item.module.css'

let Item = (props) =>{
    console.log(props.img)
    return(
        <a href={props.href} target= '_blank' className={classes.item}>{props.img}{props.name}</a>
    )
}


export default Item