const Header = (props) => {
  return (
    <header>
      <div className="logo">Pale</div>
      <div className="input-search">
        <button>Category</button>
        <form action="/" method="post">
          <input type="text" placeholder="Search..." />
          <input type="text" placeholder="Your city" />
          <input type="submit" value="" hidden />
        </form>
      </div>
      <div className="user">
        <button>Login</button>
      </div>
    </header>
  );
};

export default Header;
