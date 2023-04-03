import { useState } from 'react';
import Navigation from '../Navigation';
import Container from '../Container';
import { useRouter } from 'next/router';
import Typography from '../Typography';
import classNames from 'classnames';

const products = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
];
const deliveryMethods = [
  {
    id: 1,
    title: 'Standard',
    turnaround: '4–10 business days',
    price: '$5.00',
  },
  { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
];
const paymentMethods = [
  { id: 'credit-card', title: 'Credit card' },
  { id: 'paypal', title: 'PayPal' },
  { id: 'etransfer', title: 'eTransfer' },
];

// function classNames(...classes: any[]) {
//   return classes.filter(Boolean).join(' ');
// }

const labelClasses = classNames(
  `block text-[12px] leading-[16.39px] tracking-[-0.21px] text-black font-bold`
);

const inputClasses = classNames(`block w-full py-[18px] pl-[24px] rounded-lg`);

export default function CheckOutForm() {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0]
  );

  const router = useRouter();

  return (
    <div>
      <div className='bg-black '>
        <Container>
          <div className='pb-[37px] pt-8'>
            <Navigation shoppingCart={true} />
          </div>
        </Container>
      </div>
      <Container>
        <button
          className='opacity-50 mb-[56px] mt-[79px]'
          onClick={() => router.back()}
        >
          <span className='text-xs capitalize'>go back</span>
        </button>
        <div className='bg-red-300 rounded-lg mx-auto max-w-2xl py-[54px] px-12 lg:max-w-7xl'>
          <Typography as='h3' weight='font-bold' transform='uppercase'>
            Checkout
          </Typography>

          <form className='lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16'>
            <div className='mt-10'>
              <h2 className='text-sm text-brand-amber uppercase font-medium'>
                Billing Details
              </h2>

              <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
                <div>
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

                <div>
                  <label htmlFor='last-name' className={labelClasses}>
                    Email address
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

                <div className='col-span-1'>
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
              </div>

              <div className='mt-10 border-t border-gray-200 pt-10'>
                <h2 className='text-lg font-medium text-gray-900'>
                  Shipping information
                </h2>

                <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
                  <div>
                    <label
                      htmlFor='first-name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      First name
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        id='first-name'
                        name='first-name'
                        autoComplete='given-name'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='last-name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Last name
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        id='last-name'
                        name='last-name'
                        autoComplete='family-name'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='company'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Company
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='company'
                        id='company'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='address'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Address
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='address'
                        id='address'
                        autoComplete='street-address'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='apartment'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Apartment, suite, etc.
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='apartment'
                        id='apartment'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='city'
                      className='block text-sm font-medium text-gray-700'
                    >
                      City
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='city'
                        id='city'
                        autoComplete='address-level2'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='country'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Country
                    </label>
                    <div className='mt-1'>
                      <select
                        id='country'
                        name='country'
                        autoComplete='country-name'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='region'
                      className='block text-sm font-medium text-gray-700'
                    >
                      State / Province
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='region'
                        id='region'
                        autoComplete='address-level1'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='postal-code'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Postal code
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='postal-code'
                        id='postal-code'
                        autoComplete='postal-code'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Phone
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='phone'
                        id='phone'
                        autoComplete='tel'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className='mt-10 border-t border-gray-200 pt-10'>
                <h2 className='text-lg font-medium text-gray-900'>Payment</h2>

                <fieldset className='mt-4'>
                  <legend className='sr-only'>Payment type</legend>
                  <div className='space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0'>
                    {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                      <div key={paymentMethod.id} className='flex items-center'>
                        {paymentMethodIdx === 0 ? (
                          <input
                            id={paymentMethod.id}
                            name='payment-type'
                            type='radio'
                            defaultChecked
                            className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          />
                        ) : (
                          <input
                            id={paymentMethod.id}
                            name='payment-type'
                            type='radio'
                            className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          />
                        )}

                        <label
                          htmlFor={paymentMethod.id}
                          className='ml-3 block text-sm font-medium text-gray-700'
                        >
                          {paymentMethod.title}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>

                <div className='mt-6 grid grid-cols-4 gap-x-4 gap-y-6'>
                  <div className='col-span-4'>
                    <label
                      htmlFor='card-number'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Card number
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        id='card-number'
                        name='card-number'
                        autoComplete='cc-number'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='col-span-4'>
                    <label
                      htmlFor='name-on-card'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Name on card
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        id='name-on-card'
                        name='name-on-card'
                        autoComplete='cc-name'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='col-span-3'>
                    <label
                      htmlFor='expiration-date'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Expiration date (MM/YY)
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='expiration-date'
                        id='expiration-date'
                        autoComplete='cc-exp'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='cvc'
                      className='block text-sm font-medium text-gray-700'
                    >
                      CVC
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='cvc'
                        id='cvc'
                        autoComplete='csc'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order summary */}
            <div className='mt-10 lg:mt-0'>
              <h2 className='text-lg font-medium text-gray-900'>
                Order summary
              </h2>

              <div className='mt-4 rounded-lg border border-gray-200 bg-white shadow-sm'>
                <h3 className='sr-only'>Items in your cart</h3>
                <ul role='list' className='divide-y divide-gray-200'>
                  {products.map((product) => (
                    <li key={product.id} className='flex px-4 py-6 sm:px-6'>
                      {/* <div className='flex-shrink-0'>
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className='w-20 rounded-md'
                      />
                    </div> */}

                      <div className='ml-6 flex flex-1 flex-col'>
                        <div className='flex'>
                          <div className='min-w-0 flex-1'>
                            <h4 className='text-sm'>
                              <a
                                href={product.href}
                                className='font-medium text-gray-700 hover:text-gray-800'
                              >
                                {product.title}
                              </a>
                            </h4>
                            <p className='mt-1 text-sm text-gray-500'>
                              {product.color}
                            </p>
                            <p className='mt-1 text-sm text-gray-500'>
                              {product.size}
                            </p>
                          </div>

                          <div className='ml-4 flow-root flex-shrink-0'>
                            <button
                              type='button'
                              className='-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500'
                            >
                              <span className='sr-only'>Remove</span>
                              {/* <TrashIcon className='h-5 w-5' aria-hidden='true' /> */}
                            </button>
                          </div>
                        </div>

                        <div className='flex flex-1 items-end justify-between pt-2'>
                          <p className='mt-1 text-sm font-medium text-gray-900'>
                            {product.price}
                          </p>

                          <div className='ml-4'>
                            <label htmlFor='quantity' className='sr-only'>
                              Quantity
                            </label>
                            <select
                              id='quantity'
                              name='quantity'
                              className='rounded-md border border-gray-300 text-left text-base font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={7}>7</option>
                              <option value={8}>8</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <dl className='space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6'>
                  <div className='flex items-center justify-between'>
                    <dt className='text-sm'>Subtotal</dt>
                    <dd className='text-sm font-medium text-gray-900'>
                      $64.00
                    </dd>
                  </div>
                  <div className='flex items-center justify-between'>
                    <dt className='text-sm'>Shipping</dt>
                    <dd className='text-sm font-medium text-gray-900'>$5.00</dd>
                  </div>
                  <div className='flex items-center justify-between'>
                    <dt className='text-sm'>Taxes</dt>
                    <dd className='text-sm font-medium text-gray-900'>$5.52</dd>
                  </div>
                  <div className='flex items-center justify-between border-t border-gray-200 pt-6'>
                    <dt className='text-base font-medium'>Total</dt>
                    <dd className='text-base font-medium text-gray-900'>
                      $75.52
                    </dd>
                  </div>
                </dl>

                <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                  <button
                    type='submit'
                    className='w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50'
                  >
                    Confirm order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
