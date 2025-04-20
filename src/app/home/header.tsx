import Image from "next/image";
import { Fragment, useState } from "react";

export default function Header() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isIconFlipped, setIsIconFlipped] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const handleLoginClick = (e: any) => {
        e.preventDefault();
        setIsIconFlipped(!isIconFlipped);
        setIsModalVisible(!isModalVisible);
      };
    return (
       <Fragment>
         <div className="topHeader">
        <div className="container">
          <button
            className="menuButton"
            type="button"
            onClick={() => {
                setIsOpenMenu(true)
                console.log(1)
            }}
          >
            <i className="bx bx-menu" />
          </button>
          <div className="logoNav">
            <a href="/">
              <img
                src="./Meta Pro Support_ Facebook and Instagram_files/logo-white.png"
                alt="Logo"
                width={95}
              />
            </a>
          </div>
          <div className="rightSide">
            <ul>
              <li>
                <a href="/login">Jobs</a>
              </li>
              <li>
                <a href="/login">
                  Areas of Work
                </a>
              </li>
              <li>
                <a href="/login">Locations</a>
              </li>
              <li>
                <a href="/login">
                  Career Programs
                </a>
              </li>
              <li>
                <a href="/login">
                  How We Work
                </a>
              </li>
              <li>
                <a href="/login">Blog</a>
              </li>
            </ul>
            <div className="searchIcon">
              <i className="bx bx-search" />
            </div>
            <a className="login" onClick={handleLoginClick}>
              Log in
              {/*-<i class='bx bx-chevron-down bx-flip-vertical' ></i> */}
              <i
                className={
                  !isIconFlipped
                    ? "bx bx-chevron-down"
                    : "bx bx-chevron-down bx-flip-vertical"
                }
              />
            </a>
          </div>
        </div>
      </div>
      <div className={`menuOverlay ${isOpenMenu ? "active" : ""}`}>
        <button
          className="menuButton"
          type="button"
          onClick={() => setIsOpenMenu(false)}
        >
          ✕
        </button>
        <ul>
          <li>
            <a href="/login" target="_blank">
              Jobs
            </a>
          </li>
          <li>
            <a href="/login" target="_blank">
              Areas of Work
            </a>
          </li>
          <li>
            <a href="/login" target="_blank">
              Locations
            </a>
          </li>
          <li>
            <a href="/login" target="_blank">
              Career Programs
            </a>
          </li>
          <li>
            <a href="/login" target="_blank">
              How We Work
            </a>
          </li>
          <li>
            <a href="/login" target="_blank">
              Blog
            </a>
          </li>
        </ul>
        <h2>Create Career Profile</h2>
        <p>
          You can create a Career Profile to get job suggestions, prepare for
          the interview process, and more.
        </p>
        <a
          href={"/login"}
          className="startNow"
        >
          Create Career Profile
        </a>
        <p>Already have a Career Profile?</p>
        <a href="/login" className="login">
          Log in
        </a>
      </div>
      <div className={`login-modal ${isModalVisible ? "visible" : ""}`}>
        <h2>Create Career Profile</h2>
        <p>
          You can create a Career Profile to get job suggestions, prepare for
          the interview process, and more.
        </p>
        <a
          href={"/login"}
          className="create-career"
        >
          Create Career Profile
        </a>
        <p>Already have a Career Profile?</p>
        <a href="/login" className="login">
          Log in
        </a>
      </div>
       </Fragment>
    )
}