function submitPatient() {
  const name = document.getElementById('patientName').value;
  const problem = document.getElementById('problem').value;
  const doctor = document.getElementById('doctor').value;

  db.collection("patients").add({
    name: name,
    problem: problem,
    doctor: doctor,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    alert("Patient data submitted successfully!");
  })
  .catch((error) => {
    console.error("Error adding patient: ", error);
  });
}
