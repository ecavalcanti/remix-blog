import { redirect } from 'remix'
import { logout } from '~/utils/session.server'

export async function action({ request }) {
  return logout(request)
}

export function loader() {
  return redirect('/')
}
