import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'

import { authClient } from '@/shared/lib/auth-client'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async () => {
    const session = await authClient.getSession()

    if (!session.data) {
      throw redirect({ to: '/auth/login' })
    }

    return { session: session.data }
  },
  component: AuthenticatedLayout,
})

function AuthenticatedLayout() {
  return <Outlet />
}

export default Route
