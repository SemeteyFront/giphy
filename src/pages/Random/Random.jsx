import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandom } from '../../api/random';
import './random.css'


function Random() {
  const dispatch = useDispatch()
  const random = useSelector(state => state.random.post.data)
  console.log(random)
  
  useEffect(() => {
    dispatch(getRandom())
  },[])

  return (
      <div><img className='random__img' src={random.images.downsized.url}/></div>
  );
}

export default Random;
