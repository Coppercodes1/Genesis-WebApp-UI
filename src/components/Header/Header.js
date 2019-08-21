import React from 'react';
import styles from './Header.module.css'
import { Layout, Icon, Typography } from 'antd';
import { IoIosNotifications } from 'react-icons/io';
import {FiLogOut} from 'react-icons/fi';

const { Header } = Layout;
const { Title } = Typography;

const HeaderComponent = () => (
    <Header className={styles.header}>
        <div>
            <Icon className={styles.icon} type="align-left" style={{ color: '#fff' }} />
        </div>
        <div >
            <Title style={{ color: '#fff' }} level={2}>GENESIS</Title>
        </div>
        <div>
            {/* <Icon type="notification" theme="filled" className={styles.icon} style={{ color: '#fff', marginLeft: 20 }} /> */}
            <IoIosNotifications  
                size={30} 
                color='#fff' 
                style={{marginLeft: 20, marginTop: 15}}/>
            {/* <Icon type="poweroff" className={styles.icon} style={{ color: '#fff', marginLeft: 20 }} /> */}
            <FiLogOut 
                size={30}
                color='#fff'
                style={{marginLeft: 20, marginTop: 15}}/>
        </div>
    </Header>
);
export default HeaderComponent;