import React from "react";

// Creating the context object and passing the default values.
const GlobalContext = React.createContext({ link: "", setLink: (e) => {} });

export default GlobalContext;
