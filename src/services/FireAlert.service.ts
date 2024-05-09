import Swal, { SweetAlertIcon, SweetAlertResult } from "sweetalert2";

export default async function FireAlert(
  msg: string, icon: SweetAlertIcon = 'info',
  cancelable: boolean = false, title: string = 'System Message'
): Promise<SweetAlertResult> {
  return Swal.fire({
    title,
    html: msg,
    icon,
    showDenyButton: cancelable,
  }).then(resp => resp);
}
