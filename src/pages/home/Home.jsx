import Banner from "../../components/banner/Banner";
import Feature from "../../components/feature/Feature";
import chatIcon from "../../designs/img/icon-chat.png";
import moneyIcon from "../../designs/img/icon-money.png";
import securityIcon from "../../designs/img/icon-security.png";

import "./home.scss";
import "../sign/signin.scss";
import "../user/user.scss";
const featuresData = [
  {
    icon: chatIcon,
    title: "You are our #1 priority",
    description:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    icon: moneyIcon,
    title: "More savings means higher rates",
    description:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    icon: securityIcon,
    title: "Security you can trust",
    description:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

export default function Home() {
  return (
    <div className="body">
      <main className="bg-white">
        <Banner />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {featuresData.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </section>
      </main>
    </div>
  );
}
//faire une validation sur le champ nom à ne pas valider si vide
