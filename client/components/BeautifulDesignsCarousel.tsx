import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from '@/components/ui/button'

const slides = [
  {
    title: "Beautiful Designed",
    description: "Each link kit is crafted with care by our team of professional designers. Show your personality through carefully crafted design elements that make your content stand out.",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1061&h=1415&q=80",
    cardTitle: "Creative Portfolio",
    cardDescription: "Showcase your work beautifully",
    testimonial: "The collaborative features are game-changing. Our team's productivity increased by 300% since switching to DesignKit."
  },
  {
    title: "Perfectly Crafted",
    description: "Every design element is thoughtfully created to provide the best user experience. Our templates adapt to your brand while maintaining professional aesthetics.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=980&q=80",
    cardTitle: "Team Collaboration",
    cardDescription: "Work together seamlessly",
    testimonial: "DesignKit transformed how we approach creative projects. The quality and consistency is unmatched."
  },
  {
    title: "Modern Aesthetics",
    description: "Stay ahead with contemporary design trends. Our platform evolves with modern design principles to keep your work fresh and engaging.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&h=980&q=80",
    cardTitle: "Design Systems",
    cardDescription: "Consistent brand experience",
    testimonial: "The design system features are incredible. We built our entire brand library in just days."
  }
]

export default function BeautifulDesignsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((slide, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                      {slide.title}
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                      {slide.description}
                    </p>
                    
                    {/* Carousel Navigation */}
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={scrollPrev}
                        className="rounded-full w-10 h-10 p-0 border-gray-300 hover:bg-gray-100"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </Button>
                      
                      <div className="flex gap-2">
                        {slides.map((_, idx) => (
                          <button
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              idx === selectedIndex ? 'bg-black' : 'bg-gray-300'
                            }`}
                            onClick={() => emblaApi?.scrollTo(idx)}
                          />
                        ))}
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={scrollNext}
                        className="rounded-full w-10 h-10 p-0 border-gray-300 hover:bg-gray-100"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                      <div className="aspect-[3/4] bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl overflow-hidden relative">
                        <img 
                          src={slide.image}
                          alt={slide.cardTitle}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                          <div className="p-6 text-white">
                            <h3 className="text-xl font-bold mb-2">{slide.cardTitle}</h3>
                            <p className="text-gray-200 text-sm">{slide.cardDescription}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Testimonial overlay */}
                    <div className="absolute top-12 right-12 bg-gray-900 text-white p-6 rounded-2xl max-w-xs shadow-xl">
                      <p className="text-sm leading-relaxed">
                        "{slide.testimonial}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
