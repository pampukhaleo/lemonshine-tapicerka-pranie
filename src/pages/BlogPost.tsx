
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NotFound from './NotFound';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Button asChild variant="outline" className="mb-8 border-mint-500 text-mint-500 hover:bg-mint-50">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Wróć do bloga
              </Link>
            </Button>

            {/* Article header */}
            <article className="prose prose-lg max-w-none">
              <div className="text-center space-y-4 mb-12">
                <div className="inline-block px-3 py-1 bg-mint-100 text-mint-700 text-sm rounded-full font-medium">
                  {post.category}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('pl-PL')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Article hero image */}
              <div className="aspect-video gradient-hero p-8 rounded-2xl mb-12">
                <div className="w-full h-full bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="text-center text-foreground">
                    <div className="text-6xl mb-4">📝</div>
                    <div className="text-xl font-medium">{post.category}</div>
                  </div>
                </div>
              </div>

              {/* Article content */}
              <div className="space-y-6">
                {post.content.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed text-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Article footer */}
              <div className="border-t border-gray-200 pt-8 mt-12">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-muted-foreground">
                    Autor: <span className="font-medium text-foreground">{post.author}</span>
                  </div>
                  <Button asChild className="gradient-lemon text-white hover:opacity-90">
                    <Link to="/#zamow">
                      Zamów Pranie Tapicerki
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
