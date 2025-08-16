
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blog';
import Header from '@/components/Header';
import SeoSection from '@/components/SeoSection';
import Footer from '@/components/Footer';

const BlogIndex = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Wszystkie Artykuły o Tapicerce
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Praktyczne porady, ciekawostki i wszystko co powinieneś wiedzieć o pielęgnacji tapicerki
            </p>
            <Button asChild variant="outline" className="border-mint-500 text-mint-500 hover:bg-mint-50">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Wróć do strony głównej
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((article) => (
              <Card key={article.id} className="border-0 shadow-lg hover-lift bg-white overflow-hidden">
                <div className="aspect-video gradient-hero p-6">
                  <div className="w-full h-full bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="text-center text-foreground">
                      <div className="text-3xl mb-2">📝</div>
                      <div className="text-sm font-medium">{article.category}</div>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString('pl-PL')}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg font-heading leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="text-mint-500 hover:text-mint-600 p-0">
                      <Link to={`/blog/${article.slug}`}>
                        Czytaj więcej
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <SeoSection />
      <Footer />
    </div>
  );
};

export default BlogIndex;
