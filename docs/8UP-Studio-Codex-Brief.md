# 8UP Studio --- Website Build Brief

## Project Goal

Build a premium, highly visual website for **8UP Studio**, a Las Vegas
content and social media studio.

8UP Studio should **not** be positioned as only a photography business
or as a generic marketing agency.

The core positioning is:

> **8UP Studio creates high-quality photo, video, and social media
> content that helps businesses look better, connect with people, and
> grow.**

The website has two jobs:

1.  Make the work look exceptional.
2.  Convert interested businesses into qualified leads.

This is **not a full CRM**. The backend should only support a
lightweight lead funnel and simple lead management.

------------------------------------------------------------------------

# Brand Direction

## Brand

**8UP Studio**

## Primary Services

-   Photography
-   Video Content
-   Short-form Content
-   Reels / TikTok / Shorts
-   Social Media Management
-   Social Media Strategy
-   Monthly Content Creation
-   Event Coverage
-   Brand / Product Content
-   Content Editing
-   Organic Growth Support

## Positioning

Avoid language that makes 8UP sound like: - Only a photographer - A
wedding photography company - A generic digital marketing agency - A
corporate SaaS company

8UP is a **creative content studio with social media expertise**.

The differentiator:

> Most photographers deliver photos.\
> 8UP can shoot the photos, create the videos, turn them into social
> content, and help the business actually use that content to grow.

------------------------------------------------------------------------

# Visual Direction

Reference / inspiration:

**https://ethanwong.photography/**

Do NOT clone the reference site.

Take inspiration from: - Large editorial imagery - Full-bleed
photography - Minimal navigation - Strong typography - Cinematic
presentation - Generous whitespace - Portfolio-first experience - Smooth
transitions - Premium creative-studio feeling

Then make the visual identity distinctly **8UP Studio**.

## Desired Mood

Think:

**Fashion editorial × premium creative studio × cinematic portfolio ×
subtle feminine energy**

The website should feel: - Elegant - Expensive - Creative - Feminine
without being overly girly - Modern - Editorial - Confident - Artistic -
Extremely polished

Avoid: - Bright Barbie pink - Excessive gradients - Generic SaaS cards -
Neon tech aesthetics - Corporate agency templates - Excessive rounded
cards - Cheap stock photography - Template-looking sections -
Over-animation

## Suggested Palette

Use as a starting point, not a hard requirement:

-   Warm ivory / cream
-   Near black
-   Soft neutral gray
-   Dusty rose / muted mauve accent
-   Optional subtle burgundy / cherry accent

Keep accent colors restrained.

## Typography

Use an elegant editorial serif paired with a clean modern sans-serif.

Typography should be part of the visual design: - Oversized headlines -
Small uppercase labels - Large editorial statements - Strong spacing -
Minimal body copy

------------------------------------------------------------------------

# Media Strategy

**Real 8UP content should dominate the website.**

8UP has access to high-quality Sony A6700 photo and video content.

Use this as a major competitive advantage.

Design layouts around: - Full-width cinematic video - Large landscape
photography - Vertical photography - Portrait photography - Short-form
vertical videos - Event footage - Product / business footage - Lifestyle
footage - Social media examples

Do not create a website where media is trapped inside small cards.

The work should frequently become the layout itself.

Until final assets are supplied, create clearly named placeholders with
realistic aspect ratios.

Example placeholder naming:

``` text
/public/media/
  hero-reel.mp4
  702market-hero.jpg
  702market-reel-01.mp4
  brand-photo-01.jpg
  brand-photo-02.jpg
  event-video-01.mp4
  portrait-01.jpg
```

Make replacing placeholders easy.

------------------------------------------------------------------------

# Recommended Stack

-   Next.js
-   TypeScript
-   Tailwind CSS
-   Motion / Framer Motion
-   Supabase
-   PostgreSQL through Supabase
-   Vercel

Prioritize: - Performance - Mobile experience - Image optimization -
Video optimization - Accessibility - SEO fundamentals - Smooth animation
without hurting performance

Use Next.js image optimization where appropriate.

Videos should use sensible compression, poster images, lazy loading, and
muted autoplay only where UX permits it.

------------------------------------------------------------------------

# Public Site Architecture

Keep V1 focused.

``` text
/
├── work
├── services
├── about
├── work-with-us
└── admin
```

Primary navigation:

``` text
8UP

WORK
SERVICES
ABOUT
INQUIRE
```

Do not build unnecessary pages simply to make the site larger.

------------------------------------------------------------------------

# Homepage

The homepage is the primary sales experience.

## 01 --- Hero

Create a nearly full-screen cinematic hero.

