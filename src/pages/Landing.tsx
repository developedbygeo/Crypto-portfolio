import StyledLanding from '../components/UI/Landing.styled';
import backgroundImage from '../assets/backgroundLanding.webp';
import { CtaButton } from '../components/UI/Button.styled';

const Landing = () => {
    return (
        <StyledLanding bg={backgroundImage}>
            <div className="text-wrap">
                <h1>
                    Stay <span>up to date</span> with your crypto.
                </h1>
                <h2>
                    Track your portfolio <span className="performance">performance</span> now.
                </h2>
            </div>
            <div className="cta-wrap">
                <CtaButton ctaAltHover>Get Started</CtaButton>
            </div>
        </StyledLanding>
    );
};

export default Landing;
