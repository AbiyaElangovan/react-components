/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "./components/Sidebar";
import Navigation from "./components/Navigation";

import "./css/sb-admin-2.css";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        {/*  Content Wrapper  */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/*  Main Content  */}
          <div id="content">
            <Navigation />
            <MainContent />
          </div>
          {/* End of Main Content  */}
          <Footer />
        </div>
        {/*  End of Content Wrapper  */}
      </div>
      {/* End of Page Wrapper  */}

      {/* Scroll to Top Button */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      {/* Logout Modal */}
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select `Logout` below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;