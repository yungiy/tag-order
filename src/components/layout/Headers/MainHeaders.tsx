import { Link } from 'react-router-dom';
import LogoIcon from '../../common/icon/LogoIcon';

export default function MainHeaders() {
  return (
    <header className="flex w-full items-center justify-between border-b border-border bg-white px-4 py-[15px]">
      <Link to='/'><LogoIcon /></Link>
    </header>
  );
}