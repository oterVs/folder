import React from "react";

export default function Modal({showModal,setShowModal,children, title}) {

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative h-5/6 w-auto my-6 mx-auto max-w-3xl overflow-y-scroll ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                   {title}
                  </h3>
                  <button
                    className=""
                    onClick={() => setShowModal(false)}
                  >
                    <p className="text-4xl">
                      ×
                    </p>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {children}
                </div>
                {/*footer*/}
               
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}