//----Images----//----//----Images----//----//----Images----//----//----Images----//
import Snicker from "../../public/Snicker.png";
import CustomSystems from "../../public/CustomSystems.png";
import Maintenance from "../../public/Maintenance.png";
import PaymentMethods from "../../public/PaymentMethods.png";
import Seo from "../../public/Seo.png";
//----Images----//----//----Images----//----//----Images----//----//----Images----//
import Service from "./Service";

const ServicesList = [
  {
    title: "AI-Driven copywrite & design",
    description:
      "Unleash the full potential of your brand with AI-powered creative content. Our advanced AI tools allow us to deliver unparalleled user experiences and copywriting that will elevate your brand to new heights.",
    Image: Snicker,
  },
];

const Services = (): JSX.Element => {
  return (
    <section>
      <Service
        title='AI-Driven copywrite & design'
        description='Unleash the full potential of your brand with AI-powered creative content. Our advanced AI tools allow us to deliver unparalleled user experiences and copywriting that will elevate your brand to new heights.'
        Imagem={Snicker}
      />
      <Service
        reversed={true}
        title='SEO'
        description='Boost your online presence with our SEO services. We can generate traffic and leads by creating marketing campaigns on multiple platforms, and making sure your website is ready for it by improving its performance, accessibility and SEO.'
        Imagem={Seo}
      />
      <Service
        title='Flexible payment methods'
        description='We accept credit cards, wire transfers, and crypto. And we can implement these payment methods on your company.'
        Imagem={PaymentMethods}
      />
      <Service
        reversed={true}
        title='Maintenance'
        description='Whether you need new designs, minor interface adjustments, a new system, or additional pages, we`ve got you covered. Our commitment to our clients is unwavering, and we never drop a project.'
        Imagem={Maintenance}
      />
      <Service
        title='Custom systems'
        description='Using NodeJS, our experienced engineers can develop you unique and reliable systems. If you need an API, chatbot, system integration, CMS, we’ve got you covered.'
        Imagem={CustomSystems}
      />
    </section>
  );
};

export default Services;
