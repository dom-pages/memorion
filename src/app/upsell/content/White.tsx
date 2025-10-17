import { Music, Brain, Zap, Award } from 'lucide-react';
import HotmartUpsell from '@/components/HotmartUpsell';
import { UTMifyPixel } from '@/components/UTMifyPixel';

export default function White() {
  const features = [
    {
      title: "Relaxation and Stress Relief",
      description: "Specifically designed frequencies to reduce anxiety",
      icon: <Music className="text-blue-500" size={24} />,
    },
    {
      title: "Enhanced Focus",
      description: "Beta patterns to improve concentration and alertness",
      icon: <Brain className="text-green-500" size={24} />,
    },
    {
      title: "Deep Sleep",
      description: "Delta frequencies for restorative and regenerative sleep",
      icon: <Zap className="text-purple-500" size={24} />,
    },
    {
      title: "Better Meditation",
      description: "Theta patterns to deepen meditation and creativity",
      icon: <Award className="text-orange-500" size={24} />,
    },
  ];

  return (
    <>
      <UTMifyPixel />
      <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-8 mb-12">
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Binaural Therapy Protocol
          </h1>
          <div className="text-2xl sm:text-3xl font-semibold mb-6">
            Sound Therapy for Wellness
          </div>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl">
            From &ldquo;listening passively&rdquo; to transforming your wellness. Experience therapeutic sound frequencies that enhance relaxation, improve focus, deepen sleep, and amplify meditation—without complicated procedures.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
          <Award size={240} />
        </div>
      </div>

      {/* Features */}
      <section className="my-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">What's Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="my-12">
        <p className="text-lg text-gray-700 mb-6">
          Welcome to <strong>Binaural Therapy Protocol</strong>, an audio therapy program based on binaural beats, a sound technique recognized by researchers.
        </p>
        
        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What are Binaural Beats?</h3>
          <p className="text-gray-700">
            Binaural beats are an emerging form of sound wave therapy where each ear receives a slightly different frequency. Your brain perceives this as a single tone, potentially helping to influence your mental state.
          </p>
        </div>
      </section>

      {/* Extended Benefits */}
      <section className="my-12 bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Potential Benefits</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <span className="text-green-600 font-bold text-xl">✓</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Relaxation and Anxiety Reduction</h4>
              <p className="text-gray-600">Research suggests that binaural beats may help reduce feelings of anxiety and promote relaxation.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-green-600 font-bold text-xl">✓</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Better Concentration and Focus</h4>
              <p className="text-gray-600">Specific frequencies can help increase focus, concentration, and alertness during daily activities.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-green-600 font-bold text-xl">✓</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Deeper Sleep</h4>
              <p className="text-gray-600">Delta frequency patterns may be associated with more restorative and regenerative sleep.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-green-600 font-bold text-xl">✓</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Enhanced Meditation</h4>
              <p className="text-gray-600">Theta patterns can contribute to deeper meditation and increased creativity.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-green-600 font-bold text-xl">✓</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Overall Wellbeing</h4>
              <p className="text-gray-600">Users report improved quality of life and better sense of wellbeing when incorporating binaural beats into their routine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="my-12 bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-400">
        <p className="text-gray-800">
          <strong>Important:</strong> Binaural beats are a complementary wellness tool. They do not replace professional medical treatment. If you are dealing with anxiety, depression, or other health conditions, consult a healthcare professional.
        </p>
      </section>

      {/* Testimonial */}
      <section className="my-12">
        <div className="bg-gray-100 rounded-2xl p-8 border-l-4 border-blue-600">
          <p className="text-gray-800 italic text-lg mb-4">
            &ldquo;Since I started using binaural beats, I feel more relaxed during the day and sleep better at night. It's a simple but effective addition to my wellness routine.&rdquo;
          </p>
          <p className="text-gray-600 font-semibold">- Maria S.</p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="my-12 bg-green-50 rounded-2xl p-8 border-2 border-green-500">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">✓ 100% Guarantee - 90 Days</h3>
        <p className="text-center text-gray-700">If you're not satisfied, we'll refund your full investment.</p>
      </section>

      {/* Disclaimer & Hotmart */}
      <section className="space-y-8">
        <p className="text-sm text-gray-500 text-center max-w-2xl mx-auto">
          Educational content. This product does not replace professional medical care. Consult a healthcare professional before use.
        </p>
        <HotmartUpsell black={false} />
      </section>
      </div>
      <script
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-subids
        async
        defer
      ></script>
    </>
  );
}