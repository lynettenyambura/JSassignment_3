function protect_email(email) {
    let atIndex = email.indexOf('@'); // Find the index of the '@' symbol
    let username = email.slice(0, atIndex); // Extract the username
    let domain = email.slice(atIndex); // Extract the domain
  
    // Replace part of the username with dots
    let hiddenUsername = username.slice(0, 5) + '...' + username.slice(-5);
  
    return hiddenUsername + domain;
  }
  
  console.log(protect_email("robin_singh@example.com")); // Output: robin...@example.com
  