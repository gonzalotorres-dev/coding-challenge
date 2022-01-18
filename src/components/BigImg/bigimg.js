import './bigimg.scss';
import app_development from '../../img/app_development.png';

function BigImg() {
    return(
        <div className='big-image'>
            <img src={app_development} alt="Background"/>
        </div>
    )
}

export default BigImg;
