"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our newsletter with Islamic knowledge and updates.",
      });
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-[#507D7A] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter for weekly insights, articles, and updates about Islam.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-black"
              required
              disabled={isLoading}
              aria-label="Email address"
            />
            <Button
              type="submit"
              className="bg-[#D4AF37] hover:bg-[#B89B30] text-white md:w-auto"
              disabled={isLoading}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}