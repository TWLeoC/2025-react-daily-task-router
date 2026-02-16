import './App.css';
import { HashRouter, NavLink, Routes, Route, useNavigate, Outlet, useParams } from 'react-router';


const Register = () => {
  return <p>這是註冊頁面</p>;
};

const Login = () => {
  return <p>這是登入頁面</p>;
};

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login')
  }
  return(<>
  <button type="button" onClick={handleLogout}>登出</button>
  </>)
}

const Todo = () => {
  return (<>
    <p>這是 Todo 頁面</p>
    <Logout />
  </>)
};

const Home = () => {
  return <p>這是首頁</p>;
};

const Post = () => {
  return(<>
    <p>動態路由練習 Post頁面</p>
    <NavLink to="/post/post123">
      <p>Post ID測試頁面</p>
    </NavLink>
    <Outlet />
  </>)
}

const PostIdCheck = () => {
  const params = useParams();
  return(<>
    <p>Post ID回覆</p>
    <p>Post ID: {params.postId}</p>
  </>)
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="post" element={<Post />}>
            <Route path=":postId" element={<PostIdCheck />} />
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
