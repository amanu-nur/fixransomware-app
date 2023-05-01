import React, { useState } from "react";
import { Navbar, Footer } from "../../Components";

function Home() {
  const [hackerNote, setHackerNote] = useState();
  const [ransom, setRansom] = useState();

  const handleChangeRansom = (e) => {
    if (e.target.files) {
      setRansom(e.target.files[0]);
    }
  };

  const handleChangeNote = (e) => {
    if (e.target.files) {
      setHackerNote(e.target.files[0]);
    }
  };

  const Decrypt = () => {
    return (
      <div className="input-file">
        <i className="ic-decrypt"></i>
        <span className="title-form">Decrypt Infected File</span>
        <span className="desc-form">
          A file which has been encrypted, and cannot be opened.
        </span>
        <button className="btn btn-primary">Decrypt Now</button>
      </div>
    );
  };

  return (
    <div className="main-menu">
      <Navbar />
      <div className="menu-wrapper">
        <section className="main-page">
          <div className="main-page-left">
            <button className="btn button-scan-wrap">
              scan
              <br />
              now
            </button>
          </div>
          <hr className="vertical-line" />
          <div className="main-page-right">
            <span className="title-page">Decrypt</span>
            <span className="desc-page">
              Upload suspicious note and/or sample encrypted files to identify
              the ransomware that has encrypted your data.
            </span>
            <div className="form-body">
              <div className="input-file">
                <i className="ic-file"></i>
                <span className="title-form">Scan Sample</span>
                <span className="desc-form">Upload file terinfeksi.</span>
                <label htmlFor="scan-file" className="btn btn-primary">
                  Choose File
                </label>
                <input
                  id="scan-file"
                  type="file"
                  onChange={handleChangeRansom}
                  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                />
              </div>
              <div className="input-file">
                <i className="ic-note"></i>
                <span className="title-form">Ransom Note</span>
                <span className="desc-form">Upload pesan teror hacker.</span>
                <label htmlFor="ransom-note" className="btn btn-primary">
                  Choose File
                </label>
                <input
                  id="ransom-note"
                  type="file"
                  onChange={handleChangeNote}
                  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                />
              </div>
              {ransom && hackerNote ? <Decrypt /> : undefined}
            </div>
          </div>
        </section>
        <div className="container">
          <span className="text-bottom">
            By submitting data above, you are agreeing to our Terms of Service
            and Privacy Policy.{" "}
            <a
              href="http://youtube.com"
              target="_blank"
              className="links"
              rel="noopener noreferrer"
            >
              Learn more.
            </a>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
