import React from "react";
import { Button, Checkbox, DatePicker, TimePicker } from "antd";

const Layout = () => {
  return (
    <div>
      <Button type="primary">this is button</Button>
      <DatePicker></DatePicker>
      <Checkbox></Checkbox>
      <TimePicker>this is </TimePicker>
    </div>
  );
};

export default Layout;
