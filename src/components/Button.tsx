import React from "react";

import "../scss/Button.module.scss";

interface IProps {
  title: string;
  style?: string;
}

const Button: React.FC<IProps> = ({ title, style }) => {
  return <button className={`${style}`}>{title}</button>;
};

export default Button;
