import { FaUserDoctor } from "react-icons/fa6";
import { FaUserNurse } from "react-icons/fa6";
import doctor from "../Images/doctor.png";
import nurse from "../Images/nurse.png";
import pharmacist from "../Images/pharmacist.png";
import psychologist from "../Images/psychologist.png";
import mls from "../Images/laboratory.png";
import opt from "../Images/optometrist.png";
import dentist from "../Images/dentist.png";
import rdg from "../Images/radiographer.png";
import ptp from "../Images/physiotherapist.png";
import ntn from "../Images/nutritionist.png";
import robot from "../Images/robot.png";

let prof;

export default prof = [
  { type: "AI", qty: 1, icon: robot },
  { type: "Counsellor", qty: 3, icon: psychologist },
  { type: "Doctor", qty: 7, icon: doctor },
  { type: "Nurse", qty: 4, icon: nurse },
  { type: "Pharmacist", qty: 3, icon: pharmacist },
  { type: "Scientist", qty: 5, icon: mls },
  { type: "Optometrist", qty: 1, icon: opt },
  { type: "Dentist", qty: 1, icon: dentist },
  { type: "Radiographer", qty: 3, icon: rdg },
  { type: "Physiotherapist", qty: 1, icon: ptp },
  { type: "Dietitian", qty: 1, icon: ntn },
];
