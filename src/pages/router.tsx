/**
 * Create By: Meng
 * Create Date: 2021-07-10
 * Desc: 路由配置
 */

import { Routes, Route } from "react-router-dom";

import MainPages from "./main/index";
import AccountPages from "./account/index";
import OtherPages from "./other/index";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPages.Home />} />
      {/* <Route index element={<Home />} /> */}
      <Route path="account">
        <Route path="login" element={<AccountPages.Login />} />
        <Route path="forget" element={<AccountPages.Forget />} />
        <Route path="register" element={<AccountPages.Register />} />
      </Route>
      <Route path="*" element={<OtherPages.Notfound />} />
    </Routes>
  );
};

export default routes;

// const routelist = [
//   {
//     // element: <App />,
//     path: "/",
//     children: [
//       { index: true, element: <Home /> },
//       { path: "teams", element: <Teams />,
//         children: [
//           { index: true, element: <LeagueStandings /> },
//           { path: ":teamId", element: <Team /> },
//           { path: ":teamId/edit", element: <EditTeam /> },
//           { path: "new", element: <NewTeamForm /> }
//         ]
//       }
//     ]
//   },
//   {
//     element: <PageLayout />,
//     children: [
//       { element: <Privacy />, path: "/privacy" },
//       { element: <Tos />, path: "/tos" }
//     ]
//   },
//   { element: <Contact />, path: "/contact-us" }
// ];
