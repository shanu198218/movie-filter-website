
export default  form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  const requiredFields = ["firstName", "lastName", "email", "comments"];
  let valid = true;
  requiredFields.forEach((id) => {
    const field = document.getElementById(id);
    if (!field.value.trim()) {
      alert(`${id.replace(/([A-Z])/g, ' $1')} is required.`);
      valid = false;
    }
  });
  if (!valid) e.preventDefault();
});
