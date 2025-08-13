
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, User } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'Jak dbać o tapicerkę skórzaną? Praktyczny poradnik',
      excerpt: 'Skórzane meble wymagają szczególnej opieki. Dowiedz się, jak przedłużyć ich żywotność.',
      author: 'Ekspert Lemonshine',
      date: '2024-01-15',
      category: 'Porady',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Top 5 najczęstszych plam na tapicerce i sposoby ich usuwania',
      excerpt: 'Kawa, wino, tłuszcz - każda plama ma swój sposób usuwania. Poznaj sprawdzone metody.',
      author: 'Ekspert Lemonshine',
      date: '2024-01-10',
      category: 'Poradnik',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'Dlaczego warto regularnie czyścić tapicerkę?',
      excerpt: 'Regularne czyszczenie to nie tylko estetyka, ale przede wszystkim zdrowie całej rodziny.',
      author: 'Ekspert Lemonshine',
      date: '2024-01-05',
      category: 'Zdrowie',
      readTime: '4 min'
    },
    {
      id: 4,
      title: 'Jak przygotować meble do profesjonalnego czyszczenia?',
      excerpt: 'Kilka prostych kroków, które pomogą osiągnąć najlepszy efekt czyszczenia tapicerki.',
      author: 'Ekspert Lemonshine',
      date: '2024-01-01',
      category: 'Przygotowanie',
      readTime: '6 min'
    }
  ];

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
          {articles.map((article) => (
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
                  <Button variant="ghost" size="sm" className="text-mint-500 hover:text-mint-600 p-0">
                    Czytaj więcej
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Bądź na bieżąco z poradami o tapicerce
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Zapisz się do naszego newslettera i otrzymuj praktyczne porady oraz promocje
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Twój adres email"
                className="flex-1 px-4 py-3 rounded-lg border border-lemon-200 focus:border-mint-500 focus:outline-none"
              />
              <Button className="gradient-lemon text-white hover:opacity-90">
                Zapisz się
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Bez spamu, tylko wartościowe treści. Możesz się wypisać w każdej chwili.
            </p>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mt-12">
          <h3 className="text-xl font-heading font-semibold text-center text-foreground mb-6">
            Popularne tematy
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Czyszczenie kanap', 'Usuwanie plam', 'Pielęgnacja skóry', 'Alergeny w tapicerce', 'Impregnacja mebli', 'Czyszczenie dywanów'].map((topic, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="border-mint-200 text-mint-600 hover:bg-mint-50"
              >
                {topic}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
