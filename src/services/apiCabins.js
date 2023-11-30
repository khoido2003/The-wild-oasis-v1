import supabase, { supabaseUrl } from "./supabase";

// GET ALL CABINS
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

////////////////////////////////

// DELETE A CABIN WITH ID
export async function deleteCabins(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be deleted");
  }
}

//////////////////////////////

// CREATE/EDIT NEW CABIN
export async function createEditCabin(newCabin, id) {
  // console.log(newCabin, id);

  // Check if the edit cabin already had the image then use that.
  const hasImagePath = newCabin?.image?.startsWith?.(supabaseUrl);

  //https://pglcxhdaxugftkjbzgme.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins");

  // Create cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // Edit cabin
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be created");
  }

  // Upload image

  // Avoid upload image if the image has already there
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // Delete the cabin if there was an error uploading

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);

    console.log(error);
    throw new Error(
      "Cabin image could not be uploaded and cabin was not created!"
    );
  }

  return data;
}

////////////////////////
