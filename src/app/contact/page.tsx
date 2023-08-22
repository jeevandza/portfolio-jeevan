import {ContactForm} from '@/components'


export default function Contact() {
  return (
    <div className="animate-slide-in-right">
      <h1 className="header-large sm:mt-12 lg:mt-0 lg:mb-6">Get in touch</h1>
      <h1 className="subHeader">
        I am interested in new opportunities incredibly ambitious for large
        projects also interested in collaborating on open source projects.
      </h1>
      <div className='lg:mt-16'>
        <ContactForm/>
      </div>
    </div>
  );
}
