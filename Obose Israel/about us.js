<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - Fashionista</title>
    <style>
        /* Basic CSS for styling */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 800px;
            margin: auto;
            padding: 20px;
            background: #f9f9f9;
            border: 1px solid #ccc;
            border-radius: 8px;
        }

        h1,
        h2 {
            text-align: center;
            color: #333;
        }

        p {
            text-align: justify;
        }

        .button {
            display: inline-block;
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
            cursor: pointer;
        }

        .button:hover {
            background-color: #45a049;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>About Us</h1>
        <p>Welcome to Fashionista, your go-to source for all things fashion. We're dedicated to providing you with the very best of clothing and accessories, with a focus on quality, style, and affordability.</p>
        <p>Founded in [year], Fashionista has come a long way from its beginnings. When we first started out, our passion for fashion drove us to [describe your initial motivation and goals].</p>
        <p>Now, we serve customers all over the world, and are thrilled to be a part of the fashion industry.</p>
        <h2>Our Mission</h2>
        <p>Our mission at Fashionista is to [describe your mission statement and values].</p>
        <h2>Meet Our Team</h2>
        <p>Our team consists of passionate fashion enthusiasts who work tirelessly to bring you the latest trends and timeless classics.</p>
        <h2>Contact Us</h2>
        <p>Have questions or suggestions? Feel free to <a href="contact.html">contact us</a>!</p>
        <button class="button" id="darkModeButton">Toggle Dark Mode</button>
    </div>

    <script>
        // JavaScript for dark mode toggle
        const darkModeButton = document.getElementById('darkModeButton');
        const body = document.body;

        darkModeButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
        });
    </script>
</body>

</html>
