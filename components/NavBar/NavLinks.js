import {
  Bank,
  Building2,
  User2,
  HelpCircle,
  LineChart,
  ShieldCheck,
  LogIn,
  UserPlus,
  CreditCard,
  Info,
  DollarSign,
  Contact,
  AlertTriangle,
  CircleHelp,
} from "lucide-react";

const NavLinks = [
  {
    title: "Banks",
    icon: Bank,
    children: [
      { title: "Personal", href: "/personal", icon: User2 },
      { title: "Corporate", href: "/corporate", icon: Building2 },
    ],
  },
  {
    title: "Business",
    icon: Building2,
    children: [
      { title: "Account", href: "/account", icon: User2 },
      { title: "About Us", href: "/about", icon: Info },
      { title: "Loan", href: "/loan", icon: DollarSign },
      { title: "Cards", href: "/cards", icon: CreditCard },
      { title: "Solution", href: "/solution", icon: LineChart },
    ],
  },
  {
    title: "Help",
    icon: HelpCircle,
    children: [
      { title: "Scam Awareness", href: "/scamAwareness", icon: AlertTriangle },
      { title: "FAQ", href: "/faq", icon: CircleHelp },
      { title: "Security", href: "/security", icon: ShieldCheck },
      { title: "Contact Us", href: "/contact", icon: Contact },
    ],
  },
  {
    title: "Investment",
    href: "/investment",
    icon: LineChart,
  },
  {
    title: "Insurance",
    href: "/insurance",
    icon: ShieldCheck,
  },
  {
    title: "Login",
    href: "/login",
    icon: LogIn,
  },
  {
    title: "Join Hulo-F",
    href: "/signup",
    icon: UserPlus,
  },
];

export default NavLinks;
