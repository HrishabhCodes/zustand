import { Button, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import useStore from "../store/store";

const Profile = () => {
  const { name, age, gender } = useStore((state) => state.details);
  const setName = useStore((state) => state.setName);
  const setAge = useStore((state) => state.setAge);
  const setGender = useStore((state) => state.setGender);
  const [nameInput, setNameInput] = useState(name);
  const [ageInput, setAgeInput] = useState(age);
  const [genderInput, setGenderInput] = useState(gender);
  const [nameEdit, setNameEdit] = useState(false);
  const [ageEdit, setAgeEdit] = useState(false);
  const [genderEdit, setGenderEdit] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const saveName = (name) => {
    setNameEdit(false);
    setName(name);
  };

  const saveAge = (age) => {
    setAgeEdit(false);
    setAge(age);
  };

  const saveGender = (gender) => {
    setGenderEdit(false);
    setGender(gender);
  };

  return (
    <div className="profile-page">
      <div className="profile-cont">
        <div className="icon">
          <img
            className="avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
          />
        </div>
        <div className="details">
          <div className="name-details">
            <label htmlFor="name">Name</label>
            <Input
              disabled={!nameEdit}
              onChange={(e) => setNameInput(e.target.value)}
              className="name"
              value={nameInput}
            />
            {!nameEdit ? (
              <i
                title="Edit"
                onClick={(e) => setNameEdit(true)}
                className="edit fa-solid fa-pen-to-square"
              ></i>
            ) : (
              <i
                onClick={(e) => saveName(nameInput)}
                title="Save to Store"
                className="save fa-solid fa-floppy-disk"
              ></i>
            )}
          </div>

          <div className="age-details">
            <label htmlFor="age">Age</label>
            <Input
              type="number"
              onChange={(e) => setAgeInput(e.target.value)}
              disabled={!ageEdit}
              className="age"
              value={ageInput}
            />
            {!ageEdit ? (
              <i
                title="Edit"
                onClick={(e) => setAgeEdit(!ageEdit)}
                className="edit fa-solid fa-pen-to-square"
              ></i>
            ) : (
              <i
                onClick={(e) => saveAge(ageInput)}
                title="Save to Store"
                className="save fa-solid fa-floppy-disk"
              ></i>
            )}
          </div>

          <div className="gender-details">
            <label htmlFor="gender">Gender</label>
            <Select
              onChange={(value) => setGenderInput(value)}
              disabled={!genderEdit}
              className="gender"
              value={genderInput}
            >
              <Select.Option value="Male">Male</Select.Option>
              <Select.Option value="Female">Female</Select.Option>
              <Select.Option value="Other">Other</Select.Option>
            </Select>
            {!genderEdit ? (
              <i
                title="Edit"
                onClick={(e) => setGenderEdit(!genderEdit)}
                className="edit fa-solid fa-pen-to-square"
              ></i>
            ) : (
              <i
                onClick={(e) => saveGender(genderInput)}
                title="Save to Store"
                className="save fa-solid fa-floppy-disk"
              ></i>
            )}
          </div>

          <Button onClick={showModal} type="primary">
            View Store Values
          </Button>
          <Modal
            title="Values in the store:"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Profile;
