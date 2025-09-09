export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  publishedAt: string;
  author?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Why Your Brand Messaging Isn't Working and How to Fix It",
    slug: "brand-messaging-fix",
    excerpt: "If you've ever felt like your brand is showing up online but still not connecting, you're not alone. We've seen it with coaches, content creators, NGOs, and event brands they're posting consistently but not building community, not getting engagement, and definitely not converting.",
    content: `
If you've ever felt like your brand is showing up online but still not connecting, you're not alone. We've seen it with coaches, content creators, NGOs, and event brands they're posting consistently but not building community, not getting engagement, and definitely not converting.

## The Problem Isn't Your Content. It's Your Messaging.

When we worked with Elev8 Moments, they had beautiful visuals and engaging ideas but the messaging wasn't clearly connecting with their audience. Once we developed a narrative-driven campaign (like the Valentine's Day skit), engagement surged and sales followed.

## Common Messaging Mistakes We See:

- Saying too much and none of it clearly
- Talking about yourself instead of the audience
- Inconsistent tone across platforms
- No defined brand voice or story

## What Clear Messaging Looks Like:

- Your Instagram bio matches your website tone
- Your captions feel personal, not robotic
- Your audience knows exactly what you do, who you help, and why it matters

## The Fix: Audit → Define → Align

1. Audit your current content and language across platforms
2. Define your tone of voice, brand story, and audience needs
3. Align all your communication from captions to your "About" page

At Elev8 Media, this is exactly what we do under our Communications Consultancy helping you sound as powerful as you are.
    `,
    image: "/blog1.jpg",
    publishedAt: "2023-05-15T00:00:00Z",
    author: "Elev8 Media Team"
  },
  {
    id: "2",
    title: "What Every Coach, Creator, and Consultant Needs to Know Before Launching a Podcast",
    slug: "podcast-launch-guide",
    excerpt: "We've launched podcasts for NGO leaders, creatives, and entrepreneurs and one thing we've learned is that podcasting is not just about speaking. It's about strategy, consistency, and knowing your audience.",
    content: `
We've launched podcasts for NGO leaders, creatives, and entrepreneurs and one thing we've learned is that podcasting is not just about speaking. It's about strategy, consistency, and knowing your audience.

## Before You Press Record, Ask Yourself:

- Why am I launching this? (Clarity > hype)
- Who exactly is this podcast for?
- What value will it bring that my audience can't get elsewhere?

When we supported BCM Podcasts, the client had five shows under one umbrella. We didn't just edit episodes, we helped coordinate structure, streamline content, and repurpose episodes into social content that attracted over 1,000 monthly listeners.

## 4 Signs You're Ready:

1. You already have consistent content or a clear message
2. You have an audience you speak to regularly
3. You're ready to commit to at least 6–8 episodes
4. You want to build credibility not just content

Podcasting gives your brand a voice literally. But without a launch strategy and a distribution plan, it's just noise.

Let us help you plan, produce, and promote your podcast the right way so it becomes a platform, not just a project.
    `,
    image: "/blog2.jpg",
    publishedAt: "2023-04-20T00:00:00Z",
    author: "Elev8 Media Team"
  },
  {
    id: "3",
    title: "What Your Social Media Agency Should Really Be Doing for You",
    slug: "social-media-agency-expectations",
    excerpt: "Not all social media support is created equal. And if your agency is just \"posting graphics\" with no strategy or reporting you're not getting the value you deserve.",
    content: `
Not all social media support is created equal. And if your agency is just "posting graphics" with no strategy or reporting you're not getting the value you deserve.

At Elev8 Media, we've seen this too often. Brands come to us after working with a designer or freelancer, but without real growth. When we onboarded Mr. Endowed, a fashion brand with strong visuals but low interaction, we introduced real strategy: community engagement, DM handling, content planning, and performance tracking. The results? Higher engagement, consistent branding, and a loyal following.

## Red Flags in Agency Work:

- No monthly reports or data insights
- Recycled or off-brand visuals
- No defined strategy or growth roadmap
- No engagement or community management

## What You Should Be Getting:

- A custom strategy aligned with your goals
- Content that fits your brand, not a template
- Measurable results (engagement, reach, conversions)
- Partnership and communication not just execution
    `,
    image: "/blog3.jpg",
    publishedAt: "2023-03-10T00:00:00Z",
    author: "Elev8 Media Team"
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}
