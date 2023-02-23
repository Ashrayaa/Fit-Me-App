import Ashraya from "/assets/images/ashrayaimage.jpeg";

const Profile = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 mx-44">
        <div>
          {/* Photo */}
          <div>
            <img
              src={Ashraya}
              id="banana"
              key="banana1"
              className="flex rounded-md w-72 h-80"
            />
          </div>
          {/* Works to showcase */}
          <div>
            <h4 className="text-slate-200 text-sm ">Works</h4>
            <ul>
              <li className="font-medium text-xl tracking-wide text-black">Fit Me App</li>
              <li className="font-medium text-xl tracking-wide text-black">Engagespot Website</li>
              <li className="font-medium text-xl tracking-wide text-black">BMI Calculator</li>
              <li className="font-medium text-xl tracking-wide text-black">Analog Clock</li>
            </ul>
          </div>
          {/*Skills*/}
          <div>
            <h4 className="text-slate-200 text-sm ">Skills</h4>
            <ul>
              <li>ReactJS</li>
              <li>Javascript </li>
              <li> Tailwind CSS</li>
              <li>HTML</li>
            </ul>
          </div>
        </div>

        <div>
          {/* Name, Location */}
          <div className="flex gap-3">
            <h1>Ashraya KK</h1>
            <div>
              <h4>Kerala India</h4>
            </div>
          </div>

          {/* Designation */}
          <h2>Front-end Developer</h2>
          {/* About */}
          <div>
            <h1>About</h1>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Profile;
