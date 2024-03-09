import React from "react";
import Navbar from "../../Utils/Navbar";
import Footer from "../../Utils/Footer";
import "./About.css";
const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="about-us-container">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Nullam pulvinar consequat massa, vel pharetra arcu faucibus
          sed. Integer auctor euismod nulla, sed tincidunt metus consectetur
          eget. Nullam aliquam odio justo, et vehicula risus ultricies a. Duis
          in mi ac dolor volutpat scelerisque a non urna. Proin et metus odio.
          Fusce accumsan bibendum purus, in ullamcorper ex dapibus in. Nullam
          eget mauris lacinia, commodo mi id, feugiat tellus. Phasellus sit amet
          orci sed lectus luctus pellentesque. Vestibulum eu tincidunt felis,
          nec dictum arcu. Aliquam eget semper turpis, vitae ullamcorper lorem.
          Nulla eget ex turpis. Nullam nec nisl in dolor facilisis gravida.
        </p>
        <p>
          Aliquam ac varius lectus. Proin maximus varius mi, id dapibus est
          congue eget. Integer vel magna at sapien tristique ullamcorper vel ut
          ligula. Vivamus auctor auctor lorem, vel auctor nisi commodo at. Etiam
          nec hendrerit eros. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Cras sit amet arcu eget
          ligula scelerisque sodales vitae ut nulla. Maecenas eget mauris
          sapien. Nullam congue mi et diam fermentum, sit amet maximus mi
          lobortis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Phasellus tincidunt urna a rhoncus
          pretium. Sed consequat leo a tristique vulputate. Nulla vitae lorem
          vitae dolor volutpat rutrum. Nam venenatis enim vitae sodales
          vestibulum. Sed mattis eget ante sit amet ultrices.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
