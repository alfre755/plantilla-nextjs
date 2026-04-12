// components/shared/detail-list.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface DetailItem {
  label: string;
  value: React.ReactNode;
}

interface DetailListProps {
  title?: string;
  items: DetailItem[];
}

export function DetailList({ title, items }: DetailListProps) {
  return (
    <Card>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className="grid grid-cols-2 gap-4 text-sm">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-1">
            <span className="text-muted-foreground">{item.label}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
