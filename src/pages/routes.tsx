import React from "react";
import { IndexPage } from "./index";
import { Routes, Route} from "react-router-dom";
import NotFound from "./NotFound";

const AppRoutes: React.FC = () => {
    return (
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };
  
  export default AppRoutes;