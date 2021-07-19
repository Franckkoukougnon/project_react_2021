import React from "react";
import Logo from "../Components/Logo";
import Navigation from "../Components/Navigation";

const About = () => {
  return (
    <div>
      <Navigation />
      <Logo />
      <h1>A propos</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat
        augue et mauris aliquet, egestas condimentum ipsum mollis. Curabitur
        bibendum nec tortor at lobortis. Mauris sem nisi, tincidunt non leo in,
        consequat pulvinar nulla.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat
        augue et mauris aliquet, egestas condimentum ipsum mollis. Curabitur
        bibendum nec tortor at lobortis. Mauris sem nisi, tincidunt non leo in,
        consequat pulvinar nulla. Phasellus consequat accumsan vulputate. Nam
        vel faucibus lectus, at condimentum erat. Nam fermentum interdum
        iaculis. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Maecenas nibh risus, interdum et
        dignissim at, vulputate eu turpis. Vestibulum ac neque condimentum,
        auctor eros ut, posuere ipsum.
      </p>
    </div>
  );
};

export default About;
