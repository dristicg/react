import '.style.css';

function Header() {

    return(

        <>
         <div className="header">

<div className="icon_b1">
    <img src={"https://www.svgrepo.com/show/521521/bookmark.svg"} className="icon_b1_img"/>
</div>

<div className="icon_b2">
    <div style={{backgroundColor: 'white'}}><img src={"https://www.svgrepo.com/show/393123/internet.svg"}
            className="icon_b2_img1"/></div>
    <div className="icon_b2_text">English(United States)</div>
    <div style={{backgroundColor: 'white'}}><img src={"https://www.svgrepo.com/show/509905/dropdown-arrow.svg"}
            className="icon_b2_img2"/> </div>
    <div style={{backgroundColor: 'white'}}><img src={""}/></div>
    <div className="icon_b2_text2">Sign In</div>
</div>

<div className="icon_b3">
    <span style={{backgroundColor: 'blue', marginBottom: '15px', marginLeft: '8px'}}>Join Our Talont
        Community</span>
</div>
</div>

        </>
    )
}