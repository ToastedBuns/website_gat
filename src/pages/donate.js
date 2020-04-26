import React from 'react'
import Layout from '../components/layout'
import BitcoinWallet from '../images/bitcoin_wallet.jpg'
import ETHWallet from '../images/ethereum_wallet.jpg'
import LTCWallet from '../images/litecoin_wallet.jpg'
import Paypal from '../images/paypal.png'
import BitcoinLogo from '../images/bitcoin_logo.png'
import ETHLogo from '../images/ethereum_logo.jpg'
import LTCLogo from '../images/litecoin_logo.png'
import BTCWallet from '../images/btc_wallet.jpg'
import BTCLogo from '../images/btc_logo.png'
import SSLogo from '../images/subscribestar_logo.png'
import SLLogo from '../images/streamlabs.png'
import PatreonLogo from '../images/patreon.png'

const donate = () => {
  return (
    <Layout>
      <article className="article-container">
        <h1>Donate</h1>
        <p>Making sure your buns are toasted for the greatest pleasure.</p>
        <p>
          Your donations are greatly appreciated and will help us grow faster!
        </p>
        <br />
        <p>I love you all and you are the best!</p>
        <img
              src={Paypal}
              alt="dlive"
              style={{ maxWidth: 210, maxHeight: 210 }}
            />

        <h3>
          <a
            href="https://paypal.me/toastedbuns"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate Now!
          </a>
        </h3>
        <br />

                <img
                      src={SLLogo}
                      alt="dlive"
                      style={{ maxWidth: 210, maxHeight: 210 }}
                    />

                <h3>
                <br />

                  <a
                    href="https://streamlabs.com/toastedbunslt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  Donate Now!
                  </a>
                </h3>

        <br />
        <br />

        <img
              src={SSLogo}
              alt="dlive"
              style={{ maxWidth: 210, maxHeight: 210 }}
            />

        <h3>
        <br />

          <a
            href="https://www.subscribestar.com/toasted-buns"
            target="_blank"
            rel="noopener noreferrer"
          >
          Subscribe Now!
          </a>
        </h3>
        <br />
        <br />

        <img
              src={PatreonLogo}
              alt="dlive"
              style={{ maxWidth: 150, maxHeight: 150 }}
            />

        <h3>
        <br />
        <br />

          <a
            href="https://www.patreon.com/toastedbuns"
            target="_blank"
            rel="noopener noreferrer"
          >
          Subscribe Now!
          </a>
        </h3>
        <br />
        <hr className="separator-ruler" />
        <h3>Crypto Currencies: </h3>
        <br />
        <p><img
          src={BitcoinLogo}
          alt="dlive"
          style={{ maxWidth: 50, maxHeight: 50 }}
        /> Bitcoin</p>
        <p>
            <img
              src={BitcoinWallet}
              alt="dlive"
              style={{ maxWidth: 450, maxHeight: 450 }}
            />
        </p>
        <p>35sGjHwW3XXR2E7DnJ7fJqpgxYLqy3Zyz3</p>
        <br />
        <p><img
          src={ETHLogo}
          alt="dlive"
          style={{ maxWidth: 50, maxHeight: 50 }}
        />   Ethereum</p>
        <p>
            <img
              src={ETHWallet}
              alt="dlive"
              style={{ maxWidth: 450, maxHeight: 450 }}
            />
        </p>
        <p>0x715A3a7dc085E3E6fEA31e9f3174ABb88554b9dc</p>
        <br />

        <p><img
          src={LTCLogo}
          alt="dlive"
          style={{ maxWidth: 50, maxHeight: 50 }}
        />   Lite Coin</p>
        <p>
            <img
              src={LTCWallet}
              alt="dlive"
              style={{ maxWidth: 450, maxHeight: 450 }}
            />
        </p>
        <p>MEnNFGoYuAjzkmWymVpT5DyqS7T2dvpx3t</p>
        <br />
        <p><img
          src={BTCLogo}
          alt="dlive"
          style={{ maxWidth: 75, maxHeight: 75 }}
        />    BitCoin Cash</p>
        <p>
            <img
              src={BTCWallet}
              alt="dlive"
              style={{ maxWidth: 450, maxHeight: 450 }}
            />
        </p>
        <p>qqm6rs69drm7u7edwmketyqn5thpsr06duj75q6rvv</p>
      </article>
    </Layout>
  )
}

export default donate
