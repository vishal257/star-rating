'use client'

import {Suspense } from "react";
import Reviews from "./review";

const SuspenseWrapper = ({children}:{children: React.ReactNode}) => {
  return(
      <Suspense fallback={<div>Loading....</div>}>{children}</Suspense>
  );
}

const App = () => {
  return(
    <SuspenseWrapper>
    <Reviews/>
  </SuspenseWrapper>
  );
}

export default App;