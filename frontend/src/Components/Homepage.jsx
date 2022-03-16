import "./Style.css"
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoIosArrowUp } from 'react-icons/io';
import {RiArrowDownSLine} from 'react-icons/ri'
export const Homepage = () => {
    const [add, setAdd] = React.useState(true);
    const [types, setTypes] = React.useState(false);
    const [discountType, setDiscountType] = React.useState(false);
    return (
        <div className="homepageDiv">
            <h1 className="heading">All deals and coupons.</h1>
            <p>The best online deals and coupons, including Klarna exclusives, updated daily.</p>
            <div style={{display:add ? "block":"none"}} className="adv">Pay in 4 anywhere with the Chrome extension.<span className="underline">Add to Chrome</span> <span className="closebtn" onClick={()=>setAdd(false)}>X</span> </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="prodAndFilter">
                <div>
                    <h2>Categories</h2>
                    <br></br>
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
                    <hr></hr>
                    <h2>Filters</h2>
                    <div className="types" onClick={()=>setTypes(!types)}>
                        <div>Type</div>
                        <div>{types?<RiArrowDownSLine/>:<IoIosArrowUp />}</div>
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
                        <div>Dicount</div>
                        <div><IoIosArrowUp/></div>
                    </div>
                    <br></br>
                    {discountType?<div>
                        <input type='checkbox'  value="49"  id='type4'/>&ensp;<label for="type4">O-40%</label><br/><br/>
                        <input type='checkbox'  value="5080" id='type5'/>&ensp;<label for="type5">50-80%</label><br/><br/>
                    </div>:null}
                </div>
                <div>
                    <div className="searchBar">
                        <BiSearch style={{padding:'1em'}}/>
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>
            </div>
        
        
        
        </div>
    )
}