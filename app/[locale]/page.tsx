import HeroSection from "@/components/home/hero-section";
import ServicesSection from "@/components/home/services-section";
import WhyChooseUs from "@/components/home/why-choose-us";
import BrandsOverview from "@/components/home/brands-overview";
import ProcessSection from "@/components/home/process-section";
import StatsSection from "@/components/home/stats-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import BlogPreview from "@/components/home/blog-preview";
import CTASection from "@/components/home/cta-section";
import NewsletterSection from "@/components/home/newsletter-section";
import { getHomePageData } from "@/services/homepage.service";
import TeamSection from "@/components/home/meet-our-team";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/types/i18n";

type Props = {
  params: { locale: Locale };
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const data = await getHomePageData();
  const { hero, services, stats, testimonials, blogPosts } = data;

  // Ensure all required properties are present for HeroSection
  const heroDict = {
    title: dict.home.hero.title || "Elevating brands and creating memorable",
    subtitle:
      dict.home.hero.subtitle ||
      "Social Media Marketing, Podcast Production, Event Planning & Gifting Services",
    storytelling: dict.home.hero.storytelling || "experiences",
    bookFreeCall: dict.home.hero.bookFreeCall || "Book a Free Consultation",
    featuredService: dict.home.hero.featuredService || "Featured Service",
    strategicBrand:
      dict.home.hero.strategicBrand || "Strategic Brand Development",
    premiumServices: dict.home.hero.premiumServices || "Premium Services",
    brandStory: dict.home.hero.brandStory || "Our Brand Story",
    closeModal: dict.home.hero.closeModal || "Close modal",
    altText: dict.home.hero.altText,
  };

  // Create blog preview dictionary with the correct structure
  const blogPreviewDict = {
    preview: dict.blog?.preview || {
      label: "Our Blog",
      title: "Latest Insights",
      subtitle:
        "Stay updated with the latest trends, tips, and success stories from our blog.",
      viewAll: "View All Posts",
    },
    readMore: dict.blog?.readMore || "Read More",
  };

  return (
    <>
      <HeroSection dict={heroDict} />
      <ServicesSection services={services} dict={dict.home.services} />
      <WhyChooseUs dict={dict.home.whyChooseUs} />
      {/* <BrandsOverview /> */}
      {/* <ProcessSection /> */}
      {/* <StatsSection /> */}
      <TeamSection teamMembers={[]} dict={dict.home.team} />
      <TestimonialsSection
        testimonials={testimonials}
        dict={dict.home.testimonials}
      />
      <BlogPreview locale={locale} dict={blogPreviewDict} />
      <CTASection
        dict={dict.home.cta}
        locale={locale}
        commonDict={dict.common}
      />
      <NewsletterSection dict={dict.home.newsletter} />
    </>
  );
}
