import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTranding } from '../../api/rendering';
import './tranding.css'

function Tranding() {
  const dispatch = useDispatch()
  const tranding = useSelector(state => state.tranding.posts.data)



  useEffect(() => {
    
      dispatch(getTranding())
  },[])

  return <div className='tranding'>
    {
      tranding ? 
      tranding.map(item => {
        return <img className='tranding__img tranding__hover' key={item.id} src={item.images.downsized.url}/>
      }) :
      'loading ...'
    }
  </div>;
}

export default Tranding;
