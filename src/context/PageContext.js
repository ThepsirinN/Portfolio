import { createContext, useContext, useEffect, useState } from "react";

const PageContext = createContext();

const PageContextProvider = ({ children }) => {
  const [page, setPage] = useState("");

  const setPageValue = (val) => {
    setPage(val);
    localStorage.setItem("page",val)
  };
  useEffect(() => {
    setPage(localStorage.getItem("page"))
  }, [])
  

  return (
    <PageContext.Provider value={{ page, setPageValue }}>
      {children}
    </PageContext.Provider>
  );
};

export { PageContextProvider };

export const MyPageContext = () => {
  return useContext(PageContext);
};