Prefer a high-quality autoplay muted background reel on capable devices
with an optimized poster/fallback image.

Navigation should remain minimal.

Possible hero direction:

# WE MAKE

# BRANDS LOOK

# GOOD.

Supporting line:

**PHOTO · VIDEO · SOCIAL**

CTA:

**VIEW OUR WORK**

Secondary CTA:

**WORK WITH US**

Include a subtle scroll indicator.

The hero should immediately communicate visual quality.

------------------------------------------------------------------------

# 02 --- Editorial Brand Statement

Large typography.

Possible direction:

# CONTENT PEOPLE

# ACTUALLY WANT

# TO WATCH.

Supporting copy should remain concise.

Example:

> We create photo, video and social content designed to make brands
> stand out and connect with the people they want to reach.

Use interesting editorial composition with imagery intersecting or
accompanying typography.

------------------------------------------------------------------------

# 03 --- Featured Work

This should be one of the strongest visual sections.

Avoid a basic equal-card grid.

Mix: - Full-width imagery - Two-column editorial compositions - Vertical
videos - Large video moments - Asymmetric image grids - Horizontal
strips - Oversized project typography

Example:

``` text
01 — BRAND CONTENT

702 MARKET

[large cinematic content]

EVENT · PHOTO · VIDEO · SOCIAL

7 EVENTS
50K+ ORGANIC VIEWS
$0 AD SPEND

VIEW PROJECT →
```

Only publish metrics that are supplied and verified.

Build the component so metrics can easily be updated.

------------------------------------------------------------------------

# 04 --- Services

Present services visually rather than as generic feature cards.

## 01 / PHOTO

Headline direction:

**YOUR BRAND, BUT BETTER.**

Services may include: - Brand Photography - Product Photography -
Lifestyle - Events - Portraits - Business Content

CTA:

**EXPLORE PHOTOGRAPHY →**

Use a strong photograph as the dominant visual.

------------------------------------------------------------------------

## 02 / MOTION

Headline direction:

**MAKE THEM STOP SCROLLING.**

Services: - Reels - TikTok - Shorts - Promotional Video - Event Video -
Product Video - Behind the Scenes - Social Ads / Creative Assets

Use autoplay muted video where appropriate.

CTA:

**EXPLORE VIDEO →**

------------------------------------------------------------------------

## 03 / SOCIAL

Headline direction:

**CONTENT WITH A PURPOSE.**

Services: - Social Media Management - Content Planning - Content
Creation - Editing - Posting - Organic Growth Strategy - Social Media
Consulting

Show real vertical content examples.

CTA:

**EXPLORE SOCIAL →**

------------------------------------------------------------------------

# 05 --- Differentiator

Create a visually strong section around:

# WE DON'T JUST

# MAKE CONTENT.

Then:

# WE HELP YOU

# DO SOMETHING WITH IT.

Explain briefly that 8UP combines production with practical social media
knowledge.

The goal is to communicate:

``` text
Shoot
↓
Edit
↓
Create
↓
Publish
↓
Grow
```

Do not make this look like a corporate process diagram.

Keep it editorial.

------------------------------------------------------------------------

# 06 --- Results / Case Study

Create reusable case-study components.

Start with **702Market** as an example case study.

Potential data:

-   7 events covered
-   50K+ organic views
-   \$0 ad spend

These figures should be editable from a centralized data/config file.

Case studies should combine: - Photography - Video - Vertical social
content - Brief explanation - Metrics - Services provided

The purpose is to show that 8UP creates attractive content **and
understands business/social outcomes**.

------------------------------------------------------------------------

# 07 --- Monthly Content

This is an important recurring-revenue offer.

Headline direction:

# YOUR BUSINESS NEEDS

# CONTENT EVERY MONTH.

Explain that businesses can work with 8UP continuously rather than
booking individual shoots.

Potential inclusions: - Scheduled content shoots - Photography -
Short-form video - Editing - Content planning - Social-ready
deliverables - Optional social management

CTA:

**LET'S BUILD YOUR CONTENT →**

Do not hard-code pricing yet unless pricing is supplied.

------------------------------------------------------------------------

# 08 --- About Preview

Make this personal and creator-led.

Avoid corporate language such as:

> We are a full-service innovative creative agency...

Instead explain that 8UP understands content from both sides of the
camera.

Photography, filming, editing, posting, and growing social accounts are
part of the studio's real-world experience.

Use strong portrait / behind-the-scenes imagery.

CTA:

**MEET 8UP →**

------------------------------------------------------------------------

# 09 --- Final CTA

Large visual closing section.

Possible copy:

# READY TO MAKE

# YOUR BRAND LOOK

