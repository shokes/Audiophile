import Navigation from '../Navigation';
import Container from '../Container';
import { useRouter } from 'next/router';
import Typography from '../Typography';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import Button from '../Button';
import { addCommas } from '@/utils/general';
import Cash from '../../public/icon-cash-on-delivery.svg';
import { SyntheticEvent, useEffect, useState } from 'react';
import Success from '../Success';

const labelClasses = classNames(
  `block text-[12px] leading-[16.39px] tracking-[-0.21px] text-black font-bold`
);

const inputClasses = classNames(
  `block border-[#CFCFCF] border w-full py-[18px] pl-[24px] rounded-lg focus:border-brand-amber focus:ring-brand-amber`
);

const CheckOutForm = () => {
  const router = useRouter();

  const [eMoney, setEmoney] = useState(true);

  const [success, setSuccess] = useState(false);

  const { cart } = useSelector((store: RootState) => store.home);

  const total = cart.reduce(
    (acc: number, item: { price: number; quantity: number }) => {
      const itemTotal = item.price * item.quantity;
      return acc + itemTotal;
    },
    0
  );

  useEffect(() => {
    cart.length === 0 ? router.push('/') : router.push('/checkout');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const vat = Math.round(total * 0.2);
  const shippingFee = 50;
  const grandTotal = vat + shippingFee + total;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className='bg-[#F2F2F2] pb-[141px]'>
      <div className='bg-black '>
        <Container>
          <div className='pb-[37px] pt-8'>
            <Navigation />
          </div>
        </Container>
      </div>
      <Container>
        <div
          className='opacity-50 mb-[56px] mt-[79px] hover:text-brand-amber hover:opacity-100 cursor-pointer'
          onClick={() => router.back()}
        >
          <span className='text-xs capitalize'>go back</span>
        </div>
        <form
          action='
'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col min-[890px]:flex-row gap-[30px] '>
            <div className='bg-white rounded-lg min-[890px]:w-[65%] px-[24px] md:px-[28px] md:py-[30px] lg:py-[54px] py-[24px] lg:px-12'>
              <div className='mb-[53px]'>
                <div className='mb-[41px]'>
                  <Typography as='h3' weight='font-bold' transform='uppercase'>
                    Checkout
                  </Typography>
                </div>

                <h2 className='text-sm mb-4 text-brand-amber uppercase font-medium'>
                  Billing Details
                </h2>
                <div className='grid grid-cols-12 gap-x-4 gap-y-6'>
                  <div className='col-span-full md:col-span-6'>
                    <label htmlFor='name' className={labelClasses}>
                      Name
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className={inputClasses}
                        required
                      />
                    </div>
                  </div>

                  <div className='col-span-full md:col-span-6'>
                    <label htmlFor='email-address' className={labelClasses}>
                      Email address
                    </label>
                    <div className='mt-1'>
                      <input
                        type='email'
                        id='email-address'
                        name='email-address'
                        className={inputClasses}
                        required
                      />
                    </div>
                  </div>

                  <div className='col-span-full md:col-span-6'>
                    <label htmlFor='company' className={labelClasses}>
                      Phone number
                    </label>
                    <div className='mt-1'>
                      <input type='number' className={inputClasses} required />
                    </div>
                  </div>
                </div>
              </div>
              <div className='mb-[61px]'>
                <h2 className='text-sm mb-4 text-brand-amber uppercase font-medium'>
                  Shipping info
                </h2>
                <div className='grid grid-cols-12 gap-x-4 gap-y-6'>
                  <div className='col-span-full'>
                    <label htmlFor='name' className={labelClasses}>
                      Address
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        id='address'
                        name='address'
                        className={inputClasses}
                        required
                      />
                    </div>
                  </div>

                  <div className='col-span-full md:col-span-6'>
                    <label htmlFor='last-name' className={labelClasses}>
                      ZIP Code
                    </label>
                    <div className='mt-1'>
                      <input type='number' required className={inputClasses} />
                    </div>
                  </div>

                  <div className='col-span-full md:col-span-6'>
                    <label htmlFor='company' className={labelClasses}>
                      City
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='city'
                        required
                        className={inputClasses}
                      />
                    </div>
                  </div>
                  <div className='col-span-full md:col-span-6'>
                    <label htmlFor='country' className={labelClasses}>
                      Country
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='country'
                        required
                        className={inputClasses}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className='text-sm mb-4 text-brand-amber uppercase font-bold'>
                  Payment details
                </h2>
                <h2 className='text-[12px] leading-[16.39px] font-bold mb-[17px]'>
                  Payment Method
                </h2>
                <div className='grid grid-cols-12 gap-x-4 '>
                  <div className='col-span-full md:col-start-7 md:col-end-13 mb-4'>
                    <div
                      className={`flex gap-4 items-center hover:border-brand-amber border w-full py-[18px] pl-[24px] rounded-lg ${
                        eMoney ? 'border-brand-amber' : 'border-[#CFCFCF]'
                      }`}
                    >
                      <input
                        name='payment-type'
                        type='radio'
                        defaultChecked
                        onChange={() => setEmoney(true)}
                        className='h-5 w-5 cursor-pointer border-gray-300 text-brand-amber focus:ring-brand-amber'
                      />{' '}
                      <label htmlFor='name' className={labelClasses}>
                        e-Money
                      </label>
                    </div>
                  </div>

                  <div className='col-span-full md:col-start-7 md:col-end-13 mb-8'>
                    <div
                      className={`flex gap-4 items-center border hover:border-brand-amber w-full py-[18px] pl-[24px] rounded-lg ${
                        !eMoney ? 'border-brand-amber' : 'border-[#CFCFCF]'
                      }`}
                    >
                      <input
                        id=''
                        name='payment-type'
                        type='radio'
                        onChange={() => setEmoney(false)}
                        className='h-5 w-5 border-gray-300 cursor-pointer text-brand-amber focus:ring-brand-amber'
                      />{' '}
                      <label htmlFor='name' className={labelClasses}>
                        Cash on Delivery
                      </label>
                    </div>
                  </div>

                  {eMoney ? (
                    <>
                      <div className='col-span-full md:col-span-6  mb-[24px] md:mb-0'>
                        <label htmlFor='company' className={labelClasses}>
                          e-Money Number
                        </label>
                        <div className='mt-1'>
                          <input
                            type='number'
                            required
                            className={inputClasses}
                          />
                        </div>
                      </div>
                      <div className='col-span-full md:col-span-6'>
                        <label htmlFor='country' className={labelClasses}>
                          e-Money PIN
                        </label>
                        <div className='mt-1'>
                          <input
                            type='password'
                            required
                            className={inputClasses}
                          />
                        </div>
                      </div>{' '}
                    </>
                  ) : (
                    <div className='col-span-full flex items-center gap-8 '>
                      <Image
                        src={Cash}
                        alt='cash on delivery icon'
                        width={48}
                        height={48}
                      />
                      <p className='text-xs opacity-50 font-medium'>
                        The ‘Cash on Delivery’ option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so <br /> that
                        your order will not be cancelled.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='bg-white h-full min-[890px]:w-[35%] p-[32px] rounded-lg'>
              <h2 className='text-lg font-bold uppercase text-gray-900 mb-[31px]'>
                Summary
              </h2>
              {cart.map(
                (item: {
                  name: string;
                  image: string;
                  short: string;
                  price: number;
                  quantity: number;
                }) => {
                  return (
                    <div key={item.short} className='flex mb-6 items-center'>
                      <Image
                        src={item.image}
                        width={64}
                        height={64}
                        alt='headphones'
                        className='rounded-lg mr-4'
                      />

                      <div className='flex justify-between w-full items-center'>
                        <div className='flex flex-col'>
                          <div>
                            <span className='text-xs font-bold'>
                              {' '}
                              {item.short}
                            </span>
                          </div>
                          <div className='opacity-50'>
                            <span className='text-base2 font-bold'>
                              ${addCommas(item.price as number)}
                            </span>
                          </div>
                        </div>
                        <span className='text-sm text-black opacity-50 font-bold'>
                          x{item.quantity}
                        </span>
                      </div>
                    </div>
                  );
                }
              )}
              <div>
                <div className='flex justify-between mb-2'>
                  <div className='opacity-50'>
                    <span className='text-base2 font-medium uppercase'>
                      total
                    </span>
                  </div>
                  <span>
                    <Typography as='h6' weight='font-bold'>
                      $ {addCommas(total)}
                    </Typography>
                  </span>
                </div>
                <div className='flex justify-between mb-2'>
                  <div className='opacity-50'>
                    <span className='text-base2 font-medium uppercase'>
                      shipping
                    </span>
                  </div>
                  <span>
                    <Typography as='h6' weight='font-bold'>
                      $ {shippingFee}
                    </Typography>
                  </span>
                </div>
                <div className='flex justify-between mb-6'>
                  <div className='opacity-50'>
                    <span className='text-base2 font-medium uppercase'>
                      vat (included)
                    </span>
                  </div>
                  <span>
                    <Typography as='h6' weight='font-bold'>
                      $ {addCommas(vat)}
                    </Typography>
                  </span>
                </div>
                <div className='flex justify-between mb-6'>
                  <div className='opacity-50'>
                    <span className='text-base2 font-medium uppercase'>
                      grand total
                    </span>
                  </div>
                  <span className='text-brand-amber'>
                    <Typography as='h6' weight='font-bold'>
                      $ {addCommas(grandTotal)}
                    </Typography>
                  </span>
                </div>

                <Button
                  bg='bg-brand-amber'
                  hover='hover:bg-brand-pastelYellow'
                  width={true}
                  type='submit'
                >
                  continue & pay
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Container>
      {success && <Success grandTotal={grandTotal} cart={cart} />}
    </div>
  );
};

export default CheckOutForm;
