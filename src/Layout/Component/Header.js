
function Header() {
  return (
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
);
}

export default Header;