# THIS GOOD?

CTA:

**WORK WITH 8UP**

Keep this memorable and extremely clean.

------------------------------------------------------------------------

# Work Page

Route:

`/work`

Build a visual portfolio.

Filtering:

``` text
ALL
PHOTO
VIDEO
SOCIAL
EVENTS
BRANDS
```

Do not make this a boring thumbnail grid.

Use an editorial masonry/asymmetric layout.

Portfolio items should support: - Image - Video - Project name -
Client - Category - Optional description - Optional metrics - Optional
detail page in the future

Videos should be playable inline.

The page should remain highly visual.

------------------------------------------------------------------------

# Services Page

Route:

`/services`

Organize around three primary service families.

## Content Creation

Photo + video.

## Social Media

Strategy + management + content.

## Monthly Content

Recurring content creation for businesses.

Event coverage can live within Content Creation rather than requiring a
separate primary service page initially.

Each section should have: - Strong media - Clear deliverables - Who it
is for - Brief value proposition - Inquiry CTA

Avoid walls of copy.

------------------------------------------------------------------------

# About Page

Route:

`/about`

This should feel personal.

Focus on: - The creator behind 8UP - Creative approach - Experience
creating social content - Understanding both production and social
platforms - Working directly with businesses - Making businesses
comfortable on camera - Creating content people actually want to watch

Use behind-the-scenes imagery heavily.

------------------------------------------------------------------------

# Lead Funnel

Route:

`/work-with-us`

This is the primary conversion mechanism.

Do **not** build a full CRM.

Build an elegant multi-step inquiry experience.

## Step 1 --- What do you need?

Options:

``` text
Photography
Video
Social Media
Monthly Content
Event Coverage
Not Sure Yet
```

Allow multiple selections where appropriate.

------------------------------------------------------------------------

## Step 2 --- About You

Fields:

``` text
Name *
Business Name
Email *
Phone
Website
Instagram / TikTok
```

------------------------------------------------------------------------

## Step 3 --- Goal

Ask:

**What are you trying to accomplish?**

Options:

``` text
Get more customers
Grow social media
Create better content
Promote an event
Launch a product/service
Refresh our brand
Not sure yet
Other
```

Allow optional additional text.

------------------------------------------------------------------------

## Step 4 --- Project

Fields:

``` text
Desired date / timeline
Budget range
Tell us about the project
```

Suggested budget ranges:

``` text
Under $500
$500–$1,000
$1,000–$2,500
$2,500–$5,000
$5,000+
Not sure yet
```

Make budget easy to change or disable.

------------------------------------------------------------------------

# Funnel Confirmation

After successful submission:

# YOU'RE IN.

Copy direction:

> Thanks for reaching out to 8UP Studio. We'll review your project and
> get back to you soon.

Then:

**SEE OUR LATEST WORK →**

Provide optional social link.

Do not send the user to a generic browser alert or ugly default success
page.

------------------------------------------------------------------------

# Lead Database

Supabase table:

``` sql
leads
```

Suggested fields:

``` text
id
name
business_name
email
phone
website
social_handle
services[]
goals[]
budget
project_date
message
source
status
notes
created_at
updated_at
```

Status options:

``` text
new
contacted
booked
closed
```

Track attribution where possible:

``` text
source
utm_source
utm_medium
utm_campaign
referrer
landing_page
```

Do not overengineer attribution.

------------------------------------------------------------------------

# Lead Notifications

On successful inquiry:

1.  Save lead to Supabase.
2.  Send 8UP Studio a new-lead email.
3.  Send the potential client a simple confirmation email.

Keep email provider implementation modular.

Use environment variables for credentials.

Never expose secrets client-side.

------------------------------------------------------------------------

# Admin

Route:

`/admin`

Protect with authentication.

This should be intentionally minimal.

Dashboard example:

``` text
8UP STUDIO

NEW LEADS — 8

Sarah
Restaurant
Video + Monthly Content
$1,000–$2,500
Sep 16

702 Coffee
Social Media
$500–$1,000
Sep 15
```

Admin functionality:

-   View leads
-   Open lead
-   View full submission
-   Change status
-   Add internal notes
-   Filter by status
-   Basic search
-   View submission date
-   View attribution/source

Do NOT build: - Invoicing - Contracts - Customer portal - Project
management - Internal messaging - Scheduling platform - Complex sales
pipeline - Marketing automation - Full CRM

We can add those later if the business actually needs them.

------------------------------------------------------------------------

# Signature 8UP Visual Language

Develop a subtle brand interaction involving the number **8**.

