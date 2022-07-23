import styled from "styled-components";
import { device } from "../constants";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useState } from "react";

const CustomInput = ({
	type,
	className,
	leftIcon,
	data,
	span,
	error,
	touched,
	...others
}) => {
	const [see, setSee] = useState(false);

	if (type === "password")
		return (
			<Wrapper error={error} touched={touched} className={className}>
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
			<Wrapper error={error} touched={touched} className={className}>
				{leftIcon}
				<input type="email" {...others} />
			</Wrapper>
		);

	if (type === "checkbox")
		return (
			<Label error={error} touched={touched} className={className}>
				<input type="checkbox" {...others} />
				<span style={{ marginLeft: 5 }}>{span}</span>
			</Label>
		);

	if (type === "select")
		return (
			<Wrapper error={error} touched={touched} className={className}>
				<select {...others}>
					<option value="" label={others["placeholder"]} disabled />
					{data.map((entry, index) => (
						<option key={index} value={entry.id} label={entry.name} />
					))}
				</select>
			</Wrapper>
		);
	return (
		<Wrapper error={error} touched={touched} className={className}>
			{leftIcon}
			<input type="text" {...others} />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	--horizontal-padding: 20px;
	--verical-padding: 9px;
	--error-font-size: 1rem;
	--border-width: 2px;

	display: flex;
	align-items: center;
	padding: var(--verical-padding) var(--horizontal-padding);
	border-radius: 20px;
	width: 100%;
	position: relative;
	background: ${(props) => props.theme.white};
	margin-bottom: ${(props) => (props.error && props.touched ? 25 : 20)}px;

	input[type="text"],
	input[type="email"],
	input[type="password"] {
		border: none;
		outline: none;
		/* margin-left: 10px; */
		font-style: normal;
		font-weight: 700;
		font-size: 1.3rem;
		line-height: 1.5rem;
		flex: 1;
		letter-spacing: 1px;
		color: ${(props) => props.theme.grey};
	}

	input::placeholder {
		font-style: normal;
		font-weight: 700;
		font-size: 1.3rem;
		line-height: 1.5rem;
		color: ${(props) => props.theme.grey};
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
		border: var(--border-width) solid
			${(props) =>
				props.error && props.touched
					? props.theme.red
					: props.theme.primaryColor};
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
		cursor: inherit;
		color: ${(props) => props.theme.white};
		line-height: inherit;
		font-style: normal;
		font-weight: 700;
		font-size: 1.3rem;
		line-height: 1.5rem;
		z-index: 1;
		outline: none;
	}

	&.nav {
		max-width: 400px;

		input[type="text"] {
			color: ${(props) => props.theme.grey};
		}

		@media ${device.tablet} {
			max-width: 300px;
		}
	}

	&:after {
		content: "${(props) => props.touched && props.error}";
		color: ${(props) => props.theme.white};
		position: absolute;
		left: var(--horizontal-padding);
		bottom: calc((var(--error-font-size) + (var(--border-width) * 4)) * -1);
		font-size: 1rem;
	}
`;

const Label = styled.label`
	display: flex;
	align-items: center;
	font-style: normal;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 1.6rem;
	cursor: pointer;
	position: relative;
	text-align: center;
	margin-bottom: ${(props) => (props.error && props.touched ? 30 : 20)}px;

	&:after {
		content: "${(props) => props.touched && props.error}";
		color: ${(props) => props.theme.red};
		position: absolute;
		left: 50%;
		bottom: -18px;
		font-size: 1rem;
		transform: translateX(-50%);
		width: 100%;
	}
`;

export default CustomInput;
