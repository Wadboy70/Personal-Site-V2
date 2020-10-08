import styled from 'styled-components';

export const SideBarContainer = styled.div`
    display: grid;
    grid-template-columns: 100%;
    align-content: center;
    justify-items: center;
    height: 100vh;
    width: 10vw;
    ::before, :after{
        content: '';
        width: 1px;
        background-color: white;
        height: 30vh;
    }
`;
export const SidebarList = styled.ol`
    list-style-type:none;

`;
export const SidebarListItem = styled.li`


`;
export const SidebarLink = styled.a`


`;