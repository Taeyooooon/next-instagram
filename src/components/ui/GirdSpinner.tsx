import dynamic from 'next/dynamic';

const GridLoader = dynamic(
  () => import('react-spinners').then((lib) => lib.GridLoader),
  {
    ssr: false,
  }
);

interface Props {
  color?: string;
}

const GirdSpinner = ({ color = 'red' }: Props) => {
  return <GridLoader color={color} />;
};
export default GirdSpinner;
