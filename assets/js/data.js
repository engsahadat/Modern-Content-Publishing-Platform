// Sample Articles Data
const articlesData = [
    {
        id: 1,
        title: "The Future of Artificial Intelligence in 2025",
        excerpt: "Exploring the latest developments in AI technology and how they're shaping our future. From machine learning to neural networks, discover what's next.",
        category: "technology",
        author: "Sarah Johnson",
        date: "2024-11-20",
        readTime: "8 min read",
        featured: true,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
        tags: ["AI", "Technology", "Innovation", "Future"],
        content: `
            <p>Artificial Intelligence has come a long way since its inception, and 2025 marks a pivotal year in AI development. We're witnessing unprecedented advancements in machine learning, natural language processing, and computer vision.</p>
            
            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop" alt="AI Technology" style="width: 100%; height: auto; border-radius: var(--radius-lg); margin: 2rem 0;">
            
            <h2>The Current State of AI</h2>
            <p>Today's AI systems are more sophisticated than ever before. They can understand context, generate creative content, and even predict future trends with remarkable accuracy. Large language models have become mainstream, transforming how we interact with technology.</p>
            
            <h3>Key Developments</h3>
            <p>Some of the most exciting developments include:</p>
            <ul>
                <li>Advanced natural language understanding</li>
                <li>Improved computer vision capabilities</li>
                <li>More efficient neural network architectures</li>
                <li>Better integration with everyday applications</li>
            </ul>
            
            <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=600&fit=crop" alt="Neural Networks" style="width: 100%; height: auto; border-radius: var(--radius-lg); margin: 2rem 0;">
            
            <h2>Looking Ahead</h2>
            <p>As we move forward, AI will continue to revolutionize industries from healthcare to transportation. The key is ensuring that these technologies are developed responsibly and ethically, with human wellbeing at the forefront.</p>
            
            <p>The future is bright, and AI will undoubtedly play a central role in shaping the world of tomorrow.</p>
        `
    },
    {
        id: 2,
        title: "10 Tips for a Healthier Lifestyle",
        excerpt: "Simple yet effective strategies to improve your daily health and wellness routine. Start living your best life today with these proven tips.",
        category: "health",
        author: "Dr. Michael Chen",
        date: "2024-11-18",
        readTime: "6 min read",
        featured: true,
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop",
        tags: ["Health", "Wellness", "Lifestyle", "Tips"],
        content: `
            <p>Living a healthier lifestyle doesn't have to be complicated. With these 10 simple tips, you can make significant improvements to your overall wellbeing.</p>
            
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop" alt="Healthy Lifestyle" style="width: 100%; height: auto; border-radius: var(--radius-lg); margin: 2rem 0;">
            
            <h2>1. Stay Hydrated</h2>
            <p>Drinking enough water is crucial for maintaining optimal health. Aim for at least 8 glasses of water per day.</p>
            
            <h2>2. Get Regular Exercise</h2>
            <p>Physical activity is essential for both physical and mental health. Find activities you enjoy and make them a regular part of your routine.</p>
            
            <img src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&h=600&fit=crop" alt="Exercise and Fitness" style="width: 100%; height: auto; border-radius: var(--radius-lg); margin: 2rem 0;">
            
            <h2>3. Prioritize Sleep</h2>
            <p>Quality sleep is fundamental to good health. Aim for 7-9 hours of sleep each night.</p>
            
            <p>Remember, small changes can lead to big results. Start incorporating these tips today!</p>
        `
    },
    {
        id: 3,
        title: "Remote Work: The New Normal",
        excerpt: "How businesses are adapting to remote work culture and what it means for the future of employment and productivity.",
        category: "business",
        author: "Emily Rodriguez",
        date: "2024-11-15",
        readTime: "7 min read",
        featured: false,
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop",
        tags: ["Business", "Remote Work", "Productivity", "Culture"],
        content: `
            <p>Remote work has transformed from a temporary solution to a permanent fixture in the modern workplace. Companies worldwide are reimagining how work gets done.</p>
            
            <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&h=600&fit=crop" alt="Remote Work Setup" style="width: 100%; height: auto; border-radius: var(--radius-lg); margin: 2rem 0;">
            
            <h2>The Benefits of Remote Work</h2>
            <p>Remote work offers numerous advantages including increased flexibility, reduced commute times, and improved work-life balance. Many employees report higher satisfaction levels when working remotely.</p>
            
            <h2>Challenges and Solutions</h2>
            <p>While remote work has many benefits, it also presents challenges such as communication barriers and feelings of isolation. Successful companies are addressing these through regular virtual meetings and team building activities.</p>
        `
    },
    {
        id: 4,
        title: "Minimalist Living: Less is More",
        excerpt: "Discover the art of minimalism and how decluttering your life can lead to greater happiness and fulfillment.",
        category: "lifestyle",
        author: "David Park",
        date: "2024-11-12",
        readTime: "5 min read",
        featured: true,
        image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&h=500&fit=crop",
        tags: ["Lifestyle", "Minimalism", "Happiness", "Simplicity"],
        content: `
            <p>Minimalism isn't just about having fewer possessions—it's about making room for what truly matters in life. By simplifying our surroundings, we can focus on experiences and relationships.</p>
            
            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&h=600&fit=crop" alt="Minimalist Living Space" style="width: 100%; height: auto; border-radius: var(--radius-lg); margin: 2rem 0;">
            
            <h2>Getting Started with Minimalism</h2>
            <p>Begin by identifying what adds value to your life and what doesn't. Start small with one room or category of items, and gradually expand your minimalist approach.</p>
            
            <h2>The Benefits</h2>
            <p>Living with less can reduce stress, save money, and give you more time for the things you love. It's about intentional living and mindful consumption.</p>
        `
    },
    {
        id: 5,
        title: "Exploring Southeast Asia: A Traveler's Guide",
        excerpt: "Your ultimate guide to backpacking through Southeast Asia, from hidden gems to must-visit destinations.",
        category: "travel",
        author: "Lisa Anderson",
        date: "2024-11-10",
        readTime: "10 min read",
        featured: false,
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=500&fit=crop",
        tags: ["Travel", "Adventure", "Asia", "Guide"],
        content: `
            <p>Southeast Asia is a backpacker's paradise, offering stunning landscapes, rich cultures, and incredible food at affordable prices. This guide will help you plan the trip of a lifetime.</p>
            
            <img src="https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=600&fit=crop" alt="Southeast Asia Landscape" style="width: 100%; height: auto; border-radius: var(--radius-lg); margin: 2rem 0;">
            
            <h2>Top Destinations</h2>
            <p>From the temples of Thailand to the beaches of Indonesia, Southeast Asia has something for everyone. Don't miss Vietnam's Ha Long Bay, Cambodia's Angkor Wat, and the Philippines' pristine islands.</p>
            
            <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=600&fit=crop" alt="Travel Adventure" style="width: 100%; height: auto; border-radius: var(--radius-lg); margin: 2rem 0;">
            
            <h2>Travel Tips</h2>
            <p>Pack light, stay flexible with your itinerary, and embrace local customs. The best experiences often come from unexpected detours.</p>
        `
    },
    {
        id: 6,
        title: "Sustainable Living: Small Changes, Big Impact",
        excerpt: "Learn how small daily choices can contribute to a more sustainable future for our planet.",
        category: "lifestyle",
        author: "Sarah Johnson",
        date: "2024-11-08",
        readTime: "6 min read",
        featured: false,
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop",
        tags: ["Sustainability", "Environment", "Lifestyle", "Green Living"],
        content: `
            <p>Sustainability starts with individual actions. Every small change we make in our daily lives contributes to a healthier planet for future generations.</p>
            
            <h2>Easy Sustainable Swaps</h2>
            <p>Replace single-use plastics with reusable alternatives, choose local and seasonal produce, and reduce energy consumption at home. These simple changes add up over time.</p>
        `
    },
    {
        id: 7,
        title: "The Rise of Blockchain Technology",
        excerpt: "Understanding blockchain beyond cryptocurrency and its potential to revolutionize various industries.",
        category: "technology",
        author: "Michael Chen",
        date: "2024-11-05",
        readTime: "9 min read",
        featured: false,
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop",
        tags: ["Blockchain", "Technology", "Innovation", "Cryptocurrency"],
        content: `
            <p>Blockchain technology is much more than just the foundation for cryptocurrencies. Its decentralized nature and security features make it applicable to numerous industries.</p>
            
            <h2>Applications Beyond Finance</h2>
            <p>From supply chain management to healthcare records, blockchain is being adopted in diverse sectors. Its transparency and immutability make it ideal for scenarios requiring trust and verification.</p>
        `
    },
    {
        id: 8,
        title: "Entrepreneurship in the Digital Age",
        excerpt: "Essential strategies for building and scaling a successful online business in today's digital landscape.",
        category: "business",
        author: "Emily Rodriguez",
        date: "2024-11-03",
        readTime: "8 min read",
        featured: false,
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop",
        tags: ["Entrepreneurship", "Business", "Digital", "Startup"],
        content: `
            <p>The digital age has lowered barriers to entry for entrepreneurs. With the right strategy and tools, anyone can build a successful online business.</p>
            
            <h2>Key Success Factors</h2>
            <p>Focus on solving real problems, build a strong online presence, and leverage digital marketing. Understanding your target audience is crucial for success.</p>
        `
    },
    {
        id: 9,
        title: "Mental Health Awareness: Breaking the Stigma",
        excerpt: "Why mental health matters and how we can create more supportive communities.",
        category: "health",
        author: "Dr. Michael Chen",
        date: "2024-11-01",
        readTime: "7 min read",
        featured: false,
        image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&h=500&fit=crop",
        tags: ["Mental Health", "Wellness", "Awareness", "Support"],
        content: `
            <p>Mental health is just as important as physical health, yet stigma often prevents people from seeking help. It's time to change the conversation.</p>
            
            <h2>Creating Supportive Environments</h2>
            <p>We can all play a role in supporting mental health by being more understanding, offering help when needed, and normalizing conversations about mental wellbeing.</p>
        `
    },
    {
        id: 10,
        title: "The Art of Photography: Tips for Beginners",
        excerpt: "Master the basics of photography and start capturing stunning images with these beginner-friendly tips.",
        category: "lifestyle",
        author: "David Park",
        date: "2024-10-28",
        readTime: "6 min read",
        featured: false,
        image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=500&fit=crop",
        tags: ["Photography", "Art", "Creative", "Tips"],
        content: `
            <p>Photography is an art form that allows you to capture and share your unique perspective of the world. Here are some fundamental tips to get you started.</p>
            
            <h2>Understanding Composition</h2>
            <p>Learn the rule of thirds, pay attention to lighting, and experiment with different angles. Great photography is about more than just having expensive equipment.</p>
        `
    },
    {
        id: 11,
        title: "Cybersecurity Best Practices for 2025",
        excerpt: "Protect yourself online with these essential cybersecurity tips and strategies.",
        category: "technology",
        author: "Sarah Johnson",
        date: "2024-10-25",
        readTime: "7 min read",
        featured: false,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
        tags: ["Cybersecurity", "Technology", "Safety", "Privacy"],
        content: `
            <p>In an increasingly digital world, cybersecurity is more important than ever. Protect your personal information and digital assets with these best practices.</p>
            
            <h2>Essential Security Measures</h2>
            <p>Use strong, unique passwords for each account, enable two-factor authentication, and keep your software updated. Be cautious of phishing attempts and suspicious links.</p>
        `
    },
    {
        id: 12,
        title: "The Future of Sustainable Energy",
        excerpt: "Exploring renewable energy sources and their role in combating climate change.",
        category: "technology",
        author: "Emily Rodriguez",
        date: "2024-10-22",
        readTime: "9 min read",
        featured: false,
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop",
        tags: ["Energy", "Sustainability", "Environment", "Innovation"],
        content: `
            <p>Renewable energy is key to addressing climate change. Solar, wind, and other sustainable energy sources are becoming more efficient and affordable.</p>
            
            <h2>The Path Forward</h2>
            <p>Transitioning to renewable energy requires investment and innovation, but the benefits for our planet are immeasurable. The future is green.</p>
        `
    }
];

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = articlesData;
}
