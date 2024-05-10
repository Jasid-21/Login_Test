import { FieldStatus } from "./FieldStatus.type";

export default interface IAuthState {
  user_status: FieldStatus;
  pass_status: FieldStatus;
}
