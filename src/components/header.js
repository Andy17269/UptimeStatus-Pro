import { useEffect } from 'react';
import Link from './link';

function Header() {

  useEffect(() => {
    document.title = window.Config.SiteName;
  }, []);

  return (
    <div id='header'>
      <div className='container'>
        <h1 className='logo'>{window.Config.SiteName}</h1>
        <p>所有服务均正常运行 ✅</p>
        <div className='navi'>
          {window.Config.Navi.map((item, index) => (
            <strong> <Link key={index} to={item.url} text={item.text} /> </strong>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
