import styled from "styled-components";

export const ClassifyCon = styled.div`
    width:100%;
    background:white;
    padding-top:1rem;
`

export const ClassifyStyle = styled.div`
   width:100%;
   background:white;
   position:fixed;
   top:0;
   left:0;
   
`
export const ClassifyStyleSearch = styled.div`
     width:100%;
     height:.54rem;
     display:flex;
     justify-content:center;
     align-items:center;
     div{
        width:90%;
        height:.3rem;
        border:1px solid #999;
        border-radius:5px;
        position: relative;
        input{
           width:90%;
           height:.2rem;
           position:absolute;
           top:.04rem;
           left:.26rem;
           outline:none;
           border:0;
           font-size:.12rem;         
        }
        .am-icon-xxs{
              position: absolute;
              top:.08rem;
              left:.1rem;
           }
     }
`
export const ClassifyStyleNav = styled.div`
    width:100%;
    height:.4rem;
    ul{
       width:86%;
       height:100%;
       margin:0 auto;
       display:flex;
       align-items:center;
       justify-content:space-between;
       li{
          font-size:.12rem;
          height:.4rem;
          width:30%;
          text-align:center;
          line-height:.4rem;
          a{
             display:block;
             height:.4rem;
          }
          .active{
             color:red;
             border-bottom:1px solid red;
          }
       }
    }
`
