import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/header/header";
import Profile from "./pages/profile/profile";
import Login from "./pages/authentication/login/login";
import Wallet from "./pages/wallet/wallet";
import AddPosting from "./pages/addPosting/addPosting";
import Chats from "./pages/chatss/chats";
import Notifications from "./pages/notifications/notifications";
import Stories from "./pages/storiess/stories";
import FeatureAdds from "./pages/FeatureAdds/featureAdds";
import Preview from "./pages/preview/preview";
import CreateVirtualOffice from "./pages/createVirtualOffice/createVirtualOffice";
import ViewVirtualOfiice from "./pages/viewVirtualOffice/viewVirtualOfiice";
import SplashScreen from './components/splashScreen/splashScreen'
import Layout from './layout/sidebarDrawer/sideBarDrawer'
import CarSelling from "./pages/carSelling/carSelling";

const Routesd = () => {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  return (
    <>
      {showSplash && location.pathname === "/login" && (
        <SplashScreen showSplash={showSplash} />
      )}
      {!showSplash && (
        <>
          {location.pathname !== "/login" && <Header />}
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/" element={<Layout />}>
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/wallet" element={<Wallet />} />
              <Route exact path="/adposting" element={<AddPosting />} />
              <Route exact path="/carad" element={<CarSelling />} />

              <Route exact path="/chats" element={<Chats />} />
              <Route exact path="/notifications" element={<Notifications />} />
              <Route exact path="/stories" element={<Stories />} />
              <Route exact path="/featureAd" element={<FeatureAdds />} />
              <Route exact path="/preview" element={<Preview />} />
              <Route exact path="/createvirtualoffice" element={<CreateVirtualOffice />} />
              <Route exact path="/viewvirtualoffice" element={<ViewVirtualOfiice />} />
              {/* <Route exact path="/scheduler" element={<Schedulers />} /> */}
            </Route>
          </Routes>
        </>
      )}
    </>
  );
};

export default Routesd;
