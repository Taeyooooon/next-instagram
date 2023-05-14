import { RiBookMarkLine } from 'react-icons/ri';

interface Props {
  className?: string;
}

const BookmarkIcon = ({ className }: Props) => {
  return <RiBookMarkLine className={className || `w-6 h-6`} />;
};
export default BookmarkIcon;
