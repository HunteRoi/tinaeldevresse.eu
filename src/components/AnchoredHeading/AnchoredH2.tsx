import Heading from '@theme/Heading';

const AnchoredH2 = ({ children, ...props }) => <Heading as='h2' {...props}>{children}</Heading>;
export default AnchoredH2;
