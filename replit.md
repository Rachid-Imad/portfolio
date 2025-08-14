# Overview

This is a personal portfolio website for Imad Rachid, a Full Stack Web Developer. The project is a single-page application (SPA) built with vanilla HTML, CSS, and JavaScript, featuring a modern, minimalistic black-and-white design theme. The portfolio showcases professional skills, projects, experience, and contact information in a responsive layout optimized for both desktop and mobile viewing.

# User Preferences

Preferred communication style: Simple, everyday language.
Project approach: Keep code simple, minimal files, avoid complex architecture.

# Recent Updates

## August 14, 2025
### Complete Portfolio Redesign (Inspired by modern professional standards)
- **MAJOR REDESIGN**: Completely rebuilt portfolio with modern, professional design
- Changed from black/white theme to clean blue/white corporate style
- Implemented hero section with animated statistics counters (10+ projects, 3 years experience, 8 technologies)
- Added professional typography using Inter font family
- Created card-based layout for better content organization
- Implemented smooth animations and transitions throughout
- Added modern color scheme with CSS custom properties
- Enhanced responsive design for better mobile experience
- Integrated animated skill progress bars
- Redesigned contact form with proper validation
- Added professional section headers with subtitles
- Improved overall user experience with modern UI patterns

### Updated Content & Links
- Updated profile image to use provided image link: https://i.ibb.co/9JvGL8S/profile.jpg
- Fixed LinkedIn URL to correct profile: https://www.linkedin.com/in/imad-rachid-2224b5340/
- Updated GitHub URL to correct username: https://github.com/Rachid-Imad
- Updated email contact to: imad.rachid@gmail.com with clickable mailto link
- Updated GitHub API endpoint to fetch from correct username
- Fixed all social media links throughout the site (hero, about, footer sections)

### CV Download Feature Added
- Created professional PDF CV file with complete profile information
- Added download CV button in hero section (replacing "Get In Touch" button)
- Added CV download link in footer navigation
- Added CV download button in contact section for easy access
- CV includes: contact info, professional summary, technical skills, projects, education, languages
- All CV download links use proper download attributes for immediate file download

### Navigation Profile Photo Update
- Moved profile photo from hero section to navigation header
- Profile photo now appears beside "Imad Rachid" name in navbar
- Added responsive sizing for mobile devices (35px on mobile, 40px on desktop)
- Removed large profile photo from hero section for cleaner design
- Navigation logo now includes both photo and name with proper styling

### Email Address Update
- Updated email address from imad.rachid@gmail.com to imad.rachid.dev@gmail.com
- Updated email in contact section, about section social links, and footer
- Updated contact form mailto functionality
- Regenerated CV PDF with correct email address
- All email links throughout site now use the new professional email address

# System Architecture

## Frontend Architecture
- **Technology Stack**: Vanilla HTML5, CSS3, and JavaScript
- **Design Pattern**: Single-page application with smooth scrolling navigation
- **Styling Approach**: Embedded CSS within the HTML file for simplicity and reduced HTTP requests
- **Responsive Design**: Mobile-first approach using CSS media queries
- **Typography**: Google Fonts (Inter) for modern, professional appearance
- **Icons**: Font Awesome CDN for consistent iconography

## Layout Structure
- **Fixed Navigation**: Sticky header with smooth scroll navigation links
- **Hero Section**: Full-screen landing area with profile image, animated typing text, and call-to-action buttons
- **Content Sections**: Modular sections for About, Skills, Projects, Experience, Education, and Contact
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with interactive features

## Design System
- **Color Scheme**: Black and white base theme with accent color highlights
- **Visual Elements**: Subtle geometric patterns and hover effects
- **User Experience**: Smooth transitions, hover states, and responsive interactions
- **Accessibility**: Semantic HTML structure and proper contrast ratios

## Performance Considerations
- **Asset Optimization**: Inline SVG favicon and embedded styles to minimize requests
- **Font Loading**: Google Fonts with display=swap for optimal loading performance
- **CDN Integration**: Font Awesome loaded from CDN for icon reliability

# External Dependencies

## Third-Party Services
- **Google Fonts**: Inter font family for typography
- **Font Awesome**: Icon library (version 6.4.0) via CDN
- **External Links**: GitHub profile, LinkedIn profile, and CV download integration

## Browser Compatibility
- **Modern Browsers**: Designed for current versions of Chrome, Firefox, Safari, and Edge
- **Progressive Enhancement**: Graceful degradation for older browsers
- **Mobile Support**: Responsive design optimized for iOS and Android devices

## Hosting Requirements
- **Static Hosting**: Can be deployed on any static hosting service (GitHub Pages, Netlify, Vercel)
- **No Backend**: Pure frontend application with no server-side requirements
- **SSL Support**: HTTPS recommended for professional presentation and security