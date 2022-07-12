import React from "react";
import { Link } from "react-router-dom";
import CTAIMG from "../../public/images/cta-logo-one.png" 
import CTAIMG2 from "../../public/images/cta-logo-two.png" 

import classes from "./Login.module.css";



const Login = (props)=>{
return(
<>

 <section className={classes.Container}>
    <div className={classes.Contents}>
        <div className={classes.CTA}>
           <img src={CTAIMG} className={classes.CTAlogoOne} />
           <Link to={"#"} className={classes.SignUpLink}>GET ALL THERE</Link>
           <p className={classes.Description}>
             Get Premier Access To Raya and the Lost Drangon for an Additional fee With a Disney+ subscription.
             As of 3/26/21,  the price of Disney+ and the Disney Bundle will increase by $1
           </p>
           <img src={CTAIMG2} className={classes.CTAlogoTwo} />
          
        </div>

        <div className={classes.BackgroundImage}></div>
    </div>
 </section>

</>)
}




export default Login