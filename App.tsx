
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Suggestions from './components/Suggestions';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <Suggestions />
        
        <InfoSection 
          title="Log in to see your account details"
          description="View past trips, tailored suggestions, support resources, and more."
          image="https://tb-static.uber.com/prod/udam-assets/850e6b6d-a29e-4960-bcab-46de99547d24.svg"
          ctaPrimary="Log in to your account"
          ctaSecondary="Create an account"
          reverse
        />

        <InfoSection 
          title="Drive when you want, make what you need"
          description="Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber."
          image="https://tb-static.uber.com/prod/udam-assets/964dd3d1-94e7-481e-b28c-08d59353b9e0.png"
          ctaPrimary="Get started"
          ctaSecondary="Already have an account? Sign in"
        />

        <InfoSection 
          title="The Uber you know, reimagined for business"
          description="Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size."
          image="https://tb-static.uber.com/prod/udam-assets/76baf1ea-385a-408c-846b-59211086196c.png"
          ctaPrimary="Get started"
          ctaSecondary="Check out our solutions"
          reverse
        />

        {/* App Download Section */}
        <section className="bg-zinc-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <h2 className="text-3xl font-bold mb-10 text-center lg:text-left">It’s easier in the apps</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl border border-zinc-200 flex items-center gap-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-20 h-20 bg-zinc-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                   <img src="https://tb-static.uber.com/prod/udam-assets/e24f1914-1e23-4896-ad77-22e88c37c2f9.svg" alt="Uber App" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Download the Uber app</h3>
                  <p className="text-zinc-600 text-sm">Scan to download</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl border border-zinc-200 flex items-center gap-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-20 h-20 bg-zinc-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                   <img src="https://tb-static.uber.com/prod/udam-assets/480eb066-2389-442c-b0f7-1cdcaa68a649.svg" alt="Driver App" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Download the Driver app</h3>
                  <p className="text-zinc-600 text-sm">Scan to download</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Enhanced persona feature: AI Travel Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;
