import { useState } from "react";
import { ContactUsDialog } from "../ContactUs/ContactUsDialog";

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button                  
        type="button"
        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-500 text-base font-medium text-white hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
        onClick={() => setOpen(true)}
        >
          {props.children}
      </button>

      <ContactUsDialog open={open} setOpen={setOpen} />
      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-500;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
