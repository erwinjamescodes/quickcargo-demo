<a href="https://demo-nextjs-with-supabase.vercel.app/">
  <img alt="QuickDemo - A demo application built with Next.js and Supabase" src="https://demo-nextjs-with-supabase.vercel.app/opengraph-image.png">
  <h1>QuickDemo</h1>
</a>

<p>
  A demo application built with Next.js and Supabase
</p>

<br/>

## About

This application showcases a user authentication flow with sign-in functionality, with a focus on a clean, responsive UI.

## Features

- **Authentication System**
  - User sign-in
  - For demonstration purposes, a sole user is created by the user
  - Password recovery
  - Protected routes
- **Responsive Design**
  - Mobile-first approach
  - Adapts to various screen sizes
- **Modern UI**
  - Clean, minimalist interface
  - Tailwind CSS styling
  - Integration with Mantine UI components

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Set up your Supabase project and configure environment variables
4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Tech Stack

- **Frontend**
  - [Next.js](https://nextjs.org) (App Router)
  - [Tailwind CSS](https://tailwindcss.com) for styling
  - [Mantine UI](https://mantine.dev/) for components
- **Backend & Auth**
  - [Supabase](https://supabase.com) for authentication and database
  - supabase-ssr for cookie-based auth
