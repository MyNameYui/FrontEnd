import Image from 'next/image';
import konhackweblogo from '../../src/assets/konhackweblogo.png';

const LandingImage = () => {
  return (
    <div>
      <Image
        width={375}
        height={375}
        src={konhackweblogo}
        alt="Logo"
      />
    </div>
  );
};

export default LandingImage;
