function Dashboard() {
  return (
    <div className="Dashboard">
     {/* start */}

<div>
  {/*  Title */}
  <title>Mordenize</title>
  {/*  Required Meta Tag */}
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="handheldfriendly" content="true" />
  <meta name="MobileOptimized" content="width" />
  <meta name="description" content="Mordenize" />
  <meta name="author" content />
  <meta name="keywords" content="Mordenize" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  {/*  Favicon */}
  <link rel="shortcut icon" type="image/png" href="assets/dist/images/logo/favicon.png" />
  {/* Owl Carousel  */}
  <link rel="stylesheet" href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/assets/libs/node_modules/owl.carousel/dist/assets/owl.carousel.min.css" />
  {/* Core Css */}
  <link rel="stylesheet" href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/assets/libs/node_modules/simplebar/dist/simplebar.css" />
  <link rel="stylesheet" href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/dist/css/style.min.css" />
  {/* Preloader */}
  <div className="preloader">
    <img src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/dist/images/loader.svg" alt="loader" className="tea lds-ripple" />
  </div>
  {/*  Body Wrapper */}
  <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    {/* Sidebar Start */}
    <aside className="left-sidebar">
      {/* Sidebar scroll*/}
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <a href="./index.html" className="text-nowrap logo-img">
            <img src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/dist/images/logo/modernize-dark-logo.svg" width={180} alt />
          </a>
          <div className="close-btn d-lg-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i data-feather="x-circle" className="feather-base ms-auto" />
          </div>
        </div>
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav scroll-sidebar" data-simplebar>
          <ul id="sidebarnav">
            {/* ============================= */}
            {/* Home */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i data-feather="more-horizontal" className="feather-sm nav-small-cap-icon" />
              <span className="hide-menu">Home</span>
            </li>
            {/* =================== */}
            {/* Dashboard */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link sidebar-link" href="./index.html" aria-expanded="false">
                <span>
                  <i data-feather="home" className="feather-base" />
                </span>
                <span className="hide-menu">Modern</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link sidebar-link" href="./index2.html" aria-expanded="false">
                <span>
                  <i data-feather="activity" className="feather-base" />
                </span>
                <span className="hide-menu">General</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link sidebar-link" href="./index3.html" aria-expanded="false">
                <span>
                  <i data-feather="music" className="feather-base" />
                </span>
                <span className="hide-menu">Music</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link sidebar-link" href="./index4.html" aria-expanded="false">
                <span>
                  <i data-feather="dollar-sign" className="feather-base" />
                </span>
                <span className="hide-menu">NFT</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link sidebar-link" href="./index5.html" aria-expanded="false">
                <span>
                  <i data-feather="cpu" className="feather-base" />
                </span>
                <span className="hide-menu">Crypto</span>
              </a>
            </li>
            {/* ============================= */}
            {/* UI */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i data-feather="more-horizontal" className="feather-sm nav-small-cap-icon" />
              <span className="hide-menu">UI</span>
            </li>
            {/* =================== */}
            {/* UI Elements */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                <span className="d-flex">
                  <i data-feather="grid" className="feather-base" />
                </span>
                <span className="hide-menu">UI Elements</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./ui-accordian.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Accordian</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./ui-badge.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Badge</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./ui-buttons.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Buttons</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./ui-dropdowns.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Dropdowns</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./ui-modals.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Modals</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./ui-tab.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Tab</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./ui-tooltip-popover.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Tooltip &amp; Popover</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./ui-notification.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Notification</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./ui-progressbar.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Progressbar</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./ui-pagination.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Pagination</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./ui-typography.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Typography</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./ui-bootstrap-ui.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Bootstrap UI</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./ui-breadcrumb.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Breadcrumb</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./ui-offcanvas.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Offcanvas</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./ui-lists.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Lists</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./ui-grid.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Grid</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./ui-carousel.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Carousel</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./ui-scrollspy.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Scrollspy</span>
                  </a>
                </li>
                <li className="sidebar-item mb-3">
                  <a href="./ui-spinner.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Spinner</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* Forms */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i data-feather="more-horizontal" className="feather-sm nav-small-cap-icon" />
              <span className="hide-menu">Forms</span>
            </li>
            {/* =================== */}
            {/* Form Elements */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                <span className="d-flex">
                  <i data-feather="file-text" className="feather-base" />
                </span>
                <span className="hide-menu">Form Elements</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./form-inputs.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Forms Input</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./form-input-groups.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Input Groups</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./form-input-grid.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Input Grid</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./form-checkbox-radio.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Checkbox &amp; Radios</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./form-bootstrap-touchspin.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Bootstrap Touchspin</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./form-bootstrap-switch.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Bootstrap Switch</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./form-select2.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Select2</span>
                  </a>
                </li>
                <li className="sidebar-item mb-3">
                  <a href="./form-dual-listbox.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Dual Listbox</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* =================== */}
            {/* Form Input */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                <span className="d-flex">
                  <i data-feather="file-plus" className="feather-base" />
                </span>
                <span className="hide-menu">Form Input</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./form-basic.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Basic Form</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./form-horizontal.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Form Horizontal</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./form-actions.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Form Actions</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./form-row-separator.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Row Separator</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./form-bordered.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Form Bordered</span>
                  </a>
                </li>
                <li className="sidebar-item mb-3">
                  <a href="./form-detail.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Form Detail</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* =================== */}
            {/* Form Wizard */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link sidebar-link" href="./form-wizard.html" aria-expanded="false">
                <span className="d-flex">
                  <i data-feather="archive" className="feather-base" />
                </span>
                <span className="hide-menu">Form Wizard</span>
              </a>
            </li>
            {/* ============================= */}
            {/* Tables */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i data-feather="more-horizontal" className="feather-sm nav-small-cap-icon" />
              <span className="hide-menu">Tables</span>
            </li>
            {/* =================== */}
            {/* Bootstrap Table */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                <span className="d-flex">
                  <i data-feather="sidebar" className="feather-base" />
                </span>
                <span className="hide-menu">Bootstrap Table</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./table-basic.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Basic Table</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./table-dark-basic.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Dark Basic Table</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./table-sizing.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Sizing Table</span>
                  </a>
                </li>
                <li className="sidebar-item mb-3">
                  <a href="./table-layout-coloured.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Coloured Table</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* =================== */}
            {/* Datatable */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                <span className="d-flex">
                  <i data-feather="hard-drive" className="feather-base" />
                </span>
                <span className="hide-menu">Datatables</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./table-datatable-basic.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Basic Initialisation</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./table-datatable-api.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">API</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./table-datatable-advanced.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Advanced Initialisation</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* Charts */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i data-feather="more-horizontal" className="feather-sm nav-small-cap-icon" />
              <span className="hide-menu">Charts</span>
            </li>
            {/* =================== */}
            {/* Apex Chart */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                <span className="d-flex">
                  <i data-feather="pie-chart" className="feather-base" />
                </span>
                <span className="hide-menu">Apex Charts</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./chart-apex-line.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Line Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./chart-apex-area.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Area Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./chart-apex-bar.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Bar Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./chart-apex-pie.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Pie Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./chart-apex-radial.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Radial Chart</span>
                  </a>
                </li>
                <li className="sidebar-item mb-3">
                  <a href="./chart-apex-radar.html" className="sidebar-link">
                    <i data-feather="circle" className="feather-sm" />
                    <span className="hide-menu">Radar Chart</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ============================= */}
            {/* Icons */}
            {/* ============================= */}
            <li className="nav-small-cap">
              <i data-feather="more-horizontal" className="feather-sm nav-small-cap-icon" />
              <span className="hide-menu">Icons</span>
            </li>
            {/* =================== */}
            {/* Feather Icon */}
            {/* =================== */}
            <li className="sidebar-item">
              <a className="sidebar-link sidebar-link" href="./icon-feather.html" aria-expanded="false">
                <span className="d-flex">
                  <i data-feather="archive" className="feather-base" />
                </span>
                <span className="hide-menu">Feather Icon</span>
              </a>
            </li>
          </ul>
          <div className="p-4 bg-light-primary rounded mt-8 sidebar-ad">
            <div className="hstack">
              <div>
                <h5 className="fs-5 me-3 text-nowrap">
                  Upgrade to <br />
                  Premium
                </h5>
                <button className="btn btn-primary shadow-primary">Upgrade</button>
              </div>
              <div className="mt-n8">
                <img src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/dist/images/background/upgrade.png" width={70} alt />
              </div>
            </div>
          </div>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
    {/*  Sidebar End */} 
    {/*  Main wrapper */} 
    <div className="body-wrapper">
      {/*  Header Start */} 
      <header className="app-header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link sidebartoggler" id="headerCollapse" href="javascript:void(0)">
                  <i data-feather="menu" className="feather-lg" />
                </a>
              </li>
              <li className="nav-item dropdown d-none d-lg-block hover-dd">
                <a className="nav-link" href="javascript:void(0)" id="pages-dd" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                  <i data-feather="chevron-down" className="feather-sm ms-2" />
                </a>
                <div className="dropdown-menu dropdown-menu-animate-up" aria-labelledby="pages-dd">
                  <div className="p-4">
                    <div className="row">
                      <div className="col-6">
                        <div className="p-3 mb-4 bg-light-primary rounded-3 position-relative hover-transform">
                          <a href="ui-buttons.html" className="stretched-link" />
                          <h6 className="text-primary mb-5">Buttons</h6>
                          <div className="text-end">
                            <i data-feather="toggle-right" className="feather-xxl stroke-light text-primary" />
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-3 mb-4 bg-light-danger rounded-3 position-relative hover-transform">
                          <a href="ui-typography.html" className="stretched-link" />
                          <h6 className="text-danger mb-5">Typography</h6>
                          <div className="text-end">
                            <i data-feather="type" className="feather-xxl stroke-light text-danger" />
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-3 bg-light-warning rounded-3 position-relative hover-transform">
                          <a href="form-inputs.html" className="stretched-link" />
                          <h6 className="text-warning mb-5">Inputs</h6>
                          <div className="text-end">
                            <i data-feather="file-text" className="feather-xxl stroke-light text-warning" />
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-3 bg-light-success rounded-3 position-relative hover-transform">
                          <a href="table-basic.html" className="stretched-link" />
                          <h6 className="text-success mb-5">Tables</h6>
                          <div className="text-end">
                            <i data-feather="layout" className="feather-xxl stroke-light text-success" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown d-none d-lg-block hover-dd">
                <a className="nav-link" href="javascript:void(0)" id="resources-dd" data-bs-toggle="dropdown" aria-expanded="false">
                  Resources
                  <i data-feather="chevron-down" className="feather-sm ms-2" />
                </a>
                <div className="dropdown-menu single-dd dropdown-menu-animate-up p-2" aria-labelledby="resources-dd">
                  <div>
                    <a className="dropdown-item" href="ui-accordian.html"><i data-feather="grid" className="feather-sm text-primary me-2" />
                      Components</a>
                  </div>
                  <div>
                    <a className="dropdown-item" href="../../../docs/documentation.html"><i data-feather="file" className="feather-sm text-danger me-2" />
                      Documentation</a>
                  </div>
                </div>
              </li>
              <li className="nav-item d-none d-lg-block hover-dd">
                <a className="nav-link" href="javascript:void(0)"> Add
                </a>
              </li>
            </ul>
            <div className="d-block d-lg-none">
              <img src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/dist/images/logo/modernize-dark-logo.svg" width={180} alt />
            </div>
            <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="p-2">
                <i className="feather-lg" data-feather="more-horizontal" />
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i data-feather="search" className="feather-lg" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <i data-feather="shopping-cart" className="feather-lg" />
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="javascript:void(0)" id="drop3" data-bs-toggle="dropdown" aria-expanded="false">
                    <i data-feather="message-square" className="feather-lg" />
                    <div className="notification bg-warning rounded-circle" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg-end dropdown-menu-animate-up" aria-labelledby="drop3">
                    <div className="p-7">
                      <div className="d-flex align-items-center mb-3">
                        <h5 className="mb-1">Messages</h5>
                        <span className="badge bg-info ms-3">5 new</span>
                      </div>
                      <div className="message-body" data-simplebar>
                        <a href="javascript:void(0)" className="px-2 d-flex align-items-center border-bottom py-3 bg-hover-light-black">
                          <span>
                            <img src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/dist/images/profile/user-1.jpg" alt="user" className="rounded-circle" width={52} height={52} />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5 className="mb-0 mt-1 fs-4 fw-light">
                              Roman Joined the Team!
                            </h5>
                            <span className="fs-3 text-nowrap d-block fw-normal mt-1 text-muted">Congratulate him</span>
                            <span className="fs-2 text-nowrap d-block text-muted">9:08 AM</span>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="px-2 d-flex align-items-center border-bottom py-3 bg-hover-light-black">
                          <span>
                            <img src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/dist/images/profile/user-2.jpg" alt="user" className="rounded-circle" width={52} height={52} />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5 className="mb-0 mt-1 fs-4 fw-light">
                              New message received
                            </h5>
                            <span className="fs-3 text-nowrap d-block fw-normal mt-1 text-muted">Salma sent you new message</span>
                            <span className="fs-2 text-nowrap d-block text-muted">9:08 AM</span>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="px-2 d-flex align-items-center border-bottom py-3 bg-hover-light-black">
                          <span>
                            <img src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/dist/images/profile/user-3.jpg" alt="user" className="rounded-circle" width={52} height={52} />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5 className="mb-0 mt-1 fs-4 fw-light">
                              New Payment received
                            </h5>
                            <span className="fs-3 text-nowrap d-block fw-normal mt-1 text-muted">Check your earnings</span>
                            <span className="fs-2 text-nowrap d-block text-muted">9:08 AM</span>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="px-2 d-flex align-items-center border-bottom py-3 bg-hover-light-black">
                          <span>
                            <img src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/dist/images/profile/user-4.jpg" alt="user" className="rounded-circle" width={52} height={52} />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5 className="mb-0 mt-1 fs-4 fw-light">
                              New message received
                            </h5>
                            <span className="fs-3 text-nowrap d-block fw-normal mt-1 text-muted">Salma sent you new message</span>
                            <span className="fs-2 text-nowrap d-block text-muted">9:08 AM</span>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="px-2 d-flex align-items-center border-bottom py-3 bg-hover-light-black">
                          <span>
                            <img src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/dist/images/profile/user-5.jpg" alt="user" className="rounded-circle" width={52} height={52} />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5 className="mb-0 mt-1 fs-4 fw-light">
                              Roman Joined the Team!
                            </h5>
                            <span className="fs-3 text-nowrap d-block fw-normal mt-1 text-muted">Congratulate him</span>
                            <span className="fs-2 text-nowrap d-block text-muted">9:08 AM</span>
                          </div>
                        </a>
                      </div>
                      <div className="d-grid">
                        <button className="btn btn-primary mt-3">
                          See All Messages
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="false">
                    <i data-feather="bell" className="feather-lg" />
                    <div className="notification bg-primary rounded-circle" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                    <div className="p-7">
                      <div className="d-flex align-items-center mb-3">
                        <h5 className="mb-1">Notifications</h5>
                        <span className="badge bg-warning ms-3">5 new</span>
                      </div>
                      <div className="message-body" data-simplebar>
                        <a href="javascript:void(0)" className="px-2 d-flex align-items-center border-bottom py-3 bg-hover-light-black">
                          <span>
                            <img src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/dist/images/profile/user-1.jpg" alt="user" className="rounded-circle" width={52} height={52} />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5 className="mb-0 mt-1 fs-4 fw-light">
                              Roman Joined the Team!
                            </h5>
                            <span className="fs-3 text-nowrap d-block fw-normal mt-1 text-muted">Congratulate him</span>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="px-2 d-flex align-items-center border-bottom py-3 bg-hover-light-black">
                          <span>
                            <img src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/dist/images/profile/user-2.jpg" alt="user" className="rounded-circle" width={52} height={52} />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5 className="mb-0 mt-1 fs-4 fw-light">
                              New message received
                            </h5>
                            <span className="fs-3 text-nowrap d-block fw-normal mt-1 text-muted">Salma sent you new message</span>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="px-2 d-flex align-items-center border-bottom py-3 bg-hover-light-black">
                          <span>
                            <img src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/dist/images/profile/user-3.jpg" alt="user" className="rounded-circle" width={52} height={52} />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5 className="mb-0 mt-1 fs-4 fw-light">
                              New Payment received
                            </h5>
                            <span className="fs-3 text-nowrap d-block fw-normal mt-1 text-muted">Check your earnings</span>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="px-2 d-flex align-items-center border-bottom py-3 bg-hover-light-black">
                          <span>
                            <img src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/dist/images/profile/user-4.jpg" alt="user" className="rounded-circle" width={52} height={52} />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5 className="mb-0 mt-1 fs-4 fw-light">
                              New message received
                            </h5>
                            <span className="fs-3 text-nowrap d-block fw-normal mt-1 text-muted">Salma sent you new message</span>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="px-2 d-flex align-items-center border-bottom py-3 bg-hover-light-black">
                          <span>
                            <img src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/dist/images/profile/user-5.jpg" alt="user" className="rounded-circle" width={52} height={52} />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5 className="mb-0 mt-1 fs-4 fw-light">
                              Roman Joined the Team!
                            </h5>
                            <span className="fs-3 text-nowrap d-block fw-normal mt-1 text-muted">Congratulate him</span>
                          </div>
                        </a>
                      </div>
                      <div className="d-grid">
                        <button className="btn btn-primary mt-3">
                          See All Notifications
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="vr mx-2" />
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="javascript:void(0)" id="drop1" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="d-flex align-items-center">
                      <div className="me-sm-3 me-2">
                        <img src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/dist/images/profile/user-1.jpg" className="rounded-circle" width={42} height={42} alt />
                      </div>
                      <div className="d-none d-sm-block">
                        <h6 className="fw-semibold mb-0">
                          <span className="text-secondary fw-light">Hi,</span>
                          Jonathan
                          <i data-feather="chevron-down" className="feather-sm" />
                        </h6>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop1">
                    <div className="p-7">
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="mb-1">User Profile</h5>
                        <button type="button" className="border-0 bg-transparent" aria-label="Close">
                          <i data-feather="x-circle" className="text-muted feather-base" />
                        </button>
                      </div>
                      <div className="d-flex align-items-center mt-4 pt-3 pb-4 border-bottom">
                        <img src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/dist/images/profile/user-1.jpg" className="rounded-circle" width={90} height={90} alt />
                        <div className="ms-4">
                          <h5 className="mb-1">Johnathan Doe</h5>
                          <span className="text-muted">super admin</span>
                          <p className="text-muted mb-0 mt-1">
                            <i data-feather="mail" className="feather-sm" />
                            info@Flexy.com
                          </p>
                        </div>
                      </div>
                      <div className="message-body">
                        <a href="javascript:void(0)" className="px-2 d-flex align-items-center border-bottom py-3">
                          <span className="btn p-2 btn-light-info rounded-circle text-info">
                            <i data-feather="user" className="mt-n1 feather-base" />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5 className="mb-0 mt-1 fs-4 fw-light">
                              My Profile
                            </h5>
                            <span className="fs-3 text-nowrap d-block fw-light text-muted">Account Settings</span>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="px-2 d-flex align-items-center border-bottom py-3">
                          <span className="btn p-2 btn-light-success rounded-circle text-success">
                            <i data-feather="mail" className="mt-n1 feather-base" />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5 className="mb-0 mt-1 fs-4 fw-light">My Inbox</h5>
                            <span className="fs-3 text-nowrap d-block fw-light text-muted">Messages &amp; Emails</span>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="px-2 d-flex align-items-center border-bottom py-3">
                          <span className="btn p-2 btn-light-danger rounded-circle text-danger">
                            <i data-feather="calendar" className="mt-n1 feather-base" />
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3 ms-1">
                            <h5 className="mb-0 mt-1 fs-4 fw-light">My Task</h5>
                            <span className="fs-3 text-nowrap d-block fw-light text-muted">To-do and Daily Tasks</span>
                          </div>
                        </a>
                      </div>
                      <div className="d-grid">
                        <button className="btn btn-primary mt-3">Log Out</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/*  Header End */} 
      <div className="container-fluid">
        {/*  Owl carousel */} 
        <div className="owl-carousel counter-carousel owl-theme">
          <div className="item">
            <div className="card border-0 zoom-in bg-light-primary shadow-none">
              <div className="card-body">
                <div className="text-center">
                  <img src="../../dist/images/svgs/icons8-user-male.svg" width={50} height={50} className="mb-3" alt />
                  <p className="fw-medium fs-4 text-dark-primary mb-1">
                    Employees
                  </p>
                  <h5 className="fw-bold text-dark-primary mb-0">96</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card border-0 zoom-in bg-light-warning shadow-none">
              <div className="card-body">
                <div className="text-center">
                  <img src="../../dist/images/svgs/icons8-briefcase.svg" width={50} height={50} className="mb-3" alt />
                  <p className="fw-medium fs-4 text-dark-warning mb-1">Clients</p>
                  <h5 className="fw-bold text-dark-warning mb-0">3,685</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card border-0 zoom-in bg-light-info shadow-none">
              <div className="card-body">
                <div className="text-center">
                  <img src="../../dist/images/svgs/icons8-mailbox.svg" width={50} height={50} className="mb-3" alt />
                  <p className="fw-medium fs-4 text-dark-info mb-1">Projects</p>
                  <h5 className="fw-bold text-dark-info mb-0">256</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card border-0 zoom-in bg-light-danger shadow-none">
              <div className="card-body">
                <div className="text-center">
                  <img src="../../dist/images/svgs/icons8-favorites.svg" width={50} height={50} className="mb-3" alt />
                  <p className="fw-medium fs-4 text-dark-danger mb-1">Events</p>
                  <h5 className="fw-bold text-dark-danger mb-0">932</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card border-0 zoom-in bg-light-success shadow-none">
              <div className="card-body">
                <div className="text-center">
                  <img src="../../dist/images/svgs/icons8-speech-bubble.svg" width={50} height={50} className="mb-3" alt />
                  <p className="fw-medium fs-4 text-dark-success mb-1">Payroll</p>
                  <h5 className="fw-bold text-dark-success mb-0">$348K</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card border-0 zoom-in bg-light-indigo shadow-none">
              <div className="card-body">
                <div className="text-center">
                  <img src="../../dist/images/svgs/icons8-connect.svg" width={50} height={50} className="mb-3" alt />
                  <p className="fw-medium fs-4 text-dark-indigo mb-1">Reports</p>
                  <h5 className="fw-bold text-dark-indigo mb-0">48</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Row 1 */} 
        <div className="row">
          <div className="col-lg-8 d-flex align-items-strech">
            <div className="card w-100">
              <div className="card-body">
                <div className="d-sm-flex d-block align-items-center justify-content-between mb-7">
                  <div className="mb-3 mb-sm-0">
                    <h5 className="card-title">Revenue Updates</h5>
                    <p className="card-subtitle mb-0">Overview of Profit</p>
                  </div>
                  <div>
                    <select className="form-select">
                      <option value={1}>March 2022</option>
                      <option value={2}>April 2022</option>
                      <option value={3}>May 2022</option>
                      <option value={4}>June 2022</option>
                    </select>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-8 col-md-8">
                    <div id="chart" />
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="d-flex align-items-center mb-5 pb-1">
                      <div className="p-2 bg-light-danger rounded-2 me-3">
                        <i data-feather="grid" className="text-danger feather-lg tex" />
                      </div>
                      <div>
                        <h4 className="mb-1 fw-bold">$63,489.50</h4>
                        <p className="fs-3 mb-0">Total Earnings</p>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex align-items-start mb-4">
                        <span className="text-primary me-3"><i data-feather="circle" className="fill-primary feather-xs" /></span>
                        <div>
                          <p className="fs-4 mb-0">Earnings this month</p>
                          <h6 className="fs-5 fw-medium">$48,820</h6>
                        </div>
                      </div>
                      <div className="d-flex align-items-start mb-5 pb-1">
                        <span className="text-danger me-3"><i data-feather="circle" className="fill-danger feather-xs" /></span>
                        <div>
                          <p className="fs-4 mb-0">Expense this month</p>
                          <h6 className="fs-5 fw-medium">$26,498</h6>
                        </div>
                      </div>
                      <div>
                        <button className="w-100 btn btn-primary">
                          View Full Report
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-sm-12">
                {/* Yearly Breakup */}
                <div className="card overflow-hidden">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-8">
                        <h5 className="fs-5 text-dark mb-4 pb-3">
                          Yearly Breakup
                        </h5>
                        <h4 className="fw-bold mb-2">$36,358</h4>
                        <div className="d-flex align-items-center mb-7">
                          <span className="p-1 me-2 rounded-circle bg-light-success"><i data-feather="arrow-up-left" className="feather-base text-success" /></span>
                          <p className="text-dark me-2 fs-3 fw-bold mb-0">+9%</p>
                          <p className="fs-3 mb-0">last year</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="me-4">
                            <span>
                              <i data-feather="circle" className="feather-xs fill-primary text-primary me-2" />
                            </span>
                            <span className="fs-2">2022</span>
                          </div>
                          <div>
                            <span>
                              <i data-feather="circle" className="feather-xs fill-light-primary text-light-primary me-2" />
                            </span>
                            <span className="fs-2">2022</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="d-flex justify-content-center">
                          <div id="breakup" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 col-sm-12">
                {/* Monthly Earnings */}
                <div className="card">
                  <div className="card-body pb-0">
                    <div className="row alig n-items-start">
                      <div className="col-8">
                        <h5 className="fs-5 text-dark mb-4 pb-3">
                          Monthly Earnings
                        </h5>
                        <h4 className="fw-bold mb-2">$6,820</h4>
                        <div className="d-flex align-items-center mb-7">
                          <span className="p-1 me-2 rounded-circle bg-light-danger"><i data-feather="arrow-down-right" className="feather-base text-danger" /></span>
                          <p className="text-dark me-2 fs-3 fw-bold mb-0">+9%</p>
                          <p className="fs-3 mb-0">last year</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="d-flex justify-content-end">
                          <div className="text-white bg-info p-3 rounded-circle">
                            <i className="feather-lg" data-feather="dollar-sign" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="earning" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Row 2 */} 
        <div className="row">
          {/* Employee Salary */}
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="mb-7">
                  <div>
                    <h5 className="card-title">Employee Salary</h5>
                    <p className="card-subtitle mb-0">Every month</p>
                    <div id="salary" className="mb-4" />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center me-2">
                        <div className="p-2 bg-light-primary rounded-2 me-3">
                          <i data-feather="grid" className="feather-base text-primary" />
                        </div>
                        <div>
                          <p className="fs-3 mb-0 fw-normal">Total Sales</p>
                          <h6 className="fw-bold fs-5 mb-0">$36,358</h6>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="p-2 bg-light-secondary rounded-2 me-3">
                          <i data-feather="grid" className="feather-base text-secondary" />
                        </div>
                        <div>
                          <p className="fs-3 mb-0 fw-normal">Expenses</p>
                          <h6 className="fw-bold fs-5 mb-0">$5,296</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project */}
          <div className="col-lg-4">
            <div className="row">
              {/* Customers */}
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body pb-0 mb-xxl-3">
                    <p className="mb-1 fs-3 fw-medium">Customers</p>
                    <h4 className="fw-bold fs-6">36,358</h4>
                    <div className="d-flex align-items-center mb-7 pb-3">
                      <span className="px-1 me-2 rounded-circle bg-light-danger"><i data-feather="arrow-down-right" className="feather-sm text-danger" /></span>
                      <p className="text-dark me-2 fs-3 fw-bold mb-0">+9%</p>
                    </div>
                  </div>
                  <div id="customers" />
                </div>
              </div>
              {/* Projects */}
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <p className="mb-1 fs-3 fw-medium">Projects</p>
                    <h4 className="fw-bold fs-6">78,298</h4>
                    <div className="d-flex align-items-center mb-7 mb-lg-0 mb-xxl-3 pb-3">
                      <span className="px-1 me-2 rounded-circle bg-light-success"><i data-feather="arrow-up-left" className="feather-sm text-success" /></span>
                      <p className="text-dark me-2 fs-3 fw-bold mb-0">+9%</p>
                    </div>
                    <div id="projects" />
                  </div>
                </div>
              </div>
            </div>
            {/* Comming Soon */}
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center mb-7">
                  <div className="me-3 pe-1">
                    <img src="../../dist/images/profile/user1.jpg" className="shadow-warning rounded-2" alt />
                  </div>
                  <div>
                    <h5 className="fw-medium mb-3">
                      Super awesome, Vue coming soon!
                    </h5>
                    <p className="fs-3 mb-0">22 March, 2022</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <ul className="d-flex align-items-center mb-0">
                    <li>
                      <a href="javascript:void(0)" className="me-1">
                        <img src="../../dist/images/profile/user-4.jpg" className="rounded-circle" width={32} height={32} alt />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="me-1">
                        <img src="../../dist/images/profile/user-5.jpg" className="rounded-circle" width={32} height={32} alt />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="me-1">
                        <img src="../../dist/images/profile/user-3.jpg" className="rounded-circle" width={32} height={32} alt />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="me-1">
                        <img src="../../dist/images/profile/user-2.jpg" className="rounded-circle" width={32} height={32} alt />
                      </a>
                    </li>
                    <li className="align-middle d-flex">
                      <a href="javascript:void(0)" className="link-secondary me-1 px-2">
                        <p className="mb-0">+18</p>
                      </a>
                    </li>
                  </ul>
                  <a className="link-secondary" href="javascript:void(0)">
                    <i data-feather="message-circle" className="feather-base" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Selling Products */}
          <div className="col-lg-4">
            <div className="card bg-primary border-0">
              <div className="card-body pb-0">
                <h5 className="fw-normal mb-1 text-white">
                  Best Selling Products
                </h5>
                <p className="fs-3 mb-0 text-white">Overview 2022</p>
                <div className="text-center">
                  <img src="../../dist/images/background/piggy.png" className="img-fluid" alt />
                </div>
              </div>
              <div className="card mx-3 mb-3 mt-n2">
                <div className="card-body">
                  <div className="mb-7 pb-1">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <h6 className="mb-1">MaterialPro</h6>
                        <p className="fs-3 mb-0">$23,568</p>
                      </div>
                      <div>
                        <span className="badge bg-light-primary text-primary fw-bold fs-3">55%</span>
                      </div>
                    </div>
                    <div className="progress bg-light-primary">
                      <div className="progress-bar w-50" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <h6 className="mb-1">Flexy Admin</h6>
                        <p className="fs-3 mb-0">$23,568</p>
                      </div>
                      <div>
                        <span className="badge bg-light-info text-info fw-bold fs-3">20%</span>
                      </div>
                    </div>
                    <div className="progress bg-light-info">
                      <div className="progress-bar bg-info w-25" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Row 3 */} 
        <div className="row">
          {/* Weekly Stats */}
          <div className="col-lg-4 d-flex align-items-strech">
            <div className="card w-100">
              <div className="card-body">
                <h5 className="card-title">Weekly Stats</h5>
                <p className="card-subtitle mb-0">Average sales</p>
              </div>
              <div id="stats" className="pb-4" />
              <div className="card-body mt-5">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex">
                    <div className="bg-light-danger p-2 me-3 rounded-circle">
                      <i data-feather="shopping-cart" className="feather-lg text-danger" />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Top Sales</h6>
                      <p className="fs-3 mb-0">Johnathan Doe</p>
                    </div>
                  </div>
                  <p className="fs-3 text-danger mb-0">+68%</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex">
                    <div className="bg-light-info p-2 me-3 rounded-circle">
                      <i data-feather="star" className="feather-lg text-info" />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Best Seller</h6>
                      <p className="fs-3 mb-0">MaterialPro Admin</p>
                    </div>
                  </div>
                  <p className="fs-3 text-info mb-0">+68%</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex">
                    <div className="bg-light-warning p-2 me-3 rounded-circle">
                      <i data-feather="message-square" className="feather-lg text-warning" />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Most Commented</h6>
                      <p className="fs-3 mb-0">Ample Admin</p>
                    </div>
                  </div>
                  <p className="fs-3 text-warning mb-0">+68%</p>
                </div>
              </div>
            </div>
          </div>
          {/* Top Performers */}
          <div className="col-lg-8 d-flex align-items-strech">
            <div className="card w-100">
              <div className="card-body">
                <div className="d-sm-flex d-block align-items-center justify-content-between mb-7">
                  <div className="mb-3 mb-sm-0">
                    <h5 className="card-title">Top Performers</h5>
                    <p className="card-subtitle mb-0">Best Employees</p>
                  </div>
                  <div>
                    <select className="form-select">
                      <option value={1}>March 2022</option>
                      <option value={2}>April 2022</option>
                      <option value={3}>May 2022</option>
                      <option value={4}>June 2022</option>
                    </select>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table align-middle text-nowrap mb-0 hover-table-border table-hover">
                    <thead>
                      <tr className="text-dark fs-3">
                        <th scope="col">Assigned</th>
                        <th scope="col">Project</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Budget</th>
                      </tr>
                    </thead>
                    <tbody className="border-top">
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="me-2 pe-1">
                              <img src="../../dist/images/profile/user-1.jpg" className="rounded-circle" width={45} height={45} alt />
                            </div>
                            <div>
                              <h6 className="fw-medium mb-0">Sunil Joshi</h6>
                              <p className="fs-3 mb-0 text-muted">Web Designer</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="mb-0 fs-3">Elite Admin</p>
                        </td>
                        <td>
                          <span className="badge bg-light-primary text-primary">Low</span>
                        </td>
                        <td>
                          <p className="fs-3 text-dark mb-0">$3.9K</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="me-2 pe-1">
                              <img src="../../dist/images/profile/user-2.jpg" className="rounded-circle" width={45} height={45} alt />
                            </div>
                            <div>
                              <h6 className="fw-medium mb-0">John Deo</h6>
                              <p className="fs-3 mb-0 text-muted">
                                Web Developer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="mb-0 fs-3">Flexy Admin</p>
                        </td>
                        <td>
                          <span className="badge bg-light-warning text-warning">Medium</span>
                        </td>
                        <td>
                          <p className="fs-3 text-dark mb-0">$24.5K</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="me-2 pe-1">
                              <img src="../../dist/images/profile/user-3.jpg" className="rounded-circle" width={45} height={45} alt />
                            </div>
                            <div>
                              <h6 className="fw-medium mb-0">Nirav Joshi</h6>
                              <p className="fs-3 mb-0 text-muted">Web Manager</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="mb-0 fs-3">Material Pro</p>
                        </td>
                        <td>
                          <span className="badge bg-light-info text-info">High</span>
                        </td>
                        <td>
                          <p className="fs-3 text-dark mb-0">$12.8K</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="me-2 pe-1">
                              <img src="../../dist/images/profile/user-4.jpg" className="rounded-circle" width={45} height={45} alt />
                            </div>
                            <div>
                              <h6 className="fw-medium mb-0">Yuvraj Sheth</h6>
                              <p className="fs-3 mb-0 text-muted">
                                Project Manager
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="mb-0 fs-3">Xtreme Admin</p>
                        </td>
                        <td>
                          <span className="badge bg-light-success text-success">Low</span>
                        </td>
                        <td>
                          <p className="fs-3 text-dark mb-0">$4.8K</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-0">
                          <div className="d-flex align-items-center">
                            <div className="me-2 pe-1">
                              <img src="../../dist/images/profile/user-5.jpg" className="rounded-circle" width={45} height={45} alt />
                            </div>
                            <div>
                              <h6 className="fw-medium mb-0">Micheal Doe</h6>
                              <p className="fs-3 mb-0 text-muted">
                                Content Writer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="border-0">
                          <p className="mb-0 fs-3">Helping Hands WP Theme</p>
                        </td>
                        <td className="border-0">
                          <span className="badge bg-light-danger text-danger">High</span>
                        </td>
                        <td className="border-0">
                          <p className="fs-3 text-dark mb-0">$9.3K</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*  Shopping Cart */} 
  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasRightLabel">Shopping Cart</h5>
      <span data-bs-dismiss="offcanvas" className="link-secondary cursor-pointer">
        <i className="feather-base ms-4" data-feather="x-circle" />
      </span>
    </div>
    <div className="offcanvas-body h-100" data-simplebar>
      <ul>
        <li className="pb-4 border-bottom">
          <div className="d-flex align-items-center py-2">
            <img src="../../dist/images/products/product-1.jpg" width={98} className="rounded-2 me-3" alt />
            <div>
              <h6 className="fs-4 fw-normal mb-0">Supreme toys cooker</h6>
              <p className="mb-0 text-muted fs-3">Kitchenware Item</p>
              <div className="d-flex align-items-center mt-1">
                <h6 className="fs-4 me-2 fw-normal mb-0">$250</h6>
                <div className="input-group input-group-sm w-35">
                  <button className="btn btn-light-success text-success rounded-1 minus" type="button" id="add1">
                    -
                  </button>
                  <input type="text" className="form-control bg-transparent border-0 rounded-1 text-center qty" placeholder aria-label="Example text with button addon" aria-describedby="add1" defaultValue={1} />
                  <button className="btn btn-light-success text-success rounded-1 add" type="button" id="addo2">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="py-4 border-bottom">
          <div className="d-flex align-items-center py-2">
            <img src="../../dist/images/products/product-2.jpg" width={98} className="rounded-2 me-3" alt />
            <div>
              <h6 className="fs-4 fw-normal mb-0">Supreme toys cooker</h6>
              <p className="mb-0 text-muted fs-3">Kitchenware Item</p>
              <div className="d-flex align-items-center mt-1">
                <h6 className="fs-4 me-2 fw-normal mb-0">$250</h6>
                <div className="input-group input-group-sm w-35">
                  <button className="btn btn-light-success text-success rounded-1 minus" type="button" id="add2">
                    -
                  </button>
                  <input type="text" className="form-control bg-transparent border-0 rounded-1 text-center qty" placeholder aria-label="Example text with button addon" aria-describedby="add2" defaultValue={1} />
                  <button className="btn btn-light-success text-success rounded-1 add" type="button" id="addon34">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="py-4 border-bottom">
          <div className="d-flex align-items-center py-2">
            <img src="../../dist/images/products/product-3.jpg" width={98} className="rounded-2 me-3" alt />
            <div>
              <h6 className="fs-4 fw-normal mb-0">Supreme toys cooker</h6>
              <p className="mb-0 text-muted fs-3">Kitchenware Item</p>
              <div className="d-flex align-items-center mt-1">
                <h6 className="fs-4 me-2 fw-normal mb-0">$250</h6>
                <div className="input-group input-group-sm w-35">
                  <button className="btn btn-light-success text-success rounded-1 minus" type="button" id="add3">
                    -
                  </button>
                  <input type="text" className="form-control bg-transparent border-0 rounded-1 text-center qty" placeholder aria-label="Example text with button addon" aria-describedby="add3" defaultValue={1} />
                  <button className="btn btn-light-success text-success rounded-1 add" type="button" id="addon3">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="align-bottom">
        <div className="d-flex align-items-center py-2">
          <span className="text-muted fs-3">Sub Total</span>
          <div className="ms-auto">
            <span className="text-dark fw-normal fs-3">$2530</span>
          </div>
        </div>
        <div className="d-flex align-items-center py-2">
          <span className="text-muted fs-3">Total</span>
          <div className="ms-auto">
            <span className="text-dark fw-normal fs-3">$6830</span>
          </div>
        </div>
        <a className="btn btn-primary text-white w-100 d-block" href="javascript:void(0);">
          Place order
        </a>
      </div>
    </div>
  </div>
  {/*  Search Bar */} 
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body">
          <div className="d-flex align-items-center">
            <input type="search" className="form-control" placeholder="search..." id="search" />
            <span data-bs-dismiss="modal" className="link-secondary cursor-pointer">
              <i className="feather-base ms-4" data-feather="x-circle" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*  Customizer */} 
  <button className="btn btn-danger rounded-circle d-flex align-items-center justify-content-center customizer-btn p-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
    <i data-feather="settings" className="feather-base" />
  </button>
  <div className="offcanvas offcanvas-end customizer" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasExampleLabel">Customizer</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="p-3 border-top theme-dark-mode">
      {/* Dark Mode */}
      <h6 className="mb-3">Dark Mode</h6>
      <div className="position-relative">
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="theme-view" />
          <label className="form-check-label" htmlFor="theme-view"><a href="../dark/index.html" className="text-secondary stretched-link">Dark Theme</a></label>
        </div>
      </div>
    </div>
    <div className="p-3 border-top">
      {/* Minisidebar Mode */}
      <h6 className="mb-3">Minisidebar</h6>
      <div className="form-check form-switch position-relative">
        <input className="form-check-input sidebartoggler" type="checkbox" role="switch" id="collapssidebar" />
        <label className="form-check-label" htmlFor="collapssidebar"><a href="javascript:void(0)" className="text-secondary sidebartoggler">Collapse Sidebar</a></label>
      </div>
    </div>
    <div className="p-3 border-top">
      {/* Fixed Position Mode */}
      <h6 className="mb-3">Fixed Position</h6>
      <div className="form-check form-switch cursor-pointer">
        <input className="form-check-input" type="checkbox" role="switch" id="sidebar-position" />
        <label className="form-check-label cursor-pointer" htmlFor="sidebar-position">Fixed Sidebar</label>
      </div>
      <div className="form-check form-switch cursor-pointer">
        <input className="form-check-input" type="checkbox" role="switch" id="header-position" />
        <label className="form-check-label cursor-pointer" htmlFor="header-position">Fixed Header</label>
      </div>
    </div>
    <div className="p-3 border-top">
      {/* Minisidebar Mode */}
      <h6 className="mb-3">Sidebar Background</h6>
      <ul className="theme-color m-0 p-0">
        <li className="theme-item list-inline-item me-1">
          <a href="javascript:void(0)" className="theme-link rounded-circle d-block" data-sidebarbg="skin1" />
        </li>
        <li className="theme-item list-inline-item me-1">
          <a href="javascript:void(0)" className="theme-link rounded-circle d-block" data-sidebarbg="skin2" />
        </li>
        <li className="theme-item list-inline-item me-1">
          <a href="javascript:void(0)" className="theme-link rounded-circle d-block" data-sidebarbg="skin3" />
        </li>
        <li className="theme-item list-inline-item me-1">
          <a href="javascript:void(0)" className="theme-link rounded-circle d-block" data-sidebarbg="skin4" />
        </li>
        <li className="theme-item list-inline-item me-1">
          <a href="javascript:void(0)" className="theme-link rounded-circle d-block" data-sidebarbg="skin5" />
        </li>
        <li className="theme-item list-inline-item me-1">
          <a href="javascript:void(0)" className="theme-link rounded-circle d-block" data-sidebarbg="skin6" />
        </li>
      </ul>
    </div>
  </div>
  {/*  Customizer */} 
  {/*  Import Js Files */} 
  {/*  core files */} 
  {/*  current page js files */} 
</div>



     {/* End */}
    </div>
  );
}

export default Dashboard;
