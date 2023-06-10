import toast from 'react-hot-toast';

export const addedAlert = (product: string) => {
  toast.custom((toast) => (
    <div
      className={`mb-2 flex items-center gap-3 bg-[#2b8a3e] px-8 font-semibold py-3 text-xs uppercase text-[#fff] ${
        toast.visible ? 'animate-enter' : 'animate-leave'
      }`}
    >
      <span>{product} added to cart</span>
    </div>
  ));
};
