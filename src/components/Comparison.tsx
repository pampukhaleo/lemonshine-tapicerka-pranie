import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Comparison = () => {
  const isMobile = useIsMobile();
  
  const StarRating = ({ rating, size = "normal" }: { rating: number; size?: "normal" | "large" }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const starSize = size === "large" ? "w-6 h-6" : "w-5 h-5";

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className={`${starSize} fill-yellow-400 text-yellow-400`} />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className={`${starSize} fill-yellow-400 text-yellow-400`} />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className={`${starSize} text-gray-300`} />);
    }

    return <div className="flex gap-1 justify-center">{stars}</div>;
  };

  const comparisonData = [
    {
      feature: "Cena",
      lemonshine: 5,
      competitor1: 4,
      competitor2: 2,
      competitor3: 3
    },
    {
      feature: "Sprzęt",
      lemonshine: 5,
      competitor1: 2,
      competitor2: 4,
      competitor3: 2.5
    },
    {
      feature: "Dostępność terminów",
      lemonshine: 4.5,
      competitor1: 1,
      competitor2: 2,
      competitor3: 4.5
    },
    {
      feature: "Jakość usługi",
      lemonshine: 5,
      competitor1: 2,
      competitor2: 3,
      competitor3: 4.5
    },
    {
      feature: "Szybkość realizacji",
      lemonshine: 5,
      competitor1: 3,
      competitor2: 3,
      competitor3: 1
    },
    {
      feature: "Gwarancja satysfakcji",
      lemonshine: 5,
      competitor1: 3,
      competitor2: 2,
      competitor3: 2
    }
  ];

  const competitors = [
    { name: "Ecoshine", key: "competitor1" as const },
    { name: "Ecoserwis", key: "competitor2" as const },
    { name: "Kamyjka", key: "competitor3" as const }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-lemon-50/50 to-mint-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
              Dlaczego My?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Porównanie Lemonshine z konkurencją
            </p>
          </div>

          {isMobile ? (
            /* Mobile Card Layout */
            <div className="space-y-6">
              {competitors.map((competitor, competitorIndex) => (
                <div key={competitor.name} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-lemon-500 to-mint-500 p-4">
                    <div className="flex justify-between items-center text-white">
                      <div>
                        <h3 className="font-heading font-bold text-lg">Lemonshine</h3>
                        <p className="text-sm opacity-90">To MY!</p>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-bold">vs</span>
                      </div>
                      <div className="text-center">
                        <h3 className="font-heading font-bold text-lg">{competitor.name}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    {comparisonData.map((row, featureIndex) => (
                      <div key={featureIndex} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                        <h4 className="font-semibold text-foreground mb-3 text-center">{row.feature}</h4>
                        <div className="flex justify-around items-center">
                          <div className="text-center">
                            <div className="bg-primary/5 rounded-lg p-3 mb-1">
                              <StarRating rating={row.lemonshine} size="large" />
                            </div>
                            <span className="text-xs font-medium text-primary">Lemonshine</span>
                          </div>
                          <div className="text-center">
                            <div className="rounded-lg p-3 mb-1">
                              <StarRating rating={row[competitor.key]} size="large" />
                            </div>
                            <span className="text-xs font-medium text-muted-foreground">{competitor.name}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Desktop Table Layout */
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-lemon-500 to-mint-500">
                      <th className="p-6 text-left text-white font-heading font-bold text-lg">
                        Cecha
                      </th>
                      <th className="p-6 text-center text-white font-heading font-bold text-lg bg-primary/90">
                        <div className="flex flex-col items-center">
                          <span>Lemonshine</span>
                          <span className="text-sm opacity-90">To MY!</span>
                        </div>
                      </th>
                      <th className="p-6 text-center text-white font-heading font-bold text-lg">
                        Ecoshine
                      </th>
                      <th className="p-6 text-center text-white font-heading font-bold text-lg">
                        Ecoserwis
                      </th>
                      <th className="p-6 text-center text-white font-heading font-bold text-lg">
                        Kamyjka
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr 
                        key={index}
                        className={`border-b border-gray-100 ${
                          index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'
                        }`}
                      >
                        <td className="p-6 font-semibold text-foreground">
                          {row.feature}
                        </td>
                        <td className="p-6 text-center bg-primary/5">
                          <StarRating rating={row.lemonshine} />
                        </td>
                        <td className="p-6 text-center">
                          <StarRating rating={row.competitor1} />
                        </td>
                        <td className="p-6 text-center">
                          <StarRating rating={row.competitor2} />
                        </td>
                        <td className="p-6 text-center">
                          <StarRating rating={row.competitor3} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Summary Text */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-mint-100/50 rounded-3xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Dlaczego wybierają nas klienci?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                W Lemonshine korzystamy z profesjonalnego sprzętu Sabrina SW15 z ulepszeniami i markowej chemii, co pozwala 
                nam osiągnąć najlepsze efekty już za pierwszym razem. Zapewniamy szybkie terminy (często już na następny dzień)
                i krótszy czas schnięcia mebli. Dodatkowo dajemy gwarancję satysfakcji – jeśli efekt nie będzie zgodny z ustaleniami, 
                zwracamy 100% kosztów usługi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;