import './App.css'
import logo from './images/FarmX_logo.png'
import arrow from './images/right-arrow.svg'
import graph from './images/graph-dark.svg'
import feature1 from './images/feature-one.svg'
import feature2 from './images/feature-two.svg'
import feature3 from './images/feature-three.svg'
import illustration from './images/grafic.png'
import trust1 from './images/logo_1_light.png'
import trust2 from './images/logo_2_light.png'
import trust3 from './images/logo_3_light.png'
import trust4 from './images/logo_4_light.png'
import trust5 from './images/logo_5_light.png'
import team1 from './images/team1.png'
import team2 from './images/team2.png'
import team3 from './images/team3.png'
import team4 from './images/team4.png'
import team5 from './images/team5.png'
import footerLogo from './images/footer_logo.svg'
import facebook from './images/facebook-icon.svg'
import twitter from './images/twitter-icon.svg'
// import linked from './images/medium.svg'
import github from './images/github-icon.svg'
import fmx from './images/FMX.png'
import nice_fmx from './images/FMX_bo.png'
import tg from './images/tg.png'
import ethStuff from './images/ethStuff.png'
import fmx_pairs from './images/FMX_pairs.png'
import all_pairs from './images/all_pairs.png'
import plsx_pls from './images/plsx_pls.png'

import eth from './images/eth-logo.png'
import bsc from './images/binance_logo.png'

import pairs_pulse from './images/plsx_pls.png'

import copy from './images/copy.svg'

import disclaimer from './docs/FMX_Disclaimer.pdf'

