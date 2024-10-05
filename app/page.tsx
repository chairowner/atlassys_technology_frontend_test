import Image from "next/image";
import "./page.scss";
import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

const Input: FC<InputProps> = ({ label, ...props }) => {
	return (
		<label className="form_input">
			<span>{label}</span>
			<input {...props} />
		</label>
	);
};

export default function Setting() {
	return (
		<>
			<ul className="page__list">
				<li className="selected">Edit profile</li>
				<li>Preference</li>
				<li>Security</li>
			</ul>
			<div className="page__content">
				<div className="page__content__profile__wrapper">
					<div className="page__content__profile__container">
						<Image
							className="page__content__profile__image"
							src="/img/profile.png"
							width={130}
							height={130}
							alt="Profile"
						/>
						<Image
							className="page__content__profile__edit"
							src={"/img/edit.png"}
							width={30}
							height={30}
							alt="Edit"
						/>
					</div>
				</div>
				<div className="page__content__form">
					<div className="page__content__form__fields">
						<Input label="Your Name" defaultValue="Charlene Reed" />
						<Input label="Email" defaultValue="charlenereed@gmail.com" />
						<Input label="Password" type="password" defaultValue="**********" />
						<Input
							label="Present Address"
							defaultValue="San Jose, California, USA"
						/>
						<Input
							label="Date of Birth"
							type="date"
							defaultValue="1990-01-25"
						/>
						<Input
							label="Permanent Address"
							defaultValue="San Jose, California, USA"
						/>
						<Input label="City" defaultValue="San Jose" />
						<Input label="Postal Code" defaultValue="45962" />
						<Input label="Country" defaultValue="USA" />
					</div>
					<div className="page__content__form__buttons">
						<button type="button">Save</button>
					</div>
				</div>
			</div>
		</>
	);
}
