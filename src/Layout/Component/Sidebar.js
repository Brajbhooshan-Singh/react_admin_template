
function Sidebar() {
  return (
    
    
     <aside className="left-sidebar">
    
     <div>
       <div className="brand-logo d-flex align-items-center justify-content-between">
         <a href="#" className="text-nowrap logo-img">
           <img src="https://demos.wrappixel.com/premium-admin-templates/bootstrap/modernize-bootstrap/package/dist/images/logo/modernize-dark-logo.svg" width={180} alt />
         </a>
         <div className="close-btn d-lg-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
           <i data-feather="x-circle" className="feather-base ms-auto" />
         </div>
       </div>
      
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
             <a className="sidebar-link sidebar-link" href="#" aria-expanded="false">
               <span>
                 <i data-feather="activity" className="feather-base" />
               </span>
               <span className="hide-menu">General</span>
             </a>
           </li>
           <li className="sidebar-item">
             <a className="sidebar-link sidebar-link" href="#" aria-expanded="false">
               <span>
                 <i data-feather="music" className="feather-base" />
               </span>
               <span className="hide-menu">Music</span>
             </a>
           </li>
           <li className="sidebar-item">
             <a className="sidebar-link sidebar-link" href="#" aria-expanded="false">
               <span>
                 <i data-feather="dollar-sign" className="feather-base" />
               </span>
               <span className="hide-menu">NFT</span>
             </a>
           </li>
           <li className="sidebar-item">
             <a className="sidebar-link sidebar-link" href="#" aria-expanded="false">
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
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Accordian</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Badge</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Buttons</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Dropdowns</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Modals</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Tab</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Tooltip &amp; Popover</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Notification</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Progressbar</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Pagination</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Typography</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Bootstrap UI</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Breadcrumb</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Offcanvas</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Lists</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Grid</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Carousel</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Scrollspy</span>
                 </a>
               </li>
               <li className="sidebar-item mb-3">
                 <a href="#" className="sidebar-link">
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
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Forms Input</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Input Groups</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Input Grid</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Checkbox &amp; Radios</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Bootstrap Touchspin</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Bootstrap Switch</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Select2</span>
                 </a>
               </li>
               <li className="sidebar-item mb-3">
                 <a href="#" className="sidebar-link">
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
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Basic Form</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Form Horizontal</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
                   <i data-feather="circle" className="feather-sm" />
                   <span className="hide-menu">Form Actions</span>
                 </a>
               </li>
               <li className="sidebar-item">
                 <a href="#" className="sidebar-link">
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
      
     </div>
    
   </aside>
   
    
   
  );
}

export default Sidebar;
