import { Envelope, MapPin, Phone } from "phosphor-react";

import { SocialNetworks } from "../static/EntityTypes";
import { mapDate } from "../utils/DateMapper";

const SocialNetworkLinks: {
  type: SocialNetworks;
  path: string;
}[] = [
  {
    type: SocialNetworks.Facebook,
    path: SocialNetworks[SocialNetworks.Facebook],
  },
  {
    type: SocialNetworks.Youtube,
    path: SocialNetworks[SocialNetworks.Youtube],
  },
  {
    type: SocialNetworks.Linkedin,
    path: SocialNetworks[SocialNetworks.Linkedin],
  },
  {
    type: SocialNetworks.Twitter,
    path: SocialNetworks[SocialNetworks.Twitter],
  },
  {
    type: SocialNetworks.Telegram,
    path: SocialNetworks[SocialNetworks.Telegram],
  },
  {
    type: SocialNetworks.Instagram,
    path: SocialNetworks[SocialNetworks.Instagram],
  },
];

const HomeSteps = [
  {
    title: "Apply Turkey Visa Online",
    body: "Choose prefered Turkey Visa type, fill online visa application form",
    icon: "CheckSquareOffset",
  },
  {
    title: "Proceed the Payment",
    body: "Our team of experts will scrutinize your visa application before sending it to Turkey authorities for visa processing",
    icon: "CreditCard",
  },
  {
    title: "Receive Visa to your email!",
    body: "We will email your turkey visa immediately after it is approved. Take a visa printout & fly to Turkey. Bon Voyage!",
    icon: "EnvelopeSimple",
  },
];

const UsefulLinks = [
  { name: "Ministry of Foreign Affairs", url: "/" },
  { name: "Ministry of Culture and Tourism", url: "/" },
  { name: "Ministry of Foreign Affairs", url: "/" },
  { name: "Ministry of Culture and Tourism", url: "/" },
];

const BlogWide = [
  {
    imageUrl: "/assets/images/blogwide/1.png",
    title: "What You Can’t Forget to Bring to Milan?",
    content:
      "Milano is the capital of the province of Milano and the Lombardy region in northern Italy. It is Italy’s most prosperous manufacturing and commercial metropolis  It is Italy’s most prosperous manufacturing and commercial metropolis",
    authorContent: "Toghrul Rajab",
    dateContent: mapDate(new Date()),
    positionNumber: "01",
  },
  {
    imageUrl: "/assets/images/blogwide/2.png",
    title: "What to pack for a trip to Lisbon?",
    content:
      "The charm of Lisbon is known to everyone. Famous writer Erich Maria Remarque had a deep love for Lisbon. He described Lisbon as a charming woman",
    authorContent: "Toghrul Rajab",
    dateContent: mapDate(new Date()),
    positionNumber: "02",
  },
  {
    imageUrl: "/assets/images/blogwide/3.png",
    title: "What To Pack For A Trip To Brazil?",
    content:
      "Starting your tour with travel to Brazil is the perfect choice for you. Before planning a trip to Brazil, you should research how you can get to this country...",
    authorContent: "Toghrul Rajab",
    dateContent: mapDate(new Date()),
    positionNumber: "03",
  },
];

const Topics = [
  {
    title: "Cities",
    imageUrl: "/assets/images/topic/1.png",
    href: "/",
  },
  {
    title: "Countries",
    imageUrl: "/assets/images/topic/2.png",
    href: "/",
  },
  {
    title: "Food, Hotel, Restaurant",
    imageUrl: "/assets/images/topic/3.png",
    href: "/",
  },
  {
    title: "General",
    imageUrl: "/assets/images/topic/4.png",
    href: "/",
  },
  {
    title: "Nature",
    imageUrl: "/assets/images/topic/5.png",
    href: "/",
  },
  {
    title: "Travel",
    imageUrl: "/assets/images/topic/6.png",
    href: "/",
  },
  {
    title: "Visa",
    imageUrl: "/assets/images/topic/7.png",
    href: "/",
  },
  {
    title: "Cities",
    imageUrl: "/assets/images/topic/1.png",
    href: "/",
  },
];

const RecentPosts = [
  {
    href: "/",
    title: "Top 10 tourist attractions in Munich",
    imageUrl: "/assets/images/topic/7.png",
    author: "Toghrul Rajab",
    date: mapDate(new Date()),
  },
  {
    href: "/",
    title: "Top 10 tourist attractions in Munich",
    imageUrl: "/assets/images/topic/6.png",
    author: "Toghrul Rajab",
    date: mapDate(new Date()),
  },
  {
    href: "/",
    title: "Top 10 tourist attractions in Munich",
    imageUrl: "/assets/images/topic/5.png",
    author: "Toghrul Rajab",
    date: mapDate(new Date()),
  },
];

