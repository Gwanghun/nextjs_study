import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'd69ec9566f7b38ab2ee9',
      clientSecret: '7c7f698e3934fd9a33386ddcef20829affa170b3',
    }),
  ],
  secret : 'hooeni1234!@#$'
};
export default NextAuth(authOptions);