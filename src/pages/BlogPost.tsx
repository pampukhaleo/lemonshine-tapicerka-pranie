import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import Header from '@/components/Header';
import SeoSection from '@/components/SeoSection';
import Footer from '@/components/Footer';
import NotFound from './NotFound';
import SEOHead from '@/components/SEOHead';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://lemonshine.pl/${post.mainPicture}`,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "mainEntityOfPage": `https://lemonshine.pl/blog/${post.slug}/`,
    "articleSection": post.category,
    "publisher": {
      "@type": "Organization",
      "name": "Lemonshine",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lemonshine.pl/lemonshine.png"
      }
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strona główna",
        "item": "https://lemonshine.pl/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://lemonshine.pl/blog/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://lemonshine.pl/blog/${post.slug}/`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={post.title}
        description={post.excerpt}
        keywords={`${post.title}, pranie tapicerki, czyszczenie kanap, ${post.category.toLowerCase()}`}
        canonical={`/blog/${post.slug}/`}
        ogImage={post.mainPicture}
        ogImageAlt={`${post.title} - Lemonshine`}
        ogType="article"
        jsonLd={[blogPostingJsonLd, breadcrumbJsonLd]}
      />
      <Header variant="klient" />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Button asChild variant="outline" className="mb-8 border-mint-600 text-mint-600 hover:bg-mint-50">
              <Link to="/blog/">\n                <ArrowLeft className="w-4 h-4 mr-2" />\n                Wróć do bloga\n              </Link>
            </Button>

            {/* Article header */}
            <article className="prose prose-lg max-w-none">
              <div className="text-center space-y-4 mb-12">
                <div className="inline-block px-3 py-1 bg-mint-100 text-mint-700 text-sm rounded-full font-medium">
                  { post.category }
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
                  { post.title }
                </h1>
                { post.subtitle && (
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    { post.subtitle }
                  </p>
                ) }

                <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4"/>
                    <span>{ post.author }</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4"/>
                    <span>{ new Date(post.date).toLocaleDateString('pl-PL') }</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4"/>
                    <span>{ post.readTime }</span>
                  </div>
                </div>
              </div>

              {/* Article hero image */ }
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg mb-5">
                <img src={`/${ post.mainPicture }`} alt={ post.title }/>
              </div>

              {/* Article content */ }
              <div className="space-y-8">
                { post.content.map((block, index) => {
                  if (block.type === 'paragraph') {
                    return (
                      <p key={ index } className="text-lg leading-relaxed text-foreground">
                        { block.content }
                      </p>
                    );
                  }

                  if (block.type === 'heading') {
                    const HeadingTag = `h${ block.level || 2 }` as keyof JSX.IntrinsicElements;
                    return (
                      <HeadingTag
                        key={ index }
                        className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-12 mb-6 first:mt-8"
                      >
                        { block.content }
                      </HeadingTag>
                    );
                  }

                  if (block.type === 'list') {
                    const ListTag = block.listType === 'ordered' ? 'ol' : 'ul';
                    return (
                      <div key={ index } className="my-6">
                        <ListTag className={ `space-y-3 text-lg leading-relaxed text-foreground ${
                          block.listType === 'ordered'
                            ? 'list-decimal list-inside'
                            : 'list-disc list-inside'
                        }` }>
                          { block.items?.map((item, itemIndex) => (
                            <li key={ itemIndex } className="leading-relaxed">
                              { item }
                            </li>
                          )) }
                        </ListTag>
                      </div>
                    );
                  }

                  if (block.type === 'image') {
                    return (
                      <div key={ index } className="w-full my-8">
                        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
                          <img
                            src={`/${ block.content }`}
                            alt={ block.alt || 'Artykuł o czyszczeniu tapicerki' }
                            className="w-full h-full object-cover"
                            onError={ (e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/placeholder.svg';
                            } }
                          />
                        </div>
                        { block.caption && (
                          <p className="text-sm text-muted-foreground text-center mt-3 italic">
                            { block.caption }
                          </p>
                        ) }
                      </div>
                    );
                  }

                  return null;
                }) }
              </div>

              {/* Article footer */ }
              <div className="border-t border-gray-200 pt-8 mt-12">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-muted-foreground">
                    Autor: <span className="font-medium text-foreground">{ post.author }</span>
                  </div>
                  <Button asChild className="hover:opacity-90">
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
      <SeoSection/>
      <Footer/>
    </div>
  );
};

export default BlogPost;
