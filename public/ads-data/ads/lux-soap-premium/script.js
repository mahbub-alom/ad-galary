document.addEventListener('DOMContentLoaded', function() {
    const adContainer = document.querySelector('.ad-container');
    const soapBars = document.querySelectorAll('.soap-bar');
    const discoverButton = document.querySelector('.discover-button');
    const logoDiamond = document.querySelector('.logo-diamond');
    
    let interactionCount = 0;
    let hoveredSoap = null;
    
    // Soap variations data
    const soapVariants = [
        { name: 'Rose Essence', color: '#f4c2c2' },
        { name: 'Lavender Dream', color: '#d4c2f4' },
        { name: 'Vanilla Luxury', color: '#f4e6c2' }
    ];
    
    // Initialize luxury animations
    function initializeLuxuryAd() {
        console.log('Lux Premium Collection ad loaded');
        
        // Add entrance completion tracking
        setTimeout(() => {
            console.log('Luxury animations completed');
        }, 2500);
    }
    
    // Soap bar interactions
    soapBars.forEach((soap, index) => {
        soap.addEventListener('click', function(e) {
            e.stopPropagation();
            interactionCount++;
            
            const variant = soapVariants[index];
            
            // Remove active state from all soaps
            soapBars.forEach(s => s.classList.remove('selected'));
            
            // Add active state to clicked soap
            this.classList.add('selected');
            
            // Update product details
            updateProductDetails(variant);
            
            // Create luxury ripple effect
            createLuxuryRipple(this);
            
            console.log(`Soap selected: ${variant.name}`);
        });
        
        soap.addEventListener('mouseenter', function() {
            hoveredSoap = index;
            this.style.transform = 'translateY(-3px) scale(1.1)';
            
            // Enhanced glow effect
            this.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.4)';
            
            // Show soap name tooltip
            showSoapTooltip(this, soapVariants[index].name);
        });
        
        soap.addEventListener('mouseleave', function() {
            hoveredSoap = null;
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
            
            // Hide tooltip
            hideTooltip();
        });
    });
    
    // Update product details based on soap selection
    function updateProductDetails(variant) {
        const productTitle = document.querySelector('.product-title');
        const productDescription = document.querySelector('.product-description');
        
        // Animate text change
        productTitle.style.opacity = '0';
        productDescription.style.opacity = '0';
        
        setTimeout(() => {
            productTitle.textContent = variant.name;
            productDescription.textContent = 'Luxurious fragrance experience';
            
            productTitle.style.opacity = '1';
            productDescription.style.opacity = '1';
            productTitle.style.color = variant.color;
        }, 300);
    }
    
    // Create luxury ripple effect
    function createLuxuryRipple(element) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 215, 0, 0.6), transparent);
            transform: scale(0);
            animation: luxuryRipple 0.8s ease-out;
            pointer-events: none;
            z-index: 10;
        `;
        
        const rect = element.getBoundingClientRect();
        const containerRect = adContainer.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 3;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (rect.left - containerRect.left + rect.width / 2 - size / 2) + 'px';
        ripple.style.top = (rect.top - containerRect.top + rect.height / 2 - size / 2) + 'px';
        
        adContainer.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 800);
    }
    
    // Show soap tooltip
    function showSoapTooltip(element, text) {
        hideTooltip(); // Remove any existing tooltip
        
        const tooltip = document.createElement('div');
        tooltip.className = 'soap-tooltip';
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(0, 0, 0, 0.8);
            color: #ffd700;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 10px;
            font-weight: bold;
            z-index: 20;
            pointer-events: none;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        tooltip.textContent = text;
        
        const rect = element.getBoundingClientRect();
        const containerRect = adContainer.getBoundingClientRect();
        
        tooltip.style.left = (rect.left - containerRect.left + rect.width / 2) + 'px';
        tooltip.style.top = (rect.top - containerRect.top - 25) + 'px';
        tooltip.style.transform = 'translateX(-50%)';
        
        adContainer.appendChild(tooltip);
        
        // Fade in tooltip
        setTimeout(() => {
            tooltip.style.opacity = '1';
        }, 50);
    }
    
    // Hide tooltip
    function hideTooltip() {
        const existingTooltip = document.querySelector('.soap-tooltip');
        if (existingTooltip) {
            existingTooltip.remove();
        }
    }
    
    // Discover button interaction
    discoverButton.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Button press animation
        this.style.transform = 'scale(0.95) translateY(0)';
        setTimeout(() => {
            this.style.transform = 'scale(1) translateY(-1px)';
        }, 150);
        
        // Create golden burst effect
        createGoldenBurst();
        
        console.log('Discover Collection clicked');
        
        // In real implementation, would redirect to collection page
        // window.open('https://lux.com/premium-collection', '_blank');
    });
    
    // Create golden burst effect
    function createGoldenBurst() {
        const burst = document.createElement('div');
        burst.style.cssText = `
            position: absolute;
            top: 50%;
            right: 20px;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, #ffd700, transparent);
            border-radius: 50%;
            transform: translateY(-50%) scale(0);
            animation: goldenBurst 1s ease-out;
            pointer-events: none;
            z-index: 25;
        `;
        
        adContainer.appendChild(burst);
        setTimeout(() => burst.remove(), 1000);
        
        // Create sparkle particles
        for (let i = 0; i < 6; i++) {
            createSparkle(i);
        }
    }
    
    function createSparkle(index) {
        const sparkle = document.createElement('div');
        const angle = (index / 6) * Math.PI * 2;
        const distance = 20;
        
        sparkle.style.cssText = `
            position: absolute;
            top: 50%;
            right: 30px;
            width: 3px;
            height: 3px;
            background: #ffd700;
            border-radius: 50%;
            transform: translateY(-50%);
            animation: sparkleOut 0.8s ease-out;
            pointer-events: none;
            z-index: 24;
        `;
        
        sparkle.style.setProperty('--dx', Math.cos(angle) * distance + 'px');
        sparkle.style.setProperty('--dy', Math.sin(angle) * distance + 'px');
        
        adContainer.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 800);
    }
    
    // Logo diamond interaction
    logoDiamond.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Enhanced diamond spin
        this.style.animation = 'diamondSpin 0.8s ease-in-out';
        
        setTimeout(() => {
            this.style.animation = 'diamondSpin 4s ease-in-out infinite';
        }, 800);
        
        console.log('Lux logo clicked');
    });
    
    // Main ad click
    adContainer.addEventListener('click', function() {
        console.log('Main Lux Premium ad clicked');
        // In real scenario, redirect to main Lux page
        // window.open('https://lux.com', '_blank');
    });
    
    // Enhanced hover effects
    adContainer.addEventListener('mouseenter', function() {
        // Enhance shimmer effect
        const shimmer = document.querySelector('.shimmer-overlay');
        shimmer.style.animationDuration = '1.5s';
        
        // Enhance luxury particles
        const particles = document.querySelectorAll('.luxury-particle');
        particles.forEach(particle => {
            particle.style.animationDuration = '2.5s';
            particle.style.textShadow = '0 0 8px rgba(255, 215, 0, 0.8)';
        });
    });
    
    adContainer.addEventListener('mouseleave', function() {
        // Reset effects
        const shimmer = document.querySelector('.shimmer-overlay');
        shimmer.style.animationDuration = '3s';
        
        const particles = document.querySelectorAll('.luxury-particle');
        particles.forEach(particle => {
            particle.style.animationDuration = '5s';
            particle.style.textShadow = '';
        });
    });
    
    // Add CSS animations for effects
    const style = document.createElement('style');
    style.textContent = `
        @keyframes luxuryRipple {
            to {
                transform: scale(1);
                opacity: 0;
            }
        }
        
        @keyframes goldenBurst {
            to {
                transform: translateY(-50%) scale(6);
                opacity: 0;
            }
        }
        
        @keyframes sparkleOut {
            to {
                transform: translateY(-50%) translate(var(--dx), var(--dy));
                opacity: 0;
            }
        }
        
        .selected {
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.6) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Initialize the ad
    initializeLuxuryAd();
    
    // Performance and viewability tracking
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Lux Premium ad is viewable');
                // Track viewability and engagement metrics
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(adContainer);
});