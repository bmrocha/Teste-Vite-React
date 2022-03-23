import {createGlobalStyle} from 'styled-components'

const globalStyle = createGlobalStyle`
    * {
        padding: 50px;
        margin: 50px;
        box-sizing: border-box;
        background-color: #00eeff;
    }

    button {
        background-color: #0000;
    }
`
;
export default globalStyle;