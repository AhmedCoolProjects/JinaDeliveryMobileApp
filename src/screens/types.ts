import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamListProps = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  ForgetPassword: undefined;
};

export type HomeProps = StackScreenProps<RootStackParamListProps, "Home">;
export type LoginProps = StackScreenProps<RootStackParamListProps, "Login">;
export type RegisterProps = StackScreenProps<RootStackParamListProps, "Register">;
export type ForgetPasswordProps = StackScreenProps<RootStackParamListProps, "ForgetPassword">;
