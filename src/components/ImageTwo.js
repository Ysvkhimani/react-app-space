import { Parallax } from 'react-parallax';
import Nasa from '../img/nasa.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Nasa} strength={800}>
       <div className='content'>
        <span className='img-txt'> 
            a Trip To Space... 
        </span>

       </div>
    </Parallax>
);

export default ImageOne