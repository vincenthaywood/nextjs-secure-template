# 🔒 Next.js Secure Template

A production-ready Next.js template with enterprise-grade security scanning, CI/CD pipeline, and best practices built-in.

## ✨ Features

### 🛡️ **Enterprise Security**
- **Automated vulnerability scanning** with npm audit and Snyk
- **Code security analysis** with CodeQL and ESLint security rules
- **Daily security monitoring** with scheduled scans
- **Secret detection** in build artifacts
- **Dependency vulnerability tracking**
- **License compliance checking**

### 🚀 **Robust CI/CD Pipeline**
- **Multi-stage quality gates** (lint, type-check, test, build)
- **Security-first deployment** - only deploys after all security checks pass
- **Build artifact caching** for faster deployments
- **Vercel integration** with optimized configuration
- **Branch protection ready** workflows

### 🔧 **Developer Experience**
- **TypeScript** with strict type checking
- **ESLint** with security-focused rules
- **Prettier** for consistent code formatting
- **Comprehensive npm scripts** for all security operations
- **Detailed security documentation**

## 🚀 Quick Start

### 1. Use This Template
```bash
# Create new repository from this template
gh repo create my-secure-app --template vincenthaywood/nextjs-secure-template

# Or clone directly
git clone https://github.com/vincenthaywood/nextjs-secure-template.git my-app
cd my-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Security Check
```bash
# Quick security overview
npm run security:check

# Comprehensive security audit
npm run security:full
```

### 4. Start Development
```bash
npm run dev
```

## 🔐 Security Commands

### **Quick Security Checks**
```bash
npm run security:check      # Fast vulnerability and dependency check
npm run security:audit      # npm audit for known vulnerabilities
npm run security:deps       # Dependency vulnerability scan
```

### **Comprehensive Security Audit**
```bash
npm run security:full       # Complete security suite
npm run security:licenses   # License compliance check
npm run lint:security       # Security-focused linting
```

### **Development Commands**
```bash
npm run dev                 # Start development server
npm run build              # Production build
npm run typecheck          # TypeScript validation
npm run lint               # Code linting
npm run format             # Code formatting
```

## 🛠️ CI/CD Pipeline

The template includes a comprehensive CI/CD pipeline that runs on:
- **Push** to main, develop, or staging branches
- **Pull requests** to main branch
- **Daily schedule** at 2 AM UTC for security monitoring

### **Pipeline Stages**

1. **🔍 Security Scan**
   - npm audit (moderate and high severity)
   - Snyk vulnerability scanning (if token provided)
   - CodeQL security analysis

2. **✅ Quality Checks**
   - TypeScript type checking
   - ESLint with security rules
   - Test execution (if available)

3. **🏗️ Build Verification**
   - Production build validation
   - Sensitive data detection in artifacts
   - Build artifact caching

4. **🔧 Dependency Analysis**
   - Vulnerability scanning with audit-ci
   - License compliance verification

5. **🚀 Deployment Readiness**
   - Comprehensive security validation
   - Safe deployment confirmation

## ⚙️ Configuration

### **Required GitHub Secrets (Optional)**
- `SNYK_TOKEN`: For enhanced vulnerability scanning (get from [Snyk.io](https://snyk.io))

### **Vercel Configuration**
The template includes optimized Vercel configuration:
- Explicit build commands
- Framework detection
- Regional deployment optimization
- Production environment settings

### **Environment Variables**
Add your environment variables to:
- `.env.local` for development
- Vercel dashboard for production
- GitHub secrets for CI/CD

## 🔧 Customization

### **Modify Security Rules**
Edit `.eslintrc.security.js` to adjust security linting rules:
```javascript
// Example: Change rule severity
"security/detect-object-injection": "warn" // or "error"
```

### **Update CI/CD Pipeline**
Modify `.github/workflows/ci-cd.yml` for:
- Different branch triggers
- Additional security tools
- Custom deployment steps

### **Add Dependencies**
When adding new dependencies:
```bash
npm install package-name
npm run security:check  # Verify no new vulnerabilities
```

## 📚 Security Best Practices

### **✅ Included Protections**
- **XSS Prevention**: ESLint security rules
- **Injection Attacks**: Code analysis and linting
- **Sensitive Data**: Build artifact scanning
- **Dependency Vulnerabilities**: Automated scanning
- **License Compliance**: Automated checking

### **🔒 Additional Recommendations**
1. **Enable GitHub Security Features**:
   - Dependabot alerts
   - Secret scanning
   - Security advisories

2. **Branch Protection Rules**:
   - Require status checks
   - Require up-to-date branches
   - Restrict push to main

3. **Environment Security**:
   - Use environment variables for secrets
   - Rotate API keys regularly
   - Monitor security logs

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main

### **Other Platforms**
The template works with any platform that supports:
- Node.js 20+
- npm ci
- npm run build

## 🆘 Troubleshooting

### **CI/CD Pipeline Issues**
- **Snyk failures**: Add SNYK_TOKEN secret or remove Snyk steps
- **Build failures**: Check environment variables and dependencies
- **Security scan failures**: Review and fix reported vulnerabilities

### **Local Development Issues**
- **Dependency conflicts**: Delete node_modules and package-lock.json, then npm install
- **TypeScript errors**: Run npm run typecheck for detailed errors
- **Security warnings**: Run npm run security:full for comprehensive analysis

## 📈 What's Included

### **Dependencies**
- **Next.js 15**: Latest React framework
- **TypeScript**: Type safety
- **ESLint**: Code linting with security rules
- **Prettier**: Code formatting

### **Security Dependencies**
- **eslint-plugin-security**: Security-focused linting
- **audit-ci**: CI-friendly vulnerability scanning
- **license-checker**: License compliance

### **Files Structure**
```
├── .github/workflows/ci-cd.yml    # CI/CD pipeline
├── .eslintrc.security.js          # Security ESLint config
├── vercel.json                    # Vercel configuration
├── SECURITY.md                    # Security documentation
├── package.json                   # Dependencies and scripts
└── README.md                      # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Run security checks: `npm run security:full`
4. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Related Templates

- [Python Secure Template](https://github.com/vincenthaywood/python-secure-template) - Python version with similar security features

---

**🚀 Ready to build secure applications with confidence!**

This template provides enterprise-grade security scanning and CI/CD pipeline out of the box. Start building secure applications without spending weeks setting up security infrastructure.
