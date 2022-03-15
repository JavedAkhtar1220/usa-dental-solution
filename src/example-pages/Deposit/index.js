import React, { useState } from 'react';

import ManagerPage from './ManagerPage';
import AdminPage from './AdminPage';

export default function Deposit() {

    const [admin, setAdmin] = useState(false);

    return (
        <>
            {admin ? <AdminPage /> : <ManagerPage />}
        </>
    );
}
