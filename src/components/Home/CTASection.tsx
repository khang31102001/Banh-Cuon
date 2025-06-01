import { Button } from "@/components/ui/button"
import { useLanguage } from "@/Contexts/LanguageContext"
import { NavLink } from 'react-router-dom'

const CTASection = () => {
  const {t} = useLanguage();
  return (
    <section className="py-20 bg-[hsl(35,40%,95%)]">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-anton text-banhcuon-900 font-bold mb-4 tracking-wide drop-shadow-sm fade-in-up">
              {t('home.ctaTitle')}
          </h2>
          <p className="mb-8 text-lg text-gray-700 leading-relaxed font-anton fade-in-up">
              {t('home.ctaSubTitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in-down">
            <Button asChild className="bg-[#F4A259] hover:bg-[#E07B39] text-white text-sm px-6 py-3 rounded-lg font-anton font-medium shadow-md transition-all duration-300">
              <NavLink to="/contact">{t('common.bookTable')}</NavLink>
            </Button>
            <Button asChild className="bg-white border border-[#F4A259] hover:bg-[#F4A259] hover:text-white text-[#F4A259] text-sm px-6 py-3 rounded-lg font-medium shadow-sm transition-all duration-300">
              <NavLink to="/menu">{t('common.viewMenu')} </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
