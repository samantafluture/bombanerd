async function sendEmail() {
  const email = document.getElementById('userEmail').value;

  try {
      const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }),
      });

      const result = await response.json();

      if (result.status === 'success') {
          const emailInputDiv = document.querySelector('.email-input');
          emailInputDiv.innerHTML = '<p>Obrigado pelo seu email! Te manteremos informados sobre nossas novidades!</p>';
      } else {
          // Handle error. Show a user-friendly message.
          console.error("Error occurred while sending email");
          const emailInputDiv = document.querySelector('.email-input');
          emailInputDiv.innerHTML = '<p>Ops, algo deu errado!</p>';
      }
  } catch (error) {
      // This block will catch any network errors or if the fetch fails.
      console.error("Network error:", error);
      const emailInputDiv = document.querySelector('.email-input');
      emailInputDiv.innerHTML = '<p>Ops, algo deu errado na conexão!</p>';
  }
}