import { CopyToClipboard } from 'react-copy-to-clipboard'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown'
import '@leenguyen/react-flip-clock-countdown/dist/index.css'
import { useState, useEffect } from 'react'
function App() {
  ChartJS.register(ArcElement, Tooltip, Legend)
  const [nav, setNav] = useState(0)
  const [showAdress, setshowAdress] = useState('eth')
  const [endTime, setEndTime] = useState(0)
  const [sentence, setSentence] = useState('will start in :')
  const [sacrificeSentence, setSacrificeSentece] = useState('')

  const setClipboard = (e) => {
    e.clipboardData.setData('0x08076130321f2E9fEE550D6B8ABbE390D2d92055')
  }

  const checkData = () => {
    const now = +new Date()
    // const _now = now.setSeconds(now.getSeconds())
    const _now = Math.floor(+new Date() / 1000)
    // const _now = 1659996010
    // setEndTime(new Date(1654725600))

    if (_now <= 1654725600) {
      //? 17/05/22
      //*Sacrifice Starts in..
      setSentence('will start in :')
      setEndTime(new Date(1654725600))
    } else if (_now > 1654725600 && _now < 1657317600) {
      //? 31/05/22
      //* Sacrifice BONUS Multiplier x5
      setSentence('phase I will end in :')
      setEndTime(new Date(1657317600))
    } else if (_now >= 1657317600 && _now < 1659996000) {
      //? 30/06//22
      //* Sacrifice BONUS Multiplier x2 (Decreasing 1% x day)
      setSentence('phase II will end in :')
      setEndTime(new Date(1659996000))
    } else if (_now >= 1659996000 && _now < 1662674400) {
      //? 17/07/22
      //* Sacrifice BONUS Multiplier x1 (While decreasign 1% x day since previous-stage)
      setSentence('BONUS Multiplier x1  ends in')
      setEndTime(new Date(1662674400))
    }
  }

  const options = {
    responsive: true,
    aspectRatio: 1.65,
    plugins: {
      legend: {
        display: true,
        rtl: false,
        position: 'right',
        labels: {
          color: '#ffffff',
          usePointStyle: true,
        },
      },
    },
  }
  const options1 = {
    responsive: true,
    aspectRatio: 1.5,
    plugins: {
      legend: {
        display: true,
        rtl: false,
        position: 'right',
        labels: {
          color: '#ffffff',
          usePointStyle: true,
        },
      },
    },
  }

  const data = {
    labels: [
      'Sacrifice',
      'Team',
      'Liquidity Mining',
      'Treasury',
      'Advisors & Partners',
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [55, 10, 25, 5, 10],
        backgroundColor: [
          '#6660ff',
          '#d7a7ff',
          '#5ba5f8',
          '#d95af9',
          '#f89c5a',
        ],
        borderColor: ['#6660ff', '#d7a7ff', '#5ba5f8', '#d95af9', '#f89c5a'],
      },
    ],
  }
  const data1 = {
    labels: ['Marketing', 'Development', 'Promotions', 'I+D+i', 'Donations'],
    datasets: [
      {
        label: '# of Votes',
        data: [60, 20, 5, 10, 5],
        backgroundColor: [
          '#6660ff',
          '#d7a7ff',
          '#5ba5f8',
          '#d95af9',
          '#f89c5a',
        ],
        borderColor: ['#6660ff', '#d7a7ff', '#5ba5f8', '#d95af9', '#f89c5a'],
      },
    ],
  }

  useEffect(() => {
    checkData()
  }, [])

  return (
    <div className="App">
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#">
            <img height="100px" src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            onClick={() => setNav(!nav)}
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            style={{ display: nav ? 'flex' : 'none' }}
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav"
              style={{
                marginLeft: 'auto',
              }}
            >
              <li className="nav-item active">
                <a
                  className="nav-link"
                  onClick={() => setNav(!nav)}
                  href="#features"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => setNav(!nav)}
                  href="#sacrifice"
                >
                  Sacrifice
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => setNav(!nav)}
                  href="#tokonomics"
                >
                  Tokonomics
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => setNav(!nav)}
                  href="#road-map"
                >
                  RoadMap
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => setNav(!nav)}
                  href="https://medium.com/@farmX"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <a href="#" className="btn btn-primary ">
                FarmX App
              </a>
            </ul>
          </div>
        </nav>
        <div
          style={{ positon: 'relative' }}
          className="site-header  d-flex flex-column align-items-center justify-content-between"
        >
          <img
            className="hero-nice"
            style={{
              position: 'absolute',
              right: '13%',
              bottom: '280px',
              width: '480px',
              zIndex: '-20',
            }}
            src={nice_fmx}
            alt=""
          />
          <div className="hero">
            <h1>
              <span className="highlight"> PulseX</span> Yield Farming
            </h1>
            <p className="lead mt-3 mx-auto">
              It’s time to empower the first Decentralized Exchange of Pulse
              Chain. With FarmX you will be able to stake your PulseX LPs
            </p>
            <a href="#sacrifice" className="btn btn-primary mt-3">
              Get <b>FMX</b> <img src={arrow} alt="arrow" />
            </a>
          </div>
          <div className="graph">
            <img src={graph} alt="graph" className="img-fluid" />
          </div>
          <div className="text-center mx-4">
            <h4 className="centered-text mb-4 section-highlight-text ">
              Built for incentivizing <span className="highlight"> PLS</span> &{' '}
              <span className="highlight"> PLSX</span> holders, farming is an
              easy and comprehensive way for investors to adopt and support
              revolutionary DeFi projects
            </h4>
          </div>
        </div>
        <section id="features" className="section feature-highlight">
          <div className="container">
            <div className="section-title mini-title">
              <h4>FMX Features</h4>
            </div>
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="feature-item">
                  <img
                    src={feature1}
                    alt="icon"
                    className="featured-item-icon"
                  />
                  <h4 className="featured-item-title">Transactionality</h4>
                  <p>
                    PulseChain Low Tx Fees allow DeFi projects and Users to
                    operate their assets with no cost.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="feature-item">
                  <img
                    height="65px"
                    src={fmx}
                    alt="icon"
                    className="featured-item-icon"
                  />
                  <h4 className="featured-item-title">FMX (PRC20)</h4>
                  <p>
                    FMX holders will enjoy factor multipliers based on the FMX
                    amount they hodl in their wallet.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="feature-item">
                  <img
                    src={feature1}
                    alt="icon"
                    className="featured-item-icon"
                  />
                  <h4 className="featured-item-title">Cross Platform Dapp</h4>
                  <p>
                    Our main goals is to develop a Cross-Platform Dapp so all
                    users can use FarmX.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="feature-item">
                  <img
                    src={feature2}
                    alt="icon"
                    className="featured-item-icon"
                  />
                  <h4 className="featured-item-title">Solidity Secured</h4>
                  <p>
                    FMX is PRC20 (PulseChain ERC-20 standard), FarmX protocol is
                    also designed and developed with Solidity.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="feature-item">
                  <img
                    src={feature1}
                    alt="icon"
                    className="featured-item-icon"
                  />
                  <h4 className="featured-item-title">Scalable System</h4>
                  <p>
                    Our FarmX architecture allows platform to accept and offer
                    more project rewards, everything for PLS adoption.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="feature-item">
                  <img
                    src={feature2}
                    alt="icon"
                    className="featured-item-icon"
                  />
                  <h4 className="featured-item-title">sFMX </h4>
                  <p>
                    It’s the fastest and most secured digital asset, enabling
                    users to stake FMX. Simple equation: 1.sFMX {'>'} 1.FMX
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* // container */}
        </section>
        <section id="sacrifice" className="section section-highlight">
          <div className="container">
            <div className="section-title max-title">
              <h3>FMX Sacrifice</h3>
            </div>
            <p className="lead p-3 centered-text text-center mx-auto">
              FMX is a fixed token economy set by the demand of FMX Sacrifice,{' '}
              {sentence}
            </p>
            <div
              className="text-center"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '16px',
                marginBottom: '32px',
              }}
            >
              <FlipClockCountdown className="flip-clock" to={endTime * 1000} />
            </div>
            {/* // progress-area */}
            <div className="row text-center">
              <div className="col">
                <h3 className="display-5 mb-5">
                  <font color="b443b9">
                    BONUS <b>x4</b>
                  </font>
                </h3>
                <h3 className="display-5 mb-5">1 USD = 4 FMX</h3>
                Until 09th July 2022
              </div>
              <div className="col">
                <h3 className="display-5 mb-5">
                  <font color="b443b9">
                    BONUS <b>x2.5</b>
                  </font>
                </h3>
                <h3 className="display-5 mb-5">1 USD = 2.5 FMX</h3>
                Until 09th August 2022
              </div>
              <div className="col">
                <h3 className="display-5 mb-5">
                  <font color="b443b9">
                    BONUS
                    <b> x1.6</b>
                  </font>
                </h3>
                <h3 className="display-5 mb-5">1 USD = 1.6 FMX</h3>
                Until 09th September 2022
              </div>
            </div>
            {/* // row */}
            <br></br>
            <br></br>
            <br></br>
            <div className="text-center">
              <font size="+2" color="b443b9">
                Select Network for Sacrifice
              </font>
              <br></br>
              <div
                className="d-flex ml-auto mr-auto justify-content-between"
                style={{ flexDirection: 'column' }}
              >
                <div
                  style={{
                    flexWrap: 'wrap',
                    display: ' flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    gap: '20px',
                  }}
                >
                  <button
                    className="btn btn-lg btn-primary d-flex align-items-center mt-5"
                    style={{
                      background: '#2e3880',
                      border: '2px solid transparent',
                      transition: '0.5s ease',
                      borderColor:
                        showAdress === 'eth' ? '#a941b1' : 'transparent',
                    }}
                    onClick={() => setshowAdress('eth')}
                  >
                    ETH{' '}
                    <img
                      style={{ width: '21px', marginLeft: '5px' }}
                      src={eth}
                      alt=""
                    />
                  </button>{' '}
                  <button
                    className="btn btn-lg btn-primary d-flex align-items-center mt-5"
                    style={{
                      background: '#2e3880',
                      border: '2px solid transparent',
                      transition: '0.5s ease',
                      borderColor:
                        showAdress === 'bsc' ? '#a941b1' : 'transparent',
                    }}
                    onClick={() => setshowAdress('bsc')}
                  >
                    BSC{' '}
                    <img
                      style={{ width: '21px', marginLeft: '5px' }}
                      src={bsc}
                      alt=""
                    />
                  </button>{' '}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {showAdress === 'eth' ? (
                    <span
                      style={{ overflowWrap: 'break-word', marginTop: '30px' }}
                    >
                      <span
                        style={{
                          wordBreak: 'break-all',
                          overflowWrap: 'break-word',
                          fontSize: '21px',
                        }}
                      >
                        0x1848E753B57b4e50BC9c1AA3d22074aA16472917
                      </span>
                    </span>
                  ) : (
                    <span style={{ wordBreak: 'break-all', marginTop: '30px' }}>
                      <span
                        style={{
                          overflowWrap: 'break-word',
                          wordBreak: 'break-all',
                          fontSize: '21px',
                        }}
                      >
                        0x1848E753B57b4e50BC9c1AA3d22074aA16472917
                      </span>
                    </span>
                  )}
                  <CopyToClipboard
                    text={
                      showAdress === 'eth'
                        ? '0x1848E753B57b4e50BC9c1AA3d22074aA16472917'
                        : '0x1848E753B57b4e50BC9c1AA3d22074aA16472917'
                    }
                  >
                    <button
                      style={{
                        background: 'none',
                        border: 'none',
                        outline: 'none',
                        marginTop: '25px',
                      }}
                    >
                      <img
                        style={{ cursor: 'pointer', width: '25px' }}
                        className="ml-1 "
                        src={copy}
                        onClick={setClipboard}
                        alt=""
                      />
                    </button>
                  </CopyToClipboard>
                </div>
                <br></br>
                <br></br>
                Accepted tokens
                {showAdress === 'eth' ? (
                  <span
                    style={{
                      marginTop: '30px',
                      fontSize: '21px',
                    }}
                  >
                    ETH, USDT, USDC, DAI, HEX, MATIC, WBTC, OHM
                  </span>
                ) : (
                  <span
                    style={{
                      marginTop: '30px',
                      fontSize: '21px',
                      overflowWrap: 'break-word',
                    }}
                  >
                    BNB, ETH, BTCB, BUSD, USDT, USDC, DAI, CAKE
                  </span>
                )}
              </div>
              <div className="text-muted my-3">
                FMX will be Airdropped once FMX Sacrifice is over &amp;
                PulseChain Mainnet is released
              </div>
            </div>
            <br></br>
            <div id="tokonomics" className="section-title max-title">
              <h3>FMX Tokonomics</h3>
            </div>
            <div className="row">
              <div
                className="col-12 col-md-6"
                style={{ marginBottom: '-20px' }}
              >
                <div className="section-title mini-title left-aligned">
                  <h4>FMX Distribution</h4>
                </div>
                <div
                  style={{ width: '400px' }}
                  className="chart-container d-flex flex-column flex-lg-row justify-content-between align-items-center my-5 mb-md-0"
                >
                  <Doughnut data={data} redraw={true} options={options} />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="section-title mini-title left-aligned">
                  <h4>Funds Allocation</h4>
                </div>

                <div
                  style={{ width: '400px' }}
                  className="chart-container d-flex flex-column flex-lg-row justify-content-between align-items-center my-5 mb-md-0"
                >
                  <Doughnut data={data1} redraw={true} options={options} />
                </div>
              </div>
            </div>
            {/* // row */}
          </div>
          {/* // container */}
        </section>

        {/* // section */}
        <section className="section" id="road-map">
          <div className="container">
            <div className="section-title max-title">
              <h3>FarmX Roadmap</h3>
            </div>
            <p className="lead p-3 centered-text text-center mx-auto">
              The roadmap focuses on the development of the technology,
              operations infrastructure, new partnerships, and marketing
              initiatives.
            </p>
            <section className="cd-timeline js-cd-timeline">
              <div className="cd-timeline__container">
                <div className="cd-timeline__block js-cd-block">
                  <div className="cd-timeline__milestone"> </div>
                  <div className="cd-timeline__content js-cd-content">
                    <div className="cd-timeline__date">JANUARY 2022</div>
                    <h4>FarmX Concept</h4>
                    <p>The Team is established. Start of the FMX concept.</p>
                  </div>
                </div>
                <div className="cd-timeline__block js-cd-block">
                  <div className="cd-timeline__milestone"> </div>
                  <div className="cd-timeline__content js-cd-content">
                    <div className="cd-timeline__date">MARCH 2022</div>
                    <h4>Blockchain Selected</h4>
                    <p>
                      FarmX Team was considering different networks and finally
                      PulseChain was selected.
                    </p>
                  </div>
                </div>
                <div className="cd-timeline__block js-cd-block">
                  <div className="cd-timeline__milestone"> </div>
                  <div className="cd-timeline__content js-cd-content">
                    <div className="cd-timeline__date">APRIL 2022</div>
                    <h4>FMX Designed</h4>
                    <p>
                      Our native token FMX was designed and initial distribution
                      was planned.
                    </p>
                  </div>
                </div>
                <div className="cd-timeline__block js-cd-block">
                  <div className="cd-timeline__milestone"> </div>
                  <div className="cd-timeline__content js-cd-content">
                    <div className="cd-timeline__date">MAY 2022</div>
                    <h4>FarmX Landing Released</h4>
                    <p>
                      Our platform landing page was released, also we started
                      designing our marketing strategy.
                    </p>
                  </div>
                </div>
                <div className="cd-timeline__block js-cd-block">
                  <div className="cd-timeline__milestone"> </div>
                  <div className="cd-timeline__content js-cd-content">
                    <div className="cd-timeline__date">JUNE 2022</div>
                    <h4>
                      <b>FMX Sacrifice I</b>
                    </h4>
                    <p>
                      On 9th of June, FarmX started accepting sacrifices for FMX
                      at a 4x Rate.
                    </p>
                  </div>
                </div>
                <div className="cd-timeline__block js-cd-block">
                  <div className="cd-timeline__milestone"> </div>
                  <div className="cd-timeline__content js-cd-content">
                    <div className="cd-timeline__date">JULY 2022</div>
                    <h4>
                      <b>FMX Sacrifice EXTRA-BONUS </b>
                    </h4>
                    <p>
                      For a period of 5 days <i>(05-09 July)</i> sacrifices will
                      have a x3 Bonus Multiplier.
                    </p>
                  </div>
                </div>

                <div className="cd-timeline__block js-cd-block">
                  <div className="cd-timeline__milestone"> </div>
                  <div className="cd-timeline__content js-cd-content">
                    <div className="cd-timeline__date">JULY 2022</div>
                    <h4>
                      <b>FMX Sacrifice II</b>
                    </h4>
                    <p>
                      On 9th of July, FarmX sacrifices will be considered at a
                      2.5x Rate.
                    </p>
                  </div>
                </div>
                <div className="cd-timeline__block js-cd-block">
                  <div className="cd-timeline__milestone"> </div>
                  <div className="cd-timeline__content js-cd-content">
                    <div className="cd-timeline__date">AUGUST 2022</div>
                    <h4>
                      <b>FMX Sacrifice EXTRA-BONUS </b>
                    </h4>
                    <p>
                      For a period of 5 days <i>(05-09 August)</i>
                      sacrifices will have a x2 Bonus Multiplier.
                    </p>
                  </div>
                </div>

                <div className="cd-timeline__block js-cd-block">
                  <div className="cd-timeline__milestone"> </div>
                  <div className="cd-timeline__content js-cd-content">
                    <div className="cd-timeline__date">AUGUST 2022</div>
                    <h4>
                      <b>FMX Sacrifice III</b>
                    </h4>
                    <p>
                      On 9th of August, FarmX sacrifices will be considered at a
                      1.6x Rate.
                    </p>
                  </div>
                </div>
                <div className="cd-timeline__block js-cd-block">
                  <div className="cd-timeline__milestone"> </div>
                  <div className="cd-timeline__content js-cd-content">
                    <div className="cd-timeline__date">SEPTEMBER 2022</div>
                    <h4>
                      <b>FMX FINAL EXTRA-BONUS </b>
                    </h4>
                    <p>
                      For a period of 5 days <i>(07-09 September)</i> sacrifices
                      will have a x1.25 Bonus Multiplier.
                    </p>
                  </div>
                </div>

                <div className="cd-timeline__block js-cd-block">
                  <div className="cd-timeline__milestone"> </div>
                  <div className="cd-timeline__content js-cd-content">
                    <div className="cd-timeline__date">SEPTEMBER 2022</div>
                    <h4>
                      <b>FarmX Audits </b>
                    </h4>
                    <p>
                      Our FarmX platform will be audited by{' '}
                      <a
                        href="https://soken.io/?utm_source=google&utm_medium=cpc&utm_campaign=France&utm_content=1&utm_term=smart%20contract%20audit%20companies&gclid=CjwKCAjw7vuUBhBUEiwAEdu2pHi7olBf6MxAJbrSzCLnDzeq6rjrLqtZKNFsOdshBxO-_81vyD5_zBoCBRgQAvD_BwE"
                        target="_blank"
                      >
                        <u>
                          <i>Soken</i>
                        </u>
                      </a>
                      ,{' '}
                      <a
                        href="https://solidity.finance/?gclid=CjwKCAjw7vuUBhBUEiwAEdu2pPMnDiAU0Y5tQv46PKV2cLHid4-Vs3BglYFZL1lveBaH5YXgivxxMBoCkYkQAvD_BwE"
                        target="_blank"
                      >
                        <u>
                          <i>Solidity Finance</i>
                        </u>
                      </a>
                      ,{' '}
                      <a
                        href="https://4irelabs.com/smart-contract-audit/?utm_source=google&utm_medium=cpc&utm_campaign=smart_conract_audit&utm_term=smart%20contract%20auditing%20services&gclid=CjwKCAjw7vuUBhBUEiwAEdu2pNsiN6zqx71GjcaETHsIqfVfnj4hUTbak2yKa9owp1RgjEzMeN_g-xoCCpcQAvD_BwE"
                        target="_blank"
                      >
                        <u>
                          <i>4ire</i>{' '}
                        </u>
                      </a>{' '}
                      &{' '}
                      <a href="https://www.certik.com/" target="_blank">
                        <u>
                          <i>Certik</i>
                        </u>
                      </a>
                      .
                    </p>
                  </div>
                </div>

                <div className="cd-timeline__block js-cd-block">
                  <div className="cd-timeline__milestone"> </div>
                  <div className="cd-timeline__content js-cd-content">
                    <div className="cd-timeline__date">OCTOBER 2022</div>
                    <h4>
                      <b>FarmX Platform Release </b>
                    </h4>
                    <p>
                      This will be an important date for FarmX, platform will be
                      on production, all Smart Contracts Audited and all FMX
                      engines running.
                    </p>
                  </div>
                </div>

                <div className="cd-timeline__block js-cd-block">
                  <div className="cd-timeline__milestone"> </div>
                  <div className="cd-timeline__content js-cd-content">
                    <div className="cd-timeline__date">Future</div>
                    <h4 className="m-0">I+D+i</h4>
                    <p>
                      In FarmX we know that project has to keep reinventing
                      itself in order to succed and be a pillar of PLS
                      Community.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* // container */}
        </section>
        {/* // section */}

        <section className="section">
          <div className="container">
            <div className="row align-items-center justify-content-between mt-5">
              <div className="col-12 col-md-6">
                <img
                  src={pairs_pulse}
                  alt="illustration"
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md-6">
                <h6 className="text-info mb-4">FarmX</h6>
                <h2 className="mb-4">
                  Empowering
                  <font color="b443b9"> PLS</font> &{' '}
                  <font color="b443b9"> PLSX</font> Massive Adoption
                </h2>
                <p className="lead mb-4">
                  Fast, scalable and new yield aggregator, FarmX has come to
                  stay.
                </p>
                <p>
                  PulseX is a DEX and AMM on PulseChain. They will revolutionize
                  yield farming, this allows FarmX to be a yield aggregator’s
                  existence, including FMX. This relationship represents a huge
                  opportunity for FMX and our role in this new emerging DeFi
                  space.
                </p>
                <a
                  href="https://medium.com/@farmX"
                  className="btn btn-primary mt-3"
                >
                  Learn more
                </a>
              </div>
            </div>

            <div
              className="row align-items-center justify-content-between "
              style={{ marginTop: '200px' }}
            >
              <div className="col-12 col-md-6">
                <h6 className="text-info mb-4">FMX Protocol</h6>
                <h2 className="mb-4">
                  Profit from
                  <font color="b443b9"> PLS</font> &{' '}
                  <font color="b443b9"> PLSX</font> with FMX
                </h2>
                <p className="lead mb-4">
                  Cross-Chain FarmX infrastructure will allow FMX Protocol to
                  profit from all DEX opportunities. Protocol reinvesting
                  strategies including DeFi 2.0 features.
                </p>
                <p>
                  All <b>FMX Sacrifiers </b>
                  will get competitive advantatges like:
                  <br></br>
                  <ul>
                    <li>Higher APY from FarmX Pools</li>
                    <li>Automated Protocol Rewards</li>
                    <li>No TimeLock Vestings</li>
                    <li>Exclusive Pools</li>
                    <li>Exclusive Farms</li>
                  </ul>
                </p>
                <a
                  href="https://medium.com/@farmX"
                  className="btn btn-primary mt-3"
                >
                  Learn more
                </a>
              </div>
              <div className="col-12 col-md-6">
                <img src={fmx_pairs} alt="illustration" className="img-fluid" />
              </div>
            </div>
            <br></br>

            <div className="row align-items-center justify-content-between mt-5">
              <div className="col-12 col-md-6">
                <img src={all_pairs} alt="illustration" className="img-fluid" />
              </div>
              <div className="col-12 col-md-6">
                <h6 className="text-info mb-4">How</h6>
                <h2 className="mb-4">
                  Cross-Chain
                  <font color="b443b9"> DEXs</font> opportunities
                </h2>
                <p className="lead mb-4">
                  PulseX most liquid pairs will be supported on FarmX,
                  supporting first PulseChain DEX, will create a lot of
                  opportunities FMX protocol will be able to profit from.
                </p>
                <p>
                  Being a Cross-Chain Yield Aggregator allow FMX Protocol to be
                  implemented on different EVM compatible networks.
                  <br></br>
                  <br></br>
                  <i>
                    <b>Note: </b>
                    Not only by Stable Coins arbitratge opportunities.
                  </i>
                </p>
                <a
                  href="https://medium.com/@farmX"
                  className="btn btn-primary mt-3"
                >
                  Learn more
                </a>
              </div>
            </div>

            <div
              className="row align-items-center justify-content-between "
              style={{ marginTop: '200px' }}
            >
              <div className="col-12 col-md-6">
                <h6 className="text-info mb-4">Best Strategy</h6>
                <h2 className="mb-4">
                  Global DApp with <font color="b443b9"> FarmX </font>
                </h2>
                <p className="lead mb-4">
                  Once FarmX is deployed on PulseChain mainnet, FarmX team will
                  allocate all efforts in to creating a mobile DApp version that
                  can be fit in hardwallet devices, so there is a wider
                  availability and more people can access and profit from
                  Farming on the first PulseX Yield Farm Aggregator.
                </p>

                {/* <a
                  href="https://medium.com/@farmX"
                  className="btn btn-primary mt-3"
                >
                  Learn more
                </a> */}
              </div>
              <div className="col-12 col-md-6">
                <img
                  src={illustration}
                  alt="illustration"
                  className="img-fluid"
                />
              </div>
            </div>
            <br></br>
            <div className="row align-items-center justify-content-between mt-5">
              <div className="col-12 col-md-6">
                <img src={nice_fmx} alt="illustration" className="img-fluid" />
                <font size="+3">FMX</font> (PRC-20)
                <br></br>
              </div>
              <div className="col-12 col-md-6">
                <h6 className="text-info mb-4">FMX, native token</h6>
                <h2 className="mb-4">
                  FarmX
                  <font color="b443b9"> Protocol</font> exclusive Sacrifice
                  advantatges
                </h2>
                <p className="lead mb-4">
                  Those who participate in FMX Sacrifice before FarmX launch,
                  will enjoy:
                </p>
                <p>
                  <ul>
                    <li>Higher APY from FarmX Pools</li>
                    <li>Automated Protocol Rewards</li>
                    <li>No TimeLock Vestings</li>
                    <li>Limited Pools & Farms</li>
                  </ul>
                </p>
                <a
                  href="https://medium.com/@farmX"
                  className="btn btn-primary mt-3"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* <br></br>
            <br></br>

            <div className="section-title mini-title">
              <h4>Collaborators & Partners</h4>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-around text-center mt-5 client-logos">
              <div className="flex-md-fill ">
                <a
                  href="https://soken.io/?utm_source=google&utm_medium=cpc&utm_campaign=France&utm_content=1&utm_term=smart%20contract%20audit%20companies&gclid=CjwKCAjw7vuUBhBUEiwAEdu2pHi7olBf6MxAJbrSzCLnDzeq6rjrLqtZKNFsOdshBxO-_81vyD5_zBoCBRgQAvD_BwE"
                  target="_blank"
                >
                  <img
                    height="50px"
                    width="100px"
                    src="https://soken.io/wp-content/uploads/2021/11/Logo-_-White.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="flex-md-fill ">
                <a
                  href="https://solidity.finance/?gclid=CjwKCAjw7vuUBhBUEiwAEdu2pPMnDiAU0Y5tQv46PKV2cLHid4-Vs3BglYFZL1lveBaH5YXgivxxMBoCkYkQAvD_BwE"
                  target="_blank"
                >
                  <img
                    height="100px"
                    width="100px"
                    src="https://solidity.finance/images/main.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </a>
              </div>

              <div className="flex-md-fill ">
                <a
                  href="https://4irelabs.com/smart-contract-audit/?utm_source=google&utm_medium=cpc&utm_campaign=smart_conract_audit&utm_term=smart%20contract%20auditing%20services&gclid=CjwKCAjw7vuUBhBUEiwAEdu2pNsiN6zqx71GjcaETHsIqfVfnj4hUTbak2yKa9owp1RgjEzMeN_g-xoCCpcQAvD_BwE"
                  target="_blank"
                >
                  <img
                    height="80px"
                    width="150px"
                    src="https://4irelabs.com/wp-content/uploads/2021/06/FIRE-logo-website.svg"
                    alt="logo"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="flex-md-fill ">
                <a href="https://www.certik.com/" target="_blank">
                  <img
                    height="80px"
                    width="150px"
                    src="https://www.certik.com/certik-logotype-h-w.svg"
                    alt="logo"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div> */}

            <br></br>
            <br></br>

            <div className="section-title mini-title">
              <h4>Future Audits</h4>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-around text-center mt-5 client-logos">
              <div className="flex-md-fill ">
                <a
                  href="https://soken.io/?utm_source=google&utm_medium=cpc&utm_campaign=France&utm_content=1&utm_term=smart%20contract%20audit%20companies&gclid=CjwKCAjw7vuUBhBUEiwAEdu2pHi7olBf6MxAJbrSzCLnDzeq6rjrLqtZKNFsOdshBxO-_81vyD5_zBoCBRgQAvD_BwE"
                  target="_blank"
                >
                  <img
                    height="50px"
                    width="100px"
                    src="https://soken.io/wp-content/uploads/2021/11/Logo-_-White.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="flex-md-fill ">
                <a
                  href="https://solidity.finance/?gclid=CjwKCAjw7vuUBhBUEiwAEdu2pPMnDiAU0Y5tQv46PKV2cLHid4-Vs3BglYFZL1lveBaH5YXgivxxMBoCkYkQAvD_BwE"
                  target="_blank"
                >
                  <img
                    height="100px"
                    width="100px"
                    src="https://solidity.finance/images/main.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </a>
              </div>

              <div className="flex-md-fill ">
                <a
                  href="https://4irelabs.com/smart-contract-audit/?utm_source=google&utm_medium=cpc&utm_campaign=smart_conract_audit&utm_term=smart%20contract%20auditing%20services&gclid=CjwKCAjw7vuUBhBUEiwAEdu2pNsiN6zqx71GjcaETHsIqfVfnj4hUTbak2yKa9owp1RgjEzMeN_g-xoCCpcQAvD_BwE"
                  target="_blank"
                >
                  <img
                    height="80px"
                    width="150px"
                    src="https://4irelabs.com/wp-content/uploads/2021/06/FIRE-logo-website.svg"
                    alt="logo"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="flex-md-fill ">
                <a href="https://www.certik.com/" target="_blank">
                  <img
                    height="80px"
                    width="150px"
                    src="https://www.certik.com/certik-logotype-h-w.svg"
                    alt="logo"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* // container */}
        </section>

        <section className="section">
          <div className="container">
            <div className="section-title max-title mb-5">
              <h3>FarmX Team Members</h3>
            </div>
            <center>
              <div className="col-12 col-md-6 col-lg-3 mb-5">
                <img src={team1} alt="team" className="img-fluid mb-4" />
                <h4 className="mb-0">Christopher Barker</h4>
                <small className="text-info text-uppercase">
                  Founder &amp; CEO
                </small>
                <br></br>
                <small className="">Chief Executive Officer</small>
              </div>
            </center>
            <div className="row text-center">
              <div className="col-12 col-md-6 col-lg-3 mb-5">
                <img src={team2} alt="team" className="img-fluid mb-4" />
                <h4 className="mb-0">Hamza Derehin</h4>
                <small className="text-info text-uppercase">CTO</small>
                <br></br>
                <small className="">Chief Tecnologhy Officer</small>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-5">
                <img src={team3} alt="team" className="img-fluid mb-4" />
                <h4 className="mb-0">Melanhie Shein</h4>
                <small className="text-info text-uppercase">COO</small>
                <br></br>
                <small className="">Chief Operations Officer</small>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-5">
                <img src={team4} alt="team" className="img-fluid mb-4" />
                <h4 className="mb-0">Jeremahia Lopez</h4>
                <small className="text-info text-uppercase">CMO</small>
                <br></br>
                <small className="">Chief Marketing Officer</small>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-5">
                <img src={team5} alt="team" className="img-fluid mb-4" />
                <h4 className="mb-0">Carol Hantsen</h4>
                <small className="text-info text-uppercase">CSO</small>
                <br></br>
                <small className="">Chief Support Officer</small>
              </div>
            </div>
            <br></br>
            <br></br>
            <center>
              <i>
                <h4 className="mb-0">
                  FarmX Team is always looking for new talent, interested in
                  joining?
                </h4>
              </i>
              <a
                onClick={() => {
                  window.open(
                    'mailto:farmX.contact@gmail.com?subject=Team%20Application%20Contact&body=Hi%20👋,%0AI%20am%20...%0AAnd%20I%20would%20like%20to%20apply%20for%20being%20part%20of%20FarmX%20Team%20I%20am%20good%20at ...',
                  )
                }}
              >
                <div className="btn btn btn-primary mt-5">Apply for FarmX</div>{' '}
              </a>
            </center>
            <center>
              <br></br>
              <small className="">
                In order to submit your application we need your CV and what
                value can you add to our Team{' '}
              </small>
            </center>
          </div>

          {/* // container */}
        </section>
        {/* // section */}

        <section className="section">
          <div className="container">
            <div className="section-title max-title text-center">
              <h3>Frequently Asked Questions</h3>
            </div>
            <p className="lead p-3 centered-text text-center mx-auto">
              Got questions about FarmX? We have got answers. <br></br>Check
              them out!{' '}
            </p>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="faq__item">
                  <h4>What is FMX?</h4>
                  <p>
                    FMX is our native token, as FarmX is deployed on PulseChain
                    it is a PRC20. FMX will be airdropped to all FarmX
                    sacrifiers. This token will allow holder to receive and
                    enjoy benefits in FarmX platform.
                  </p>
                </div>
                <div className="faq__item">
                  <h4>How to get FMX?</h4>
                  <p>
                    In order to get FMX you need to send the accepted tokens to
                    this wallet{' '}
                    <span style={{ overflowWrap: 'break-word' }}>
                      0x1848E753B57b4e50BC9c1AA3d22074aA16472917
                    </span>{' '}
                    we will automatically track all sacrifices and send back the
                    corresponding FMXs.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="faq__item">
                  <h4>When will FMX be distributed?</h4>
                  <p>
                    Once FarmX Sacrifice finishes FMX will be airdropped to all
                    sacrifiers. Also PulseChain mainnet has to be released.
                    <br></br>
                    <b>Remember not to sacrify from an exchange.</b>
                  </p>
                </div>
                <div className="faq__item">
                  <h4>What are the benefits of FMX?</h4>
                  <p>
                    FMX is the first Farming developed in PulseChain. With FMX
                    holders will be able to apply factor multiplier based on the
                    FMX amount they own. Also stake, farm and earn more FMX.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center my-3">
              <a
                onClick={() => {
                  window.open(
                    'mailto:farmX.contact@gmail.com?subject=FMX%20Doubt&body=Hi%20👋,%0AAnd%20I%20would%20like%20to%20know ...',
                  )
                }}
                className="btn btn-outline-secondary"
              >
                Got Questions? Contact Us
              </a>
            </div>
          </div>
          {/* // container */}
        </section>
        {/* // section */}

        {/* // section */}
        {/* <section className="section section-separated">
          <div className="container">
            <div className="section-title max-title">
              <h3>FarmX Latest News</h3>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="blog-list-item">
                  <a href="#">
                    <h6 className="text-info text-uppercase">
                      by Lubomir Tassev • 28 Mar 2018
                    </h6>
                    <h4 className="mb-4">
                      Nvidia Mining GPU to Be Launched Sooner Than Expected,
                      Reports{' '}
                    </h4>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="blog-list-item">
                  <a href="#">
                    <h6 className="text-info text-uppercase">
                      by Jamie Redman • 20 Mar 2018
                    </h6>
                    <h4 className="mb-4">
                      Bitcoin Classes Are All the Rage for University Students
                      in Chicago
                    </h4>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="blog-list-item">
                  <a href="#">
                    <h6 className="text-info text-uppercase">
                      by Alyssa Hertig • 17 Mar 2018
                    </h6>
                    <h4 className="mb-4">
                      Soft, Hard or Velvet? New Fork Promises Crypto Upgrades
                      Without Controversy
                    </h4>
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="blog-list-item">
                  <a href="#">
                    <h6 className="text-info text-uppercase">
                      by Wolfie Zhao • 15 Feb 2018
                    </h6>
                    <h4 className="mb-4">
                      Anheuser-Busch Owner Pilots Blockchain for Shipping
                    </h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <a href="#" className="btn btn-outline-secondary">
                Read all Blog
              </a>
            </div>
          </div>
        </section> */}
        {/* // section */}
        <footer className="section section-separated py-lg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <img src={logo} alt="footer logo" className="img-fluid mb-4" />
                <p className="footer__info--text">
                  FMX is built for incentivizing PLS & PLSX holders, farming is
                  an easy and comprehensive way for investors to adopt and
                  support revolutionary DeFi projects.
                </p>
                <br></br>
                <ul className="social__links">
                  <li>
                    <a href="https://twitter.com/YieldFarmX" target="_blank">
                      <img src={twitter} alt="tw" className="img-fluid" />
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/@farmX/about" target="_blank">
                      <svg viewBox="0 0 1043.63 592.71" class="aa bb">
                        <g data-name="Layer 2">
                          <g data-name="Layer 1">
                            <path
                              d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0
    296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0
    154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279
    147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76
    249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9
    51.76 249.94"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/DevsFarmX" target="_blank">
                      <img src={github} alt="gh" className="img-fluid" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/farmXTG" target="_blank">
                      <img src={tg} alt="gh" className="img-fluid" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4">
                <p className="footer-col__head">Contact Us</p>
                <div className="contact__address">
                  {' '}
                  <p>
                    {' '}
                    Decentralized Organization in PulseChain (PLS).
                    <br></br>
                    <br></br>
                    Re-enable priced out use cases: PulseChain brings the ETH
                    system state and ERC20s.
                    <br></br>
                    <br></br>
                    It’s time to empower the first Decentralized Exchange of
                    Pulse Chain. With FarmX you will be able to stake your
                    PulseX LPs.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <p className="footer-col__head">Quick Links</p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="footer__links">
                      <li>
                        <a href="#features">FEATURES</a>
                      </li>

                      <li>
                        <a href="#sacrifice">SACRIFICE</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="footer__links">
                      <li>
                        <a href="#road-map">ROADMAP</a>
                      </li>

                      <li>
                        <a href={disclaimer} target="_blank">
                          DISCLAIMER
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <p className="copyright__text mb-0">
                <small>Copyright 2022 © All rights reserved. FarmX</small>
              </p>
            </div>
          </div>
          {/* // container */}
        </footer>
      </div>
    </div>
  )
}

export default App
