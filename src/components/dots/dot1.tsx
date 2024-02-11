import React, { ReactNode, MouseEvent } from 'react';

interface Dot1Props {
  children: ReactNode;
}

function Dot1({ children }: Dot1Props) {
  return <div>{children}</div>;
}

export default Dot1;
