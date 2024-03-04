

const Header = ({title}) => {
  return (
    <div>
    <h1>Title:{title}</h1>

    </div>
  )
}

Header.defaultProps = {
    title : "Default Title"
}


export default Header