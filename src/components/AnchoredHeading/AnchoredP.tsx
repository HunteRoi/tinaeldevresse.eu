import Heading from '@theme/Heading';

/* @ts-ignore */
const AnchoredP = ({ children, ...props }) => <Heading as='p' {...props}>{children}</Heading>;
export default AnchoredP;
