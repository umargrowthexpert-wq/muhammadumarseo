export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: BlogContentBlock[];
};

export const blogCategories = [
  "Google Business Profile",
  "Local SEO",
  "Reviews & Reputation",
  "Citation Building",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "gbp-optimizations-that-move-the-map-pack",
    title: "10 Google Business Profile Optimizations That Move the Map Pack Needle",
    category: "Google Business Profile",
    date: "2026-01-12",
    readTime: "6 min read",
    excerpt:
      "Most GBP profiles are half-finished. Here are the specific optimizations I run on every client profile before touching anything else - categories, services, photos, posts and Q&A.",
    content: [
      {
        type: "paragraph",
        text:
          "Before I touch citations, links or on-page content, I run a full pass on the Google Business Profile (GBP). It's the single highest-leverage asset for local rankings, and most profiles I audit are using less than half of what's available.",
      },
      {
        type: "heading",
        text: "1. Primary and secondary categories",
      },
      {
        type: "paragraph",
        text:
          "Your primary category carries the most weight for Map Pack relevance. I test category changes against rank tracking tools like Local Falcon - small shifts here can move a business from page two of the Map Pack into the top 3.",
      },
      {
        type: "heading",
        text: "2. Services and product listings",
      },
      {
        type: "paragraph",
        text:
          "Every service line should be listed with a description that mirrors how customers actually search - 'same-day AC repair', not just 'HVAC services'. This feeds Google's entity understanding of what you do and where.",
      },
      {
        type: "heading",
        text: "3. Photo cadence",
      },
      {
        type: "paragraph",
        text:
          "Profiles with fresh, geo-tagged photos uploaded weekly consistently outperform static profiles in engagement metrics, which correlates with Map Pack visibility over time.",
      },
      {
        type: "heading",
        text: "4. Google Posts cadence",
      },
      {
        type: "paragraph",
        text:
          "A consistent weekly posting schedule - offers, updates, before/after work - keeps the profile 'active' in Google's eyes and gives you another surface for keyword-relevant content.",
      },
      {
        type: "heading",
        text: "5. Q&A seeding",
      },
      {
        type: "paragraph",
        text:
          "Seed your own Q&A section with the questions customers actually ask (pricing, service areas, response times) and answer them with keyword-rich, helpful responses. This also feeds AI Overviews and AEO surfaces.",
      },
      {
        type: "list",
        items: [
          "Audit and correct primary/secondary categories",
          "Fill out every service and product field with intent-matched copy",
          "Upload geo-tagged photos weekly",
          "Run a consistent Google Posts cadence",
          "Seed and answer Q&A with real customer questions",
          "Verify service areas match your actual coverage zones",
          "Add attributes (accessibility, payments, amenities)",
          "Respond to every review within 24-48 hours",
          "Keep NAP identical to your website and citations",
          "Monitor GBP Insights weekly for calls, views and direction requests",
        ],
      },
      {
        type: "paragraph",
        text:
          "These ten changes alone have driven measurable Map Pack movement for clients across HVAC, dental and sports therapy - often within the first 30-60 days.",
      },
    ],
  },
  {
    slug: "local-seo-strategy-that-drives-calls",
    title: "How to Build a Local SEO Strategy That Actually Drives Calls",
    category: "Local SEO",
    date: "2026-02-03",
    readTime: "7 min read",
    excerpt:
      "Rankings are a means, not the goal. Here's the framework I use to connect keyword strategy directly to phone calls, bookings and revenue - not just impressions.",
    content: [
      {
        type: "paragraph",
        text:
          "It's easy to optimize for vanity metrics - impressions, rankings on broad terms - without ever moving the number that matters: phone calls and booked jobs. A local SEO strategy should be built backwards from that number.",
      },
      {
        type: "heading",
        text: "Start with intent, not volume",
      },
      {
        type: "paragraph",
        text:
          "High-volume keywords like 'plumber' often have lower commercial intent than longer, specific phrases like 'emergency water heater repair near me'. I cluster keywords by city, service and intent stage before writing a single page.",
      },
      {
        type: "heading",
        text: "Build pages that match the search, not your org chart",
      },
      {
        type: "paragraph",
        text:
          "Most service business websites are structured around how the owner thinks about the business, not how customers search. Hyperlocal landing pages - one per service/area combination - consistently outperform generic 'Services' pages.",
      },
      {
        type: "heading",
        text: "Track leading indicators weekly",
      },
      {
        type: "paragraph",
        text:
          "Map Pack position, GBP calls, direction requests and website clicks are leading indicators of booked revenue. I review these weekly with clients so we can react to algorithm shifts or seasonal demand changes quickly.",
      },
      {
        type: "paragraph",
        text:
          "When this framework is applied consistently - page architecture, GBP optimization, citations and reviews all pointed at the same intent clusters - the result is compounding growth in calls and bookings, not just rankings on a dashboard.",
      },
    ],
  },
  {
    slug: "review-velocity-framework",
    title: "The Review Velocity Framework: Turning Happy Customers into 5-Star Growth",
    category: "Reviews & Reputation",
    date: "2026-02-20",
    readTime: "5 min read",
    excerpt:
      "Review count and recency are direct Map Pack ranking factors. Here's the simple, repeatable system I use to generate a steady stream of 5-star reviews without feeling pushy.",
    content: [
      {
        type: "paragraph",
        text:
          "Review count, rating and recency all factor into local rankings - and just as importantly, into whether a customer picks up the phone. A profile with 12 reviews from two years ago loses to a competitor with 80 reviews, half from the last quarter.",
      },
      {
        type: "heading",
        text: "Ask at the right moment",
      },
      {
        type: "paragraph",
        text:
          "The highest-converting review requests happen immediately after a positive interaction - right after a job is completed and the customer expresses satisfaction, not days later via a generic email blast.",
      },
      {
        type: "heading",
        text: "Make it a two-click process",
      },
      {
        type: "paragraph",
        text:
          "Direct review links (via QR codes, SMS or email) that drop the customer straight into the Google review box remove almost all friction. Every extra step cuts completion rates significantly.",
      },
      {
        type: "heading",
        text: "Respond to every single review",
      },
      {
        type: "paragraph",
        text:
          "Responding to reviews - positive and negative - signals an active, trustworthy business to both Google and prospective customers. Negative reviews handled well often convert skeptics into leads.",
      },
      {
        type: "paragraph",
        text:
          "Clients who implement this consistently see review velocity increase 3-5x within a quarter, directly contributing to Map Pack share and click-through rate from the search results page.",
      },
    ],
  },
  {
    slug: "nap-consistency-citation-cleanup",
    title: "NAP Consistency 101: Why Citation Cleanup Still Matters in 2026",
    category: "Citation Building",
    date: "2026-03-08",
    readTime: "6 min read",
    excerpt:
      "Duplicate listings and inconsistent Name, Address and Phone data quietly cap your rankings. Here's how I audit and clean up 70+ citation sources for new clients.",
    content: [
      {
        type: "paragraph",
        text:
          "Name, Address and Phone (NAP) consistency across the web remains one of the most overlooked local ranking factors - and one of the most common issues I find when auditing new client profiles.",
      },
      {
        type: "heading",
        text: "Why inconsistency hurts rankings",
      },
      {
        type: "paragraph",
        text:
          "When Google finds conflicting business information across directories, it lowers confidence in the entity's data, which can suppress Map Pack visibility - especially for businesses that have moved, rebranded or changed phone numbers.",
      },
      {
        type: "heading",
        text: "The cleanup process",
      },
      {
        type: "list",
        items: [
          "Audit existing citations across major and niche directories",
          "Identify duplicate or outdated listings (old addresses, old phone numbers)",
          "Claim and verify ownership of unclaimed listings",
          "Standardize NAP format to match the GBP exactly",
          "Suppress or merge duplicates where possible",
          "Build new citations on authoritative, industry-relevant directories",
        ],
      },
      {
        type: "paragraph",
        text:
          "For one dental client, cleaning up 70+ citation sources alongside a service-line content build-out helped lock the #1 Map Pack position for their core terms within a few months - citation cleanup was the foundation that let everything else work.",
      },
    ],
  },
  {
    slug: "aeo-geo-for-local-businesses",
    title: "AEO & GEO for Local Businesses: Showing Up in AI Overviews and ChatGPT Answers",
    category: "Local SEO",
    date: "2026-04-02",
    readTime: "8 min read",
    excerpt:
      "Search is changing - AI Overviews, ChatGPT and Perplexity are answering local queries directly. Here's how Answer Engine Optimization and Generative Engine Optimization apply to local businesses.",
    content: [
      {
        type: "paragraph",
        text:
          "A growing share of local queries - 'best dentist near me', 'who does same-day appliance repair in X' - are now answered directly by AI Overviews, ChatGPT and Perplexity, often without a click to any website at all. AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) are how local businesses stay visible in this shift.",
      },
      {
        type: "heading",
        text: "Entity consistency is the foundation",
      },
      {
        type: "paragraph",
        text:
          "LLMs and AI Overviews lean heavily on structured, consistent entity data - your GBP, schema markup, citations and on-page content all need to describe the same business, services and locations in the same way.",
      },
      {
        type: "heading",
        text: "Write content that answers questions directly",
      },
      {
        type: "paragraph",
        text:
          "FAQ sections, Q&A on GBP and clearly structured service pages with direct, quotable answers are far more likely to be pulled into AI-generated responses than long, unstructured marketing copy.",
      },
      {
        type: "heading",
        text: "Schema markup signals meaning, not just structure",
      },
      {
        type: "paragraph",
        text:
          "LocalBusiness, Service, FAQ and Review schema help both traditional crawlers and AI systems understand exactly what a business offers, where, and what customers think of it - increasing the odds of being cited as a source.",
      },
      {
        type: "paragraph",
        text:
          "The businesses that treat AEO/GEO as an extension of their existing local SEO - rather than a separate initiative - are the ones showing up when someone asks an AI assistant for a recommendation in their area.",
      },
    ],
  },
  {
    slug: "google-posts-weekly-cadence",
    title: "Google Posts Cadence: A Simple Weekly System for Local Visibility",
    category: "Google Business Profile",
    date: "2026-04-22",
    readTime: "4 min read",
    excerpt:
      "Google Posts are an underused, free visibility channel. Here's the lightweight weekly system I run across client profiles to keep them active and relevant.",
    content: [
      {
        type: "paragraph",
        text:
          "Google Posts show up directly in your Business Profile and sometimes in search results - a free, often-ignored channel for local visibility and keyword relevance.",
      },
      {
        type: "heading",
        text: "A simple weekly rotation",
      },
      {
        type: "list",
        items: [
          "Week 1: Service highlight (with photo and keyword-rich description)",
          "Week 2: Recent project or before/after",
          "Week 3: Offer, seasonal promotion or call-to-action",
          "Week 4: Customer review highlight or FAQ answer",
        ],
      },
      {
        type: "paragraph",
        text:
          "Each post should link to a relevant page on the website and use natural, location-aware language. Over a few months, this rotation builds a steady signal of activity that supports both Map Pack rankings and click-through rate.",
      },
    ],
  },
];
