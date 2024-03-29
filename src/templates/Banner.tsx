import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Let Us Find You The Perfect Cleaning Service"
      subtitle="We are here for you"
      button={
        <Button>Get In Touch</Button>             
      }
    />
  </Section>
);

export { Banner };
