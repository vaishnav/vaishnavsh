import React, { Suspense, useState } from 'react';
import './Table.scss'
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {
  const [showLoading, setShowLoading] = useState(true)
  return (
    <div className='table'>
      <div className="loading">{
        showLoading ? <h3>Loading...<br/>( Hover once loaded )</h3> : null
      }</div>
      <Suspense>
        <Spline scene="https://prod.spline.design/7MD6gokbWs9a2Zn4/scene.splinecode" onLoad={()=>setShowLoading(false)}/>
      </Suspense>
    </div>
  );
}
