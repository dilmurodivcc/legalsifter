import { Telegram, X, Instagram, Cmc, Cg, IqWiki,linkTree } from "@/assets/icons/socialIcons";

export const footerData = {
  brand: {
    name: "OZAK AI",
    logo: "/logos/ozak-ai.svg",
    description: "Subscribe to our newsletter to get the latest updates on everything Ozak AI"
  },
  quickLinks: [
    { label: "Presale", href: "#presale" },
    { label: "Predictive AI", href: "#predictive-ai" },
    { label: "Buy $OZ", href: "#buy-oz" },
    { label: "Whitepaper", href: "#whitepaper" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Roadmap", href: "#roadmap" }
  ],
  aiAgents: [
    { label: "For Individuals", href: "#individuals" },
    { label: "For Business", href: "#business" },
    { label: "DePIN", href: "#depin" },
    { label: "Join Waitlist", href: "#waitlist" }
  ],
  extras: [
    { label: "Media Kit", href: "#media-kit" },
    { label: "Blogs", href: "#blogs" },
    { label: "Documentation", href: "#docs" },
    { label: "Support", href: "#support" }
  ],
  socialLinks: [
    { name: "Twitter", icon: X, href: "#twitter" },
    { name: "Telegram", icon: Telegram, href: "#telegram" },
    { name: "Instagram", icon: Instagram, href: "#instagram" },
    { name: "Cmc", icon: Cmc, href: "#discord" },
    { name: "Cg", icon: Cg, href: "#medium" },
    { name: "IqWiki", icon: IqWiki, href: "#star" },
    { name: "LinkTree", icon: linkTree, href: "#star" }
  ],
  legal: [
    { label: "Terms", href: "#terms" },
    { label: "Disclaimers", href: "#disclaimers" },
    { label: "Privacy", href: "#privacy" }
  ]
};
