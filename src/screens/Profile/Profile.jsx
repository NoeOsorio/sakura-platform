import React, { useState } from "react";
import { useAuth } from "../../hooks/AuthContext";
import { updateProfile, getAuth } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase";
import "./Profile.css"; // Archivo CSS para los estilos

const Profile = () => {
  const { currentUser, userInfo } = useAuth();
  const [firstName, setFirstName] = useState(userInfo?.first_name || "");
  const [lastName, setLastName] = useState(userInfo?.last_name || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [membership, setMembership] = useState(userInfo?.membership || "");
  const [profileImage, setProfileImage] = useState(
    userInfo?.profileImage || ""
  );

  const handleUpdate = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    // Update profile information in Firebase Auth
    if (user) {
      await updateProfile(user, { photoURL: profileImage });
    }

    // Update user document in Firestore
    const userDocRef = doc(firestore, "users", user.uid);
    await updateDoc(userDocRef, {
      first_name: firstName,
      last_name: lastName,
      membership,
      profileImage,
    });

    alert("Profile updated successfully!");
  };

  const handleImageChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-content">
        <div className="profile-image">
          <img src={profileImage || "default-profile.png"} alt="Profile" />
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className="profile-details">
          <label>
            Nombre:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Apellido:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input type="email" value={email} disabled />
          </label>
          <label>
            Membresia:
            <input type="text" value={membership} disabled />
          </label>
          <button onClick={handleUpdate}>Update Profile</button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
