
import './App.css';
import Dashboard from './Layout/Dashboard';
import Sidebar from './Layout/Component/Sidebar';
import Header from './Layout/Component/Header';
function App() {
  return (
   
     <div>
  {/* Preloader */}
  <div className="preloader">
    <img src="assets/images/logo/loader.svg" alt="loader" className="tea lds-ripple" />
  </div>
  {/*  Body Wrapper */}
  <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    {/* Sidebar Start */}
      <Sidebar/>
    {/*  Sidebar End */} 
    {/*  Main wrapper */} 
    <div className="body-wrapper">
      {/*  Header Start */} 
      <Header/>
      {/*  Header End */} 
      <div className="container-fluid">
        {/*  Owl carousel */} 
        <div className="owl-carousel counter-carousel owl-theme">
          <div className="item">
            <div className="card border-0 zoom-in bg-light-primary shadow-none">
              <div className="card-body">
                <div className="text-center">
                  <img src="assets/images/svgs/icons8-user-male.svg" width={50} height={50} className="mb-3" alt />
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
                  <img src="assets/images/svgs/icons8-briefcase.svg" width={50} height={50} className="mb-3" alt />
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
                  <img src="assets/images/svgs/icons8-mailbox.svg" width={50} height={50} className="mb-3" alt />
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
                  <img src="assets/images/svgs/icons8-favorites.svg" width={50} height={50} className="mb-3" alt />
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
                  <img src="assets/images/svgs/icons8-speech-bubble.svg" width={50} height={50} className="mb-3" alt />
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
                  <img src="assets/images/svgs/icons8-connect.svg" width={50} height={50} className="mb-3" alt />
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
                    <img src="assets/images/profile/user1.jpg" className="shadow-warning rounded-2" alt />
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
                        <img src="assets/images/profile/user-4.jpg" className="rounded-circle" width={32} height={32} alt />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="me-1">
                        <img src="assets/images/profile/user-5.jpg" className="rounded-circle" width={32} height={32} alt />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="me-1">
                        <img src="assets/images/profile/user-3.jpg" className="rounded-circle" width={32} height={32} alt />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="me-1">
                        <img src="assets/images/profile/user-2.jpg" className="rounded-circle" width={32} height={32} alt />
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
                  <img src="assets/images/background/piggy.png" className="img-fluid" alt />
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
                              <img src="assets/images/profile/user-1.jpg" className="rounded-circle" width={45} height={45} alt />
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
                              <img src="assets/images/profile/user-2.jpg" className="rounded-circle" width={45} height={45} alt />
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
                              <img src="assets/images/profile/user-3.jpg" className="rounded-circle" width={45} height={45} alt />
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
                              <img src="assets/images/profile/user-4.jpg" className="rounded-circle" width={45} height={45} alt />
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
                              <img src="assets/images/profile/user-5.jpg" className="rounded-circle" width={45} height={45} alt />
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
            <img src="assets/images/products/product-1.jpg" width={98} className="rounded-2 me-3" alt />
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
            <img src="assets/images/products/product-2.jpg" width={98} className="rounded-2 me-3" alt />
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
            <img src="assets/images/products/product-3.jpg" width={98} className="rounded-2 me-3" alt />
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
</div>

    
   
  );
}

export default App;
