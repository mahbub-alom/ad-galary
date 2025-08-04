document.addEventListener('DOMContentLoaded', function() {
    const adContainer = document.querySelector('.ad-container');
    const productItems = document.querySelectorAll('.product-item');
    const ctaButton = document.querySelector('.cta-button');
    
    // Track interaction events
    let isHovered = false;
    
    // Add hover effects
    adContainer.addEventListener('mouseenter', function() {
        isHovered = true;
        adContainer.style.transform = 'scale(1.02)';
        adContainer.style.transition = 'transform 0.3s ease';
        
        // Animate product items on hover
        productItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = 'scale(1.1) translateY(-5px)';
            }, index * 100);
        });
    });
    
    adContainer.addEventListener('mouseleave', function() {
        isHovered = false;
        adContainer.style.transform = 'scale(1)';
        
        // Reset product items
        productItems.forEach(item => {
            item.style.transform = 'scale(1) translateY(0)';
        });
    });
    
    // Product item interactions
    productItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.dataset.product;
            
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(76, 175, 80, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (rect.width / 2 - size / 2) + 'px';
            ripple.style.top = (rect.height / 2 - size / 2) + 'px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
            
            console.log(`Product ${productId} clicked`);
        });
    });
    
    // CTA button interaction
    ctaButton.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Animate button press
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        console.log('CTA button clicked - Discover More');
        // In a real scenario, this would redirect to the landing page
        // window.open('https://meril.com/skincare-collection', '_blank');
    });
    
    // Main ad click
    adContainer.addEventListener('click', function() {
        console.log('Main ad clicked');
        // In a real scenario, this would redirect to the main page
        // window.open('https://meril.com', '_blank');
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Performance tracking
    console.log('Meril Skincare Banner loaded successfully');
    
    // Simulate ad viewability tracking
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Ad is viewable');
                // Track viewability event
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(adContainer);
});