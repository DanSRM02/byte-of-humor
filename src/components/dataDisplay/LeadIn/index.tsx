import classes from "./LeadIn.module.scss";
type LeadInProps = {
  heading: string;
  paragraph: string;
};
const LeadIn = ({ heading, paragraph }: LeadInProps) => {
  return (
    <>
      <h1 className={classes["lead-in"]}>{heading}</h1>
      <p className={classes["lead-in__paragraph"]}>{paragraph}</p>
    </>
  );
};

export default LeadIn;
