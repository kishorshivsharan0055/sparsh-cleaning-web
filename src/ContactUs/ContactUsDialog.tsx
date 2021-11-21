import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { Fragment, useRef } from 'react'
import { EMAIL_ID, INSTAGRAM_HANDLE, PHONE_NO, SHOP_LOCATON } from '../utils/contants'

type ContactUsDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ContactUsDialog: React.FC<ContactUsDialogProps> = ({open, setOpen}) => {
  const cancelButtonRef = useRef(null)

    return (
      <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full">
                <div className="sm:flex sm:items-start w-full">
                  {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <img src="phone.png" />
                  </div> */}
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900 text-center">
                      Contact Us
                    </Dialog.Title>
                    <div className="mt-2 w-80 flex flex-row justify-evenly">
                      
                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-14 w-14  rounded-2xl bg-red-100 sm:mx-0 sm:h-10 sm:w-10 ">
                            <Link href={INSTAGRAM_HANDLE}>
                          <a target="_blank">
                              <img src="instagram2.png" />
                              </a>
                      </Link>
                            </div>                          
                      
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-14 w-14 p-1 rounded-2xl bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <a href={`mailto:${EMAIL_ID}`}>
                          <img src="mail.png" />
                          </a>      
                      </div>   

                       <div className="mx-auto flex-shrink-0 flex items-center justify-center h-14 w-14 p-1 rounded-2xl bg-red-100 sm:mx-0 sm:h-10 sm:w-10">

                        <Link href={SHOP_LOCATON}>
                          <a target="_blank">
                          <img src="marker.png" />
                          </a>  
                          </Link>    
                      </div>                              
                          
                      {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <img src="phone.png" />
                      </div>                      */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse items-center self-center justify-center">                  
                <a href={`tel:${PHONE_NO}`}>
                  <button                  
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-500 text-base font-medium text-white hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Call Us
                  </button>
                </a>
                {/* <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  
                >
                  Cancel
                </button> */}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
    );
}