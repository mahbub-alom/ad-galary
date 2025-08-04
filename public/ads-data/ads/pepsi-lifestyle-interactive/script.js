document.addEventListener('DOMContentLoaded', function() {
    const adContainer = document.querySelector('.ad-container');
    const lifestyleItems = document.querySelectorAll('.lifestyle-item');
    const shareButton = document.querySelector('.share-button');
    const socialIcons = document.querySelectorAll('.social-icon');
    
    let currentTheme = null;
    let interactionCount = 0;
    
    // Theme configurations
    const themes = {
        music: {
            color: '#ff6b6b',
            message: 'Feel the beat with Pepsi!'
        },
        sports: {
            color: '#4ecdc4',
            message: 'Game on with Pepsi!'
        },
        gaming: {
            color: '#45b7d1',
            message: 'Level up with Pepsi!'
        },
        social: {
            color: '#96ceb4',
            message: 'Share the moment with Pepsi!'
        }
    };
    
    // Initialize interactions
    function initializeAd() {
        console.log('Pepsi Lifestyle Interactive Ad loaded');
        
        // Add entrance animation completion
        setTimeout(() => {
            document.querySelector('.headline').style.transform = 'translateX(0)';
        }, 1000);
    }
    
    // Lifestyle item interactions
    lifestyleItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const theme = this.dataset.theme;
            interactionCount++;
            
            // Remove active state from all items
            lifestyleItems.forEach(i => i.classList.remove('active'));
            
            // Add active state to clicked item
            this.classList.add('active');
            
            // Update theme
            currentTheme = theme;
            updateAdTheme(theme);
            
            // Add interaction feedback
            createInteractionRipple(this);
            
            console.log(`Lifestyle theme selected: ${theme}`);
        });
        
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
    
    // Update ad theme based on selection
    function updateAdTheme(theme) {
        const themeConfig = themes[theme];
        const backgroundVideo = document.querySelector('.background-video');
        
        // Animate background color change
        backgroundVideo.style.background = `linear-gradient(45deg, ${themeConfig.color}55, ${themeConfig.color}77, ${themeConfig.color}99)`;
        backgroundVideo.style.transition = 'background 0.8s ease';
        
        // Update share button text
        shareButton.textContent = themeConfig.message;
        shareButton.style.background = `linear-gradient(135deg, ${themeConfig.color}, ${themeConfig.color}dd)`;
        
        // Animate particles with theme color
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            particle.style.background = themeConfig.color;
            particle.style.boxShadow = `0 0 10px ${themeConfig.color}66`;
        });
    }
    
    // Create interaction ripple effect
    function createInteractionRipple(element) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: rippleExpand 0.6s linear;
            pointer-events: none;
            z-index: 10;
        `;
        
        const rect = element.getBoundingClientRect();
        const containerRect = adContainer.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (rect.left - containerRect.left + rect.width / 2 - size / 2) + 'px';
        ripple.style.top = (rect.top - containerRect.top + rect.height / 2 - size / 2) + 'px';
        
        adContainer.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
    
    // Share button interaction
    shareButton.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Button press animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Create share action
        if (currentTheme) {
            const message = themes[currentTheme].message;
            console.log(`Share action: ${message}`);
            
            // Simulate social share
            createShareExplosion();
        } else {
            console.log('Share your Pepsi moment!');
        }
        
        // In real implementation, this would open share dialog
        // navigator.share({ title: 'Pepsi Lifestyle', text: message });
    });
    
    // Social icon interactions
    socialIcons.forEach((icon, index) => {
        icon.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const platforms = ['facebook', 'twitter', 'instagram'];
            const platform = platforms[index];
            
            // Icon animation
            this.style.transform = 'scale(1.3) rotate(360deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
            
            console.log(`Social share: ${platform}`);
            
            // In real implementation, would open platform-specific share
        });
    });
    
    // Create share explosion effect
    function createShareExplosion() {
        const explosion = document.createElement('div');
        explosion.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, #ff6b6b, transparent);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: explode 1s ease-out;
            pointer-events: none;
            z-index: 20;
        `;
        
        adContainer.appendChild(explosion);
        setTimeout(() => explosion.remove(), 1000);
        
        // Create multiple small particles
        for (let i = 0; i < 8; i++) {
            createExplosionParticle(i);
        }
    }
    
    function createExplosionParticle(index) {
        const particle = document.createElement('div');
        const angle = (index / 8) * Math.PI * 2;
        const distance = 30;
        
        particle.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 4px;
            height: 4px;
            background: #ff6b6b;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: explodeParticle 0.8s ease-out;
            pointer-events: none;
            z-index: 19;
        `;
        
        particle.style.setProperty('--dx', Math.cos(angle) * distance + 'px');
        particle.style.setProperty('--dy', Math.sin(angle) * distance + 'px');
        
        adContainer.appendChild(particle);
        setTimeout(() => particle.remove(), 800);
    }
    
    // Main ad click
    adContainer.addEventListener('click', function() {
        console.log('Main Pepsi ad clicked');
        // In real scenario, redirect to campaign page
        // window.open('https://pepsi.com/lifestyle-campaign', '_blank');
    });
    
    // Add CSS animations for effects
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleExpand {
            to {
                transform: scale(1);
                opacity: 0;
            }
        }
        
        @keyframes explode {
            to {
                transform: translate(-50%, -50%) scale(8);
                opacity: 0;
            }
        }
        
        @keyframes explodeParticle {
            to {
                transform: translate(-50%, -50%) translate(var(--dx), var(--dy));
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Initialize the ad
    initializeAd();
    
    // Performance tracking
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Pepsi Lifestyle ad is viewable');
                // Track viewability metrics
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(adContainer);
});