import React, { useState } from 'react';
import { Input, Button, Card, Layout, Modal } from 'antd';
import {UserAddOutlined } from '@ant-design/icons'
import {InfoCircleOutlined  } from '@ant-design/icons'
import {IdcardOutlined  } from '@ant-design/icons'
const { Header, Content } = Layout;
 


const Admindash = () => {
  const [teacherName, setTeacherName] = useState('');
  const [className, setClassName] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [isAddTeacherModalOpen, setIsAddTeacherModalOpen] = useState(false);
  const [isAddClassModalOpen, setIsAddClassModalOpen] = useState(false);
  const [isTeacherInfoModalOpen, setIsTeacherInfoModalOpen] = useState(false);
  const [isClassInfoModalOpen, setIsClassInfoModalOpen] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);

  const showAddTeacherModal = () => {
    setIsAddTeacherModalOpen(true);
  };

  const showAddClassModal = () => {
    setIsAddClassModalOpen(true);
  };

  const showTeacherInfoModal = () => {
    setIsTeacherInfoModalOpen(true);
  };

  const showClassInfoModal = () => {
    setIsClassInfoModalOpen(true);
  };

  const showStatsModal = () => {
    setIsStatsModalOpen(true);
  };

  const handleOk = () => {
    setIsAddTeacherModalOpen(false);
    setIsAddClassModalOpen(false);
    setIsTeacherInfoModalOpen(false);
    setIsClassInfoModalOpen(false);
    setIsStatsModalOpen(false);
  };

  const handleCancel = () => {
    setIsAddTeacherModalOpen(false);
    setIsAddClassModalOpen(false);
    setIsTeacherInfoModalOpen(false);
    setIsClassInfoModalOpen(false);
    setIsStatsModalOpen(false);
  };

  const handleAddTeacher = () => {
    if (teacherName.trim() === '') {
      alert('Please enter a teacher name.');
      return;
    }

    setTeachers([...teachers, teacherName]);
    setTeacherName('');
    setIsAddTeacherModalOpen(false);
  };

  const handleAddClass = () => {
    if (className.trim() === '') {
      alert('Please enter a class name.');
      return;
    }

    setClasses([...classes, className]);
    setClassName('');
    setIsAddClassModalOpen(false);
  };

  // Placeholder functions for handling button clicks
  const handleTeacherInfo = () => {
    // Replace this with your logic to display teacher information
  };

  const handleClassInfo = () => {
    // Replace this with your logic to display class information
  };

  const handleStats = () => {
    // Replace this with your logic to display statistics
  };

  return (
    <Layout>
      <Header />
      <Content style={{ padding: '20px', display: 'flex', justifyContent: 'space-around' }}>
        <Card
          title="Add Teacher"
          style={{
            width: 300,
            background: '#b5e3e2',
            textAlign: 'center',
            animation: 'fadeIn 1s',
          }}
          hoverable
         
        >
          <UserAddOutlined style={{fontSize:"60px"}}/><br></br>
          <Modal
            title="Add Teacher"
            visible={isAddTeacherModalOpen}
            onOk={handleAddTeacher}
            onCancel={handleOk}
            
          >
            <Input
              placeholder="Enter teacher name"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
            />
          </Modal>
          <Button type="primary" style={{ marginTop: '10px' }}   onClick={showAddTeacherModal}>
            Add 
          </Button>
        </Card>

        <Card
          title="Add Class"
          style={{
            width: 300,
            background: '#b5e3e2 ',
            textAlign: 'center',
            animation: 'fadeIn 1s',
          }}
          hoverable
        
        >
            <UserAddOutlined style={{fontSize:"60px"}}/><br></br>
          <Modal
            title="Add Class"
            visible={isAddClassModalOpen}
            onOk={handleAddClass}
            onCancel={handleCancel}
          >
            <Input
              placeholder="Enter class name"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
          </Modal>
          <Button type="primary" style={{ marginTop: '10px' }}   onClick={showAddClassModal}>
            Add 
          </Button>
        </Card>

        <Card
          title="Teacher Info"
          style={{
            width: 300,
            background: '#b5e3e2',
            textAlign: 'center',
            animation: 'fadeIn 1s',
          }}
          onClick={showTeacherInfoModal}
          hoverable
        >
          <IdcardOutlined style={{fontSize:"60px"}}/><br></br>
           
          <Button type="primary" style={{ marginTop: '10px' }}>View</Button>
        </Card>

        <Card
          title="Class Info"
          style={{
            width: 300,
            background: '#b5e3e2',
            textAlign: 'center',
            animation: 'fadeIn 1s',
          }}
          onClick={showClassInfoModal}
          hoverable
        >
          <IdcardOutlined  style={{fontSize:"60px"}}/><br></br>
          <Button type="primary" style={{ marginTop: '10px' }}>View</Button>
        </Card>

        <Card
          title="Stats"
          style={{
            width: 300,
            background: '#b5e3e2 ',
            textAlign: 'center',
            animation: 'fadeIn 1s',
          }}
          onClick={showStatsModal}
          hoverable
          
        >
          <InfoCircleOutlined  style={{fontSize:"60px"}}/><br></br>
          <Button type="primary" style={{ marginTop: '10px' }}>View</Button>
        </Card>

      </Content>

      {/* Modals */}
      {/* ... content for modals */}
    </Layout>
  );
};

export default Admindash;