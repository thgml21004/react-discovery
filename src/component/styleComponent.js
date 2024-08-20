import styled from 'styled-components';

export const Title = styled.div`
    h3 {
        font-size: 36px;
        font-weight: 600;
        line-height: 42px;
        color: #333;
        margin-bottom: 40px;
        &.more {
            position: relative;
            display: inline-block;
            &::after {
                content: "";
                position: absolute;
                right: -25px;
                top: 50%;
                transform: translateY(-50%);
                display: block;
                background: url("../../img/moreBtn.png") no-repeat center;
                width: 11px;
                height: 16px;
            }
        }
    }
    p {
        position: relative;
        font-size: 15px;
        font-weight: 400;
        line-height: 23px;
        color: #666;
        &::after {
            content: "";
            display: block;
            width: 50px;
            height: 4px;
            background-color: #000;
            margin-top: 150px;
        }
    }
`;