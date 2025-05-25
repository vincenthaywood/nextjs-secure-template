# Secure Next.js Template

A production-ready Next.js template with comprehensive security measures and CI/CD pipeline.

## 🛡️ Security Features

- ✅ **Automated vulnerability scanning** (npm audit, Snyk, CodeQL)
- ✅ **Security-focused linting** (ESLint security plugin)
- ✅ **Dependency security checks** (audit-ci, license compliance)
- ✅ **Build security verification** (secret detection)
- ✅ **Daily security scans** (scheduled GitHub Actions)

## 🚀 Quick Start

1. **Use this template** - Click "Use this template" button
2. **Clone your new repository**
3. **Install dependencies**: `npm install`
4. **Start development**: `npm run dev`
5. **Optional**: Add `SNYK_TOKEN` to GitHub Secrets for enhanced scanning

## 📋 Available Scripts

### Development
```bash
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server
```

### Code Quality
```bash
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run lint:security   # Security-focused linting
npm run typecheck       # TypeScript type checking
npm run format          # Format code with Prettier
```

### Testing
```bash
npm run test            # Run tests
npm run test:watch      # Run tests in watch mode
npm run test:coverage   # Run tests with coverage
```

### Security
```bash
npm run security:check  # Quick security check
npm run security:full   # Comprehensive security audit
npm run security:audit  # Check vulnerabilities
npm run security:deps   # Strict dependency check
```

## 🔧 Setup Instructions

### Required (for enhanced security):
1. **Enable GitHub Security Features**:
   - Go to Settings → Security & analysis
   - Enable Dependabot alerts
   - Enable Secret scanning

2. **Set Branch Protection**:
   - Go to Settings → Branches
   - Add rule for `main` branch
   - Require status checks: `security-scan`, `quality-checks`, `build`

### Optional (recommended):
1. **Add Snyk Token**:
   - Create account at https://app.snyk.io
   - Get API token from account settings
   - Add as `SNYK_TOKEN` in GitHub Secrets

## 🏗️ Template Structure

```
├── .github/workflows/       # CI/CD pipeline
├── .eslintrc.security.js   # Security-focused ESLint config
├── .prettierrc             # Code formatting config
├── package.json            # Dependencies and scripts
├── README.md               # This file
└── SECURITY.md             # Security documentation
```

## 🛡️ Security Pipeline

Every commit triggers:
1. **Security Scans** - Vulnerability detection
2. **Code Quality** - Linting and type checking
3. **Build Verification** - Ensures deployment readiness
4. **Dependency Checks** - License and vulnerability compliance

## 📚 Documentation

See `SECURITY.md` for comprehensive security documentation and best practices.

## 🚀 Deployment

This template works out-of-the-box with:
- ✅ Vercel (recommended)
- ✅ Netlify
- ✅ Any Node.js hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run security checks: `npm run security:full`
5. Submit a pull request

---

**Note**: This template includes enterprise-grade security measures. All security checks must pass before deployment.
