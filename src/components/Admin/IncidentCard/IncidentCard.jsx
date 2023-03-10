import styles from './IncidentCard.module.css';
import { SplideSlide } from '@splidejs/react-splide';
import Category from '../Category/Category';

export default function IncidentCard({ incident, selectedIncident, onClick }) {
	return (
		<SplideSlide>
			<div
				className={selectedIncident === incident ? styles.active : styles.card}
				onClick={onClick}
			>
				<p className={styles.title}>{incident.title}</p>
				<p>
					{!incident.endDate || incident.startDate !== incident.endDate
						? `Depuis le ${incident.startDate}`
						: `Du ${incident.startDate} au ${incident.endDate}`}
				</p>
				<p>Lieu : {incident.address}</p>
				<Category category={incident.category} />
			</div>
		</SplideSlide>
	);
}
