import Button from '@/shared/Button';
import TextContainer from '@/shared/TextContainer';

function Choose() {
  return (
    <section className="choose mt-[10rem]">
      <div className="container mx-auto px-4">
        <img src="images/chooseUs/main.png" className='mx-auto' />
        <div className="choose-content-wrapper mt-8 flex flex-col gap-16 items-center  xl:flex-row ">
          <div className="choose-content max-w-[34rem] text-center xl:text-left">
            <h2 className="section-sub-title font-medium">Why Choose Us</h2>
            <h1 className="section-title mb-6 mt-3 font-bold">
              Best valued deals you will ever find
            </h1>
            <p className="mb-5">
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>
            <Button styleType="primary">
              <div className="flex gap-2">
                Find Details
                <img src="images/learn-more.svg" />
              </div>
            </Button>
          </div>
          <div className="choose-boxes gap-8 flex flex-col items-center w-full">
            <div className="choose-box">
              <TextContainer
                imgSrc="images/chooseUs/icon1.png"
                isChooseBox={true}
                alt="choose Icon1"
                h3="Cross Country Drive"
                p="Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures."
              />
            </div>
            <div className="choose-box">
              <TextContainer
                imgSrc="images/chooseUs/icon2.png"
                isChooseBox={true}
                alt="choose Icon2"
                h3="All Inclusive Pricing"
                p="Get everything you need in one convenient, transparent price with our all-inclusive pricing policy."
              />
            </div>
            <div className="choose-box">
              <TextContainer
                imgSrc="images/chooseUs/icon3.png"
                isChooseBox={true}
                alt="choose Icon3"
                h3="No Hidden Charges"
                p="Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Choose;
