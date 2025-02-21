import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#8BA888] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Truth of Islam</h3>
            <p className="text-sm">
              Spreading the message of Islam through authentic knowledge and understanding.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover-effect">About Us</Link></li>
              <li><Link href="/contact" className="hover-effect">Contact</Link></li>
              <li><Link href="/resources" className="hover-effect">Resources</Link></li>
              <li><Link href="/faq" className="hover-effect">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/articles" className="hover-effect">Articles</Link></li>
              <li><Link href="/videos" className="hover-effect">Videos</Link></li>
              <li><Link href="/books" className="hover-effect">Books</Link></li>
              <li><Link href="/events" className="hover-effect">Events</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover-effect">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover-effect">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover-effect">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover-effect">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Truth of Islam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}