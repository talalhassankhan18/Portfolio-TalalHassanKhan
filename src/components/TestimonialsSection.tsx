import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
        {
      name: "Rose Patric",
      role: "Design Lead",
      company: "BlueWave Designs",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      content: "The UI/UX work on our dashboard project was outstanding. The interactive prototypes made it easy to visualize the end product, and the final design was both user-friendly and aesthetically pleasing.",
      rating: 5
    },
    {
      name: "Saud Farooqi",
      role: "CEO",
      company: "ZeroSwift",
      avatar: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=100&h=100&fit=crop&crop=face",
      content: "The UI/UX designs delivered were phenomenal! The intuitive layouts and seamless user flows significantly improved our app's user engagement. The attention to detail was exceptional.",
      rating: 5
    },
    {
      name: "Hassan Malik",
      role: "Creative Director",
      company: "PixelCraft Studios",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Working on our mobile app's UI/UX was a delight. The designs were not only visually stunning but also highly functional, resulting in a 30% increase in user retention for our platform.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-base-content mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            What my clients say about working with me and the results we've achieved together.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-16">
          <Card className="border-0 bg-white shadow-xl max-w-4xl mx-auto hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current hover:scale-110 transition-transform duration-200" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg md:text-xl text-base-content/80 italic mb-8 leading-relaxed">
                  "{testimonials[currentSlide].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="w-12 h-12 hover:scale-110 transition-transform duration-200">
                    <AvatarImage src={testimonials[currentSlide].avatar} />
                    <AvatarFallback>{testimonials[currentSlide].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold text-base-content">{testimonials[currentSlide].name}</div>
                    <div className="text-sm text-base-content/60">
                      {testimonials[currentSlide].role} at {testimonials[currentSlide].company}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 p-0 bg-secondary text-white border-secondary hover:bg-secondary/90 hover:scale-110 transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 p-0 bg-secondary text-white border-secondary hover:bg-secondary/90 hover:scale-110 transition-all duration-200"
          >
            <ChevronRight size={20} />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-125 ${
                  currentSlide === index ? 'bg-primary' : 'bg-base-content/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;