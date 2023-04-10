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
import { useState } from 'react';

const labelClasses = classNames(
  `block text-[12px] leading-[16.39px] tracking-[-0.21px] text-black font-bold`
);

const inputClasses = classNames(
  `block border-[#CFCFCF] border w-full py-[18px] pl-[24px] rounded-lg`
);

const CheckOutForm = () => {
  const router = useRouter();

  const [eMoney, setEmoney] = useState(true);

  const { cart } = useSelector((store: RootState) => store.home);

  const total = cart.reduce(
    (acc: number, item: { price: number; quantity: number }) => {
      const itemTotal = item.price * item.quantity;
      return acc + itemTotal;
    },
    0
  );

  const vat = Math.round(total * 0.1);
  const shippingFee = 50;

  return (
    <div className='bg-[#F2F2F2] pb-[141px]'>
      <div className='bg-black '>
        <Container>
          <div className='pb-[37px] pt-8'>
            <Navigation shoppingCart={true} />
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

        <div className='flex gap-[30px] '>
          <div className='bg-white rounded-lg w-[730px] py-[54px] px-12'>
            <div className='mb-[53px]'>
              <div className='mb-[41px]'>
                <Typography as='h3' weight='font-bold' transform='uppercase'>
                  Checkout
                </Typography>
              </div>

              <h2 className='text-sm mb-4 text-brand-amber uppercase font-medium'>
                Billing Details
              </h2>
              <form className='grid grid-cols-12 gap-x-4 gap-y-6'>
                <div className='col-span-6'>
                  <label htmlFor='name' className={labelClasses}>
                    Name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='first-name'
                      name='first-name'
                      autoComplete='given-name'
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className='col-span-6'>
                  <label htmlFor='email-address' className={labelClasses}>
                    Email address
                  </label>
                  <div className='mt-1'>
                    <input
                      type='email'
                      id='email-address'
                      name='email-address'
                      autoComplete='email'
                      className={inputClasses}
                      required
                    />
                  </div>
                </div>

                <div className='col-span-6'>
                  <label htmlFor='company' className={labelClasses}>
                    Phone number
                  </label>
                  <div className='mt-1'>
                    <input
                      type='number'
                      name='company'
                      id='company'
                      className={inputClasses}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className='mb-[61px]'>
              <h2 className='text-sm mb-4 text-brand-amber uppercase font-medium'>
                Shipping info
              </h2>
              <form className='grid grid-cols-12 gap-x-4 gap-y-6'>
                <div className='col-span-full'>
                  <label htmlFor='name' className={labelClasses}>
                    Address
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='first-name'
                      name='first-name'
                      autoComplete='given-name'
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className='col-span-6'>
                  <label htmlFor='last-name' className={labelClasses}>
                    ZIP Code
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='last-name'
                      name='last-name'
                      autoComplete='family-name'
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className='col-span-6'>
                  <label htmlFor='company' className={labelClasses}>
                    City
                  </label>
                  <div className='mt-1'>
                    <input
                      type='number'
                      name='company'
                      id='company'
                      className={inputClasses}
                    />
                  </div>
                </div>
                <div className='col-span-6'>
                  <label htmlFor='country' className={labelClasses}>
                    Country
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='company'
                      id='company'
                      className={inputClasses}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div>
              <h2 className='text-sm mb-4 text-brand-amber uppercase font-bold'>
                Payment details
              </h2>
              <h2 className='text-[12px] leading-[16.39px] font-bold'>
                Payment Method
              </h2>
              <form className='grid grid-cols-12 gap-x-4 '>
                <div className='col-start-7 col-end-13 mb-4'>
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
                      className='h-5 w-5 border-gray-300 text-brand-amber focus:ring-brand-amber'
                    />{' '}
                    <label htmlFor='name' className={labelClasses}>
                      e-Money
                    </label>
                  </div>
                </div>

                <div className='col-start-7 col-end-13 mb-8'>
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
                      className='h-5 w-5 border-gray-300 text-brand-amber focus:ring-brand-amber'
                    />{' '}
                    <label htmlFor='name' className={labelClasses}>
                      Cash on Delivery
                    </label>
                  </div>
                </div>

                {eMoney ? (
                  <>
                    <div className='col-span-6'>
                      <label htmlFor='company' className={labelClasses}>
                        e-Money Number
                      </label>
                      <div className='mt-1'>
                        <input
                          type='number'
                          name='company'
                          id='company'
                          className={inputClasses}
                        />
                      </div>
                    </div>
                    <div className='col-span-6'>
                      <label htmlFor='country' className={labelClasses}>
                        e-Money PIN
                      </label>
                      <div className='mt-1'>
                        <input
                          type='text'
                          name='company'
                          id='company'
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
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so <br /> that your
                      order will not be cancelled.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
          <div className='bg-white h-full w-[350px] p-[32px] rounded-lg'>
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
                    $ {addCommas(vat + shippingFee + total)}
                  </Typography>
                </span>
              </div>
              <div className='text-white'>
                <Button
                  bg='bg-brand-amber'
                  hover='hover:bg-brand-pastelYellow'
                  block={true}
                  link='/checkout'
                >
                  continue & pay
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckOutForm;
