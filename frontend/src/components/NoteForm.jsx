import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function NoteForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const submit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle("");
    setContent("");
  };
  return (
    <Form onSubmit={submit}>
      <Form.Group className="mb-2">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>
      <Button type="submit">Save</Button>
    </Form>
  );
}