Potential ideas: - Oversized `8` used as an image/video mask -
`8UP / 01`, `8UP / 02`, etc. section numbering - An `8` transition
between major sections - Subtle logo motion - Two-circle geometry
inspired by the number eight

Do not overdo it.

It should feel like a recognizable design motif rather than a gimmick.

------------------------------------------------------------------------

# Motion

Use Motion thoughtfully.

Good: - Smooth reveals - Image masks - Typography reveals - Subtle
parallax - Project transitions - Hover interactions - Navigation
transitions - Video/image reveal effects

Avoid: - Animating everything - Long intro loaders - Excessive scroll
hijacking - Heavy WebGL unless genuinely necessary - Effects that make
mobile performance worse

Respect `prefers-reduced-motion`.

------------------------------------------------------------------------

# Mobile

Mobile is a first-class experience because many leads will arrive
through Instagram, TikTok, Facebook, and other social platforms.

Prioritize: - Fast initial load - Vertical video - Thumb-friendly CTA -
Excellent typography - Simple navigation - Smooth inquiry funnel - No
horizontal overflow - No animations that make scrolling annoying

The mobile site should feel designed specifically for mobile rather than
a compressed desktop site.

------------------------------------------------------------------------

# SEO

Implement solid fundamentals without turning V1 into an SEO-content
farm.

Include: - Unique metadata - Canonicals - Open Graph metadata - Social
preview images - Sitemap - Robots - Semantic HTML - Proper heading
structure - Image alt text - LocalBusiness / ProfessionalService schema
where appropriate - Organization schema if appropriate - Fast Core Web
Vitals - Descriptive portfolio/service content

Primary local relevance:

**Las Vegas / Southern Nevada**

Natural topical relevance: - Las Vegas content creator - Las Vegas brand
photography - Las Vegas videographer - Las Vegas social media content -
Las Vegas social media management - Las Vegas business content
creation - Las Vegas event content - Las Vegas short-form video

Do not keyword stuff.

------------------------------------------------------------------------

# Performance Requirements

The site is media-heavy, so performance matters.

Implement: - Responsive images - Proper image sizing - AVIF/WebP where
appropriate - Lazy loading - Video poster frames - Compressed video -
Avoid loading every portfolio video immediately - Preload only critical
hero assets - Dynamic loading where useful - Avoid giant JS bundles -
Server components where appropriate - Client components only when
interactivity requires them

The site should feel premium **because it is smooth**, not because it
has dozens of effects.

------------------------------------------------------------------------

# Content/Data Architecture

Avoid hard-coding portfolio projects throughout components.

Create structured data/config for:

``` text
projects
services
caseStudies
metrics
socialLinks
navigation
```

This allows new content to be added without redesigning pages.

Example project shape:

``` ts
type Project = {
  slug: string
  client: string
  title: string
  categories: string[]
  cover: Media
  gallery: Media[]
  description?: string
  services?: string[]
  metrics?: {
    label: string
    value: string
  }[]
}
```

------------------------------------------------------------------------

# Design Rule

When deciding between adding another paragraph and showing another
exceptional photo/video:

**Prefer the media.**

The website should communicate 8UP's quality before the visitor has time
to read everything.

The desired visitor reaction within the first few seconds is:

> **These people know how to make a business look incredible.**

Then the rest of the experience proves that 8UP also understands content
strategy and growth.

------------------------------------------------------------------------

# V1 Definition of Done

V1 is complete when we have:

-   Premium responsive homepage
-   Work/portfolio page
-   Services page
-   About page
-   Multi-step inquiry funnel
-   Supabase lead storage
-   Lead email notification
-   Client confirmation email
-   Minimal protected admin
-   Lead status management
-   Lead notes
-   UTM/source tracking
-   SEO fundamentals
-   Optimized media handling
-   Smooth responsive animations
-   Excellent mobile experience
-   Easy replacement of placeholder media with final A6700 content

Do not expand scope beyond this without a clear reason.

------------------------------------------------------------------------

# Implementation Approach for Codex

Before coding:

1.  Inspect the existing repository.
2.  Determine whether Next.js/Tailwind/Supabase are already configured.
3.  Preserve useful existing configuration.
4.  Create a concise implementation plan.
5.  Establish the design system and data structures first.
6.  Build the homepage and shared layout.
7.  Build portfolio/services/about.
8.  Build the lead funnel.
9.  Add Supabase persistence.
10. Add protected admin.
11. Add notifications.
12. Perform responsive/performance/accessibility QA.
13. Run lint/typecheck/build.
14. Fix all meaningful errors before considering the phase complete.

Do not use generic placeholder UI when a custom editorial treatment can
reasonably be implemented.

**The visual quality of this project is a core product requirement, not
decoration.**
