import React, { useState } from "react";

const Section = ({ question, answer, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex flex-col gap-2 border border-solid p-3 justify-start items-start">
      <h3 className="text-xs text-black font-semibold">{question}</h3>
      {isVisible ? (
        <button
          className="cursor-pointer text-sm font-medium text-green-600"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer text-sm font-medium text-orange-600"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}

      {isVisible && <p className="text-xs text-slate-700">{answer}</p>}
    </div>
  );
};

const Faq = () => {
  const [visibleSection, setVisibleSection] = useState(" ");
  return (
    <div className="flex flex-col m-6 gap-3">
      <h1 className="text-black text-3xl">FAQs</h1>
      <Section
        question={"How does the FitMe app work?"}
        answer={
          "FitMe app works by connecting users with restaurants that offer delivery services. Users can browse menus, place orders, and make payments through the app. The app then sends the order to the restaurant, and a delivery person picks up the food and delivers it to the user's address"
        }
        isVisible={visibleSection == "First"}
        setIsVisible={(reveal) => {
          if (reveal) {
            setVisibleSection("First");
          } else {
            setVisibleSection("");
          }
        }}
      />
      <Section
        question={"How do I download Fitme app?"}
        answer={
          "FitMe app can be downloaded from the Google Play Store or Apple App Store. Simply search for the app and click Install to download it to your phone."
        }
        isVisible={visibleSection == "Second"}
        setIsVisible={(reveal) =>{
            if(reveal){
                setVisibleSection("Second")
            }else{
                setVisibleSection(" ")
            }
        } }
      />
      <Section
        question={"How long does it take for the food to be delivered?"}
        answer={
          "Delivery times may vary depending on the restaurant's location and the distance from the user's address. However, most deliveries are completed within 30-45 minutes."
        }
        isVisible={visibleSection == "Third"}
        setIsVisible={(reveal) =>{
            if(reveal){
                setVisibleSection("Third")
            }else{
                setVisibleSection(" ")
            }
        }}
      />
      <Section
        question={"What should I do if I have a problem with my order?"}
        answer={
          "If you have a problem with your order, you can contact the food delivery app's customer support team through the app or by phone. They will be happy to help you resolve any issues."
        }
        isVisible={visibleSection == "Fourth"}
        setIsVisible={(reveal) =>{
            if(reveal){
                setVisibleSection("Fourth")
            }else{
                setVisibleSection(" ")
            }
        }}
      />
    </div>
  );
};
export default Faq;
