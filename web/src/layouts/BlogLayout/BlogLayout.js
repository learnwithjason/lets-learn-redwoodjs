import { Link, routes } from '@redwoodjs/router';

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <Link to={routes.home()}>Home</Link>
          <Link to={routes.about()}>About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
