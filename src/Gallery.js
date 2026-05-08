import Profile from "./Profile";
import bhagatsingh from "./bhagatsingh.jpg";
import Sarojininaidu from "./Sarojininaidu.jpg";
import SubhashChandraBose from "./SubhashChandraBose.jpeg";

export function Gallery() {
  return (
    <div>
      <Profile
        name="Bhagat Singh"
        image={bhagatsingh}
        contribution="Revolutionary leader – fought against British colonial rule"
      />

      <Profile
        name="Sarojini Naidu"
        image={Sarojininaidu}
        contribution="Poet & activist – first woman Governor of an Indian state"
      />

      <Profile
        name="Subhas Chandra Bose"
        image={SubhashChandraBose}
        contribution="Founded the Indian National Army – Give me blood, I'll give you freedom"
      />
    </div>
  );
}