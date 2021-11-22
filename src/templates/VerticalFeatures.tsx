import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Services"
    description="At Sparsh Cleaning Solutions, we provide various services..."
  >
    <VerticalFeatureRow
      title="Home Cleaning"
      description="Best Housekeeping & Deep Cleaning Services In Pune and Pimpri Chinchwad. Call Now. Provides Various kinds of House Cleaning Services in Pimpri-Chinchwad, FLat, Bunglow, House Etc. Competitive Pricing. On-time completion. Professional Cleaners."
      image="home.png"
      imageAlt="Home Cleaning"
    />
    <VerticalFeatureRow
      title="Office Cleaning"
      description="On-demand End-to-End Quality Professional Office Cleaning, Cabin Sanitization and Deep Cleaning Services for Office and Commercial Spaces at Affordable Prices"
      image="office.png"
      imageAlt="Office Cleaning"
      reverse
    />
    <VerticalFeatureRow
      title="Hotel Cleaning"
      description="Hotel Cleaning Services will be provided with skilled hospitality staffing, exceptional services, and specialty cleaning."
      image="hotel.png"
      imageAlt="Hotel Cleaning"      
    />  
  </Section>
);

export { VerticalFeatures };
