import React from 'react';
import { PageHeader } from 'antd';


const Header = () => {
    return (
        <PageHeader
            className="site-page-header"
            title="Gantt Timeline"
            subTitle="Track progress!"
            style={{ backgroundColor : "#32cd32" }}
        />
    )
}

export default Header;
