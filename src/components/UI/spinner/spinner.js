import classes from './spinner.module.css'

const Spinner = ()=>{
return (
<div className={classes.spinnerContainer}>
    <div  className={classes.loaderBox}>
        <div class={classes.loader}>Loading...</div>
        <h3>Loading Datas...</h3>
     </div>
 </div>
)
}


export default Spinner