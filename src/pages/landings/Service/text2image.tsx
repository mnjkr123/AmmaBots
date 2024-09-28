import React, { useState } from 'react';
import { Card, Col, Container, Row, Button, Alert } from 'react-bootstrap';
import { AlertCircle } from 'lucide-react';
import { GoogleAuth } from 'google-auth-library';

const TextToImageLanding: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        const client = new GoogleAuth({
            scopes: ['https://www.googleapis.com/auth/cloud-platform'],
        });

        try {
            const auth = await client.getClient();
            const accessToken = await auth.getAccessToken();

            const response = await fetch(
                'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    {
                                        text: `Generate an image based on this description: ${inputText}`,
                                    },
                                ],
                            },
                        ],
                    }),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                console.error('API Error:', errorData);
                throw new Error('Failed to generate image');
            }

            const data = await response.json();
            setImageUrl(data.imagePath || '/api/placeholder/400/300');
        } catch (err) {
            setError('An error occurred while generating the image. Please try again.');
            console.error('Error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container className="mx-auto p-4">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <h5>Text to Image AI</h5>
                        </Card.Header>
                        <Card.Body>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Enter your image description"
                                    value={inputText}
                                    onChange={handleInputChange}
                                    className="form-control mb-3"
                                />
                                <Button type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading ? 'Generating...' : 'Generate Image'}
                                </Button>
                            </form>

                            {error && (
                                <Alert variant="danger" className="mt-4">
                                    <AlertCircle className="h-4 w-4" />
                                    {error}
                                </Alert>
                            )}

                            {imageUrl && (
                                <div className="mt-4">
                                    <img src={imageUrl} alt="Generated" className="w-full rounded-md shadow-md" />
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default TextToImageLanding;
