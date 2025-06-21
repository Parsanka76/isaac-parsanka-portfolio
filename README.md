# Isaac Parsanka - Portfolio Website

A professional portfolio website showcasing Isaac Parsanka's expertise in data analytics and actuarial science.

## 🌟 Features

- **Professional Design**: Clean, modern interface with smooth animations
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Sections**: 
  - Hero section with professional introduction
  - About section with key stats
  - Skills showcase with animated progress bars
  - Work experience timeline
  - Education and certifications
  - Featured projects gallery
  - Contact form with email integration
- **Performance Optimized**: Fast loading with modern web technologies

## 🚀 Live Demo

Visit the live website: [Your GitHub Pages URL will be here after deployment]

## 🛠️ Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
portfolio-website/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   └── hooks/         # Custom React hooks
├── .github/
│   └── workflows/         # GitHub Actions for deployment
└── README.md
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create a New Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `isaac-parsanka-portfolio` or `portfolio-website`
3. Make sure it's public (required for GitHub Pages on free accounts)
4. Don't initialize with README, .gitignore, or license since you'll be uploading existing code

### Step 2: Upload Your Code

**Option A: Using Git Command Line**

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial portfolio website commit"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git push -u origin main
```

**Option B: Using GitHub Web Interface**

1. Download all files from this project
2. Go to your new repository on GitHub
3. Click "uploading an existing file"
4. Drag and drop all your project files
5. Commit the changes

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The deployment workflow will automatically run when you push changes

### Step 4: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the deployment workflow running
3. Once it completes successfully (green checkmark), your site will be live
4. The URL will be: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`

### Step 5: Custom Domain (Optional)

If you want to use a custom domain:

1. In your repository settings, go to **Pages**
2. Under **Custom domain**, enter your domain name
3. Create a CNAME file in your repository root with your domain name
4. Configure your domain's DNS to point to GitHub Pages

## 🔧 Local Development

If you want to make changes locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 Customization

To customize the portfolio for your own use:

1. **Update personal information** in the components:
   - `Hero.tsx`: Name, title, description
   - `About.tsx`: Professional summary, contact details
   - `Experience.tsx`: Work experience details
   - `Education.tsx`: Education and certifications
   - `Projects.tsx`: Your projects
   - `ContactStatic.tsx`: Contact information

2. **Replace resume data** with your own information

3. **Update metadata** in `client/index.html`:
   - Title, description, Open Graph tags

4. **Customize styling** in:
   - `client/src/index.css`: Colors and themes
   - `tailwind.config.ts`: Tailwind configuration

## 📞 Contact Information

- **Email**: isaacparsanka@gmail.com
- **Phone**: +254710565065
- **LinkedIn**: [isaac-parsanka](https://www.linkedin.com/in/isaac-parsanka/)
- **Location**: Nairobi, Kenya

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using React and TypeScript**