import { Link } from 'react-router-dom';

function Download() {
  return (
    <section className="download bg-bg-secondary py-32">
      <div className="container mx-auto px-8 text-center lg:text-left">
        <div className='max-w-[40rem]'>
          <h1 className="section-title font-mono font-bold">
            Download our app to get most out of it
          </h1>
          <p className="mt-10">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="flex flex-col lg:flex-row lg:gap-4">
            <Link to={'/'} className="mt-10">
              <img src="images/download/appstore.svg" className="mx-auto" />{' '}
            </Link>
            <Link to={'/'} className="mt-10">
              <img src="images/download/googleapp.svg" className="mx-auto" />{' '}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Download;
