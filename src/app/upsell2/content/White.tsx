import { BookOpen, MessageCircle, Lightbulb, Target } from 'lucide-react';
import HotmartUpsell from '@/components/HotmartUpsell';
import { UTMifyPixel } from '@/components/UTMifyPixel';

export default function White() {
  const features = [
    {
      title: "Spiritual Protection",
      description: "Sound frequencies designed to repel negative energies",
      icon: <Lightbulb className="text-blue-500" size={24} />,
    },
    {
      title: "Financial Security",
      description: "Protection from blockages and unexpected losses",
      icon: <BookOpen className="text-green-500" size={24} />,
    },
    {
      title: "Health Preservation",
      description: "Maintain and seal your health achievements",
      icon: <Target className="text-purple-500" size={24} />,
    },
    {
      title: "Lasting Protection",
      description: "Keep your blessings and prosperity secured",
      icon: <MessageCircle className="text-orange-500" size={24} />,
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
            Binaural Protection Shield
          </h1>
          <div className="text-2xl sm:text-3xl font-semibold mb-6">
            Advanced Frequency Protection
          </div>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl">
            From &ldquo;feeling unprotected&rdquo; to complete spiritual security. Access protective sound frequencies that preserve your health, prosperity, and energy—without complicated practices.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10">
          <Target size={240} />
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
          Welcome to the <strong>Binaural Protection Shield</strong>, an audio wellness program based on binaural beat frequencies designed to protect and preserve your spiritual, physical, and financial wellbeing.
        </p>
        
        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What is Binaural Protection?</h3>
          <p className="text-gray-700">
            Protective binaural beat frequencies are an emerging form of wellness therapy where specific audio patterns are designed to create a supportive environment for your overall wellbeing. These frequencies are intended as complementary wellness tools to support your mental, emotional, and spiritual state.
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
              <h4 className="font-bold text-gray-900 mb-2">Spiritual Wellbeing</h4>
              <p className="text-gray-600">Sound frequencies designed to support your spiritual connection and inner peace, helping you maintain alignment with your values and intentions.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-green-600 font-bold text-xl">✓</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Emotional Resilience</h4>
              <p className="text-gray-600">Support for maintaining emotional balance and resilience during challenging times, helping you stay grounded and centered.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-green-600 font-bold text-xl">✓</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Mental Clarity</h4>
              <p className="text-gray-600">Frequencies designed to promote mental clarity, focused intention, and sustained wellbeing in your daily life.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-green-600 font-bold text-xl">✓</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Overall Wellbeing</h4>
              <p className="text-gray-600">Users report enhanced sense of security, peace, and wellbeing when incorporating protective sound frequencies into their wellness routine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="my-12 bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-400">
        <p className="text-gray-800">
          <strong>Important:</strong> This product is intended for wellness and spiritual support purposes. Binaural beat frequencies are complementary tools and do not replace professional medical, psychological, or financial advice. Consult appropriate healthcare professionals for any health, mental health, or financial concerns.
        </p>
      </section>

      {/* Testimonial */}
      <section className="my-12">
        <div className="bg-gray-100 rounded-2xl p-8 border-l-4 border-blue-600">
          <p className="text-gray-800 italic text-lg mb-4">
            &ldquo;Since using the protective frequencies, I feel more secure and at peace in my daily life. It's become an important part of my wellness practice.&rdquo;
          </p>
          <p className="text-gray-600 font-semibold">- James M.</p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="my-12 bg-green-50 rounded-2xl p-8 border-2 border-green-500">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">✓ 100% Guarantee - 15 Days</h3>
        <p className="text-center text-gray-700">If you're not satisfied, we'll refund your full investment.</p>
      </section>

      {/* Disclaimer & Hotmart */}
      <section className="space-y-8">
        <p className="text-sm text-gray-500 text-center max-w-2xl mx-auto">
          Educational content. This product is for wellness purposes. Consult healthcare professionals for medical or mental health concerns.
        </p>
        <HotmartUpsell black={false} />
      </section>
      </div>
    </>
  );
}

