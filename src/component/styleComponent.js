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
`;

export const TabList = styled.ul`    
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
        font-size: 15px;
        padding: 3px 12px;
        border: 1px solid #19355B;
        border-radius: 15px;
        color: #19355B;
        margin-left: 8px;
        cursor: pointer;
        &:first-child {
            margin-left: 0;
        }
        &:hover, &.active {
            background: #19355B;
            color: #fff;

        }
        &.active {
            cursor: default;
        }
    }
`