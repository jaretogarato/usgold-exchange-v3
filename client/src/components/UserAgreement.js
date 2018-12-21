import React, { Component } from 'react';
import { Container, Grid, Segment, Image } from 'semantic-ui-react';
import axios from 'axios';
import { USGInUSD } from './partials/USGInUSD';

// ---------- images ------------
import TopBg from '../assets/images/us-gold-header-bg.jpg';
import BricksGold from '../assets/images/bricks-gold.png';
import GoldBars from '../assets/images/gold-bars.jpg';
import InfinityBlue from '../assets/images/infinity-blue.png';
import USGoldToken from '../assets/images/usg-token.png';
import PoweredByOpenNetwork from '../assets/images/powered-by-open-network.png';
import IconGoldBacked from '../assets/images/icon-panel-gold-backed.png';
import IconStableValue from '../assets/images/icon-panel-stable-value.png';
import IconPerfectExit from '../assets/images/icon-panel-perfect-exit.png';
import MainPanelsBg from '../assets/images/main-panels-bg.jpg';
import CubesColored from '../assets/images/cubes-colored.png';
import LinesColored from '../assets/images/lines-three-colored.png';
import CubeGold from '../assets/images/cube-gold.png';
import ChartBitcoin from '../assets/images/chart-bitcoin.jpg';
import ChartEthereum from '../assets/images/chart-ethereum.jpg';
import ChartUSGold from '../assets/images/chart-usgold.jpg';
import GoldOnGradient from '../assets/images/gold-bar-on-gradient.png';
import CubeColoredB from '../assets/images/cube-colored-b.png';
import BuyKeepRedeem from '../assets/images/buy-keep-redeem-bg-wide.jpg';
import PaymentsAccepted from '../assets/images/payments-accepted.png';

// ---------- docs -----------------


import UserAgreementDownload from '../assets/Docs/UsGoldCurrencyLLC-UserAgreement.pdf';
// ---------- partials -------------
import Img from './partials/Img';
import Footer from './partials/Footer';

// ---------- styling ---------------
import '../css/mailchimp.css';
import {
  HeroHeader, HhInnerContainer, HhTextContainer,
  HhImageContainer, HhH1, HhH2,
  FullWidthDiv, FullWidthBgDiv,
  FlexRowContainer,
  OpenH3, OpenH4, OpenP, OpenPSmall, OpenSpanGreen, OpenSpanRed,
  OpenUl, OpenLi, OpenH5,
  BorderedDiv, BorderedDivHead, BorderedDivBody,
  HoverCenterDiv, HoverCenterDivWrap,
  DividerGrayGrad,
  HrOrange,
  USGButton,
} from '../css/styledComponents';

// https://www.react-reveal.com/examples/
import Fade from 'react-reveal/Fade';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
    AccordionContainer,
} from 'react-accessible-accordion';


