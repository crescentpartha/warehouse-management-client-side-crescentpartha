import React from 'react';
import PageTitle from '../../../SharedPages/PageTitle/PageTitle';
import ManageItems from '../ManageItems/ManageItems';

const ManageHome = () => {
    return (
        <div>
            <PageTitle title="Manage Items"></PageTitle>
            <ManageItems></ManageItems>
        </div>
    );
};

export default ManageHome;