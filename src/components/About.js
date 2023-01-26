import { Footer } from "./Footer";
import Header from "./Header";
import Banner from "/assets/images/banner1.jpg";

const About = () => {
  return (
    <div>
   
      <div className="flex flex-col gap-6 items-center justify-center align-middle">
        <img
          src={Banner}
          id="imagebanneraboutus"
          key="banner1"
          className="w-full"
        />
        <h1 className="font-bold text-transparent text-4xl bg-clip-text bg-[#FC8019]">
          About Us
        </h1>

        <p className="p-4 px-12 lg:px-48 font-normal text-xs lg:font-light lg:text-base text-slate-600">
          Introducing FitMe, your go-to destination for delicious food delivery.
          Our app, built with ReactJS, offers a seamless experience for ordering
          from local restaurants straight to your door. Our team is passionate
          about food and dedicated to providing the best service to our
          customers. We have partnered with a variety of restaurants to bring
          you a diverse selection of cuisines to choose from. No matter your
          cravings, we've got something for everyone. We understand the
          importance of dietary restrictions and offer a range of options
          including vegetarian, vegan, and gluten-free meals. Our user-friendly
          interface makes ordering simple and efficient. We're constantly
          working to improve our app, adding new features and restaurants to
          ensure the best experience for our users. Trust us to deliver your
          next meal, whether you're at home, at work, or on-the-go. Join us on
          our journey to revolutionize the food delivery experience. Download
          FitMe now and enjoy the convenience of delicious food at your
          fingertips. Our team is dedicated to providing the best experience for
          our customers. We work closely with local restaurants to bring their
          delicious dishes straight to your door. Whether you're in the mood for
          sushi or pizza, we've got you covered. We understand that everyone has
          different dietary needs, so we offer a wide range of options including
          vegetarian, vegan, and gluten-free meals. And with our easy-to-use
          interface, ordering is a breeze. We're constantly working to improve
          our app and add new features to make your experience even better. So
          whether you're at home, at work, or on the go, you can always count on
          us to deliver your next meal. Try our app today and experience the
          convenience of food delivery at your fingertips.
        </p>
      </div>

    </div>
  );
};
export default About;
