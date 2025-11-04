import { useEffect, useState, useCallback } from "react";
import { Row, Col, Card, Button, Stack, Form } from "react-bootstrap";
import api from "../api/client";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import TagFilter from "../components/TagFilter";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterCat, setFilterCat] = useState(null);
  const [newCatName, setNewCatName] = useState("");

  const loadCategories = useCallback(async () => {
    const { data } = await api.get("/categories");
    setCategories(data);
  }, []);

  const loadNotes = useCallback(async () => {
    const { data } = await api.get("/notes", {
      params: { categoryId: filterCat ?? undefined },
    });
    setNotes(data);
  }, [filterCat]);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);
  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  const onCreateNote = async (payload) => {
    await api.post("/notes", payload);
    await loadNotes();
  };

  const onArchive = async (id) => {
    await api.post(`/notes/${id}/archive`);
    await loadNotes();
  };

  const onDelete = async (id) => {
    await api.delete(`/notes/${id}`);
    await loadNotes();
  };

  const onAddCat = async (noteId, categoryId) => {
    await api.post(`/notes/${noteId}/categories`, { categoryId });
    await loadNotes();
  };

  const onRemoveCat = async (noteId, categoryId) => {
    await api.delete(`/notes/${noteId}/categories/${categoryId}`);
    await loadNotes();
  };

  const onCreateCategory = async (e) => {
    e.preventDefault();
    if (!newCatName.trim()) return;
    await api.post("/categories", { name: newCatName.trim() });
    setNewCatName("");
    await loadCategories();
    await loadNotes();
  };

  return (
    <Row>
      <Col md={4}>
        <Card className="mb-3">
          <Card.Body>
            <h5>Create note</h5>
            <NoteForm onSubmit={onCreateNote} />
          </Card.Body>
        </Card>

        <Card className="mb-3">
          <Card.Body>
            <h6 className="mb-2">Categories</h6>
            <TagFilter
              categories={categories}
              value={filterCat}
              onChange={(v) => setFilterCat(v)}
            />

            <Form className="d-flex gap-2 mt-2" onSubmit={onCreateCategory}>
              <Form.Control
                placeholder="New category"
                value={newCatName}
                onChange={(e) => setNewCatName(e.target.value)}
              />
              <Button type="submit">Create</Button>
            </Form>

            {/* 🗑️ New delete button list */}
            <div className="mt-3">
              <h6 className="fw-semibold mb-2">Delete category</h6>
              {categories.length === 0 && (
                <div className="text-muted small">No categories created.</div>
              )}
              {categories.map((c) => (
                <div
                  key={c.id}
                  className="d-flex justify-content-between align-items-center border-bottom py-1"
                >
                  <span>{c.name}</span>
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={async () => {
                      if (confirm(`Delete category "${c.name}"?`)) {
                        await api.delete(`/categories/${c.id}`);
                        await loadCategories();
                        await loadNotes();
                      }
                    }}
                  >
                    Delete
                  </Button>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={8}>
        <Stack direction="horizontal" gap={2} className="mb-2">
          <div className="fw-semibold">Active Notes</div>
          {filterCat !== null && (
            <Button
              size="sm"
              variant="outline-secondary"
              onClick={() => setFilterCat(null)}
            >
              Clean Filter
            </Button>
          )}
        </Stack>
        <NoteList
          notes={notes}
          categories={categories}
          onArchive={onArchive}
          onDelete={onDelete}
          onAddCat={onAddCat}
          onRemoveCat={onRemoveCat}
        />
      </Col>
    </Row>
  );
}
