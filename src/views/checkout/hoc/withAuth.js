/* eslint-disable no-nested-ternary */
import { calculateTotal } from 'helpers/utils';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

const withAuth = (Component) => {
	return withRouter((props) => {
		const state = useSelector(state => ({
			isAuth: !!state.auth.id && !!state.auth.role,
			basket: state.basket,
			shipping: state.checkout.shipping,
			payment: state.checkout.payment,
			profile: state.profile
		}));

		if (!state.isAuth) {
			<Redirect to="/signin" />
		} else if (state.basket.length === 0) {
			<Redirect to="/" />
		} else if (state.isAuth && state.basket.length !== 0) {
			return (
				<Component
					{...props}
					basket={state.basket}
					payment={state.payment}
					profile={state.profile}
					shipping={state.shipping}
					subtotal={calculateTotal(state.basket.map(product => product.price * product.quantity))}
				/>
			)
		} else {
			return null;
		}
	});
};

export default withAuth;