const Content = () => (
  <Accordion>
    <AccordionItem>
      <AccordionItemTitle>
        1. BUYING FROM US GOLD
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          All sales are subject to the terms of the USG Token Purchase Agreement set forth on Exhibit A.  User agrees to the terms of the Purchase Agreement in connection with the purchase of the USG tokens.
        </OpenP>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              A. MINIMUM SALES ORDERS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                There is a minimum Sales Order for the USG token, regardless of the payment method, (BTC / ETH / USD) which is one (1) USG token for a minimum purchase price set forth on the Website as determined by the United States Mint at: https://catalog.usmint.gov
              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              B. ANTI-MONEY LAUNDERING
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                All purchases and redemptions of the USG are subject to the USGC AML policies and procedures and the completion of the information set forth on Schedule I, and clearance of certain anti-money laundering requirements prior to purchase and redemption.  USGC retains the right to refuse the sale or redemption of USG to any person not providing such information or otherwise failing to comply with USGC AML policies and procedures, which can be found at https://www.usgold.io/user-agreement.   By agreeing to Terms of use and consummating a transaction with USGC, each person represents and warrants to USGC that (i) the purchaser is in compliance with the USA Patriot Act, (ii) none of the funds being used to consummate the transaction were derived from or related or connected to money-laundering, terrorism or any other illegal or illicit activity and (iii) the transaction is not a scheme, or part of a scheme, involving or in support of terrorism, money-laundering or any other illegal or illicit activity. USGC, at all times, reserves the right to require the purchasers or holders to provide additional supporting information and documentation in support of the preceding representations and warranties or to ensure compliance with FinCEN regulations.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              C. SALES ORDER PRICE CONFIRMATIONS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                When buying USG through the Website, directly from USGC or through an authorized exchange, the price at which your USG token Sales Order is submitted is the locked-in price set forth on the Website or exchange. There are no added charges or commissions, and no additional shipping as your USG token(s) will be sent electronically to your approved digital wallet address.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              D. CANCELLATIONS OF SALES ORDERS WITH USGC
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                You have no right to cancel your USG token Sales Order(s) (Sales Order(s)) after the purchase order is placed. However, if you default in your performance of payment of the purchase price, shipping and handling fees or any other act required, we may cancel your Sales Order(s). We reserve the right to cancel any Sales Order at any time and for any reason.
                Any USG token subject to a Sales Order cancellation shall vest in and remain the property of USGC. At any time USGC may elect to charge a $250.00 cancellation fee and upon receipt of such cancellation payment, we will waive further action against you and your responsibility for any breach by you and all resulting damages owed to USGC.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              E. SALES ORDER CHANGES
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Because a USG token Sales Order may not be changed, we suggest you take the time up front to make sure what you want is exactly what you request from us as reflected in your Sales Order.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              F. SALES ORDER PAYMENT REQUIREMENTS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                When you buy from us, you must ensure that your payment is received by USGC. If you default and payment is not timely received by USGC, USGC reserves the right in its sole discretion to (a) accept your payment; (b) refuse your payment and cancel your USG token Sales Order; (c) close your account; and/or (d) preclude you from placing any future USG token Sales Orders from USGC.
                It is always best to send us your payment immediately to complete your transaction with USGC and avoid any possible default so you can realize the locked-in price as of your confirmation time. When making payment by Bank Wire Transfer, we recommend making payment the same day your USG token Sales Order is placed.

              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              G. SENDING YOUR PAYMENT
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Payment instructions will be issued online on the final page of the online sales order process and again by email after you place your USG token Sales Order. Payment must be received within 24 hours of your Sales Order date. If you default and you do not meet these requirements, USGC reserves the right to cancel your USG token Sales Order. We reserve the right to refuse or cancel any USG token Sales Order at any time, including if it is deemed questionable or of significant risk to USGC regardless of payment method and price confirmation and in such case, you waive any right to any claim or actual damages of any kind or nature whatsoever.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              H. PAYMENT OPTIONS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Depending upon the Sales Order amount, you may pay by some or all of the following payment methods: Bitcoin, Ethereum, cash and bank wire transfer in USD. In some special circumstances, you may be allowed to pay via credit card or using your PayPal account, in the event you are permitted to use PayPal your USG token Sales Order must be paid using a VISA Debit card only and the transaction may require additional information including and not limited to CVV code, Zip code associated with the address for the VISA Debit card bank account and the PIN associated with the VISA Debit card bank account.
                USG token Sales Orders using a VISA Debit card for any amount(s) are reviewed on an order by order basis. In the sole discretion of USGC, your USG token Sale Order – Debit card transaction, may be subject to additional documentation or screening and are subject to our pre-approval. USGC has the right to refuse any Debit Card payment at its sole discretion.

              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              I. WIRING FUNDS- PAYMENT IN CRYPTOCURRENCY
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Once you have placed a Sales Order for USG and we have issued a confirmation number, we will provide you wire instructions, including our bank name, ABA routing number and account number.  If you are purchasing via Bitcoin, Ethereum or other cryptocurrency, then transfer must be made to USGC in accordance with the instructions provided on the Website or the applicable exchange.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              J. GOOD FUNDS POLICY
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Receipt of good funds is the day we receive your payment. Additional delays may occur if your bank does not cooperate in assisting us with the information needed to verify your transaction.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              K. CREDIT CARDS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                We may accept, but are not obligated to accept, credit card payments for Sales Order(s).
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              L. ACH OR ONLINE PAYMENTS FOR SALES ORDERS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                We do not accept ACH transactions for Sales Orders of USG.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>


        </Accordion>
      </AccordionItemBody>
    </AccordionItem>



    <AccordionItem>
      <AccordionItemTitle>
        2. US GOLD COINS
      </AccordionItemTitle>
      <AccordionItemBody>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              A. OWNERSHIP
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Each USG represents ownership of one 1 ounce Gold American Eagle coin (AE Coin), which coin will be owned by a trust/trustee and held in trust solely for the benefit of the holder of the corresponding USG, as evidenced by the corresponding hash and recorded on the Ethereum blockchain.  The AE Coin will be stored at the discretion of USGC in a secure facility maintained by USGC or at an affiliated relationships site contracted with USGC.  The AE Coins will be owned by the trustee/trust pursuant to a trust agreement attached hereto as Exhibit B, which any purchaser or holder of the USG hereby acknowledges and agrees to be bound to the terms thereof.
              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              B. LOSS OF HASH OR THE PRIVATE KEY
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Any loss of the hash or the private key in which the USG is stored will result in a loss of the USG token and an escheat of the AE Coin.
              </OpenP>

            </AccordionItemBody>
          </AccordionItem>

        </Accordion>
      </AccordionItemBody>
    </AccordionItem>

    <AccordionItem>
      <AccordionItemTitle>
        3. REDEMPTION
      </AccordionItemTitle>
      <AccordionItemBody>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              A. REDEMPTION OF USG FOR GOLD COINS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Holders of a USG token may redeem their USG token at any time for the actual AE Coin being held by the trustee for their benefit.  In order to redeem the AE Coin holders may redeem their USGC through the Website by transferring the USG token to USGC at https://usgold.io/redeem or by contacting USGC by email at redemptions@usgold.io.  Upon transfer of the USG token to USGC, that token will be terminated and an AE Coin will be delivered to the holder.  The holder redeeming the USG token shall be responsible for shipping, handling and insurance upon any redemption of a USG token for the physical 1oz Gold American Eagle coin(s).
              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              B. SHIPPING GOLD AMERICAN EAGLE COINS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Upon exchange of a USG for a 1oz Gold American Eagle Coin (AE Coin), such Gold American Eagle Coin(s) shall be shipped by USGC via UPS Parcel Pro, or another common carrier. Each package shall be fully insured. Packages sent registered and insured delivery can take on average 5-10 Business Days to receive.
              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              C. ESTIMATED U.S. SHIPPING, HANDLING AND INSURANCE CHARGES
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                1. One (1) 1oz Gold American Eagle Coin (AE Coin) <br/>
                2. $30 (USD) (ETH) inside the USA <br/>
                3. Insured Shipping through UPS Parcel Pro – Adult Signature is required. <br/> <br/>

                USGC insures all of its coin shipments for the value of the enclosed 1oz Gold American Eagle coin(s) redeemed from USGC, subject to the following limitations: USGC must be notified of a lost package within thirty (30) days from the ship date of your redemption order. Should anything happen while a package is in transit to, the holder may be permitted to claim coverage under our insurance policy provided that you directly receive the package from UPS Parcel Pro or another common carrier.  Neither USGC, nor the applicable insurance company, accepts (and USGC does specifically disclaim) responsibility if a redeeming holder has provided incorrect instructions, including an incorrect address, or instructions with any carrier or delivery service to leave parcels without signature requirements. Furthermore, USGC does not accept (and we specifically disclaim) responsibility for loss of the AE Coin if the redeeming holders have provided instructions to leave the package with a third party, such as a building manager, neighbor, or a drop-off location such as Mail Boxes Etc., The UPS Store, or similar third party drop off locations. In any such case, packages will not be covered for insurance by USGC or our insurance carrier. If you do not receive the package directly from the common carrier, you agree to take all reasonable actions to assist in recovery of the package, including but not limited to filling-out reports (and/or police reports) and providing all information needed or that may be requested to assist in recovery of the package. If you do not fully cooperate in recovery efforts, neither USGC, nor our insurance company or carrier, will have any liability to you.<br/><br/>
                In the event of a lost package, USGC will file a claim. Once the claim is filed, we reserve the right to re-ship your items or send the equivalent value in USD at our discretion, in which case USGC shall have no further responsibility or liability to you. If there is any disruption in the delivery of a package to you, you agree to cooperate with us in any investigation or claim process and to take every reasonable action requested of you in the process. Failure to fully cooperate will jeopardize coverage that may be provided to you.

              </OpenP>

            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              D. INTERNATIONAL DUTIES AND TAXES
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                International purchasers shall be responsible for any applicable taxes or duties associated with the purchase of the USG or the receipt of an AE Coin.  Please consult your local customs broker for more information on duty and tax rates.
                All shipping amounts listed below are estimates. Please contact USGC us for the most current shipping charges.
              </OpenP>
              <OpenP textAlign='left'>   Your coins are shipped by us, in our discretion, by UPS Parcel Pro, or another common carrier. Each package is fully insured. Packages sent registered and insured delivery can take on average 5-10 Business Days to receive.


              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              E. ESTIMATED INTERNATIONAL SHIPPING, HANDLING AND INSURANCE CHARGES
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                1. One (1) 1oz Gold American Eagle Coin <br/>
                2. $60 (USD) (ETH) outside the USA – plus any Duty charges with Customs<br/>
                3. Insured Shipping through UPS Parcel Pro – Adult Signature is required.<br/><br/>
                USGC always declares the full value of the shipment on any customs form. There are no exceptions to this rule.

              </OpenP>


            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              F. INTERNATIONAL DELIVERY REQUIREMENTS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                If your AE Coin(s) is returned to USGC due to your refusal to pay duties or taxes, or if the carrier (for example, UPS or Federal Express) was unable to deliver your AE Coins, you agree you are responsible for any return shipping fees, additional duties, or applicable taxes for returning the package back to USGC. In addition, if your package is returned to USGC, we will not reship your AE Coin unless and until we are paid in full for any return shipping costs, duties, taxes we have had to pay or advance for you as well as any subsequent re-ship fees back to you.
              </OpenP>
              <OpenP textAlign='left'>   International returns on AE Coin are very costly and we strongly suggest making yourself aware of any duties or taxes before packages are shipped to avoid surprises. In addition, we strongly suggest making yourself available to the delivery company so your package is not returned to USGC, subjecting you to unnecessary taxes, duties, shipping costs or delays. Delays for Sales Order re-ships could take 6-8 weeks or longer to complete when packages are not received as they should be. If you have any questions about your international shipment, please send an inquiry to support@usgold.io.


              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              G. RETURN POLICY
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Once received, the AE Coins are non-returnable.
              </OpenP>
              <OpenP textAlign='left'>   <strong>Shipping and handling charges are non-refundable.</strong> For approved exchanges, you must follow all instructions provided on the Website, including carefully packaging the Product. You are responsible for the cost of return shipping, insurance and the risk of loss during the return shipment as part of the exchange. USGC reserves the right, at its sole discretion, to reject any exchange that does not comply with these requirements. If an exchange is requested, we reserve the right to accept or refuse the exchange request in our sole discretion, any market gain on returns shall vest in and remain the property of USGC.


              </OpenP>

            </AccordionItemBody>
          </AccordionItem>

        </Accordion>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        4. RISKS
      </AccordionItemTitle>
      <AccordionItemBody>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              A. BASIS FOR PURCHASE.
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Purchasing USG tokens is at purchaser’s sole risk and that the USG tokens are each provided, used and acquired on an “AS IS” and on an “AS AVAILABLE” basis without representations, warranties, promises or guarantees whatsoever of any kind by Company.  purchaser must rely on its own examination and investigation thereof.
              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              B. NO OTHER RIGHTS, FUNCTIONALITY OR FEATURES.
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                USG tokens have no rights, uses, purpose, attributes, functionalities or features, express or implied, except as set forth on the Website.
              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              C. PURCHASE PRICE RISK.
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                There are no guarantees as to the price of USG tokens purchased by purchaser and no guarantees that the price per USG token determined for each period by the market will be equal to or higher than the price paid by purchaser.  There is the possibility that the price per USG token will fall below the price paid by initial purchasers of USG tokens during the Distribution Period.  Company reserves the right to change the duration of the Distribution Period for any reason, including, without limitation, bugs in the distribution contract or the unavailability of the Website or other unforeseen procedural or security issues.

              </OpenP>

            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              D. BLOCKCHAIN DELAY RISK.
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                On the Ethereum blockchain, timing of block production is determined by proof of work so block production can occur at random times.  For example, USG token transfers in a given open ledger may not be included in the next last-closed ledger and may be included in the candidate set for the beginning of the consensus process on the next open ledger.  As a result, the last-closed ledger may not include purchaser’s transaction at the time purchaser expects and purchaser may not receive USG tokens on the same day purchaser purchases the USG tokens.  Buyer acknowledges and understands that the Ethereum blockchain may not include the purchaser’s transaction at the time purchaser expects and purchaser may not receive USG tokens the same day purchaser sends ETH.
              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              E. ETHEREUM BLOCKCHAIN.
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The Ethereum blockchain is prone to periodic congestion during which transactions can be delayed or lost.  Individuals may also intentionally spam the Ethereum network in an attempt to gain an advantage in purchasing cryptographic tokens.  purchaser acknowledges and understands that Ethereum block producers may not include purchaser’s transaction when purchaser wants or purchaser’s transaction may not be included at all.

              </OpenP>


            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              F. THIRD PARTY ATTACKS.
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Transactions within the USGC platform may be delayed or lost due to operational error or malicious attacks by third parties.  purchaser acknowledges and understands that the last-closed ledger may not include purchaser’s transaction when purchaser wants or expects and that purchaser’s transaction may be excluded or discarded entirely.
              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              G. OPERATIONAL ERROR.
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Buyer may never receive USG tokens and may lose the entire amount purchaser paid to Company for such USG tokens as a result of interruptions and operational errors in the process of purchasing or receiving the USG tokens.
              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              H. ABILITY TO TRANSACT OR RESELL.
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Buyer may be unable to sell or otherwise transact in USG tokens at any time, or for the price purchaser paid.  By purchasing USG tokens, purchaser acknowledges, understands and agrees that USGC is not and shall not be responsible for or liable for the market value of USG tokens, the transferability and/or liquidity of USG tokens and/or the availability of any market for USG tokens through third parties or otherwise.
              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              I. TOKEN SECURITY.
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                USG tokens may be subject to expropriation and or/theft.  Hackers or other malicious groups or organizations may attempt to interfere with the USG distribution contract or the USG tokens in a variety of ways, including, but not limited to, malware attacks, denial of service attacks, consensus-based attacks, Sybil attacks, smurfing and spoofing.  Furthermore, because the Ethereum platform rests on open source software and USG tokens are based on open source software, there is the risk that Ethereum smart contracts may contain intentional or unintentional bugs or weaknesses which may negatively affect the USG tokens or result in the loss of purchaser’s USG tokens, the loss of purchaser’s ability to access or control purchaser’s USG tokens or the loss of ETH in purchaser’s account.  In the event of such a software bug or weakness, there may be no remedy and holders of USG tokens are not guaranteed any remedy, refund or compensation.
              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              J. ACCESS TO PRIVATE KEYS.
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                USG tokens purchased by purchaser are held by purchaser in purchaser’s digital wallet or vault, which requires a private key, or a combination of private keys, for access.  Accordingly, loss of requisite private key(s) associated with purchaser’s digital wallet or vault storing USG tokens will result in loss of such USG tokens, access to purchaser’s USG token balance and/or any initial balances in blockchains created by third parties.  Moreover, any third party that gains access to such private key(s), including by gaining access to login credentials of a hosted wallet or vault service purchaser uses, may be able to misappropriate purchaser’s USG tokens.  Company is not responsible for any such losses.
              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              K. TAX CONSEQUENCES.
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The purchase and receipt of USG tokens may have tax consequences for purchaser or holder.  Buyer/holder is solely responsible for compliance with such person’s tax obligations.
              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              L. FAILURE TO MAP A PUBLIC KEY TO HOLDER’S ACCOUNT.
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Failure of holder to map a public key to the holder’s account  may  result  in  third  parties  being  unable  to  recognize  holder’s USG token  balance  on  the  Ethereum  blockchain.
              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              M. EXCHANGE & COUNTERPARTY RISKS.
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                If a purchaser sends ETH to USGC and the USG distribution contract from an exchange or an account that purchaser does not control, USG tokens will be allocated to the account that has sent ETH; therefore, purchaser may never receive or be able to recover purchaser’s USG tokens.  Furthermore, if a purchaser or holder chooses to maintain or hold USG tokens through a cryptocurrency exchange or other third party, a purchaser’s or holder’s USG tokens may be stolen or lost.  In addition, third parties may not recognize purchaser’s claim to any derivative tokens if and when launched by third parties according to the distribution rules set in the USGC Platform.  By using the USG distribution contract and/or by purchasing USG tokens, purchaser acknowledges and agrees that purchaser sends ETH to the USG distribution contract through an exchange account and/or holds USG tokens on a cryptocurrency exchange or with another third party at purchaser’s own and sole risk.
              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              N. UNCERTAIN REGULATORY FRAMEWORK.
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The regulatory status of cryptographic tokens, digital assets and blockchain technology is unclear or unsettled in many jurisdictions.  It is difficult to predict how or whether governmental authorities will regulate such technologies.  It is likewise difficult to predict how or whether any governmental authority may make changes to existing laws, regulations and/or rules that will affect cryptographic tokens, digital assets, blockchain technology and its applications.  Such changes could negatively impact USG tokens in various ways, including, for example, through a determination that USG tokens are regulated financial instruments that require registration.  Company may cease the distribution of USG tokens, the development of the USGC Platform or cease operations in a jurisdiction in the event that governmental actions make it unlawful or commercially undesirable to continue to do so.
              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              O. MARKET RISK.
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The value of a 1 oz. American Eagle Gold Coin (AE Coin) is affected by many economic factors, including the current market price of GOLD Bullion, the perceived scarcity of the ae Coins and other factors. Some of these factors include the quality and current demand and general market sentiment.</OpenP>
              <OpenP textAlign='left'>
                Therefore, because both Bullion and AE Coins can go down in price as well as up, investing in them may not be suitable for everyone. Because all investments, including Bullion and AE Coins, can decline in value, you should understand them well, and have adequate cash reserves and disposable income before considering purchasing USG.</OpenP>
              <OpenP textAlign='left'>
                All investments, of every type, involve some level of risk and precious metals are no exception. Like many markets, the precious metals market is speculative, and it is unregulated. The value of any Bullion or AE Coin is generally determined by current spot price of the underlying precious metals, and by the supply and demand for these particular items. These prices will fluctuate throughout the day while the precious metals market is open. If you are considering purchasing precious metals as an investment, you should assess the stability of the current market and contact your financial advisor.

              </OpenP>

            </AccordionItemBody>
          </AccordionItem>

        </Accordion>
      </AccordionItemBody>
    </AccordionItem>

    <AccordionItem>
      <AccordionItemTitle>
        5. TERMS OF USE
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          The Website is owned and operated by USGC. Access and use of the Website is provided by USGC to you on condition that you accept these terms of use, and by accessing or using the Website, you agree to these terms of use. If you do not agree to accept and abide by these terms of use you should not access or use the Website.
        </OpenP>
        <OpenP textAlign='left'>
          USGC may revise and update these terms of use at any time and without notice. You are cautioned to review the terms of use posted on the website periodically. Your continued access or use of the Website after any such changes are posted will constitute your acceptance of these changes.
        </OpenP>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              A. USE OF THE SITE
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                This website and its contents, including photography and other USGC-owned assets, (the “Content”) are intended for customers of USGC. You may not use the Website or the Content for any purpose not related to your business with USGC. You are specifically prohibited from: (a) downloading, copying, or re-transmitting any or all of the website or the Content without, or in violation of, a written license or agreement with USGC; (b) using any data mining, robots or similar data gathering or extraction methods; (c) manipulating or otherwise displaying the website or the Content by using framing or similar navigational technology; (d) registering, subscribing, unsubscribing, or attempting to register, subscribe, or unsubscribe any party for any USGC product or service if you are not expressly authorized by such party to do so; and (e) using the website or the Content other than for its intended purpose, as determined solely in USGC’s discretion, including but not limited to, to defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy) of others, and/or to publish, post, distribute or disseminate any defamatory, infringing, obscene, pornographic, sexual, indecent or unlawful material or information.


              </OpenP>
              <OpenP textAlign='left'>
                You may not interfere with the security of, or otherwise abuse the Website or any system resources, services or networks connected to or accessible through the Website. You may only use the Website for lawful purposes.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              B. INTELLECTUAL PROPERTY
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                All materials, including the organization and presentation of such material, on the Website, including wholly owned brand assets such as photography (the “Materials”) are the property of USGC and its licensors and may be protected by intellectual property laws including laws relating to copyrights, trademarks, trade names, internet domain names and other similar rights.
              </OpenP>
              <OpenP textAlign='left'>
                Unless you have entered into a separate agreement with USGC, any other use of these Materials without USGC's written permission is prohibited. Action taken as a result of use of Materials without express written permission from USGC is at the discretion of USGC and our legal team.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              C. TRADEMARKS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                USGC, USG and any other product or service name or slogan contained in the Website are trademarks of USGC and its licensors and may not be copied, imitated or used, in whole or in part, without the prior written permission of USGC or the applicable trademark holder. You may not use any “hidden text” utilizing “USGC” or any other name, trademark or product or service name of USGC without our prior written permission. In addition, the look and feel of the Website, including all page headers, custom graphics, button icons and scripts, is the service mark, trademark and/or trade dress of USGC and may not be copied, imitated or used, in whole or in part, without our prior written permission. All other trademarks, registered trademarks, product names and company names or logos mentioned in the Website are the property of their respective owners. Reference to any products, services, processes or other information, by trade name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship or recommendation thereof by us.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              D. SECURITY
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Purchasers and holders are responsible to implement reasonable and appropriate measures designed to secure access to:  (i) any device associated with purchaser/holder and utilized in connection with the purchase of USG Tokens; (ii) private keys to purchaser’s/holder’s wallet or account; and (iii) any other username, passwords or other login or identifying credentials.  In the event that a purchaser/holder is no longer in possession of a private keys or any device associated with such person’s account or is not able to provide login or identifying credentials, purchaser/holder may lose all of purchaser/holder’s USG Tokens and/or access to purchaser/holders account and to any rights to receive AE Coins upon redemption.  USGC is under no obligation to recover any USG Tokens and purchasers/holders acknowledges, understands and agrees that all purchases of USG Tokens are non-refundable and purchaser will not receive a return of money or other compensation for any USG Tokens purchased.
              </OpenP>
              <OpenP textAlign='left'>
                Upon USGC request, you will immediately provide to USGC information and documents that the USGC , in its sole discretion, deems necessary or appropriate to comply with any laws, regulations, rules or agreements, including without limitation judicial process.  Such documents include, but are not limited to, passport, driver’s license, utility bills, photographs of associated individuals, government identification cards, or sworn statements.  You consents to USGC disclosing such information and documents in order to comply with applicable laws, regulations, rules or agreements.  You acknowledge that USGC may refuse to distribute USG Tokens or redeem such USGC tokens for AE Coins until such requested information is provided.
              </OpenP>
              <OpenP textAlign='left'>
                You acknowledges, understands and agrees that:  (a) the purchase and receipt of USG Tokens may have tax consequences; (b) you are solely responsible for your compliance with any tax obligations; and (c) USGC bears no liability or responsibility with respect to any tax consequences.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </AccordionItemBody>
    </AccordionItem>

    <AccordionItem>
      <AccordionItemTitle>
        6. GENERAL PROVISIONS
      </AccordionItemTitle>
      <AccordionItemBody>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              A. ABSENCE OF RELATIONSHIP
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The sole relationship between USGC and a purchaser or holder is that of purchaser and seller. No other relationship, including, without limitation, any agent-principal relationship, any employee-employer relationship, any franchisee-franchisor relationship, any joint venture relationship or any partnership relationship, between USGC and you exists.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              B. ADDITIONAL ITEMS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Additional terms relating to the USG (such as prices, methods of payment, our policies with respect to returns, refunds, and cancellations and/or exchanges) may be posted on the site on the pages describing the UST.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              C. ASSIGNMENT
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                You may not assign any of your rights or obligations under this User Agreement without the prior written consent of USGC, which may be granted or withheld by USGC in its sole discretion. This contract, including but not limited to the User Agreement, shall be binding on all permitted assigns and successors of USGC and you.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              D. CONFIDENTIALITY
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                You shall be very careful about disclosing the existence and terms of all your transactions with USGC and should carefully consider any disclosure of such information that you make to third parties.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              E. DISPUTE RESOLUTION
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Any purchaser or holder of a USG token agrees to be bound to the following terms:
              </OpenP>
              <OpenP textAlign='left'>
                USGC and any purchaser/holder shall cooperate in good faith to resolve any dispute, controversy or claim arising out of, relating to or in connection with this Agreement, including with respect to the formation, applicability, breach, termination, validity or enforceability thereof (a “Dispute”).  If the parties are unable to resolve a Dispute within ninety (90) days of notice of such Dispute being received by all parties, such Dispute shall be finally settled by Binding Arbitration as defined below.
              </OpenP>
              <OpenP textAlign='left'>
                Any Dispute not resolved within 90 days as set forth above shall be referred to and finally resolved by arbitration under the rules of the State of Wyoming in effect at the time of the arbitration, except as they may be modified herein or by mutual agreement of the Parties.  The number of arbitrators shall be one who shall be selected by USGC.  The seat, or legal place, of arbitration shall be Salt Lake City, Utah.  The language to be used in the arbitral proceedings shall be English.  The arbitration award shall be final and binding on the Parties (“Binding Arbitration”).  The parties undertake to carry out any award without delay and waive their right to any form of recourse insofar as such waiver can validly be made.  Judgment upon the award may be entered by any court having jurisdiction thereof or having jurisdiction over the relevant party or its assets.  Each party will each pay their respective attorneys’ fees and expenses.
              </OpenP>
              <OpenP textAlign='left'>
                Any dispute arising out of or related to this Agreement is personal to the purchaser/holder USGC and will not be brought as a class arbitration, class action or any other type of representative proceeding.  There will be no class arbitration or arbitration in which an individual attempts to resolve a dispute as a representative of another individual or group of individuals.  Further, a dispute cannot be brought as a class or other type of representative action, whether within or outside of arbitration, or on behalf of any other individual or group of individuals.
              </OpenP>

            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              F. FORCE MAJEURE
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                If USGC cannot perform any obligation hereunder as a result of any event that is beyond its control, USGC’s delay or failure to perform such obligation shall be excused and USGC shall not be liable for any damages as a result of, or in connection with, such delay or such failure.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              G. NOTICES
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                Except as otherwise provided herein, all notices and other communications to USGC shall be directed to USGC, c/o Chief Legal Counsel,1603 Capitol Ave., Suite 303, Cheyenne, WY 82001 USA, and all other notices and other communications to you shall be directed, at the option of USGC, to the address that you provided to USGC at the time of your registration.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              H. RECORDING OF PHONE CONVERSATIONS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                USGC may record phone conversations between us, and you expressly consent to the recording of such phone conversations.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              I. ABSENCE OF WAIVERS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                A decision or a failure by USGC to take action with respect to any non-compliance by you of your obligations to USGC or to insist upon strict adherence to any term in the User Agreement, does not affect the ability of USGC with respect to any other non-compliance by you, and does not waive or limit USGC’s right thereafter to insist upon strict adherence to that or any other term, whether of a similar or dissimilar nature.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              J. PRICING OR TYPOGRAPHICAL ERRORS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                We work hard to provide accurate pricing information to you. However, pricing or typographical errors may occur. In the event that an item is listed at an incorrect list price or with incorrect information due to an error in pricing, USGC shall have the right, at our sole discretion, to refuse or cancel any purchase order. Prices and availability are subject to change without notice. If a refund is provided or there is any delay in sending you your Products or your payment, as the case may be, you waive any right to any claim or actual damages of any kind or nature whatsoever.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              K. SEVERABILITY
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The User Agreement is intended to be enforceable to the fullest extent permitted by applicable law. If any term of the User Agreement is held to be unenforceable for any reason, such unenforceability shall not affect the other terms of the User Agreement, and the term that would otherwise be unenforceable shall be enforced to the fullest extent that it would be enforceable.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              L. AMENDMENT
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                USGC may amend the User Agreement at any time by posting the amended terms on the Website and such amendments shall become effective immediately.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              M. ENTIRE AGREEMENT
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The User Agreement, the Privacy Policy, the Token Purchase Agreement and confirmations of the Sale or Redemption transactions hereunder set forth the entire understanding between USGC and you with respect to the subject matter of our transactions.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              Q. USER CONTENT AND CONDUCT
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                At times, if and where applicable at the Website, you may be invited to post User Content. You understand that all User Content, whether you have publicly posted on a forum or privately transmitted to another or to us, is your sole responsibility. Though the Website is designed to be a safe place to share such User Content, USGC cannot guaranty that other users will not misuse the User Content that you share. If you have any User Content that you would like to keep confidential or do not want others to use, do not post it to the Website. Under no circumstances will USGC be liable in any way for any User Content, including, but not limited to, any errors or omissions in any User Content, or for any loss or damage of any kind incurred as a result of the use of any User Content posted, emailed or otherwise transmitted via the Website. The USGC entities are not responsible for a user’s misuse or misappropriation of any User Content you posted at the Website.
              </OpenP>
              <OpenP textAlign='left'>
                By posting any User Content at the Website, you hereby grant USGC and its designees a royalty-free, fully paid-up, perpetual, irrevocable, non-exclusive and fully sub-licensable right and license to use, reproduce, modify, adapt, publish, translate, combine with other works, create derivative works from, distribute, perform, edit and display such User Content (in whole or part), throughout the world in any form, media, or technology now known or later developed. You specifically waive any “moral rights” in and to the User Content. The foregoing grant includes, without limitation, any copyrights and other intellectual property rights in and to your User Content. You represent and warrant that: (a) you own the User Content posted by you or otherwise have the right to grant the license set forth in this section; and (b) the posting of your User Content at the Website does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person. You agree to pay for all royalties, fees, and any other monies owing any person by reason of any User Content you post at the Website.
              </OpenP>
              <OpenP textAlign='left'>
                You acknowledge and agree that USGC may preserve User Content and may also disclose User Content if required to do so by law or in the good faith belief that such preservation or disclosure is reasonably necessary to: (a) comply with legal process; (b) enforce this Agreement; (c) respond to claim(s) or assertion(s) that any User Content violates the rights of third-parties; or (d) protect the rights, property, or personal safety of USGC, its users and the public. You understand that the technical processing and transmission of the Website, including your User Content, may involve transmissions over various networks and changes to conform and adapt to technical requirements of connecting networks or devices.
              </OpenP>
              <OpenP textAlign='left'>
                You agree to each of the conditions in this Agreement and further agree that each of these conditions applies forever and broadly with regard to USGC worldwide. Posting of User Content to or through the Website, including ideas or disclosures of opinions, is voluntary on your part. No confidential or contractual relationship is established by your posting of User Content or is to be implied by our review or subsequent use of your User Content. USGC shall not be liable for any disclosure of any User Content, including opinion(s) or suggestion(s), you post to or through the Website. USGC shall be entitled to unrestricted use of any User Content it may receive from you at the Website, for any purpose whatsoever, commercial or otherwise, without compensation to you as the provider of the User Content.
              </OpenP>
              <OpenP textAlign='left'>
                You agree that you will not use the Website to:
              </OpenP>
              <OpenUl>
                <OpenLi>	upload, post, email or otherwise transmit any User Content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable;</OpenLi>
                <OpenLi>	harm minors in any way;</OpenLi>
                <OpenLi>	impersonate any person or entity, including, but not limited to a representative of USGC, or falsely state or otherwise misrepresent your affiliation with a person or entity;</OpenLi>
                <OpenLi>	forge headers or otherwise manipulate identifiers in order to disguise the origin of any User Content transmitted through the Website;</OpenLi>
                <OpenLi>	upload, post, email or otherwise transmit any User Content that you do not have a right to transmit under any law or under contractual or fiduciary relationships (such as inside information, proprietary and confidential information learned or disclosed as part of employment relationships or under nondisclosure agreements);</OpenLi>
                <OpenLi>	upload, post, email or otherwise transmit any User Content that infringes any patent, trademark, trade secret, copyright or other proprietary rights of any party;</OpenLi>
                <OpenLi>	upload, post, email or otherwise transmit any unsolicited or unauthorized advertising, promotional materials, "junk mail," "spam," "chain letters," "pyramid schemes," or any other form of solicitation, except in those areas that are designated for such purpose;</OpenLi>
                <OpenLi>	upload, post, email or otherwise transmit any material that contains software viruses or any other computer code, files or programs designed to interrupt, emulate, destroy or limit the functionality of any computer software or hardware or telecommunications equipment;</OpenLi>
                <OpenLi>	disrupt the normal flow of dialogue, cause a screen to "scroll" faster than other users of the Website are able to type, or otherwise act in a manner that negatively affects other users' ability to engage in real-time exchanges;</OpenLi>
                <OpenLi>	interfere with or disrupt the Website or servers or networks connected to the Website, or disobey any requirements, procedures, policies or regulations of networks connected to the Website;</OpenLi>
                <OpenLi>	"stalk" or otherwise harass another; or</OpenLi>
                <OpenLi>	collect or store personal data about other Website users.</OpenLi>
              </OpenUl>
              <OpenP textAlign='left'>
                You understand that by using the Website, you may be exposed to User Content created by others that is offensive, indecent or objectionable. USGC does not endorse or have control over User Content. User Content is not reviewed by USGC prior to posting and does not reflect the opinions or policies of USGC. USGC makes no representations or warranties, express or implied as to User Content or the accuracy and reliability of User Content or any other material or information that you may access through the Website. USGC assumes no responsibility for monitoring the Website for inappropriate submissions or conduct. If at any time USGC chooses, in its sole discretion, to monitor the Website, USGC nonetheless assumes no responsibility for User Content, has no obligation to modify or remove any inappropriate User Content, and has no responsibility for the conduct of the Website users submitting any such User Content. Notwithstanding the foregoing, USGC and its designees shall have the right to remove any User Content that violates this Agreement or is otherwise objectionable, in USGC’s sole discretion. You agree that you must evaluate, and bear all risks associated with, the use of any User Content, including any reliance on the accuracy, completeness, or usefulness of such User Content. In this regard, you acknowledge that you may not rely on any User Content.
              </OpenP>
              <OpenP textAlign='left'>
                You are solely responsible for your interactions with other Website users. USGC reserves the right, but has no obligation, to monitor disputes between you and other Website users and to terminate your Website access if USGC determines, in its sole discretion, that doing so is prudent.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </AccordionItemBody>
    </AccordionItem>

    <AccordionItem>
      <AccordionItemTitle>
        7. DEFINITIONS
      </AccordionItemTitle>
      <AccordionItemBody>
        <OpenP textAlign='left'>
          The following terms have the following meanings in the User Agreement:
        </OpenP>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              A. USGC
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term "USGC" means US Gold Currency LLC, a Wyoming limited liability company.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              B. BUSINESS DAY(S)
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term "Business Day(s)" means a day other than a Saturday, a Sunday or a day that is a holiday under the federal law of the United States of America and/or the laws of the State of Wyoming.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              C. COIN(S)
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “Coin(s)” means a stamped piece of metal of a known weight and fineness issued by a sovereign government.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              D. FAIR MARKET VALUE
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “Fair Market Value” means the Fair Market Value of the Product as determined by USGC, in its reasonable discretion, as of 5 p.m. (MT) on the date of cancellation of the Sales Order or the Purchase Order.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              E. MARKET GAIN
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “Market Gain” means:<br />
                When a Sales Order or Sale, as the case may be, is cancelled by USGC, Market Gain occurs when the Fair Market Value of the Product(s) on the date of the cancelled Sales Order or Sale is greater than the original sales price of the Product(s) as it appears on the cancelled Sales Order.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              F. MARKET LOSS
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “Market Loss” means:<br />
                When a Sales Order or Sale, as the case may be, is cancelled by USGC, Market Loss occurs when the Fair Market Value of the Product(s) on the date of the cancelled Sales Order or Sale is less than the original sales price of the Product(s) as it appears on the cancelled Sales Order.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              G. ORDER(S)
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “Order(s)” means, as applicable, a confirmed Sale by a customer or Redemption by USGC, whether such Order was made through the Website, by telephone, in person or otherwise.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              H. PRECIOUS METAL(S)
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “Precious Metal(s)” means Gold, Silver and Platinum along with the Platinum group of elements: rhodium, osmium, ruthenium, Palladium and iridium. Precious Metals are characteristically lustrous, ductile, rare and nonreactive.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              I. PURCHASE(S)
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term "Purchase(s)” means the acquisition of a USG by USGC from a customer, whether made through the Website, with the number, quality and price confirmed. A Purchase is distinct from the acquisition by a customer from USGC of a USG, which is treated as a Sale hereunder.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              J. REDEMPTION ORDER(S)
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “Redemption Order(s)” means a request to exchange a USG for a AE Coin placed by a customer.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              K. SALE(S)
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term "Sale(s)” means the acquisition of USG by a customer from USGC, whether made through the Website, by telephone, in person, or otherwise, with the number, quality and price confirmed.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              L. SALE ORDER(S)
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “Sale Order(s)” means an Order placed by a customer with USGC for the acquisition by the customer of Product(s) from USGC.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              M. USER CONTENT
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term “User Content” means content posted by you on the Website, including without limitation any images or testimonials.
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>
              N. WEBSITE
            </AccordionItemTitle>
            <AccordionItemBody>
              <OpenP textAlign='left'>
                The term "Website” means the websites located at https://USGold.io and mobile. USGold.io
              </OpenP>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>


      </AccordionItemBody>
    </AccordionItem>
  </Accordion>


);


