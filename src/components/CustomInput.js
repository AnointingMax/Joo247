import styled from "styled-components";
import { device } from "../constants";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useState } from "react";

const CustomInput = ({ type, className, leftIcon, data, span, ...others }) => {
	const [see, setSee] = useState(false);

	if (type === "password")
		return (
			<Wrapper className={className}>
				{leftIcon}
				<input type={see ? "text" : "password"} {...others} />
				{see ? (
					<IoIosEye
						size={22}
						className="color-white"
						onClick={() => setSee(false)}
					/>
				) : (
					<IoIosEyeOff
						size={22}
						className="color-white"
						onClick={() => setSee(true)}
					/>
				)}
			</Wrapper>
		);

	if (type === "email")
		return (
			<Wrapper className={className}>
				{leftIcon}
				<input type="email" {...others} />
			</Wrapper>
		);

	if (type === "checkbox")
		return (
			<Label className={className}>
				<input type="checkbox" {...others} />
				<span style={{ marginLeft: 5 }}>{span}</span>
			</Label>
		);

	if (type === "select")
		return (
			<Wrapper className={className}>
				<select {...others}>
					<option value="" label={others["placeholder"]} disabled />
					{data.map((entry) => (
						<option value={entry.id} label={entry.name} />
					))}
				</select>
			</Wrapper>
		);
	return (
		<Wrapper className={className}>
			{leftIcon}
			<input type="text" {...others} />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 9px 20px;
	border-radius: 20px;
	width: 100%;
	background: ${(props) => props.theme.white};

	input[type="text"],
	input[type="email"],
	input[type="password"] {
		border: none;
		outline: none;
		margin-left: 10px;
		font-style: normal;
		font-weight: 700;
		font-size: 13px;
		line-height: 15px;
		flex: 1;
		letter-spacing: 1px;
		color: ${(props) => props.theme.white};
	}

	input::placeholder {
		font-style: normal;
		font-weight: 700;
		font-size: 13px;
		line-height: 15px;
	}

	&.transparent {
		background: transparent;

		input[type="text"],
		input[type="email"],
		input[type="password"] {
			background: transparent !important;
			color: ${(props) => props.theme.white};
		}

		input::placeholder {
			font-style: normal;
			font-weight: 700;
			font-size: 13px;
			line-height: 15px;
			color: ${(props) => props.theme.white};
		}
	}

	&.border-yellow {
		border: 2px solid ${(props) => props.theme.primaryColor};
	}

	&.short {
		width: max-content;
	}

	select {
		background-color: transparent;
		border: none;
		margin: 0;
		width: 100%;
		font-family: inherit;
		font-size: inherit;
		cursor: inherit;
		color: ${(props) => props.theme.white};
		line-height: inherit;
		font-style: normal;
		font-weight: 700;
		font-size: 13px;
		line-height: 15px;

		// Stack above custom arrow
		z-index: 1;

		// Remove focus outline, will add on alternate element
		outline: none;
	}

	&.nav {
		max-width: 400px;
		@media ${device.tablet} {
			max-width: 300px;
		}
	}
`;

const Label = styled.label`
	display: flex;
	align-items: center;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
`;

export default CustomInput;
