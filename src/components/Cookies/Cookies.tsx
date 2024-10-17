import { X } from "lucide-react";

const CookieConsent = () => {
  return (
    <div className=" bg-black bg-opacity-50 flex justify-end relative left-96 top-12">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[24px] font-[600]  text-[#402E32]">
            Cookies Consent
          </h2>
          <button className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <div className="flex justify-between mb-4">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="35"
              viewBox="0 0 14 12"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0601 1.9235C11.0601 2.98583 10.1989 3.84701 9.13659 3.84701C8.07427 3.84701 7.21309 2.98583 7.21309 1.9235C7.21309 0.861182 8.07427 0 9.13659 0C10.1989 0 11.0601 0.861182 11.0601 1.9235ZM13.9453 9.13664C13.9453 10.199 13.0842 11.0601 12.0218 11.0601C10.9595 11.0601 10.0983 10.199 10.0983 9.13664C10.0983 8.07432 10.9595 7.21313 12.0218 7.21313C13.0842 7.21313 13.9453 8.07432 13.9453 9.13664ZM1.9235 5.28963C2.98583 5.28963 3.84701 4.42844 3.84701 3.36612C3.84701 2.3038 2.98583 1.44262 1.9235 1.44262C0.861183 1.44262 0 2.3038 0 3.36612C0 4.42844 0.861183 5.28963 1.9235 5.28963Z"
                fill="#C2C2C2"
              />
            </svg>
            <p className="text-xs">No Cookies</p>
          </div>
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="35"
              viewBox="0 0 37 35"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.7796 3.12569C18.7629 2.30303 18.5212 1.53929 18.6157 0C13.7357 0.183678 10.3423 0.907839 7.45374 3.09955C2.1042 7.15851 -0.559817 14.5836 1.01034 21.1126C1.25191 22.1171 1.60362 23.0933 2.07955 24.0747C4.12023 28.2824 7.81955 31.6585 12.1941 33.3115C13.2129 33.6965 14.2314 33.9644 15.2861 34.1181C22.4689 35.1646 30.3639 31.2315 33.1725 24.5383C34.1313 22.2533 34.6358 19.5791 34.9655 16.1093C32.599 16.1377 31.8511 15.2162 30.878 12.9837C26.9097 13.0182 25.8508 11.8654 24.8671 8.89621C21.2244 8.08602 20.2907 6.85694 20.7796 3.12569ZM29.195 18.7542C29.195 19.5509 28.5491 20.1968 27.7524 20.1968C26.9556 20.1968 26.3097 19.5509 26.3097 18.7542C26.3097 17.9574 26.9556 17.3116 27.7524 17.3116C28.5491 17.3116 29.195 17.9574 29.195 18.7542ZM21.9819 14.4263C22.7786 14.4263 23.4245 13.7804 23.4245 12.9837C23.4245 12.1869 22.7786 11.541 21.9819 11.541C21.1852 11.541 20.5393 12.1869 20.5393 12.9837C20.5393 13.7804 21.1852 14.4263 21.9819 14.4263ZM17.654 15.8689C17.654 16.6656 17.0081 17.3115 16.2113 17.3115C15.4146 17.3115 14.7687 16.6656 14.7687 15.8689C14.7687 15.0722 15.4146 14.4263 16.2113 14.4263C17.0081 14.4263 17.654 15.0722 17.654 15.8689ZM11.8835 8.65577C12.6802 8.65577 13.3261 8.00989 13.3261 7.21315C13.3261 6.4164 12.6802 5.77052 11.8835 5.77052C11.0867 5.77052 10.4409 6.4164 10.4409 7.21315C10.4409 8.00989 11.0867 8.65577 11.8835 8.65577ZM12.3644 19.7159C12.3644 21.575 10.8573 23.0821 8.99823 23.0821C7.13917 23.0821 5.6321 21.575 5.6321 19.7159C5.6321 17.8569 7.13917 16.3498 8.99823 16.3498C10.8573 16.3498 12.3644 17.8569 12.3644 19.7159ZM20.5392 25.9673C21.3359 25.9673 21.9818 25.3214 21.9818 24.5247C21.9818 23.728 21.3359 23.0821 20.5392 23.0821C19.7424 23.0821 19.0966 23.728 19.0966 24.5247C19.0966 25.3214 19.7424 25.9673 20.5392 25.9673ZM16.2113 28.8526C16.2113 29.6493 15.5655 30.2952 14.7687 30.2952C13.972 30.2952 13.3261 29.6493 13.3261 28.8526C13.3261 28.0558 13.972 27.4099 14.7687 27.4099C15.5655 27.4099 16.2113 28.0558 16.2113 28.8526ZM34.9654 12.0219C36.0277 12.0219 36.8889 11.1607 36.8889 10.0984C36.8889 9.03608 36.0277 8.1749 34.9654 8.1749C33.9031 8.1749 33.0419 9.03608 33.0419 10.0984C33.0419 11.1607 33.9031 12.0219 34.9654 12.0219ZM34.0037 2.88527C34.0037 3.94759 33.1425 4.80877 32.0802 4.80877C31.0178 4.80877 30.1567 3.94759 30.1567 2.88527C30.1567 1.82294 31.0178 0.961761 32.0802 0.961761C33.1425 0.961761 34.0037 1.82294 34.0037 2.88527ZM24.8671 6.25139C25.9294 6.25139 26.7906 5.3902 26.7906 4.32788C26.7906 3.26556 25.9294 2.40438 24.8671 2.40438C23.8048 2.40438 22.9436 3.26556 22.9436 4.32788C22.9436 5.3902 23.8048 6.25139 24.8671 6.25139Z"
                fill="#F69625"
              />
            </svg>
            <p className="text-xs">Only Essentials</p>
          </div>
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="35"
              viewBox="0 0 37 35"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.447104 21.1126C0.688676 22.1171 1.04039 23.0933 1.51631 24.0747C3.557 28.2824 7.25632 31.6585 11.6309 33.3115C12.6496 33.6965 13.6682 33.9644 14.7229 34.1181C21.9057 35.1646 29.8006 31.2315 32.6093 24.5383C33.5681 22.2533 34.0726 19.5791 34.4022 16.1093C34.0579 14.1181 33.8283 12.7966 33.6334 11.8621C33.8688 11.9649 34.1288 12.0219 34.4022 12.0219C35.4645 12.0219 36.3257 11.1607 36.3257 10.0984C36.3257 9.03608 35.4645 8.1749 34.4022 8.1749C33.6453 8.1749 32.9905 8.61204 32.6766 9.24762C32.5617 9.07729 32.4317 8.89812 32.2811 8.69056C31.8742 8.12961 31.3168 7.36131 30.5001 6C25.9447 0.989138 24.4912 0.807725 19.5918 0.196253C19.1135 0.136564 18.6024 0.0727772 18.0524 0C13.1725 0.183678 9.7791 0.907839 6.89051 3.09955C1.54097 7.15852 -1.12305 14.5836 0.447104 21.1126ZM28.6318 18.7542C28.6318 19.5509 27.9859 20.1968 27.1891 20.1968C26.3924 20.1968 25.7465 19.5509 25.7465 18.7542C25.7465 17.9574 26.3924 17.3116 27.1891 17.3116C27.9859 17.3116 28.6318 17.9574 28.6318 18.7542ZM21.4187 14.4263C22.2154 14.4263 22.8613 13.7804 22.8613 12.9837C22.8613 12.1869 22.2154 11.541 21.4187 11.541C20.6219 11.541 19.976 12.1869 19.976 12.9837C19.976 13.7804 20.6219 14.4263 21.4187 14.4263ZM17.0907 15.8689C17.0907 16.6656 16.4448 17.3115 15.6481 17.3115C14.8514 17.3115 14.2055 16.6656 14.2055 15.8689C14.2055 15.0722 14.8514 14.4263 15.6481 14.4263C16.4448 14.4263 17.0907 15.0722 17.0907 15.8689ZM11.3202 8.65577C12.117 8.65577 12.7629 8.00989 12.7629 7.21315C12.7629 6.4164 12.117 5.77052 11.3202 5.77052C10.5235 5.77052 9.87762 6.4164 9.87762 7.21315C9.87762 8.00989 10.5235 8.65577 11.3202 8.65577ZM11.8011 19.7159C11.8011 21.575 10.2941 23.0821 8.435 23.0821C6.57593 23.0821 5.06886 21.575 5.06886 19.7159C5.06886 17.8569 6.57593 16.3498 8.435 16.3498C10.2941 16.3498 11.8011 17.8569 11.8011 19.7159ZM19.976 25.9673C20.7727 25.9673 21.4186 25.3214 21.4186 24.5247C21.4186 23.728 20.7727 23.0821 19.976 23.0821C19.1792 23.0821 18.5333 23.728 18.5333 24.5247C18.5333 25.3214 19.1792 25.9673 19.976 25.9673ZM15.6481 28.8526C15.6481 29.6493 15.0022 30.2952 14.2055 30.2952C13.4087 30.2952 12.7629 29.6493 12.7629 28.8526C12.7629 28.0558 13.4087 27.4099 14.2055 27.4099C15.0022 27.4099 15.6481 28.0558 15.6481 28.8526ZM33.4404 2.88527C33.4404 3.94759 32.5793 4.80877 31.5169 4.80877C30.4546 4.80877 29.5934 3.94759 29.5934 2.88527C29.5934 1.82294 30.4546 0.961761 31.5169 0.961761C32.5793 0.961761 33.4404 1.82294 33.4404 2.88527Z"
                fill="#C2C2C2"
              />
            </svg>
            <p className="text-xs">All Cookies</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full relative">
          <div className="absolute top-2 left-1 right-1 h-3 bg-[#D9D9D9]  "></div>
          <div className="flex items-center   z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
            >
              <circle cx="14.5" cy="14.5" r="14.5" fill="#C2C2C2" />
            </svg>
          </div>
          <div className="flex items-center relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
            >
              <circle cx="14.5" cy="14.5" r="14.5" fill="#F69625" />
            </svg>
          </div>
          <div className="flex items-center relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
            >
              <circle cx="14.5" cy="14.5" r="14.5" fill="#C2C2C2" />
            </svg>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button className="bg-[#F69625] rounded-[10px]  text-white py-2 px-6 text-[18px]   transition-colors">
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
