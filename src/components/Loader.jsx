import React from "react";
import { newtonsCradle } from "ldrs";
function Loader() {
  newtonsCradle.register();
  return (
    <>
      <l-newtons-cradle size="300" speed="1.4" color="black"></l-newtons-cradle>
    </>
  );
}

export default Loader;
