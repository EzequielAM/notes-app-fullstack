import { useEffect, useState, useCallback } from "react";
import { Row, Col, Card, Stack, Button } from "react-bootstrap";
import api from "../api/client";
import NoteList from "../components/NoteList";
import TagFilter from "../components/TagFilter";

export default function ArchivedPage() {
  const [notes, setNotes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterCat, setFilterCat] = useState(null);

  const loadCategories = useCallback(async () => {
    const { data } = await api.get("/categories");
    setCategories(data);
  }, []);

  const loadNotes = useCallback(async () => {
    const { data } = await api.get("/notes/archived", {
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

  const noop = () => {};

  return (
    <Row>
      <Col md={4}>
        <Card className="mb-3">
          <Card.Body>
            <h6 className="mb-2">Filter by category</h6>
            <TagFilter
              categories={categories}
              value={filterCat}
              onChange={(v) => setFilterCat(v)}
            />
            {filterCat !== null && (
              <Button
                className="mt-2"
                size="sm"
                variant="outline-secondary"
                onClick={() => setFilterCat(null)}
              >
                Clear filter
              </Button>
            )}
          </Card.Body>
        </Card>
      </Col>

      <Col md={8}>
        <Stack direction="horizontal" gap={2} className="mb-2">
          <div className="fw-semibold">Archived Notes</div>
        </Stack>
        <NoteList
          notes={notes}
          categories={categories}
          archived
          readOnly
          onArchive={noop}
          onDelete={noop}
          onAddCat={noop}
          onRemoveCat={noop}
        />
      </Col>
    </Row>
  );
}
