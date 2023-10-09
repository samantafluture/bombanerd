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
          emailInputDiv.innerHTML = '<p>Obrigado pelo seu email!</p>';
      } else {
          // Handle error. Show a user-friendly message.
          console.error("Error occurred while sending email");
          const emailInputDiv = document.querySelector('.email-input');
          emailInputDiv.innerHTML = '<p>Obrigado pelo seu email!</p>';
      }
  } catch (error) {
      // This block will catch any network errors or if the fetch fails.
      console.error("Network error:", error);
      const emailInputDiv = document.querySelector('.email-input');
      emailInputDiv.innerHTML = '<p>Obrigado pelo seu email!</p>';
    }
}

async function loadLatestVideos() {
  try {
      const response = await fetch('/api/getYouTubeData');
      const data = await response.json();

      if (data.videos) {
          const videosContainer = document.getElementById('videosContainer');
  
          data.videos.forEach(item => {
              const videoId = item.id.videoId;
              const videoTitle = item.snippet.title;

              // Create an iframe for each video and add it to the container
              const iframe = document.createElement('iframe');
              iframe.src = `https://www.youtube.com/embed/${videoId}`;
              iframe.title = videoTitle;
              iframe.width = '200';  
              iframe.height = '150';  

              videosContainer.appendChild(iframe);
          });
      } else {
          console.error(data.error || "Failed to fetch videos");
      }
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

// Call the function to load the videos
loadLatestVideos();