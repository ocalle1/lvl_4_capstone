// AxiosContext will go into App.js wrapping around Components or whereever a value is needed

import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'






function AxiosContextProvider(props) {



  return (
    <>
      {/* <AxiosContext.Provider v>
        {props.children}
      </AxiosContext.Provider> */}

    </>
  )
};

export {  AxiosContextProvider };



