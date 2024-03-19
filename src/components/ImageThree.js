import { Parallax } from 'react-parallax';
import Satellite from '../img/satelite.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Satellite} strength={800}>
       <div className='content'>
        <span className='img-txt'> 
            a Trip To Space... 
        </span>

       </div>
    </Parallax>
);

export default ImageOne