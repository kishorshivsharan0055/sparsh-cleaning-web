import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Services"
    description="At Ultimate Fitness, we provide various services..."
  >
    <VerticalFeatureRow
      title="Workout"
      description="Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum. Ut congue nisl sapien, vel ultricies nulla tincidunt vitae. Maecenas non ligula quis massa consequat commodo eleifend ut velit."
      image="Workout.png"
      imageAlt="Workout"
    />
    <VerticalFeatureRow
      title="Cardio"
      description="Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum. Ut congue nisl sapien, vel ultricies nulla tincidunt vitae. Maecenas non ligula quis massa consequat commodo eleifend ut velit."
      image="cardio.png"
      imageAlt="Cardio"
      reverse
    />
    <VerticalFeatureRow
      title="Personal Trainer"
      description="Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum. Ut congue nisl sapien, vel ultricies nulla tincidunt vitae. Maecenas non ligula quis massa consequat commodo eleifend ut velit."
      image="Personal.png"
      imageAlt="Personal Trainer"      
    />
    <VerticalFeatureRow
      title="Unisex"
      description="Integer auctor est nec semper hendrerit. Etiam sollicitudin enim in urna commodo, in dapibus velit elementum. Ut congue nisl sapien, vel ultricies nulla tincidunt vitae. Maecenas non ligula quis massa consequat commodo eleifend ut velit."
      image="unisex.png"
      imageAlt="Unisex"
      reverse
    />
     <VerticalFeatureRow
      title="Weight Training"
      description="We have Professionally Certified and Qualified Personal Trainers who can pay Special Attention to an individuals’ need and expectation"
      image="weight.png"
      imageAlt="Weight Training"
      
    />     
  </Section>
);

export { VerticalFeatures };
