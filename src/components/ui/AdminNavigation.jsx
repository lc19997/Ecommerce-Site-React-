import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ADMIN_DASHBOARD } from 'constants/routes';
import UserAvatar from 'views/account/components/UserAvatar';
import logo from '../../../static/logo-full.png';

const AdminNavigation = () => {
	const { isAuthenticating, profile } = useSelector(state => ({
		isAuthenticating: state.app.isAuthenticating,
		profile: state.profile
	}));

	return (
		<nav className="navigation navigation-admin">
			<div className="logo">
				<Link to={ADMIN_DASHBOARD} style={{ display: 'flex', alignItems: 'center' }}>
					<img src={logo} />
					<h3>ADMIN PANEL</h3>
				</Link>
			</div>
			<ul className="navigation-menu">
				<li className="navigation-menu-item">
					<UserAvatar
						isAuthenticating={isAuthenticating}
						profile={profile}
					/>
				</li>
			</ul>
		</nav>
	);
};

export default AdminNavigation;