class UserAgreement extends Component {
  // USGInUSD in state is master value for component - don't let the app modify it
  // state = { USGInUSD: 1627.50, ethereumPrice: 0.0, ethereum24hrChange: 0.0, USGInEthereum: 0.0 };

  render() {
    return (
      <Container fluid id={0}>
        <HeroHeader bgImage={TopBg}>
          <Container>
            <HhInnerContainer>
              <HhTextContainer>
                <HhH1>
                  User Agreement
                </HhH1>
              </HhTextContainer>
              <Fade>
                <HhImageContainer bgImage={USGoldToken} />
              </Fade>
            </HhInnerContainer>
          </Container>
        </HeroHeader>

        <FullWidthDiv topColor='#f9f9f9' bottomColor='#f9f9f9' id={1}>
          <Container>
            <OpenH4>
              This User Agreement is effective as November 30, 2018 for all users.
            </OpenH4>
            <OpenP>
              By using the US Gold Currency LLC (“USGC”) website – https://www.USGold.io (“Website”), and other services provided by USGC, and purchasing, receiving or otherwise using the USGC gold backed cryptocurrency token(s) (the “USG”) from USGC, you agree to comply with the following terms and conditions, including, without limitation, any terms available by hyperlink set forth herein (collectively, the “User Agreement”). These terms apply to all use of the Website as well as the purchase, receipt, use, transmittal and redemption of the USG whether made through the Website, directly from USGC or upon one or more exchanges, or otherwise.
            </OpenP>
            <OpenP>
              This User Agreement governs your purchase, maintenance, transmittal and redemption transactions, including placement of cryptocurrency orders on the website (if offered through the USGC website), through an exchange, directly from USGC (if offered directly from USGC) or otherwise, and any cryptocurrency redemption from USGC as applicable.
            </OpenP>
          </Container>
        </FullWidthDiv>

        <FullWidthDiv topColor='#fff' bottomColor='#eee'>
          <Container>
            {/* <AccordionExampleNested /> */}
            <Content />
            <OpenP textAlign='center'><a href={UserAgreementDownload}>Download Full User Agreement</a></OpenP>


          </Container>
        </FullWidthDiv>

        <Footer />
      </Container>
    );
  }
}

const styles = {
  image50tall: {
    width: 'auto',
    height: '50px',
  },
  noPadOrMargin: {
    padding: 0,
    margin: 0,
  },
  goldBorder: {
    border: '1px',
    borderStyle: 'solid',
    borderColor: '#f8da1d',
  },
  pushedDown: {
    position: 'relative',
    top: '350px',
    // marginTop: '400px',
  },
  padTop: {
    paddingTop: '30px',
  },
  fullWidth: {
    width: '100%',
  },
}

export default UserAgreement;
