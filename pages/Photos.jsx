import React, {useContext} from 'react';
import Image from '../components/Image';
import { Context } from '../Context'
import { getClass } from '../utils/func';

function Photos(props) {
  const {photos} = useContext(Context)

  const photoElements = photos.map((photo, i) => (
    <Image key={i} img={photo} className={getClass(i)} />
  ))
  return (
    <main className="photos">
      {photoElements}
    </main>
  );
}

export default Photos;
