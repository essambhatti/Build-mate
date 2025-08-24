# 🚀 Zest - AI-Powered App Builder

![Zest Logo](./public/logo.svg)

[![Vercel Deployment](https://img.shields.io/badge/vercel-deployed-brightgreen?logo=vercel)](https://nextjs-seven-alpha-51.vercel.app/)
[![Live Demo](https://img.shields.io/badge/demo-live-success?logo=vercel)](https://nextjs-seven-alpha-51.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-blue?logo=tailwind-css)](https://tailwindcss.com/)
[![tRPC](https://img.shields.io/badge/tRPC-11.4.4-blue?logo=trpc)](https://trpc.io/)
[![Prisma](https://img.shields.io/badge/Prisma-6.14.0-blue?logo=prisma)](https://www.prisma.io/)

> A powerful AI SaaS builder that transforms ideas into functional applications with natural language prompts. Built as an alternative to v0.dev and Lovable, featuring real-time code generation, live preview, and seamless deployment.

## ✨ Key Features

- **🤖 AI-Powered Code Generation** - Convert natural language descriptions into working React components and full applications using OpenAI
- **⚡ Real-time Preview** - See your generated apps come to life instantly with live preview functionality
- **💻 Code Interpreter** - Advanced code execution and interpretation powered by E2B sandboxed environments
- **🔐 Authentication & Billing** - Complete user management and subscription handling with Clerk
- **🗄️ Database Integration** - Full-stack applications with Prisma ORM and PostgreSQL (Neon)
- **🎨 Modern UI Components** - Beautiful, accessible components built with Radix UI and shadcn/ui
- **📱 Responsive Design** - Mobile-first design that works seamlessly across all devices
- **🚀 Production Ready** - Built with enterprise-grade tools and best practices

## 🎯 Live Demo

🔗 **Production App**: [https://nextjs-seven-alpha-51.vercel.app/](https://nextjs-seven-alpha-51.vercel.app/)

✨ **Try it now!** - No registration required to test the AI app generation

🚀 **Fully Deployed** - Production-ready application running on Vercel's global edge network

*Generate apps like v0.dev and Lovable - just describe what you want to build!*

🌟 **Currently live and running** on Vercel's production infrastructure

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 15.4.6](https://nextjs.org/)** - React framework with App Router and Turbopack
- **[TypeScript 5+](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 19](https://react.dev/)** - Latest React with concurrent features

### Backend & API
- **[tRPC 11.4.4](https://trpc.io/)** - End-to-end typesafe APIs
- **[Prisma 6.14.0](https://www.prisma.io/)** - Next-generation ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Robust relational database
- **[Neon](https://neon.tech/)** - Serverless PostgreSQL platform
- **[Inngest](https://www.inngest.com/)** - Background job processing and workflows

### AI & Code Generation
- **[OpenAI API](https://openai.com/)** - GPT models for natural language to code generation
- **[E2B Code Interpreter](https://e2b.dev/)** - Sandboxed code execution environment
- **[@inngest/agent-kit](https://github.com/inngest/agent-kit)** - AI agent orchestration

### Authentication & Payments
- **[Clerk](https://clerk.com/)** - Complete authentication and user management
- **Clerk Themes** - Beautiful, customizable auth UI components
- **Billing Integration** - Subscription and payment processing

### UI & Styling
- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Low-level accessible UI primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Dark mode support

### State Management & Data Fetching
- **[TanStack Query](https://tanstack.com/query)** - Powerful data synchronization
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms with minimal re-renders
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[Prisma Studio](https://www.prisma.io/studio)** - Database GUI
- **[Turbopack](https://turbo.build/pack)** - Ultra-fast bundler for development

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm
- PostgreSQL database (or Neon account)
- OpenAI API key
- Clerk account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/essambhatti/zest.git
   cd zest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your environment variables:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/zest"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   
   # OpenAI
   OPENAI_API_KEY=sk-...
   
   # E2B Code Interpreter
   E2B_API_KEY=e2b_...
   
   # Inngest
   INNGEST_EVENT_KEY=...
   INNGEST_SIGNING_KEY=...
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
zest/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Authentication routes
│   ├── (dashboard)/         # Main application
│   ├── api/                 # API routes
│   │   └── trpc/           # tRPC API handlers
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   └── ...             # Custom components
│   └── globals.css         # Global styles
├── lib/                     # Utilities and configurations
│   ├── auth.ts             # Clerk configuration
│   ├── db.ts               # Prisma client
│   ├── trpc/               # tRPC setup
│   └── utils.ts            # Helper functions
├── prisma/                  # Database schema and migrations
│   └── schema.prisma       # Prisma schema
├── public/                  # Static assets
├── types/                   # TypeScript definitions
└── components.json          # shadcn/ui configuration
```

## 🔧 Core Functionality

### AI Code Generation Pipeline

1. **Natural Language Processing**: User inputs are processed through OpenAI's GPT models
2. **Code Generation**: AI generates React components, complete with TypeScript and Tailwind CSS
3. **Code Interpretation**: Generated code is executed in secure E2B sandboxes
4. **Live Preview**: Real-time rendering of generated applications
5. **Database Integration**: Automatic schema generation and API creation when needed

### Key Components

#### App Generator Engine
- Prompt processing and optimization
- Component generation with best practices
- Real-time code execution and preview
- Error handling and code refinement

#### Authentication System
- Secure user registration and login via Clerk
- Role-based access control
- Subscription management and billing
- User session management

#### Database Layer
- Type-safe database operations with Prisma
- Automatic migrations and schema updates
- Optimized queries with connection pooling
- Data validation with Zod schemas

## 🎨 UI Components Library

Built with **shadcn/ui** and **Radix UI** primitives:

- **Forms**: `react-hook-form` + `zod` validation
- **Data Display**: Tables, cards, charts (Recharts)
- **Navigation**: Menus, tabs, breadcrumbs
- **Feedback**: Alerts, toasts (Sonner), loading states
- **Overlays**: Modals, popovers, tooltips
- **Input**: Text fields, selectors, date pickers

## 🚀 API Routes & tRPC Procedures

### Authentication Routes
- User registration and login
- Session management
- Profile updates

### App Generation Routes  
- `/api/trpc/generate` - Main app generation endpoint
- `/api/trpc/preview` - Live preview generation
- `/api/trpc/save` - Save generated applications

### User Management
- Project management
- Usage tracking and billing
- Settings and preferences

## 🔄 Background Jobs with Inngest

- **Code Generation Queue**: Handle large app generation requests
- **Email Notifications**: Welcome emails, usage alerts
- **Cleanup Jobs**: Remove temporary files and expired previews
- **Usage Tracking**: Monitor API usage for billing

## 📊 Database Schema

Key models include:
- `User` - User accounts and profiles
- `Project` - Generated applications and metadata
- `Generation` - Individual generation requests and results
- `Usage` - API usage tracking for billing

## 🧪 Development

### Running Tests
```bash
npm run test              # Run all tests
npm run test:watch        # Watch mode
npm run test:coverage     # Coverage report
```

### Database Operations
```bash
npx prisma studio         # Open Prisma Studio
npx prisma generate       # Generate Prisma client
npx prisma db push        # Push schema changes
npx prisma db pull        # Pull schema from database
```

### Linting and Formatting
```bash
npm run lint              # Run ESLint
npm run lint:fix          # Fix linting issues
```

## 🚀 Deployment

### Vercel (Recommended) ⚡

**Current Deployment**: The app is already live at [https://nextjs-seven-alpha-51.vercel.app/](https://nextjs-seven-alpha-51.vercel.app/)

To deploy your own instance:

1. Fork this repository
2. Connect your fork to Vercel
3. Add environment variables in Vercel dashboard:
   - `DATABASE_URL`
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`  
   - `OPENAI_API_KEY`
   - `E2B_API_KEY`
   - `INNGEST_EVENT_KEY`
   - `INNGEST_SIGNING_KEY`
4. Deploy automatically on push to main branch

**Benefits of Vercel deployment:**
- ⚡ Global CDN and edge functions
- 🔄 Automatic deployments from Git
- 📊 Built-in analytics and monitoring  
- 🌐 Custom domains and SSL
- 📈 Automatic scaling

### Manual Deployment
```bash
npm run build
npm start
```

### Environment Setup
- Set up Neon PostgreSQL database
- Configure Clerk authentication
- Add OpenAI API key
- Set up Inngest for background jobs

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key | ✅ |
| `CLERK_SECRET_KEY` | Clerk secret key | ✅ |
| `OPENAI_API_KEY` | OpenAI API key | ✅ |
| `E2B_API_KEY` | E2B code interpreter key | ✅ |
| `INNGEST_EVENT_KEY` | Inngest event key | ✅ |
| `INNGEST_SIGNING_KEY` | Inngest signing key | ✅ |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use tRPC for all API calls
- Implement proper error handling
- Add comprehensive tests
- Follow the existing code style

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Essam Bhatti**
- GitHub: [@essambhatti](https://github.com/essambhatti)
- Demo: [Zest App](https://nextjs-seven-alpha-51.vercel.app/)

## 🙏 Acknowledgments

- [v0.dev](https://v0.dev) and [Lovable](https://lovable.dev) for inspiration
- [Vercel](https://vercel.com) for seamless deployment
- [Clerk](https://clerk.com) for authentication infrastructure
- [OpenAI](https://openai.com) for powerful AI capabilities
- The amazing open-source community

## 🆚 Comparison with Alternatives

| Feature | Zest | v0.dev | Lovable |
|---------|------|--------|---------|
| **Open Source** | ✅ | ❌ | ❌ |
| **Self-Hosted** | ✅ | ❌ | ❌ |
| **Custom AI Models** | ✅ | ❌ | Limited |
| **Database Integration** | ✅ | Limited | ✅ |
| **Real-time Collaboration** | 🔄 | ✅ | ✅ |
| **Export Code** | ✅ | ✅ | ✅ |

## 📞 Support

If you encounter any issues or have questions:

- 📧 Open an issue on [GitHub](https://github.com/essambhatti/zest/issues)
- 💬 Join our community discussions
- 📖 Check the [documentation](https://nextjs-seven-alpha-51.vercel.app/docs)

---

⭐ **If this project helped you, please give it a star!** ⭐

*Built with ❤️ using Next.js, tRPC, and the power of AI*
