import supabase from "../supabase";

export async function signUp(email, password, fullName) {

    
const { data, error } = await supabase
  .from('profiles')
  .insert([
    { some_column: 'someValue', other_column: 'otherValue' },
  ])
  .select()

}
