import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import styles from './Chatbot.module.scss'; // Importing CSS Module

// Function to format content
function formatContent(content: string | undefined): string {
    if (!content) return '';

    // Regular expression to ensure single space after certain punctuation marks
    const punctuationSpacing = content.replace(/([:;.!])\s*/g, '$1 ');

    const sentences: string[] = punctuationSpacing
        .split(/(?<=[.!?])\s+/)
        .filter((sentence) => sentence.trim())
        .map((sentence) => sentence.trim());

    const filteredSentences: string[] = sentences.filter(
        (sentence) => !sentence.startsWith('Question:') && !sentence.startsWith('Answer:') && !sentence.endsWith('?')
    );

    const cleanedSentences: string[] = filteredSentences.filter((sentence) => {
        const matchCount = (sentence.match(/\d+\.\s*/g) || []).length;
        return matchCount <= 2;
    });

    const strippedSentences: string[] = cleanedSentences.map((sentence) =>
        sentence.replace(/(\*{1,2}|\s*[*]{1,2}\s*)/g, '')
    );

    const bullets: string[] = [];
    let currentBullet: string = '';

    strippedSentences.forEach((sentence: string) => {
        const cleanedSentence = sentence.replace(/\.\s*\d+\.\s*/g, '. ');

        const wordCount = (currentBullet + ' ' + cleanedSentence).split(' ').length;

        if (wordCount >= 25) {
            bullets.push((currentBullet + ' ' + cleanedSentence).trim());
            currentBullet = '';
        } else {
            currentBullet += ' ' + cleanedSentence;
        }
    });

    if (currentBullet.trim()) {
        if (currentBullet.split(' ').length >= 25) {
            bullets.push(currentBullet.trim());
        }
    }

    return (
        `<ul>` +
        bullets
            .map((bullet) =>
                bullet
                    .replace(/^\d+\.\s*/, '')
                    .replace(/^\*\d+\.\s*/, '*')
                    .replace(/^\s*\d+\.\s*/, '')
                    .replace(/\.\s*\d+\.\s*/g, '. ')
            )
            .map((bullet) => `<li>${bullet}</li>`)
            .join('') +
        `</ul>`
    );
}

const Chatbot: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userMessage = { text: inputText, isUser: true };
        setMessages((prev) => [...prev, userMessage]);
        setInputText('');
        setIsLoading(true);

        const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

        if (!apiKey) {
            console.error('API key is not set');
            setMessages((prev) => [...prev, { text: 'API key is not set', isUser: false }]);
            setIsLoading(false);
            return;
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
        const requestBody = {
            contents: [{ parts: [{ text: inputText }] }],
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data && data.candidates && data.candidates[0]) {
                const botMessageRaw = data.candidates[0].content.parts[0].text || 'No response received.';
                const formattedBotMessage = formatContent(botMessageRaw);
                setMessages((prev) => [...prev, { text: formattedBotMessage, isUser: false }]);
            } else {
                throw new Error('Unexpected API response structure');
            }
        } catch (error) {
            console.error('Caught error:', error);
            setMessages((prev) => [...prev, { text: 'Sorry, something went wrong. Please try again.', isUser: false }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className={`section pb-4 pb-sm-6 pt-6 ${styles.chatbotSection}`}>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col lg={6}>
                        <Card className={styles.chatbotCard}>
                            <Card.Header className={styles.chatbotHeader}>
                                <h4 className="fw-medium text-white">Chat with Us</h4>
                            </Card.Header>
                            <Card.Body>
                                <div className={styles.messages}>
                                    {messages.map((msg, index) => (
                                        <div
                                            key={index}
                                            className={`${styles.message} ${msg.isUser ? styles.user : styles.bot}`}>
                                            <span dangerouslySetInnerHTML={{ __html: msg.text }}></span>
                                        </div>
                                    ))}
                                </div>
                                <Form onSubmit={handleSubmit} className={styles.userInputForm}>
                                    <Row className="align-items-center">
                                        <Col lg={10}>
                                            <Form.Control
                                                type="text"
                                                placeholder="Type your message..."
                                                value={inputText}
                                                onChange={handleInputChange}
                                                disabled={isLoading}
                                            />
                                        </Col>
                                        <Col lg={2} className="text-end">
                                            <Button type="submit" className={styles.sendBtn} disabled={isLoading}>
                                                {isLoading ? 'Sending...' : 'Send'}
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Chatbot;
