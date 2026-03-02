import Showroom from './Showroom';
import PageInfo from './Info';
import Newsletter from './Newsletter';
import FixedButtons from '../../shared/FixedButtons';
import Hotline from '../../shared/Hotline';
import FeedBack from '../../shared/Feedback';

export default function Footer() {
    
    return(
        <>
        <Newsletter />

        <Showroom />

        <PageInfo />

        <FixedButtons />        
        
        <FeedBack />

        <Hotline />
        
        <div id="js-tooltip" className="absolute z-[999] w-[450px]" style={{ display: 'none' }}> {/* Tooltip */} </div>
        </>
    )
}