import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap, Target, PenTool, BarChart3, ExternalLink, Download, Instagram, Linkedin, Mail, Menu, X, Youtube } from "lucide-react";
import { useState } from "react";

/**
 * Nandha Balaji Portfolio - Modern Minimalist with Bold Accents
 * Design: Deep Navy (#0F1B3C) + Vibrant Lime Yellow (#D4FF00)
 * Typography: Poppins (headlines) + Inter (body)
 * Philosophy: Results-driven, premium aesthetic with strategic color contrast
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"performance" | "social" | "seo" | "copy">("performance");

  const caseStudies = [
    {
      id: 1,
      title: "Goo Naturals | Skincare Brand",
      category: "Performance Marketing",
      metrics: {
        spend: "₹48,863",
        conversions: "6,717+",
        reach: "2.86M+",
        impressions: "3.81M+",
      },
      description: "Scaled online sales while increasing brand awareness through Meta advertising.",
      highlights: [
        "Complete sales funnels built",
        "Audience segmentation implemented",
        "Remarketing campaigns optimized",
        "Continuous creative testing",
      ],
      image: "/manus-storage/goo-naturals-logo_41e3f10d.png",
      isLogo: true,
      link: "https://www.instagram.com/goo_naturals?igsh=MWlvdWI4dDFlMWg1cA==",
    },
    {
      id: 2,
      title: "SSM Windy City | Premium Real Estate",
      category: "Lead Generation",
      metrics: {
        spend: "₹5,875.11",
        conversations: "68",
        cpc: "₹86.40",
      },
      description: "Generated qualified buyer enquiries for premium residential villa plots.",
      highlights: [
        "68 qualified buyer conversations",
        "High-intent enquiries generated",
        "Campaign-generated leads contributed to lakhs in revenue",
      ],
      image: "/manus-storage/ssm-windy-city-logo_c8c1f523.png",
      isLogo: true,
    },
    {
      id: 3,
      title: "Reform Pilates | Premium Fitness",
      category: "Membership Growth",
      metrics: {
        whatsappCPC: "₹164.02",
        instagramCPC: "₹190.91",
      },
      description: "Generated high-quality membership enquiries through Instagram and WhatsApp campaigns.",
      highlights: [
        "WhatsApp CPC improved by 14%",
        "Instagram lead generation optimized",
        "Premium category lead quality maintained",
      ],
      image: "/manus-storage/reform-pilates-logo_d335900f.png",
      isLogo: true,
    },
    {
      id: 4,
      title: "SAZZ Restaurant | Valentine's Campaign",
      category: "Seasonal Marketing",
      metrics: {
        leads: "187",
        spend: "₹7,825.67",
        cpl: "₹41.85",
        reach: "47,234",
      },
      description: "Generated reservation enquiries during Valentine's Day with efficient acquisition cost.",
      highlights: [
        "187 leads generated",
        "₹41.85 cost per lead",
        "47,234 reach achieved",
      ],
      image: "/manus-storage/sazz-restaurant-logo_9cd7b78e.png",
      isLogo: true,
    },
  ];

  const expertiseAreas = [
    {
      number: "1",
      title: "Performance Marketing",
      description: "Meta Ads, Lead Generation, WhatsApp Marketing, Conversion Optimization",
      icon: TrendingUp,
    },
    {
      number: "2",
      title: "Social Media Management",
      description: "Brand Strategy, Content Planning, Creative Direction, Community Management",
      icon: Users,
    },
    {
      number: "3",
      title: "SEO & Search Visibility",
      description: "Technical SEO, Keyword Research, Content Optimization, Local SEO",
      icon: Zap,
    },
    {
      number: "4",
      title: "Website Copywriting",
      description: "Homepage Copy, Landing Pages, SEO Content, Brand Messaging",
      icon: PenTool,
    },
    {
      number: "5",
      title: "Campaign Strategy",
      description: "Audience Research, Funnel Optimization, Performance Analysis",
      icon: Target,
    },
    {
      number: "6",
      title: "Project Management & Team Leadership",
      description: "Team of 10+ members including Graphic Designers, Video Editors, Content Writers, and Interns",
      icon: Users,
    },
    {
      number: "7",
      title: "Data-Driven Results",
      description: "ROI Analysis, Performance Reporting, Continuous Optimization",
      icon: BarChart3,
    },
  ];

  const results = [
    { label: "Years of Experience", value: "5+" },
    { label: "Brands Managed", value: "20+" },
    { label: "Conversions Generated", value: "6,700+" },
    { label: "Ad Impressions", value: "4M+" },
    { label: "Industries Served", value: "13+" },
    { label: "Social Campaigns", value: "50+" },
  ];

  const seoClients = [
    { name: "Big Bang", url: "https://www.bigbang.biz/" },
    { name: "Digink Studio", url: "https://www.diginkstudio.com/" },
    { name: "Vidhyadharan KP", url: "https://www.vidhyadharankp.com/" },
    { name: "Kovai Public School", url: "https://www.kovaipublicschool.in/" },
  ];

  const socialMediaClients = [
    { name: "Sri Baby Properties", url: "https://www.instagram.com/sribabyproperties?igsh=c25idWthbHh6YjQw", category: "Real Estate" },
    { name: "KPV Astro", url: "https://www.instagram.com/kpvidhyadharanastro?igsh=MTY2NmE2dnVmbWUxMQ==", category: "Astrology" },
    { name: "Harvel Aviation", url: "https://www.instagram.com/harvelaviation?igsh=MTV4eWM4Y3g4OGN5bA==", category: "Aviation" },
    { name: "Hollander Clothing", url: "https://www.instagram.com/the_hollander_clothing?igsh=MTdtZzUzYzg0ZXhyMg==", category: "Fashion" },
    { name: "Goo Naturals", url: "https://www.instagram.com/goo_naturals?igsh=MWlvdWI4dDFlMWg1cA==", category: "Skincare" },
    { name: "Fahi-Q Innovation", url: "https://www.instagram.com/fahi_q_innovation/?hl=en", category: "Manufacturing" },
    { name: "Sri Bhakiyam Vidhyalaya", url: "https://www.instagram.com/sribhakiyamvidhyalaya/", category: "Education" },
    { name: "Little Urbs", category: "Lifestyle" },
    { name: "Coco Core", category: "Agriculture" },
    { name: "Arima Lifestyle", category: "Lifestyle" },
    { name: "YOLO Tours", category: "Tourism" },
    { name: "Vilvah Yoga Studio", category: "Wellness" },
    { name: "Cosmediq", category: "Beauty" },
    { name: "SSM Real Estate & Promoters", category: "Real Estate" },
    { name: "Elite Properties", category: "Real Estate" },
    { name: "Toonzberry", category: "Education" },
    { name: "SHASHA Skin & Hair Clinic", category: "Healthcare" },
  ];

  const copywritingClients = [
    { name: "Arima Constructions", url: "https://arimaconstructions.com/", category: "Construction" },
    { name: "Arima Lifestyle", url: "https://www.arimalifestyle.com/", category: "Lifestyle" },
    { name: "Elite Properties", url: "https://www.elitepropertiestn.com/", category: "Real Estate" },
    { name: "Meadow India", url: "https://meadowindia.com/", category: "Agriculture" },
    { name: "Sri Baby Properties", url: "https://www.sribabyproperties.com/", category: "Real Estate" },
    { name: "Coco Core", url: "https://thecococore.com/", category: "Agriculture" },
    { name: "SHASHA Skin & Hair Clinic", url: "http://shashaskinclinic.com/", category: "Healthcare" },
    { name: "KRG Chit", url: "https://www.krgchit.com/", category: "Finance" },
    { name: "Vidhyadharan KP", url: "https://www.vidhyadharankp.com/", category: "Astrology" },
    { name: "Alamaari", url: "https://alamaari.co/", category: "Interior Design" },
    { name: "Kovai Public School", url: "https://www.kovaipublicschool.in/", category: "Education" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/manus-storage/nb-logo_a9bf585d.png" alt="NB Logo" className="w-8 h-8" />
            <span className="font-bold text-lg text-primary">Nandha Balaji</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">
              About
            </a>
            <a href="#expertise" className="text-foreground hover:text-accent transition-colors font-medium">
              Expertise
            </a>
            <a href="#work" className="text-foreground hover:text-accent transition-colors font-medium">
              Work
            </a>
            <a href="#results" className="text-foreground hover:text-accent transition-colors font-medium">
              Results
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="container py-4 space-y-4">
              <a href="#about" className="block text-foreground hover:text-accent transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
              <a href="#expertise" className="block text-foreground hover:text-accent transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Expertise
              </a>
              <a href="#work" className="block text-foreground hover:text-accent transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Work
              </a>
              <a href="#results" className="block text-foreground hover:text-accent transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Results
              </a>
              <a href="#contact" className="block text-foreground hover:text-accent transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div>
                <p className="text-accent font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-sm">✓</span>
                  Digital Marketing Strategist
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight mb-4">
                  Building Brands. <span className="text-accent">Driving Growth.</span> Delivering Results.
                </h1>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                5+ years of performance marketing excellence helping startups, SMEs, and established businesses achieve measurable growth through data-backed strategies. As a Project Manager, I lead a dynamic team of 10+ members ensuring seamless execution of comprehensive marketing campaigns.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="#contact" className="inline-flex">
                  <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg flex items-center gap-2 transition-all hover:shadow-lg">
                    <Download className="w-5 h-5" /> Get In Touch
                  </Button>
                </a>
                <a href="#work" className="inline-flex">
                  <Button className="bg-accent text-primary hover:bg-yellow-300 px-8 py-6 text-lg flex items-center gap-2 transition-all hover:shadow-lg font-semibold">
                    View Work <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Profile Photo */}
            <div className="flex justify-center items-center">
              <div className="relative w-80 h-80">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-accent rounded-lg opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-primary rounded-full opacity-20"></div>

                {/* Profile image */}
                <img
                  src="/manus-storage/6186255050036940937_a067d5d4.jpg"
                  alt="Nandha Balaji"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white relative z-10"
                />

                {/* Decorative plus signs */}
                <div className="absolute top-8 -right-8 text-accent text-3xl font-bold">+</div>
                <div className="absolute bottom-12 -left-12 text-accent text-3xl font-bold">+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-center">About Me</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I'm a Digital Marketing Strategist with over 5 years of professional experience helping businesses grow through performance marketing, social media management, SEO, branding, and conversion-focused content.
              </p>
              <p>
                Marketing isn't about running ads or posting on social media—it's about understanding people, solving business challenges, and creating strategies that generate measurable results.
              </p>
              <p>
                I've partnered with startups, SMEs, and established businesses across 13+ industries including Real Estate, Skincare, Agriculture, Healthcare, Hospitality, Education, Aviation, Fashion, Tourism, Wellness, Manufacturing, and Construction. Every industry has taught me something unique, enabling me to build tailored marketing strategies for different audiences and business goals.
              </p>
              <p>
                As a Project Manager, I oversee a talented team of 10+ professionals comprising graphic designers, video editors, content writers, and interns. This collaborative approach ensures that every campaign is not just strategically sound but also creatively executed and visually compelling.
              </p>
              <div className="bg-accent/20 border-l-4 border-accent p-6 rounded-lg mt-8">
                <p className="text-xl font-semibold text-accent">
                  Every brand has a story. My job is to make the right people believe it.
                </p>
              </div>
              
              <div className="bg-white/10 border-l-4 border-accent p-6 rounded-lg mt-8">
                <h4 className="font-semibold text-accent mb-4 text-lg">🎬 Personal Content Creator & Social Media Presence</h4>
                <p className="text-gray-100 mb-4">
                  Beyond brand management, I have built a strong personal presence as a content creator across multiple platforms with significant reach and engagement:
                </p>
                <ul className="text-gray-100 space-y-3 ml-4">
                  <li><strong>Instagram:</strong> Managing multiple accounts including <a href="https://www.instagram.com/nandha_balaji_13/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@nandha_balaji_13</a>, <a href="https://www.instagram.com/arivaalinaivoom/?hl=en" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@arivaalinaivoom</a>, and <a href="https://www.instagram.com/therivoomarivoom/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@therivoomarivoom</a> with lakhs of followers</li>
                  <li><strong>YouTube:</strong> <a href="https://www.youtube.com/@NandhaBalaji" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Nandha Balaji channel</a> with 40K+ subscribers creating consistent, engaging content</li>
                  <li><strong>Daily Hunt:</strong> Active content creator with significant reach and engagement</li>
                  <li><strong>ShareChat & Moj:</strong> Growing presence with engaging short-form content</li>
                  <li><strong>Award:</strong> Recognized as Best Content Creator by renowned actor Senthil</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-5xl font-bold text-center text-primary mb-16">My Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent text-primary rounded-lg flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                      {area.number}
                    </div>
                    <Icon className="w-8 h-8 text-accent mt-1" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-5xl font-bold text-center text-primary mb-16">Case Studies</h2>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:grid-cols-2 md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image/Visual */}
                {study.isLogo ? (
                  <div className="h-80 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-gray-50 to-white flex items-center justify-center border border-gray-200">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className="h-80 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                    style={{
                      background: study.id % 2 === 0 
                        ? "linear-gradient(135deg, #D4FF00 0%, #0F1B3C 100%)" 
                        : "linear-gradient(135deg, #0F1B3C 0%, #D4FF00 100%)"
                    }}
                  >
                    <div className="text-center text-white">
                      <p className="text-6xl font-bold opacity-20">#{study.id}</p>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <p className="text-accent font-semibold mb-2">{study.category}</p>
                    <h3 className="text-3xl font-bold text-primary mb-3">{study.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{study.description}</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <div key={key} className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-600 text-sm font-medium capitalize">{key}</p>
                        <p className="text-2xl font-bold text-primary">{value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {study.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-accent font-bold mt-1">→</span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {study.link && (
                    <a href={study.link} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-accent text-primary hover:bg-yellow-300 flex items-center gap-2 font-semibold">
                        View Project <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Work Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-5xl font-bold text-center text-primary mb-16">Client Work</h2>

          {/* Tabs */}
          <div className="flex gap-4 mb-12 justify-center flex-wrap">
            {[
              { key: "performance", label: "Performance Marketing" },
              { key: "social", label: "Social Media" },
              { key: "seo", label: "SEO" },
              { key: "copy", label: "Copywriting" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.key
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-primary hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {activeTab === "seo" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {seoClients.map((client, idx) => (
                  <a
                    key={idx}
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-accent transition-all group"
                  >
                    <p className="font-semibold text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                      {client.name}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                  </a>
                ))}
              </div>
            )}

            {activeTab === "social" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {socialMediaClients.map((client, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:shadow-lg transition-all group"
                  >
                    {client.url ? (
                      <a
                        href={client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-primary group-hover:text-accent transition-colors flex items-center gap-2"
                      >
                        {client.name}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <p className="font-semibold text-primary">{client.name}</p>
                    )}
                    <p className="text-sm text-gray-600 mt-2">{client.category}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "copy" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {copywritingClients.map((client, idx) => (
                  <a
                    key={idx}
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-accent transition-all group"
                  >
                    <p className="font-semibold text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                      {client.name}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                    <p className="text-sm text-gray-600 mt-2">{client.category}</p>
                  </a>
                ))}
              </div>
            )}

            {activeTab === "performance" && (
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-white text-center">
                <p className="text-lg mb-4">Performance marketing clients include brands across multiple industries with proven ROI results.</p>
                <p className="text-accent font-semibold">Explore case studies above for detailed performance metrics and results.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container">
          <h2 className="text-5xl font-bold text-center mb-16">Results at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {results.map((result, idx) => (
              <div key={idx} className="text-center">
                <p className="text-5xl font-bold text-accent mb-2">{result.value}</p>
                <p className="text-white/80 font-medium">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-primary mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Ready to transform your brand and drive measurable growth? Let's discuss how I can help your business achieve its marketing goals.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mb-8">
                <p className="text-lg font-semibold text-primary mb-4">Get in Touch</p>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>Phone:</strong> <a href="tel:7448575630" className="text-accent hover:underline font-semibold">+91 7448575630</a></p>
                  <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:nandhabalaji@example.com" className="text-accent hover:underline">nandhabalaji@example.com</a></p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:7448575630" className="inline-flex">
                  <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg flex items-center gap-2 transition-all hover:shadow-lg w-full sm:w-auto justify-center">
                    <Mail className="w-5 h-5" /> Call: 7448575630
                  </Button>
                </a>
                <a href="https://www.instagram.com/nandhabalaji13" target="_blank" rel="noopener noreferrer" className="inline-flex">
                  <Button className="bg-accent text-primary hover:bg-yellow-300 px-8 py-6 text-lg flex items-center gap-2 transition-all hover:shadow-lg w-full sm:w-auto justify-center font-semibold">
                    <Instagram className="w-5 h-5" /> Instagram
                  </Button>
                </a>
              </div>

              <div className="flex justify-center gap-4 pt-8 flex-wrap">
                <a
                  href="https://www.instagram.com/nandha_balaji_13/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-100 rounded-full hover:bg-accent hover:text-primary transition-all"
                  title="@nandha_balaji_13"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/arivaalinaivoom/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-100 rounded-full hover:bg-accent hover:text-primary transition-all"
                  title="@arivaalinaivoom"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/therivoomarivoom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-100 rounded-full hover:bg-accent hover:text-primary transition-all"
                  title="@therivoomarivoom"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.youtube.com/@NandhaBalaji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-100 rounded-full hover:bg-accent hover:text-primary transition-all"
                  title="YouTube - Nandha Balaji"
                >
                  <Youtube className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nandhabalaji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-100 rounded-full hover:bg-accent hover:text-primary transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/manus-storage/nb-logo_a9bf585d.png" alt="NB Logo" className="w-8 h-8" />
                <span className="font-bold text-lg">Nandha Balaji</span>
              </div>
              <p className="text-white/70">Digital Marketing Strategist | Results-Driven Growth Expert</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#expertise" className="hover:text-accent transition-colors">Expertise</a></li>
                <li><a href="#work" className="hover:text-accent transition-colors">Work</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/70">
                <li>Performance Marketing</li>
                <li>Social Media Management</li>
                <li>SEO & Content</li>
                <li>Campaign Strategy</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex justify-center gap-4 mb-8">
              <a
                href="https://www.instagram.com/nandha_balaji_13/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-all"
                title="@nandha_balaji_13"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/arivaalinaivoom/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-all"
                title="@arivaalinaivoom"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/therivoomarivoom/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-all"
                title="@therivoomarivoom"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@NandhaBalaji"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-all"
                title="YouTube - Nandha Balaji"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nandhabalaji"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-center text-white/70">&copy; 2026 Nandha Balaji. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
