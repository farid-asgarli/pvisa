import Badge from "../../../../components/Badge/Badge";
import { Heading } from "../../../../models/components/Heading";
import { Apply } from "../../../../models/containers/Apply";
import { concatStyles } from "../../../../utils/Concatinator";
import styles from "./ApplicantStatus.module.css";
const ApplicantStatus: typeof Apply.StepThree.ApplicantStatus = ({
  className,
  children,
  applicants,
  changeCurrentApplicant,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Heading.Secondary className={styles.ApplicantHeading}>
        Applicants status
      </Heading.Secondary>
      <div className={styles.ApplicantsStatus}>
        {applicants.map((x, i) => (
          <Badge
            key={i}
            onClick={() =>
              changeCurrentApplicant({
                applicantOrderNumber: x.orderNumber,
                currentFormId: x.submitted_form_id,
              })
            }
            {...x}
          >
            {x.content}
          </Badge>
        ))}
      </div>
    </div>
  );
};
export default ApplicantStatus;
