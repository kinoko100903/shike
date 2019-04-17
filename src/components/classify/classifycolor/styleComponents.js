import styled from "styled-components";

export const ClassifyStyleColor = styled.div`
     width:100%;
     border-top:10px solid #eee;
     background:white;
     div{
        width:90%;
        margin:0 auto;
        position: relative;
        margin-top:.1rem;
        p{
           font-size:.1rem;
           margin-top:.02rem;
           position: absolute;
           left:.1rem;
           
        }
        span{
           font-size:.2rem;
           color:#FC3B72;
           position:absolute;
           top:-.1rem;
        }
     }
     ul{
        width:90%;
        margin:0 auto;
        display:flex;
        flex-wrap:wrap;
        padding-bottom:.1rem;
        li{
           font-size:.1rem;
           width:16%;
           height:.26rem;
           background:#eee;
           line-height:.26rem;
           text-align:center;
           margin-top:.2rem;
           margin-left:.1rem;
           border-radius:.13rem;
        }
     }
    
`