import { Parallax } from 'react-parallax';
import Space from '../img/space.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Space} strength={800}>
       <div className='content'>
        <span className='img-txt'> 
            a Trip To Space... 
        </span>

       </div>
    </Parallax>
);

export default ImageOne