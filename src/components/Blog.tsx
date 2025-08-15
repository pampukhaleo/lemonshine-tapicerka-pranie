
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blog';

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-lemon-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Ciekawe Artykuły o Tapicerce
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Praktyczne porady, ciekawostki i wszystko co powinieneś wiedzieć o pielęgnacji tapicerki
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-mint-500 text-mint-500 hover:bg-mint-50 hover-lift">
            <Link to="/blog">
              Zobacz wszystkie artykuły
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
