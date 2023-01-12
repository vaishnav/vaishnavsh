import React, { Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {
  return (
    <>
    <Suspense fallback={<div className='loading'><p>Loading...</p></div>}>
      <Spline scene="https://prod.spline.design/7MD6gokbWs9a2Zn4/scene.splinecode" />
    </Suspense>
    </>
  );
}
