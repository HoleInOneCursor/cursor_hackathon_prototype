const navigationItems = [
  { href: "#dashboard", label: "Dashboard" },
  { href: "#courses", label: "Courses" },
  { href: "#scorecard", label: "Scorecard" },
];

export function PrimaryNavigation() {
  return (
    <nav aria-label="Primary navigation">
      {navigationItems.map((item) => (
        <a href={item.href} key={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
