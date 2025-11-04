import { Form } from "react-bootstrap";

export default function TagFilter({
  categories,
  value,
  onChange,
  includeAll = true,
}) {
  return (
    <Form.Select
      value={value ?? ""}
      onChange={(e) => {
        const raw = e.target.value;
        onChange(raw ? Number(raw) : null);
      }}
    >
      {includeAll && <option value="">All categories</option>}
      {categories.map((c) => (
        <option key={c.id} value={c.id}>
          {c.name}
        </option>
      ))}
    </Form.Select>
  );
}
