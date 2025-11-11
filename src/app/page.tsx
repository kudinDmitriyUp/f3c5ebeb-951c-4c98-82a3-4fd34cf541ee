"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BarChart3, Bot, DollarSign, Handshake, Package, Shield, Smartphone, Star, TrendingUp, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="aurora"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            {"name": "Features", "id": "features"},
            {"name": "Products", "id": "products"},
            {"name": "Pricing", "id": "pricing"},
            {"name": "About", "id": "about"},
            {"name": "Contact", "id": "contact"}
          ]}
          brandName="TradeZen"
          button={{
            "text": "Start Trading",
            "href": "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Trade Smarter, Not Harder"
          description="Join thousands of traders who've discovered the fun side of financial markets with our intuitive platform and powerful tools"
          tag="Welcome to Trading"
          tagIcon={TrendingUp}
          buttons={[
            {"text": "Start Free Trial", "href": "contact"},
            {"text": "View Demo", "href": "products"}
          ]}
          imageSrc="https://pixabay.com/get/gd0caf6156b3d4dab40fa474fac99d6b9e530b4cb7f2b8081638b2062dfbdfd113845db8f0b4d8cafb08092f71bbc5aba2d15efbe5c76c0123fc967795a0a3ec1_1280.jpg"
          imageAlt="Modern trading dashboard interface"
          frameStyle="browser"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We make trading accessible, enjoyable, and profitable for everyone - from beginners taking their first steps to seasoned professionals managing complex portfolios"
          buttons={[
            {"text": "Learn More", "href": "features"},
            {"text": "Get Started", "href": "contact"}
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Powerful Trading Features"
          description="Everything you need to trade with confidence and maximize your potential returns"
          tag="Features"
          tagIcon={Zap}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          features={[
            {
              "title": "Real-Time Analytics",
              "description": "Advanced charts and market analysis tools that help you make informed trading decisions with live data and custom indicators",
              "icon": BarChart3,
              "button": {"text": "Explore Analytics", "href": "products"}
            },
            {
              "title": "Mobile Trading",
              "description": "Trade anywhere, anytime with our powerful mobile app featuring full desktop functionality in a sleek, user-friendly interface",
              "icon": Smartphone,
              "button": {"text": "Download App", "href": "contact"}
            },
            {
              "title": "Advanced Security",
              "description": "Bank-level security with multi-factor authentication, encrypted transactions, and cold storage protection for your assets",
              "icon": Shield,
              "button": {"text": "Security Details", "href": "about"}
            },
            {
              "title": "Automated Trading",
              "description": "Set up intelligent trading bots that execute strategies 24/7 based on your preferences and market conditions",
              "icon": Bot,
              "button": {"text": "Learn Automation", "href": "products"}
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Trading Solutions"
          description="Discover our range of trading services designed for different experience levels and investment goals"
          tag="Products"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              "id": "basic-trading",
              "brand": "TradeZen",
              "name": "Basic Trading Package",
              "price": "$29/month",
              "rating": 5,
              "reviewCount": "2.1k",
              "imageSrc": "https://pixabay.com/get/g9dd9a81c02e5950d1b353f021e890072bf5c39d1415a54f3e70e6d58fb93bcdb695328ff63dc6ca02302b2ecf78ccd5a4d7368fce3c52212b1abb717f9462f84_1280.jpg",
              "imageAlt": "Basic trading package"
            },
            {
              "id": "pro-trading",
              "brand": "TradeZen",
              "name": "Pro Trading Suite",
              "price": "$79/month",
              "rating": 5,
              "reviewCount": "4.8k",
              "imageSrc": "https://pixabay.com/get/ge59e4e5d55cbfa50b5c33612343c8ca545af131007e0dbf430ed677fb3fa434fd0f5b7a127cbe72973d2257a2a899e026975c6c2f6b626443c1dc676fafe9b7f_1280.jpg",
              "imageAlt": "Pro trading package"
            },
            {
              "id": "enterprise-trading",
              "brand": "TradeZen",
              "name": "Enterprise Solution",
              "price": "$199/month",
              "rating": 5,
              "reviewCount": "1.2k",
              "imageSrc": "https://pixabay.com/get/g2c20d6886603471957886bc00983c962535636a970df5297677cadee959972e41b7cdc0bab122bf3963ee77d9e838efee75e8bd71102a6627aa5c59deb87349a_1280.jpg",
              "imageAlt": "Enterprise trading package"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your Trading Plan"
          description="Flexible pricing options to match your trading style and budget"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="scale-rotate"
          plans={[
            {
              "id": "starter",
              "price": "$29/month",
              "name": "Starter Plan",
              "buttons": [
                {"text": "Start Free Trial", "href": "contact"},
                {"text": "Learn More", "href": "about"}
              ],
              "features": [
                "Basic trading tools",
                "Real-time market data",
                "Mobile app access",
                "Email support"
              ]
            },
            {
              "id": "professional",
              "badge": "Most Popular",
              "badgeIcon": Star,
              "price": "$79/month",
              "name": "Professional Plan",
              "buttons": [
                {"text": "Start Free Trial", "href": "contact"},
                {"text": "Schedule Demo", "href": "contact"}
              ],
              "features": [
                "Advanced analytics",
                "Automated trading bots",
                "Priority support",
                "Custom indicators",
                "Portfolio management"
              ]
            },
            {
              "id": "enterprise",
              "price": "$199/month",
              "name": "Enterprise Plan",
              "buttons": [
                {"text": "Contact Sales", "href": "contact"},
                {"text": "Custom Quote", "href": "contact"}
              ],
              "features": [
                "Everything in Pro",
                "Dedicated account manager",
                "Custom integrations",
                "White-label options",
                "Advanced reporting",
                "24/7 phone support"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Trusted by Traders Worldwide"
          description="See what our community of successful traders has to say about their experience"
          tag="Success Stories"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          testimonials={[
            {
              "id": "1",
              "name": "Sarah Johnson",
              "role": "Day Trader",
              "company": "Independent",
              "rating": 5,
              "imageSrc": "https://pixabay.com/get/g8f77b55d3a48c678d948ff8f4cf7bccaa6c717fced90844077437412d945f6316d7d85a690f8a978624bfb43ae2dbab3f44a3940c838ffd155b42a51e66797f6_1280.jpg",
              "imageAlt": "Sarah Johnson"
            },
            {
              "id": "2",
              "name": "Michael Chen",
              "role": "Portfolio Manager",
              "company": "InvestCorp",
              "rating": 5,
              "imageSrc": "https://pixabay.com/get/g34358bd45dcf040a259b9ed1602bf9d2519486a91fc0996456f0f07f4819bbbe90e6be635b7af307f69a5d29afc3259fc343414a51c290a1c1eec8e9218ccf68_1280.jpg",
              "imageAlt": "Michael Chen"
            },
            {
              "id": "3",
              "name": "Emily Rodriguez",
              "role": "Crypto Trader",
              "company": "CryptoFund",
              "rating": 5,
              "imageSrc": "https://pixabay.com/get/g2423921fc0bb256248a8acb5901595b9177f3561d658ed0bf8484cdc237e3d8e1bcefd783a0d82eea9dcc7899580fe70ce2d05740f458c47038e1902c588c0c6_1280.jpg",
              "imageAlt": "Emily Rodriguez"
            },
            {
              "id": "4",
              "name": "David Kim",
              "role": "Financial Advisor",
              "company": "WealthPro",
              "rating": 5,
              "imageSrc": "https://pixabay.com/get/g093f2e7264fab30b9f4ef8d693e671e9b651b060b87e7440f1920e37baf9cf7319aa1895389cb1595fe8d4b0ce0728524be940c38b5b8c86028ebf8ab5131550_1280.jpg",
              "imageAlt": "David Kim"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Trusted by Leading Platforms"
          description="Integrated with the world's top trading platforms and exchanges"
          tag="Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g52905b74addeb8e8c2fa014f2986c8f82d864331af5db125ed47836ae9d486c4096b11549d2410d7aaacb06c51aff15a079b4928ae8edcaccf660378d80e4b1f_1280.jpg",
            "https://pixabay.com/get/g05a7896cc5dd67179ee6636d763a93b4b2741f7352f44b9d37c00b018838ed3a64a6f757ed3ecca842d55b6c25320556a5b71cad41eff31e80ddd539b77e0e02_1280.jpg",
            "https://pixabay.com/get/g0e4e7600fad36ca37d651278c857ceabda94011549e19f3501da547226226900ac948d14ea85f9ac7dcafc20fb79c2b14a9b3923f7b08c08bef1b26f57d0f7f9_1280.jpg",
            "https://pixabay.com/get/g2a4f9de393d8332e9b0382444988f7807a68e9be724049786a69b41c33f6d3e36d24717f3949a9bf4d8e5910277d0a2fabb486e71ecb6ebff54d8be2b8e241de_1280.jpg",
            "https://pixabay.com/get/g316eaee022a6fd89e10f629c5a42bc6441dd28ba5dfb4a8932d53b9d017f261b0a0e29c064128e05b6310d841e9d74c8121014176ad2967aa928556cd52a0cb7_1280.jpg"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Start Your Trading Journey?"
          description="Get in touch with our team and discover how TradeZen can transform your trading experience"
          buttonText="Get Started Now"
          inputs={[
            {"name": "name", "type": "text", "placeholder": "Full Name", "required": true},
            {"name": "email", "type": "email", "placeholder": "Email Address", "required": true},
            {"name": "experience", "type": "text", "placeholder": "Trading Experience Level", "required": false}
          ]}
          textarea={{
            "name": "message",
            "placeholder": "Tell us about your trading goals and how we can help you...",
            "rows": 5,
            "required": false
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              "title": "Platform",
              "items": [
                {"label": "Features", "href": "features"},
                {"label": "Products", "href": "products"},
                {"label": "Pricing", "href": "pricing"},
                {"label": "Security", "href": "about"}
              ]
            },
            {
              "title": "Company",
              "items": [
                {"label": "About Us", "href": "about"},
                {"label": "Contact", "href": "contact"},
                {"label": "Careers", "href": "about"},
                {"label": "Blog", "href": "about"}
              ]
            },
            {
              "title": "Support",
              "items": [
                {"label": "Help Center", "href": "contact"},
                {"label": "Trading Guides", "href": "about"},
                {"label": "API Docs", "href": "about"},
                {"label": "Status", "href": "about"}
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}