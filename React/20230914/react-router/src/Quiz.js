import { BrowserRouter, Routes, Route, useParams, Outlet, Link, useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* 전혀 다른 페이지로 이동할 때 */}
      {/* 새로고침 일어남 */}
      <a href="/cart">카트페이지 이동</a>
      {/* 페이지 내에서 이동할 때 */}
      <Link to="/">홈</Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/users/*" element={<Users />}>
          {/* Outlet은 라우트에서 자식으로 있는 컴포넌트를 꺼내서 보여주는 컴포넌트 */}
          <Route path="coupon/" element={<CouponPage />} />
          <Route path="question/" element={<QuestionPage />} />
          <Route path="notice/" element={<NoticePage />} />
        </Route>
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/products/:id/notice" element={<ProductDetailNoticePage />} />
      </Routes>
      {/* /users로 이동하는 버튼! useNavigate 이용하기 */}
      <Button />
    </BrowserRouter>
  );
}

function HomePage() {
  return <h1>Homepage</h1>;
}
function Cart() {
  return <h1>Cart</h1>;
}
function Users() {
  return (
    <div>
      <h1>User</h1>
      <Outlet />
    </div>
  );
}
function CouponPage() {
  return <h1>쿠폰</h1>;
}
function NoticePage() {
  return <h1>알림</h1>;
}
function QuestionPage() {
  return <h1>문의</h1>;
}
function ProductDetailPage() {
  const { id } = useParams();
  return <h1>{id}번 상품</h1>;
}
function ProductDetailNoticePage() {
  const { id } = useParams();
  return <h1>{id}번 상품 상세정보</h1>;
}

function Button() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/users")}>유저</button>;
}

export default App;
