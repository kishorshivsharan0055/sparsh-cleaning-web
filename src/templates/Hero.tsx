import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';


const title = "Best House-Keeping & Cleaning Services";

const Hero = () => (
  <Background color="bg-gray-100">
    <Section >
      <NavbarTwoColumns logo={<Logo xl />}>
       
      </NavbarTwoColumns>
    </Section>

    <Section data-aos="fade-up">
      <HeroOneButton
        title={
          <>
            {`${title} \n`}
            <span className="text-primary-500">Sparsh Cleaning Solutions</span>
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
