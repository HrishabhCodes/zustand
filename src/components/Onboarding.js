import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { Link } from "react-router-dom";
import useStore from "../store/store";

const Onboarding = () => {
  const setDetails = useStore((state) => state.setDetails);
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  let isFormComplete = !name || !age || !gender;
  const handleStore = (name, age, gender) => {
    setDetails(name, age, gender);
  };

  return (
    <div className="onboarding-page">
      <Form name="basic" className="form" autoComplete="off">
        <p className="heading">Enter Your Details</p>

        <p className="fields">
          Name <span className="required">*</span>
        </p>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input onChange={(e) => setName(e.target.value)} value={name} />
        </Form.Item>

        <p className="fields">
          Age <span className="required">*</span>
        </p>
        <Form.Item
          name="age"
          rules={[
            {
              required: true,
              message: "Please input your age!",
            },
          ]}
        >
          <Input
            onChange={(e) => setAge(e.target.value)}
            value={age}
            type="number"
            className="age-input"
          />
        </Form.Item>

        <p className="fields">
          Gender <span className="required">*</span>
        </p>
        <Form.Item
          name="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            onChange={(value) => setGender(value)}
            value={gender}
            placeholder="Select gender"
            allowClear
          >
            <Select.Option value="Male">Male</Select.Option>
            <Select.Option value="Female">Female</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Link to="profile">
            <Button
              disabled={isFormComplete}
              onClick={(e) => handleStore(name, age, gender)}
              type="primary"
              htmlType="submit"
            >
              Continue
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Onboarding;
