import { Button as ButtonAntD } from 'antd';

const Button = (props) => {
    return (
        <ButtonAntD type="primary">{props.value}</ButtonAntD>
    );
}

export default Button;