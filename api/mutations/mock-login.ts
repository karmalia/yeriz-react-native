import { useMutation } from "@tanstack/react-query";
import api from "@/api/http";

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    surname: string;
  };
}

interface LoginRequest {
  email: string;
  password: string;
}

const loginFetcher = async ({
  email,
  password,
}: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/login", { email, password });
  if (response.status !== 200) {
    throw new Error("Invalid email or password");
  }
  return response.data;
};

const useLoginMutation = () => {
  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: loginFetcher,
  });
};

export default useLoginMutation;
