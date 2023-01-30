import React from "react";

import "../styles/Button.module.scss";

interface IProps {
  title: string;
  style?: string;
}

const Button: React.FC<IProps> = ({ title, style }) => {
  return <button className={`${style}`}>{title}</button>;
};

export default Button;
