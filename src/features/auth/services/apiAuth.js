import supabase from "../../../lib/supabase";

export async function signUp({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: { data: { fullName: fullName, avatar: "" } },
  });

  console.log("from signUpApi");
  console.log(data);

  if (data.user && data.user.identities.length === 0) {
    throw new Error(
      "لديك حساب بهذا البريد الإلكتروني بالفعل. الرجاء تسجيل الدخول.",
    );
  }

  if (error) throw new Error(error.message);
  return data;
}

export async function confirmSignUp({ email, token }) {
  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: "signup",
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  // Login in supabase
  const { data: fullData, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  });

  // this error will catch in try catch block or react query
  if (error) throw new Error(error.message);

  return fullData;
}

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin,
    },
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function getCurrentUser() {
  // 1. getSession --> for if there is current user loged in
  const { data: session } = await supabase.auth.getSession();

  // 2. if there is no user --> return null = no user
  if (!session.session) return null;

  // 3. ELSE?? there is a current user --> call getUser
  const { data: fullData, error } = await supabase.auth.getUser();

  // 4. if there is an error return error
  if (error) throw new Error(error.message);

  // 5. if there is no error return user data
  return fullData.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut({ scope: "local" });
  if (error) throw new Error(error.message);
}

// Reset Password

export async function resetPassword(email) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(
    email.trim(),
  );

  if (error) throw new Error(error.message);
  return data;
}

export async function verifyResetPasswordOtp({ email, token }) {
  const { data, error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: "recovery",
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function updatePassword(password) {
  const { data, error } = await supabase.auth.updateUser({ password });
  if (error) throw new Error(error.message);
  return data;
}
