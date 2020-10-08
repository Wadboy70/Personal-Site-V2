import styled from 'styled-components';

import {ReactComponent as Email} from "../../assets/Email.svg";
import {ReactComponent as LinkedIn} from "../../assets/LinkedIn.svg";
import {ReactComponent as Github} from "../../assets/Github.svg";
import {ReactComponent as Instagram} from "../../assets/Instagram.svg";

export const logos = [Email, LinkedIn, Github, Instagram].map(logo => (
    styled(logo)`
        fill: white;
    `
));