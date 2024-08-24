// persistent atom
import { createJSONStorage, atomWithStorage } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom } from 'jotai';
import { AuthResponse, LoginRequest } from './auth.interfaces';
import axios, { AxiosError } from 'axios';
import { API } from '../api/api';

const storage = createJSONStorage<AuthState>(() => AsyncStorage);
const INITIAL_STATE = {
	accessToken: null,
	isLoading: false,
	error: null,
};

export const authAtom = atomWithStorage<AuthState>(
	'auth',
	INITIAL_STATE,
	storage,
);

export const loginAtom = atom(
	(get) => get(authAtom),
	async (_get, set, { email, password }: LoginRequest) => {
		try {
			set(authAtom, {
				accessToken: null,
				isLoading: true,
				error: null,
			});

			const { data } = await axios.post<AuthResponse>(API.login, {
				email,
				password,
			});

			set(authAtom, {
				accessToken: data.access_token,
				isLoading: false,
				error: null,
			});
		} catch (e) {
			if (e instanceof AxiosError) {
				set(authAtom, {
					accessToken: null,
					isLoading: false,
					error: e.response?.data?.message,
				});
			}
		}
	},
);

export const logoutAtom = atom(null, (_get, set) => {
	set(authAtom, INITIAL_STATE);
});

export interface AuthState {
	accessToken: string | null;
	isLoading: boolean;
	error: string | null;
}
