import RightArrow from '../../assets/rightArrow.png';
import { programsData } from '../../data/programsData';
import styles from './Programs.module.scss';
import { IProgramsProps } from './Programs.props';

function Programs(props: IProgramsProps) {
  return (
    <div className={styles.programs} id="programs">
      <div className={styles.programsHeader}>
        <span>Explore our</span>
        <span>Programs</span>
        <span>to shape you</span>
      </div>

      <div className={styles.programCategories}>
        {programsData.map((program) => (
          <div className={styles.category} key={program.heading}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className={styles.joinNow}>
              <span>Join Now</span>
              <img src={RightArrow} alt="arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
