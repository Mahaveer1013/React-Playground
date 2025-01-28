import { useState } from "react";
import { useApiPost } from "../../hooks/useApiPost";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Fetch logic via useFetch
    const { mutate: login, isLoading, error } = useApiPost("/login")

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        login({ body: { email, password } })
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                    Email ID
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                />
            </div>

            {/* Error Message */}
            {error && (
                <p className="text-red-500 text-sm">
                    {error.toString()}
                </p>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                disabled={isLoading}
            >
                {isLoading ? "Logging in..." : "Login"}
            </button>
        </form>
    );
};

export default LoginForm;
