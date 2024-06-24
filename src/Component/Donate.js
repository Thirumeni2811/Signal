import React from 'react'
import './Donate.css'
import signalImg from '../assets/SignalTechnologyFoundation.jpg'
import Give from '../assets/Giving.svg'
import Form from 'react-bootstrap/Form';
const Donate = () => {
  return (
    <>
        <section className='donate'>
            <div className='donateContainer'>
                <div className='donateTop'>
                    <h1>Donate to Signal</h1>
                    <a href='#Other'>Other Ways to Give  &gt;&gt;</a>
                </div>
                <div className='Container'>
                    <div className='donateMoney'>
                        <div className='moneyEntry'>
                            <div className='entryTop'>
                                o  o  o  &rarr;
                            </div>
                            <div className='align'>
                                <div className='period'>
                                    <span className='oneTime'>One-time</span>
                                    <span className='monthly'>Monthly</span>
                                </div>
                                <div className='selCountry'>
                                    <Form.Select size="sm">
                                        <option>US Dollars (USD)</option>
                                        <option>Australian Dollar (AUD)</option>
                                        <option>Brazilian Real (BRL)</option>
                                        <option>British Pound Sterling (GBP)</option>
                                        <option>Canadian Dollars (CAD)</option>
                                        <option>Chinese Renminbi Yuan (CNY)</option>
                                        <option>Euros (EUR)</option>
                                        <option>Hong Kong Dollar (HKD)</option>
                                        <option>Indian Rupee (INR)</option>
                                        <option>Japanese Yen (JPY)</option>
                                        <option>South Korean Won (KRW)</option>
                                        <option>Polish Złoty (PLN)</option>
                                        <option>Russian Ruble (RUB)</option>
                                        <option>Swedish Krona (SEK)</option>
                                        <option>Swiss Franc (CHF)</option>
                                    </Form.Select>
                                </div>
                                <div className='moneyGrid'>
                                    <h3>$5</h3>
                                    <h3>$10</h3>
                                    <h3>$20</h3>
                                    <h3>$30</h3>
                                    <h3>$50</h3>
                                    <h3>$80</h3>
                                </div>
                                <div className='customAmt'>
                                    <h3 className='customAmt'>& Custom Amount</h3>
                                </div>
                                <div className='commentt'>
                                    <div>
                                        <form>
                                            <input
                                                type="checkbox"
                                                id="customCheckbox"
                                                value="Write us your comment"
                                            />
                                            <label htmlFor="customCheckbox">Write us your comment</label><br/>
                                            <label for='comment'>Your comment</label><br />
                                            <div className='textArea'>
                                                <input type='textarea' className='comment' id='comment'/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className='nextButton'>
                                    <h4>Next &rarr;</h4>
                                </div>
                                <div className='powered'>
                                    <a href='https://poweredby.donorbox.org/?utm_source=Poweredby&utm_campaign=Donate%20to%20Signal&utm_content=105500&utm_org=Signal%20Technology%20Foundation'>Powered by Donarbox</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='donateFor'>
                        <p>Signal is built for you; not your data and not for profit. We pursue our mission with your support - to protect free expression and enable secure global communication through open source privacy technology. Private messaging. No ads, no trackers, no surveillance.</p>
                        <p>Your donations help pay for the development and maintenance of Signal, including the servers and bandwidth required to make Signal available to the millions of people all over the world who depend on it.</p>
                        <p>If you provide an email with your donation, you will receive an email confirmation for your tax records. Signal Technology Foundation is an independent nonprofit charity and tax-exempt under section 501c3 of the US Internal Revenue Code. Our Federal Tax ID Number is 82-4506840.</p>
                        <p>Note: You will only receive a badge in your Signal account if you donate inside the Signal app.</p>
                    </div>
                </div>    
            </div>  
            <div className='otherContainer' id='Other'>
                <div className='Container'>
                    <div className='signalFound'>
                        <div className='signalTop'>
                            <img src={signalImg} alt='imageSignal' />
                            <h5>Signal Technology Foundation</h5>
                        </div>
                        <div className='align'>
                            <div className='method'>
                                <h5>Choose Method</h5>
                                <div className='methodGrid'>
                                    <h5 className='crypto'>Crypto</h5>
                                    <h5 className='cardd'>Card</h5>
                                    <h5 className='stock'>Stock</h5>
                                    <h5 className='daf'>DAF</h5>
                                </div>
                            </div>
                            <div className='sponsor'>
                                <a href='https://thegivingblock.com/'>
                                    <p>Powered by</p>
                                    <img src={Give} alt='Giving Block' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='donateFor'>
                        <h5>Other Ways to Give</h5>
                        <p>Signal accepts donations of cryptocurrency, stock, and gifts from donor advised funds (DAFs). These donations are processed through The Giving Block.</p>
                        <p>If you want to receive a tax deduction in the US for the fair market value of your donation, you can provide an email address to receive a tax receipt. The Giving Block also supports anonymous donations of cryptocurrency and from DAFs.</p>
                        <p>Note: You will only receive a badge in your Signal account if you donate inside the Signal app.</p>
                    </div>
                </div>    
            </div>  
            <div className='donarFoot'>
                <p><a href='#'>Donor FAQs </a>| <a href='#'>Donar Privacy Policy</a></p>
            </div>     
        </section>
    </>
  )
}

export default Donate