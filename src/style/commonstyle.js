import styled, { css } from "styled-components";

// COMMON STYLED COMPOMENT FILE

export const Fullwidth = styled.div`
    width: 100%;
    float: left;
    margin-top: ${(props) => props.mp};
    background-color: ${(props) => props.bgcolor}
`

export const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
`;

export const Widthfifty = styled.div`
    width: 50%;
    float: left;
    @media (max-width: 1024px) {
        width: ${(props) => props.medwidth};
    }
    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const Widthseventyfive = styled.div`
    width: 75%;
    float: left;
`;

export const Widththreefourth = styled.div`
    width: 66%;
    float: left;
`;

export const Widthonethird = styled.div`
    width: 33.33%;
    float: left;
`;

export const Adjustdiv = styled.div`
    width: ${(props) => props.width};
    float: left;
`;

export const Widthonefourth = styled.div`
    width: 25%;
    float: left;
`;

export const Widthpaddingl = styled.div`
    width: ${(props) => props.width};
    float: left;
    padding-left: ${(props) => props.pleft};
    padding-top:${(props) => props.ptop};
    padding-right:${(props) => props.pright};

    @media (max-width: 1024px) {
        width: ${(props) => props.medwidth};
    }
    @media (max-width: 767px) {
        width: ${(props) => props.momedwidth};
    }

`;

export const Widthmargina = styled.div`
    width: ${(props) => props.width};
    margin: 0 auto;
    @media (max-width: 1024px) {
        width: ${(props) => props.medwidth};
    }

    @media (max-width: 767px) {
        width: ${(props) => props.momedwidth};
        margin-top: ${(props) => props.momedmargintop};
    }
    `;

export const Widthleft = styled.div`
    width: ${(props) => props.width};
    float: left;
    @media (max-width: 1024px) {
        width: ${(props) => props.medwidth};
    }

    @media (max-width: 767px) {
        width: ${(props) => props.momedwidth};
        margin-top: ${(props) => props.momedmargintop};
    }
    `;
export const Delete = styled.button`
    border: 1px solid red;
    color: red;
    background-color: #fff;
    float: left;
    padding: 5px 12px ;
`;

export const Moreinfo = styled.button`
    border: 1px solid #BD5224;
    color: #BD5224;
    float: left;
    padding: 5px 12px ;
`;

export const Start = styled.button`
    margin-top: 50px;
    background-color: rgb(247, 129, 45);
    color: rgb(255, 255, 255);
    border: none;
    font-family: "Work Sans";
    font-size: 14px;
    border-radius: 12px;
    padding: 12px 28px;
    cursor: pointer
`;
export const Add = styled(Delete)`
    border: 1px solid green;
    color: green;
    padding: 1px;
    float: right;
`;

export const Backradius = styled.div`
    width: 100%;
    border-radius: 24px;
    margin: 3% 80px 80px;
    padding: 90px 80px;
    background-color: ${(props) => props.bgcolor}
`;

export const Centertext = styled.div`
    width: 100%;
    text-align: center;
`;

export const Flexad = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3%;
    @media (max-width: 767px) {
        display: block;
        justify-content: unset;
        width:100%;
    }
    
`;

export const Flexbox = styled.div`
    background-color: rgb(29, 45, 191);
    /* display: flex; */
    -webkit-box-align: center;
    align-items: center;
    width: ${(props) => props.width};
    border-radius: 6px;
    transition: linear 50ms ease 0s;
    padding: 10px 14px;
    margin-right: 2%;
    float:left;
    @media (max-width: 767px) {
        width: ${(props) => props.momedwidth};
        clear: both;
        float:left;
        margin-top: 5%;
    }
    &:hover{
    background-color: #fff;
    }

`;


// TAGS 
export const HH1 = styled.h2`
    color: ${(props) => props.color};
    font-family: "Work Sans";
    letter-spacing: -0.035em;
    font-size: 62px;
    font-weight: 600;
    @media (max-width: 767px) {
    font-size: 29px;
    }
`;

export const HH2 = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;

    @media (max-width: 1024px) {
    font-size: ${(props) => props.mediasize};
    }
`;

export const HH3 = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
`;

export const HH6 = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
`;

export const HH4 = styled.h4`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    margin : 20px 0 ;
    color: ${(props) => props.color};


    @media (max-width: 1024px) {
    font-size: ${(props) => props.medsize};
    line-height: 1.4;
    width:100%;
}
`;

export const PP1 = styled.p`
    color: ${(props) => props.color};
    font-weight: 400;
    width: 90%;
    
    margin-bottom: 0;
    @media (max-width: 767px) {
    font-size: 29px;
    }
`;

export const PP2 = styled.p`
    color: ${(props) => props.color};
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    font-family: 'Roboto';
    font-style: normal;
    @media (max-width: 767px) {
    font-size: 29px;
    }
`;