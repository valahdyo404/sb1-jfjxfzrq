"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const articles = [
  {
    title: 'Scientific Miracles in the Quran',
    excerpt: 'Discover how the Quran described scientific facts centuries before their discovery.',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
  },
  {
    title: 'The Preservation of the Quran',
    excerpt: 'Learn about the unique preservation of the Quran throughout history.',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae',
  },
  {
    title: 'Islamic Golden Age',
    excerpt: 'Explore the contributions of Muslim scholars to science and civilization.',
    image: 'https://images.unsplash.com/photo-1584719866406-c76ddee68b83',
  },
];

export function FeaturedArticles() {
  return (
    <section className="py-20 bg-[#E8E4D9]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-default">
              <div className="relative h-48 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#787878] mb-4">{article.excerpt}</p>
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-[#D4AF37] hover:text-white transition-colors"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}