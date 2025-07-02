
import Navigation from '@/components/navigation';
export default function Header() {
  return (
    <header className="hz-header pt-20px position-absolute w-100 z-1 top-0" id="hz_header">
      <div className="hz-container-big bg-white rounded-12px">
        <div className="container hz-container">
          <div className="row hz-row hz-row1 h-74px align-items-center justify-content-between">
            <div className="col-2">
              <a href="/" className="logo_wrap d-block">
                <img src="/images/logo.webp" alt="Logo" className="hz_logo d-block mx-auto w-100" />
              </a>
            </div>
            <div className="col-6">
              <Navigation />
            </div>
            <div className="col-2">
              <div className="hz_btn_wrapper">
                <a href="#" className="hz_btn d-flex align-items-center justify-content-center text-decoration-none w-100 hz_color_3_bg text-white weight-400 made_outer-sans">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
