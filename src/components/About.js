import { Footer } from "./Footer";
import Header from "./Header";
import { Player } from "@lottiefiles/react-lottie-player";

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center align-middle">
        <h1 className="font-bold text-transparent text-4xl bg-clip-text bg-[#FC8019]">
          About Us
        </h1>
        <div className="flex gap-1 justify-center items-center px-32">
          <Player
            autoplay
            loop
            className="w-[500px]"
            src="https://assets6.lottiefiles.com/packages/lf20_ihkjwhbc.json"
          ></Player>
          <p className=" font-normal text-xs lg:font-light lg:text-sm text-slate-700">
            Introducing FitMe, your go-to destination for delicious food
            delivery. Our app, built with ReactJS, offers a seamless experience
            for ordering from local restaurants straight to your door. Our team
            is passionate about food and dedicated to providing the best service
            to our customers. We have partnered with a variety of restaurants to
            bring you a diverse selection of cuisines to choose from. No matter
            your cravings, we've got something for everyone. We understand the
            importance of dietary restrictions and offer a range of options
            including vegetarian, vegan, and gluten-free meals. Our
            user-friendly interface makes ordering simple and efficient. We're
            constantly working to improve our app, adding new features and
            restaurants to ensure the best experience for our users.
          </p>
        </div>
        <div className="flex gap-1 justify-center items-center px-32">
          <p className=" font-normal text-xs lg:font-light lg:text-sm text-slate-700">
            Trust us to deliver your next meal, whether you're at home, at work,
            or on-the-go. Join us on our journey to revolutionize the food
            delivery experience. Download FitMe now and enjoy the convenience of
            delicious food at your fingertips. Our team is dedicated to
            providing the best experience for our customers. We work closely
            with local restaurants to bring their delicious dishes straight to
            your door. Whether you're in the mood for sushi or pizza, we've got
            you covered. We understand that everyone has different dietary
            needs, so we offer a wide range of options including vegetarian,
            vegan, and gluten-free meals. And with our easy-to-use interface,
            ordering is a breeze. We're constantly working to improve our app
            and add new features to make your experience even better. So whether
            you're at home, at work, or on the go, you can always count on us to
            deliver your next meal. Try our app today and experience the
            convenience of food delivery at your fingertips.
          </p>
          <Player
            autoplay
            loop
            className="w-[500px]"
            src="https://assets6.lottiefiles.com/packages/lf20_on5CEa.json"
          ></Player>
        </div>
      </div>
    </div>
  );
};
export default About;
