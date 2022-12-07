import React from 'react';
import Heading from '@theme/Heading';
export const AnchoredH2 = ({ children, ...props }) => <Heading as='h2' {...props}>{children}</Heading>;
/* @ts-ignore */
export const AnchoredP = ({ children, ...props }) => <Heading as='p' {...props}>{children}</Heading>;