const RelatedPosts = [
  {
    imageUrl: "/assets/images/relatedpost/1.png",
    categoryContent: "Cities",
    title: "Top 10 tourist attractions in Munich?",
    href: "/",
  },
  {
    imageUrl: "/assets/images/relatedpost/2.png",
    categoryContent: "Countries",
    title: "Top 10 tourist attractions in Munich?",
    href: "/",
  },
  {
    imageUrl: "/assets/images/relatedpost/3.png",
    categoryContent: "Nature",
    title: "Top 10 tourist attractions in Munich?",
    href: "/",
  },
  {
    imageUrl: "/assets/images/relatedpost/4.png",
    categoryContent: "Travel",
    title: "Top 10 tourist attractions in Munich?",
    href: "/",
  },
  {
    imageUrl: "/assets/images/relatedpost/1.png",
    categoryContent: "Cities",
    title: "Top 10 tourist attractions in Munich?",
    href: "/",
  },
];

const FAQCategories = [
  {
    id: "1",
    title: "Company",
  },
  {
    id: "2",
    title: "Travel",
  },
  {
    id: "3",
    title: "Visa",
  },
];

const FAQItems = [
  {
    id: 1,
    title: "What Is an International Passport?",
    content:
      "A passport is a travel document issued by a country’s government to its citizens. It verifies the identity and nationality of the passport holder for the purpose of international travel.",
  },
  {
    id: 2,
    title: "What Does a Passport Look Like?",
    content:
      "A passport is a travel document issued by a country’s government to its citizens. It verifies the identity and nationality of the passport holder for the purpose of international travel.",
  },
  {
    id: 3,
    title: "What Information Do Passports Include?",
    content:
      "A passport is a travel document issued by a country’s government to its citizens. It verifies the identity and nationality of the passport holder for the purpose of international travel.",
  },
  {
    id: 4,
    title:
      "Why Do I Need a Passport? Do I Need a Passport for Traveling Abroad?",
    content:
      "A passport is a travel document issued by a country’s government to its citizens. It verifies the identity and nationality of the passport holder for the purpose of international travel.",
  },
  {
    id: 5,
    title: "Where Can I Travel with a Passport?",
    content:
      "A passport is a travel document issued by a country’s government to its citizens. It verifies the identity and nationality of the passport holder for the purpose of international travel.",
  },
  {
    id: 6,
    title: "What Is a Passport Power?",
    content:
      "A passport is a travel document issued by a country’s government to its citizens. It verifies the identity and nationality of the passport holder for the purpose of international travel.",
  },
  {
    id: 7,
    title: "What Are the Passport Types?",
    content:
      "A passport is a travel document issued by a country’s government to its citizens. It verifies the identity and nationality of the passport holder for the purpose of international travel.",
  },
];

const Certificates = [
  {
    imageUrl: "/assets/images/certificates/1.svg",
  },
  {
    imageUrl: "/assets/images/certificates/2.svg",
  },
  {
    imageUrl: "/assets/images/certificates/3.svg",
    wide: true,
  },
  {
    imageUrl: "/assets/images/certificates/4.svg",
  },
  {
    imageUrl: "/assets/images/certificates/5.svg",
  },
];

const ContactLinks = [
  {
    href: "mailto:info@vizam.az",
    icon: Envelope,
    content: "info@vizam.az",
  },
  {
    href: "/",
    icon: MapPin,
    content:
      "Baku city, Samad Vurghun str. 43, World Business Center, 20th floor, AZ 1009",
  },
  {
    href: "tel:+994553000135",
    icon: Phone,
    content: "+994 55 300 01 35",
  },
];

const ApplicantsStatus = [
  {
    content: "Namiq",
    orderNumber: 1,
    status: "done",
  },
  {
    content: "Əli",
    orderNumber: 2,
    status: "done",
  },
  {
    content: "Yourself",
    orderNumber: 3,
    status: "progress",
  },

  {
    content: "Əli",
    orderNumber: 4,
    status: "pending",
  },
  {
    content: "Vəfa",
    orderNumber: 5,
    status: "pending",
  },
];

export const SampleData = {
  SocialNetworkLinks,
  HomeSteps,
  UsefulLinks,
  BlogWide,
  Topics,
  RecentPosts,
  RelatedPosts,
  FAQCategories,
  FAQItems,
  Certificates,
  ContactLinks,
  ApplicantsStatus,
};
