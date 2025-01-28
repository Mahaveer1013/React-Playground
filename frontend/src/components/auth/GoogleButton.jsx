import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useApiPost } from '../../hooks/useApiPost';

const GoogleButton = () => {

    const { mutate: googleLogin, error, data } = useApiPost("/google-login");

    const GoogleAuthSuccess = (response) => {
        const { credential } = response;

        googleLogin({
            body: { tokenId: credential }
        })

        if (error) {
            console.error('Login failed:', error);
        } else {
            console.log('Login successful:', data);
        }
    };

    return (
        <div className="flex justify-center" >
            <GoogleOAuthProvider clientId="286309906436-1mhnk8b933efuina84sro4q61prji0p4.apps.googleusercontent.com" >
                <GoogleLogin
                    onSuccess={GoogleAuthSuccess}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    );
};

export default GoogleButton;
