import LoginForm from '@/components/login-form'

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg border border-gray-200">
        <h3 className="text-2xl font-bold text-center text-blue-600">Login to Your Account</h3>
        <LoginForm />
      </div>
    </div>
  )
}
