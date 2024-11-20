import Button from '../common/Button';
import LogoIcon from '../common/icon/LogoIcon';
import TogoIcon from '../common/icon/TogoIcon';

export default function Slider1() {
  return (
    <>
      <div className='relative h-screen'>
        <div className='absolute bottom-1/4 left-1/2 transform -translate-x-1/2'>
          <Button className='w-64 h-16 border-[#DC143C] font-extrabold border-2 bg-white text-[#DC143C] rounded-full text-xl flex items-center justify-center gap-1'>
            <LogoIcon />로 주문하기
            <TogoIcon />
          </Button>
        </div>
      </div>
    </>
  );
}
