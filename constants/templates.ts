export const templates = [
    {
      id: "blank",
      label: "Blank Document",
      imageUrl: "/blank-document.svg",
      initialContent:""
    },
    {
      id: "software-proposal",
      label: "Software development proposal",
      imageUrl: "/software-proposal.svg",
      initialContent: `
  
  <div class="logo"></div>

  <!-- Main Title -->
  <h1>SOFTWARE</h1>
  <h1>DEVELOPMENT</h1>
  <h1>PROPOSAL</h1>

  <!-- Bottom Section -->
  <div class="section">
    <p class="section-title">PREPARED FOR</p>
    <p class="section-content">Client's name</p>
    <p class="section-content">Client's company name</p>
  </div>

  <div class="section">
    <p class="section-title">PREPARED BY</p>
    <p class="section-content">Your name</p>
    <p class="section-content">Your company name</p>
  </div>

      `
    },
    
    {
      id: "project-proposal",
      label: "Project proposal",
      imageUrl: "/project-proposal.svg",
      initialContent: `
      <div>
  <!-- Project Title -->
  <h1>Project Name</h1>

  <!-- Date -->
  <p>09.04.20XX</p>

  <!-- Contact Information -->
  <p>Your Name</p>
  <p>Your Company</p>
  <p>123 Your Street</p>
  <p>Your City, ST 12345</p>
</div>
      `
    },
    {
        id: "business-letter",
        label: "Business letter",
        imageUrl: "/bussiness-letter.svg",
        initialContent:`
        <div>
  <!-- Header -->
  <p><strong>YOUR COMPANY</strong></p>
  <hr />

  <!-- Contact Information -->
  <p>123 YOUR STREET</p>
  <p>YOUR CITY, ST 12345</p>
  <p>(123) 456-7890</p>
  <p>MYEMAIL@EXAMPLE.COM</p>

  <!-- Date -->
  <p>September 24, 20XX</p>

  <!-- Greeting -->
  <p>Dear Ms. Reader,</p>

  <!-- Body Paragraphs -->
  <p>Thank you for your interest in our services.</p>
  <p>We are pleased to provide you with our latest product offerings.</p>
  <p>Our team has extensive experience in business solutions.</p>
  <p>We look forward to discussing this opportunity further.</p>
  <p>Please contact us if you have any questions.</p>

  <!-- Closing -->
  <p>Sincerely,</p>

  <!-- Signature -->
  <p><strong>YOUR NAME</strong></p>

  <!-- Decorative Bottom Element -->
  <hr />
</div>
        `
      },
      {
        id: "resume",
        label: "Resume",
        imageUrl: "/resume.svg",
        initialContent: `
        <h1>Hello,</h1>
<p>I'm <strong>Your Name</strong></p>

<p>123 YOUR STREET<br>YOUR CITY, ST 12345</p>
<p><strong>Tel:</strong> 555.555.5555</p>
<p><strong>Email:</strong> you.reply@example.com</p>

<h2>Skills</h2>
<p>Skills description here. Core competencies and key abilities.</p>

<h2>Experience</h2>
<p><strong>MONTH 20XX – MONTH 20YY</strong></p>
<p><strong>Company Name, Location</strong> — Job Title</p>
<p>Key responsibility or achievement</p>

<h2>Education</h2>
<p><strong>College Name, Location</strong> — Degree</p>

<h2>Awards</h2>
<p>Notable achievement or recognition.</p>

        `
      },
      {
        id: "cover-letter",
        label: "Cover letter",
        imageUrl: "/cover-letter.svg",
        initialContent: `
        <div>
  <!-- Header with contact info -->
  <p><strong>Your Name</strong></p>
  <p>123 Your Street</p>
  <p>Your City, ST 12345</p>
  <p>Phone: (555) 555-5555</p>
  <p>Email: your.email@example.com</p>

  <!-- Date -->
  <p>September 24, 2024</p>

  <!-- Recipient Info -->
  <p>Hiring Manager</p>
  <p>Company Name</p>
  <p>123 Company Street</p>
  <p>Company City, ST 12345</p>

  <!-- Greeting -->
  <p>Dear Hiring Manager,</p>

  <!-- Letter Body Placeholder Lines -->
  <p>_________________________________________</p>
  <p>_________________________________________</p>
  <p>_________________________________________</p>
  <p>_________________________________________</p>
  <p>_________________________________________</p>

  <!-- Closing -->
  <p>Sincerely,</p>
  <p>Your Name</p>
</div>
        `
      },
      {
        id: "letter",
        label: "Letter",
        imageUrl: "/letter.svg",
        initialContent: `
        <h1>Your Band</h1>
<p><strong>September 24, 20XX</strong></p>

<p>Hello fan,</p>

<h2>First, a big thank you!</h2>
<p>Thanks for being such an amazing supporter of our music.</p>

<p>We're excited to announce our new album is coming soon.</p>

<p>You'll be the first to hear our latest singles.</p>

<p>We're planning something special for our loyal fans.</p>

<p>Stay tuned for exclusive content and updates.</p>

<p>Can't wait to see you at our next show.</p>

<p>Lots of love,</p>
<p><strong>Your Name</strong></p>

        `
      },
  ];
  