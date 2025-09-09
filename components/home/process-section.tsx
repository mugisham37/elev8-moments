import { ChevronRight } from 'lucide-react'

export default function ProcessSection () {
  return (
    <section className='py-20 md:py-28 relative overflow-hidden'>
      <div className='absolute inset-0 bg-grid-white/[0.03] bg-[size:40px_40px] dark:opacity-20'></div>
      <div className='container relative z-10'>
        <div className='text-center mb-16'>
          <div className='inline-block mb-4 px-4 py-1 bg-burgundy/10 dark:bg-burgundy/20 rounded-full text-burgundy dark:text-cream text-sm font-medium'>
            Our Process
          </div>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-glow'>
            How We Work
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Our streamlined process ensures efficient delivery of high-quality
            services tailored to your needs.
          </p>
        </div>

        <div className='grid md:grid-cols-4 gap-8'>
          <div className='relative group'>
            <div className='absolute -inset-1 bg-gradient-to-r from-burgundy to-burgundy/60 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
            <div className='relative bg-white dark:bg-gray-800 rounded-lg p-6 h-full flex flex-col items-center text-center'>
              <div className='w-16 h-16 bg-burgundy/10 dark:bg-burgundy/20 rounded-full flex items-center justify-center text-burgundy dark:text-cream text-2xl font-bold mb-4'>
                1
              </div>
              <h3 className='text-xl font-bold mb-3'>Consultation</h3>
              <p className='text-muted-foreground'>
                We begin with a detailed consultation to understand your vision,
                objectives, and requirements.
              </p>
              <div className='mt-auto pt-4'>
                <ChevronRight className='h-6 w-6 text-burgundy dark:text-cream mx-auto opacity-0 group-hover:opacity-100 transition-opacity' />
              </div>
            </div>
          </div>

          <div className='relative group'>
            <div className='absolute -inset-1 bg-gradient-to-r from-burgundy to-burgundy/60 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
            <div className='relative bg-white dark:bg-gray-800 rounded-lg p-6 h-full flex flex-col items-center text-center'>
              <div className='w-16 h-16 bg-burgundy/10 dark:bg-burgundy/20 rounded-full flex items-center justify-center text-burgundy dark:text-cream text-2xl font-bold mb-4'>
                2
              </div>
              <h3 className='text-xl font-bold mb-3'>Strategy</h3>
              <p className='text-muted-foreground'>
                Our team develops a comprehensive strategy tailored to your
                specific needs and goals.
              </p>
              <div className='mt-auto pt-4'>
                <ChevronRight className='h-6 w-6 text-burgundy dark:text-cream mx-auto opacity-0 group-hover:opacity-100 transition-opacity' />
              </div>
            </div>
          </div>

          <div className='relative group'>
            <div className='absolute -inset-1 bg-gradient-to-r from-burgundy to-burgundy/60 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
            <div className='relative bg-white dark:bg-gray-800 rounded-lg p-6 h-full flex flex-col items-center text-center'>
              <div className='w-16 h-16 bg-burgundy/10 dark:bg-burgundy/20 rounded-full flex items-center justify-center text-burgundy dark:text-cream text-2xl font-bold mb-4'>
                3
              </div>
              <h3 className='text-xl font-bold mb-3'>Execution</h3>
              <p className='text-muted-foreground'>
                We implement the strategy with precision, ensuring every detail
                is perfect.
              </p>
              <div className='mt-auto pt-4'>
                <ChevronRight className='h-6 w-6 text-burgundy dark:text-cream mx-auto opacity-0 group-hover:opacity-100 transition-opacity' />
              </div>
            </div>
          </div>

          <div className='relative group'>
            <div className='absolute -inset-1 bg-gradient-to-r from-burgundy to-burgundy/60 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
            <div className='relative bg-white dark:bg-gray-800 rounded-lg p-6 h-full flex flex-col items-center text-center'>
              <div className='w-16 h-16 bg-burgundy/10 dark:bg-burgundy/20 rounded-full flex items-center justify-center text-burgundy dark:text-cream text-2xl font-bold mb-4'>
                4
              </div>
              <h3 className='text-xl font-bold mb-3'>Evaluation</h3>
              <p className='text-muted-foreground'>
                We measure results, gather feedback, and make adjustments to
                ensure optimal outcomes.
              </p>
              <div className='mt-auto pt-4'>
                <ChevronRight className='h-6 w-6 text-burgundy dark:text-cream mx-auto opacity-0 group-hover:opacity-100 transition-opacity' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
