import { Badge, Button, Dropdown, ButtonGroup } from "react-bootstrap";

export default function NoteCategories({
  note,
  categories,
  onAdd,
  onRemove,
  readonly,
}) {
  const assignedIds = new Set((note.Categories || []).map((c) => c.id));
  const available = categories.filter((c) => !assignedIds.has(c.id));

  return (
    <div className="d-flex flex-wrap gap-2 align-items-center">
      {(note.Categories || []).map((c) => (
        <Badge key={c.id} bg="secondary">
          {c.name}
          {!readonly && (
            <Button
              size="sm"
              variant="link"
              className="text-light text-decoration-none ms-1 p-0"
              onClick={() => onRemove(note.id, c.id)}
              aria-label={`Remove ${c.name}`}
              title={`Remove ${c.name}`}
            >
              ×
            </Button>
          )}
        </Badge>
      ))}

      {!readonly && (
        <Dropdown as={ButtonGroup} size="sm">
          <Button variant="outline-secondary" disabled>
            Add
          </Button>
          <Dropdown.Toggle split variant="outline-secondary" />
          <Dropdown.Menu>
            {available.length === 0 && (
              <span className="dropdown-item-text text-muted">No options</span>
            )}
            {available.map((c) => (
              <Dropdown.Item key={c.id} onClick={() => onAdd(note.id, c.id)}>
                {c.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
}
