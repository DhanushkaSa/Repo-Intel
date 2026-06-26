import os
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.middleware.cors import CORSMiddleware
import firebase_admin
from firebase_admin import auth, credentials
from pydantic import BaseModel

# 1. Initialize Firebase Admin SDK
service_account_path = os.path.join(
    os.path.dirname(__file__), "serviceAccountKey.json")

try:
    firebase_admin.get_app()
except ValueError:
    cred = credentials.Certificate(service_account_path)
    firebase_admin.initialize_app(cred)


app = FastAPI(title="Repo Intel AI Backend")

# 2. Configure CORS so your React frontend can communicate with it
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Your Vite/React local port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

security = HTTPBearer()

# 3. Security Dependency: Verifies the Firebase JWT token from Frontend


async def get_current_user(auth_credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = auth_credentials.credentials
    try:
        # Decodes the token and validates it against Firebase servers
        decoded_token = auth.verify_id_token(token)
        return decoded_token
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Invalid or expired authentication token: {str(e)}",
            headers={"WWW-Authenticate": "Bearer"},
        ) from e

# Request Data Validation Schema


class AnalysisRequest(BaseModel):
    repository_url: str

# 4. Protected Route: Only accessible if a valid frontend token is provided


@app.post("/api/analyze")
async def analyze_repository(request: AnalysisRequest, user: dict = Depends(get_current_user)):
    # The 'user' dictionary contains all decrypted fields you saw in your console log
    user_email = user.get("email")
    user_id = user.get("uid")
    user_name = user.get("name")

    # Place your Python AI / Repository Analysis core logic here
    return {
        "status": "success",
        "message": f"Repository analysis scheduled successfully for user {user_id}",
        "repository": request.repository_url,
        "analytics": {
            "requested_by": user_email,
            "insights": "Repository connection verification placeholder."
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
