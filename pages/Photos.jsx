import React, {useContext} from 'react';
import Image from '../components/Image';
import {Context} from '../Context'
import { getClass } from '../utils/func';

function Photos() {
  const {photos} = useContext(Context)
  console.log(photos)
  const imageElements = photos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ))
  console.log(imageElements)
  
  return (
    <main className="photos">
      {imageElements}
    </main>
  );
}

export default Photos;
