export function loadContactContent() {
    document.getElementById('content').innerHTML = `
        <div id="contact-content">
            <h2>📞 Get in Touch with Us!</h2>
            <p>If you have any questions, feedback, or inquiries, feel free to reach out to us. We would love to hear from you!</p>
            <form id="contact-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                
                <button type="submit" class="btn">Send Message</button>
            </form>
        </div>
    `;
}
