// 导入首页
import Index from "./page/home";
// 导入登录页
import CreateAccount from "./page/createAccount";
import AddCard from "./page/addCard";

// 配置路由映射 （不同的路由对应渲染不同的页面组件）
const router = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/createAccount",
    element: <CreateAccount />,
  },
  {
    path: "/AddCard",
    element: <AddCard />,
  }
  

  
];

export default router;
