import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';


const title = "Perfect Workout Coach for Body Shape";

const Hero = () => (
  <Background color="bg-gray-100">
    <Section >
      <NavbarTwoColumns logo={<Logo xl />}>
       
      </NavbarTwoColumns>
    </Section>

    <Section>
      <HeroOneButton
        title={
          <>
            {`${title} \n`}
            <span className="text-primary-500">Ultimate Fitness</span>
          </>
        }
        description=""
        button={
              <Button xl>Contact Us</Button>
        }
      />
    </Section>
  </Background>
);

export { Hero };
