# Estately.co.za

South African estate service provider marketplace - connecting estate residents with verified, neighbor-reviewed quality service providers.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)
![Prisma](https://img.shields.io/badge/Prisma-5-2d3748)

## 🌟 About

Estately.co.za is a platform designed to solve a common problem faced by estate residents across South Africa: finding reliable, vetted service providers who understand the unique needs of estate communities. We connect residents with estate-verified, neighbor-reviewed professionals.

**Contact:** +27 076 880 5136 | [estately.co.za](https://estately.co.za)

## ✨ Features

- **Estate-Verified Providers** - All service providers verified by estate management
- **Neighbor Reviews** - Authentic reviews from community members
- **Service Categories** - Plumbers, electricians, gardeners, painters, and more
- **User Authentication** - Secure sign-up and login with Clerk
- **Onboarding Flow** - Customized experience for residents and service providers
- **Dashboard** - Personal dashboard for managing services and bookings
- **Responsive Design** - Mobile-friendly interface

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Authentication:** Clerk
- **Database:** Neon PostgreSQL
- **ORM:** Prisma
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI)
- **Forms:** React Hook Form + Zod
- **Deployment:** Vercel

## 📦 Installation

### Prerequisites

- Node.js 20+ or Bun
- PostgreSQL database (Neon recommended)
- Clerk account

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/aaronwhite/estately.git
   cd estately
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file:
   ```env
   # Database (Neon Postgres)
   DATABASE_URL="postgresql://..."

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
   CLERK_SECRET_KEY="sk_test_..."

   # Clerk URLs
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

   # App
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Set up the database**
   ```bash
   bunx prisma generate
   bunx prisma db push
   bunx prisma db seed
   ```

5. **Start the development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Schema

The app includes a comprehensive database schema with:

- **Users** - User accounts synced with Clerk
- **Estates** - Residential estates and complexes
- **Service Providers** - Business profiles for service providers
- **Service Categories** - Plumber, electrician, gardener, etc.
- **Reviews** - Neighbor reviews with ratings
- **Bookings** - Service requests and appointments
- **Estate Ownership** - Junction table for users and estates
- **Provider Verification** - Estate verification of providers

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub** (already done!)

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard

3. **Deploy!**

## 📁 Project Structure

```
estately/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.ts                # Database seed script
├── src/
│   ├── app/
│   │   ├── (auth)/            # Authentication pages
│   │   ├── (dashboard)/       # Protected dashboard pages
│   │   ├── (public)/          # Public pages
│   │   ├── api/               # API routes
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── home/              # Landing page components
│   │   ├── layout/            # Header, footer
│   │   ├── providers/         # Provider components
│   │   └── ui/                # shadcn/ui components
│   ├── lib/
│   │   ├── prisma.ts          # Prisma client
│   │   ├── utils.ts           # Utility functions
│   │   └── constants.ts       # App constants
│   └── types/                 # TypeScript types
└── ...config files
```

## 🎨 Key Pages

- **/** - Landing page with hero and features
- **/providers** - Service provider listings
- **/estates** - Estate listings
- **/sign-in** - User sign in
- **/sign-up** - User registration
- **/onboarding** - New user onboarding
- **/dashboard** - User dashboard
- **/about** - About page
- **/contact** - Contact information

## 🔐 Authentication

User authentication is handled by Clerk with:
- Email/password sign in
- Social login options
- User profile management
- Webhook-based user sync with database

## 📝 Scripts

```bash
# Development
bun run dev          # Start dev server
bun run build        # Build for production
bun run start        # Start production server
bun run lint         # Run ESLint

# Database
bunx prisma generate # Generate Prisma client
bunx prisma db push  # Push schema to database
bunx prisma db seed  # Seed database
bunx prisma studio   # Open Prisma Studio
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 📞 Contact

For inquiries about Estately.co.za:

- **Phone:** +27 076 880 5136
- **Website:** [estately.co.za](https://estately.co.za)

---

Built with ❤️ for South African estate communities
