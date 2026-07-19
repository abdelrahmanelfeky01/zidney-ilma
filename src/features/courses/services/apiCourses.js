import supabase from "../../../lib/supabase";

export async function getCourses() {
  // fetch courses with lessons
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*, lessons(*)");

  if (error) throw new Error(error.message);

  return courses;
}
