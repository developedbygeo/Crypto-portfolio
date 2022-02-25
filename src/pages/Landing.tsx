import StyledLanding from './Landing.styled';
import backgroundImage from '../assets/backgroundLanding.webp';
import { CtaButton } from '../components/UI/Button.styled';

const Landing = () => {
  return (
    <StyledLanding bg={backgroundImage}>
      <div>
        <h1>
          Stay <span>up to date</span> with your crypto.
        </h1>
        <h2>Track your portfolio performance here.</h2>
      </div>
      <div>
        <CtaButton ctaAltHover>Get Started</CtaButton>
      </div>
    </StyledLanding>
  );
};

export default Landing;
