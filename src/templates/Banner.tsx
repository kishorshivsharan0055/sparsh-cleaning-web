import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Let Us Find The Perfect Workout For You!"
      subtitle="Transform Your Body"
      button={
        <Button>Get In Touch</Button>             
      }
    />
  </Section>
);

export { Banner };
