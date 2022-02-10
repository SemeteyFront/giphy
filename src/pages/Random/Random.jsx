import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandom } from '../../redux/getRandom';
import './random.css'


function Random() {
  const dispatch = useDispatch()
  const random = useSelector(state => state.random)
  console.log(random)
  
  useEffect(() => {
    dispatch(getRandom())
  },[])

  return (
      <div className='random'><img className='random__img' src={random.images?.downsized.url}/></div>
  );
}

export default Random;
