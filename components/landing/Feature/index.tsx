import {featuresData} from '@/components/landing/Feature/constants';
import Card from '@/components/landing/Feature/Card';

const Features = () => (
  <section className="feature__section max-w-5xl mx-auto">
    <div className="features-card grid px-10 lg:px-14 xl:px-2 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12 lg:py-20">
      {featuresData.map((feature, index) => (
        <Card key={index} {...feature} />
      ))}
    </div>
  </section>
);

export default Features;
