import React from 'react';
import { Star, StarHalf } from 'lucide-react';

const Comparison = () => {
  const StarRating = ({ rating }: { rating: number }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
    }

    return <div className="flex gap-1">{stars}</div>;
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
      competitor1: 2.5,
      competitor2: 4,
      competitor3: 2.5
    },
    {
      feature: "Dostępność terminów",
      lemonshine: 4.5,
      competitor1: 4,
      competitor2: 2,
      competitor3: 4.5
    },
    {
      feature: "Jakość usługi",
      lemonshine: 5,
      competitor1: 3,
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
      competitor1: 0,
      competitor2: 2,
      competitor3: 2
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-lemon-50/50 to-mint-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Dlaczego My?
            </h2>
            <p className="text-xl text-muted-foreground">
              Porównanie Lemonshine z konkurencją
            </p>
          </div>

          {/* Comparison Table */}
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
                      Konkurent 1
                    </th>
                    <th className="p-6 text-center text-white font-heading font-bold text-lg">
                      Konkurent 2
                    </th>
                    <th className="p-6 text-center text-white font-heading font-bold text-lg">
                      Konkurent 3
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