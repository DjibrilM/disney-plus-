import classes from './detail.module.css'
import pngImage from "../../public/images/Daco_88930.png"
import conrol1 from '../../public/images/play-icon-black.png';
import conrol2 from '../../public/images/play-icon-white.png';
import { useParams } from 'react-router';
import { useEffect,useState }  from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { async } from '@firebase/util';
import Spinner from '../UI/spinner/spinner';



const Detail = ()=>{

const {id} = useParams();
const [detailsData,setDetailsData] = useState({});

useEffect(()=>{
    const LoadData = async ()=>{
    const docRef = doc(db,'Movies',id)
    const document =await getDoc(docRef)
    setDetailsData(document.data());
    console.log(detailsData, 'detail datas from')
   }
    LoadData();
},[])


return (
    <div className={classes.detail}>
        <div className={classes.background}>
            <img src={detailsData.backgroundImg}/>
        </div>
        <div className={classes.imgTitle}>
            <img src={detailsData.titleImg} />
        </div>

        <div className={classes.contentsMeta}>
            <div className={classes.controls}>
                <button className={classes.player}>
                   <i class='bx bx-play'></i>
                   <span>Play</span>
                </button>
                <button className={classes.playerTrailer}>
                   <i class='bx bx-play'></i>
                   <span>TRAILER</span>
                </button>
                <button className={classes.mediaPlus}>
                     <i class='bx bx-plus'></i>
                </button>

                <button className={classes.mediaPlus}>
                    <i class='bx bx-group'></i>
                </button>
                </div>


            <div className={classes.subTitles}>
                    {detailsData.subTitle}
            </div>

            <div className={classes.description}>
                  {detailsData.description}
            </div>
        </div>

   {!detailsData.subTitle ? <Spinner /> :''}
    </div>
)
}
  export default Detail;