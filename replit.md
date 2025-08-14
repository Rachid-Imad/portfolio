# Overview

This is a personal portfolio website for Imad Rachid, a Full Stack Web Developer. The project is a single-page application (SPA) built with vanilla HTML, CSS, and JavaScript, featuring a modern, minimalistic black-and-white design theme. The portfolio showcases professional skills, projects, experience, and contact information in a responsive layout optimized for both desktop and mobile viewing.

# User Preferences

Preferred communication style: Simple, everyday language.

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