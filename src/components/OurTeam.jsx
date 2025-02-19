import Card from "./Card";
import President from "./President";
import VicePresident from "./VicePresident";
const OurTeam = () => {
  return (
    <section id="our team" className="p-2 md:p-5 mb-32">
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold font-body bg-gradient-to-r from-[#D1D2DB] to-[#3E4776] inline-block text-transparent bg-clip-text mb-5">
          Our Team
        </h1>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center items-center md:items-stretch">
        <President img={"/assets/AdityaBansal.png"} linkedin={"https://www.linkedin.com/in/aditya-bansal-developer"} instagram={"https://www.instagram.com/iamadityabansal"} github={"https://github.com/SimplyAditya"}/>
        <VicePresident img={"/assets/Priyal.png"} linkedin={"https://www.linkedin.com/in/priyal-khullar"} instagram={"https://www.instagram.com/priyalkhullar"}  github={"https://github.com/priyalkhullar"}/>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mx-auto auto-cols-min p-8 md:p-10">
          <Card
            name={"Mukund Madhav Agarwal"}
            team={"Treasurer"}
            img={"/assets/Mukund.png"}
            linkedin={"https://www.linkedin.com/in/mukund-madhav-agarwal-777057288"}
            instagram={"https://www.instagram.com/mukund._.2910"}
          />
          <Card
            name={"Sourav Singh"}
            team={"Operations"}
            img={"/assets/Sourav.png"}
            linkedin={"https://www.linkedin.com/in/sourav-singh-8b2b79274?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bv9TFO3brSt%2BX0af%2FLbfj4Q%3D%3D"}
            instagram={"https://www.instagram.com/_shersheoran"}
            github={"https://github.com/sourav-sheoran"}
          />
          <Card
            name={"Ayush Gupta"}
            team={"Operations"}
            img={"/assets/Ayush.png"}
            linkedin={"https://www.linkedin.com/in/ayush-gupta-07612928b/"}
            instagram={"https://www.instagram.com/_ayush1075"}
            github={"https://github.com/Ayush1075"}
          />
          <Card
            name={"Kanika"}
            team={"Marketing and Social Media"}
            img={"/assets/Kanika.png"}
          />
          <Card
            name={"Krishna Mundra "}
            team={"Marketing and Social Media"}
            img={"/assets/Krishna.png"}
            instagram={"https://www.instagram.com/mundra_krishna11"}
          />
          <Card
            name={"Mitali Joshi"}
            team={"Marketing and Social Media"}
            img={"/assets/Mitali.png"}
            instagram={"https://www.instagram.com/_mitali_joshi18"}
            github={"https://github.com/joshi-mitali"}
          />
          <Card
            name={"Pratima"}
            team={"Marketing and Social Media"}
            img={"/assets/Pratima.png"}
            instagram={"https://www.instagram.com/pratima.rao5_"}
          />
          <Card
            name={"Sibi Surya"}
            team={"Content "}
            img={"/assets/Sibi.png"}
            linkedin={"https://www.linkedin.com/in/ssibisurya"}
          />
          <Card
            name={"Khushi goyal"}
            team={"Content"}
            img={"/assets/Khushi.png"}
            linkedin={"https://www.linkedin.com/in/khushi-goyal-4aab25280/"}
            instagram={"https://www.instagram.com/jk.khushi"}
            github={"https://github.com/khushi-goyal23"}
          />
          <Card
            name={"Aaditya Sharma"}
            team={"Design"}
            img={"/assets/Aditya.png"}
            linkedin={"https://www.linkedin.com/in/aaditya-sharma-b373b02a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
            instagram={"https://www.instagram.com/_sharma_aditya5"}
          />
          <Card
            name={"Vidipt Jain"}
            team={"Design"}
            img={"/assets/Vidipt.png"}
            linkedin={"https://www.linkedin.com/in/vidipt-jain-3186b4277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
            instagram={"https://www.instagram.com/vidipt_1915"}
          />
          <Card
            name={"Lakshay"}
            team={"Web Development"}
            img={"/assets/Lakshay.png"}
            linkedin={"https://www.linkedin.com/in/lakshaynandwani"}
            instagram={"https://www.instagram.com/lakshay_24_11"}
            github={"https://github.com/lakshay-2411"}
          />
          <Card
            name={"Prateek Yadav"}
            team={"Web Development"}
            img={"/assets/Prateek.png"}
            linkedin={"https://www.linkedin.com/in/prateek-yadav-aa5b77283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
            instagram={"https://www.instagram.com/_prateek_yadav._"}
            github={"https://github.com/Prateek-yadav1"}
          />
          <Card
            name={"Sai Sharath Chandra Koppu"}
            team={"Web Development"}
            img={"/assets/Sai.png"}
            linkedin={"http://linkedin.com/in/sai-sharath-chandra-koppu-065214311"}
            instagram={"https://www.instagram.com/S.H.A.R.A.T.H.4"}
            github={"https://github.com/SharathK4"}
          />
          </div>
    </section>
  );
};
export default OurTeam;
