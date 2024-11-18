import Button from './components/common/Button';
import CheckBox from './components/common/CheckBox';
import Footers from './components/layout/Footers/Footers';
import MainHeaders from './components/layout/Headers/MainHeaders';
import SubHeaders from './components/layout/Headers/SubHeaders';

export default function App() {
  return (
    <>
      <div>
        <MainHeaders />
        <SubHeaders text='text' />
        <Button>안녕</Button>
        <CheckBox size='sm' className='border-black' />

        <Footers />
      </div>
    </>
  );
}
