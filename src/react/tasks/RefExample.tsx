/**
 * 1. Explain the reason of the error
 * 2. Fix current implementation
 *
 **/

import React from 'react';
import type { FC } from 'react';

const RefExample: FC = () => {
  const ref = React.useRef();

  return (
    <div>
      <input ref={ref}/>
    </div>
  );
};

export default RefExample;
