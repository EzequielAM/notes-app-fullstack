import { Card, Button, Stack } from "react-bootstrap";
import NoteCategories from "./NoteCategories";

export default function NoteList({
  notes,
  categories,
  onArchive,
  onDelete,
  onAddCat,
  onRemoveCat,
  archived,
  readOnly,
}) {
  return (
    <Stack gap={2}>
      {notes.map((n) => (
        <Card key={n.id}>
          <Card.Body>
            <Card.Title>{n.title}</Card.Title>
            <Card.Text className="mb-2">{n.content}</Card.Text>

            <div className="mb-2">
              <NoteCategories
                note={n}
                categories={categories}
                onAdd={onAddCat}
                onRemove={onRemoveCat}
                readonly={readOnly}
              />
            </div>

            {!readOnly && (
              <Stack direction="horizontal" gap={2}>
                {!archived && (
                  <Button size="sm" onClick={() => onArchive(n.id)}>
                    Archive
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="outline-danger"
                  onClick={() => onDelete(n.id)}
                >
                  Delete
                </Button>
              </Stack>
            )}
          </Card.Body>
        </Card>
      ))}
    </Stack>
  );
}
