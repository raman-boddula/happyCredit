import "./Style.css"
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoIosArrowUp } from 'react-icons/io';
import { RiArrowDownSLine } from 'react-icons/ri';
import axios from 'axios';
export const Homepage = () => {
    const [types, setTypes] = React.useState(false);
    const [discountType, setDiscountType] = React.useState(false);
    const [popup, setPopup] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [curr, setCurr] = React.useState({});
    React.useEffect(() => {
        axios.get(`http://localhost:2345/products`).then((response) => setData(response.data.AllProducts));
    }, []);
    return (
        <div  className="homepageDiv">
            <h1 className="heading">All deals and coupons.</h1>
            <p>The best online deals and coupons, including Klarna exclusives, updated daily.</p>
            {/* <div style={{display:add ? "block":"none"}} className="adv">Pay in 4 anywhere with the Chrome extension.<span className="underline">Add to Chrome</span> <span className="closebtn" onClick={()=>setAdd(false)}>X</span> </div> */}
            <br></br>
            <br></br>
            <div className="prodAndFilter" style={{filter: popup ?"blur(2px)":"none"}}>
                <div>
                    <h2>Categories</h2>
                    <br></br>
                    <div className="categoriess">
                        <div className="categoriesHover">All</div><br></br>
                        <div className="categoriesHover">Babies & Kids</div><br></br>
                        <div className="categoriesHover">Clothing & Apparel</div><br></br>
                        <div className="categoriesHover">Computer & Accesories</div><br></br>
                        <div className="categoriesHover">Consumer Electronics</div><br></br>
                        <div className="categoriesHover">Education</div><br></br>
                        <div className="categoriesHover">Gifts</div><br></br>
                        <div className="categoriesHover">Health & Beauty</div><br></br>
                        <div className="categoriesHover">Holidays & Occasions</div><br></br>
                        <div className="categoriesHover">Household</div><br></br>
                        <div className="categoriesHover" style={{ textDecoration: 'underline' }}>See all 15</div><br></br>
                    </div>
                    <div className="filtersDiv">
                        <hr>
                    </hr>
                    <h2>Filters</h2>
                    <div className="types" onClick={()=>setTypes(!types)}>
                        <div><strong>Type</strong></div>
                        <div>{types?<RiArrowDownSLine style={{fontSize:"1em",fontWeight:"bolder"}}/>:<IoIosArrowUp  style={{fontSize:"1em",fontWeight:"bolder"}}/>}</div>
                    </div>
                    <br></br>
                    {types?<div>
                        <input type='checkbox'  value="onlyCoupons"  id='type1'/>&ensp;<label for="type1">Only Coupons</label><br/><br/>
                        <input type='checkbox'  value="exclusives" id='type2'/>&ensp;<label for="type2">Exclusives</label><br/><br/>
                        <input type='checkbox' value="bogomore"  id='type3'/>&ensp;<label for="type3"> BOGO and more</label><br/><br/>
                    </div>:null}
                    <br></br>
                    <hr></hr>
                    <div className="types" onClick={()=>setDiscountType(!discountType)}>
                        <div><strong>Discount</strong></div>
                        <div>{discountType?<RiArrowDownSLine style={{fontSize:"1em",fontWeight:"bolder"}}/>:<IoIosArrowUp style={{fontSize:"1em",fontWeight:"bolder"}} />}</div>
                    </div>
                    <br></br>
                    {discountType?<div>
                        <input type='checkbox'  value="49"  id='type4'/>&ensp;<label for="type4">O-40%</label><br/><br/>
                        <input type='checkbox'  value="5080" id='type5'/>&ensp;<label for="type5">50-80%</label><br/><br/>
                        </div> : null}
                        </div>
                </div>
                <div>
                    <div className="searchBar">
                        <BiSearch style={{padding:'1em'}}/>
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div className="productsDiv" style={{height:"100vh",overflowY: 'scroll'}} >
                        {data.length > 0 ? data.map((el) => {
                            return (
                                <div style={{ position: 'relative' }} onClick={() =>
                                {
                                    setPopup(!popup);
                                    setCurr(el);
                                }}>
                                    <img src={el.product_img} alt={el.title} />
                                    <p style={{fontWeight:"bolder"}}>{el.title}</p>
                                    <p>{el.tag}</p>
                                    <div className="offer" >
                                    <p>{el.offer}</p>
                                    <p>{el.percentage}</p>
                                    </div>
                                </div>
                            )
                        }):null}
                    </div>
                </div>
            </div>     
            {popup ? <div className="popupDiv">
                                  <img src={curr.product_img} alt={curr.id}/>
                                    <p style={{fontWeight:"bolder"}}>{curr.title}</p>
                <p>Complete your looks with America's classic pieces. Save on designer men's and women's clothing. Now 30% off site wide.</p>
                <p style={{fontSize:"0.8em",color:"silver"}}>Deals are offered directly by the retailer and subject to their terms. Klarna does not guarantee any deal. Klarna may get a commission.</p>
                <div className="popupOffer" >
                                    <p>{curr.offer}</p>
                        <p>{curr.percentage}</p>
                </div>
                <button>Shop Now</button>
                <div className="closePopup" onClick={()=>setPopup(!popup)}>X</div>
            </div> : null}
            
           
        </div>
    )
}