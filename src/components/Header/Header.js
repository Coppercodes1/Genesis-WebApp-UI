import React from 'react';
import styles from './Header.module.css'
import { Layout, Icon, Typography } from 'antd';
import { IoIosNotifications } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';

const { Header } = Layout;
const { Title, Text } = Typography;

const HeaderComponent = (props) => (
    <Header className={styles.header}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Icon
                className={styles.icon}
                type="align-left"
                style={{ color: '#fff' }}
            />
            <Title level={4} style={{ color: '#fff', margin: 0, padding: 0, marginLeft: 20 }}>{props.userDetails.Username}</Title>
            <Text style={{ color: '#fff', marginLeft: 10 }}>{props.userDetails.UserRole}</Text>
        </div>
        <div >
            {/* <Title style={{ color: '#fff' }} level={2}>GENESIS</Title> */}
            <img
                alt='Genesis'
                src="http://www.coppercodes.com/Genesis/Images/Logo/GenesisWhite.png"
                height='30px'
            />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* <Icon type="notification" theme="filled" className={styles.icon} style={{ color: '#fff', marginLeft: 20 }} /> */}
            <IoIosNotifications
                size={30}
                color='#fff'
                style={{ marginLeft: 15 }}
            />
            <Icon type="poweroff" className={styles.icon} style={{ color: '#fff', marginLeft: 15 }} />
            {/* <FiLogOut
                size={30}
                color='#fff'
                style={{ marginLeft: 20, marginTop: 15 }} /> */}
        </div>
    </Header>
);
export default HeaderComponent;