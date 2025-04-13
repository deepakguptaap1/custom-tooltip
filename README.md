```markdown
# 🎯 custom-tooltip — Smart React Tooltip (12 Positions)
```

A lightweight, flexible, and customizable **React tooltip component** that supports **12 different positions** and features intelligent **auto-positioning**. Built with performance and usability in mind, `custom-tooltip` makes it easy to enhance UX with contextual messages in any part of your UI.

---

## 🚀 Features

- ✅ 12 customizable tooltip positions
- ✅ Smart **auto-positioning** (never cuts off or overflows)
- ✅ Lightweight and modular
- ✅ Trigger tooltips on hover or focus
- ✅ Easy to style with custom CSS or className
- ✅ Works seamlessly in responsive layouts

---

## 🧩 Supported Tooltip Positions

| Top Positions | Right Positions | Bottom Positions | Left Positions |
| ------------- | --------------- | ---------------- | -------------- |
| `top-left`    | `right-top`     | `bottom-left`    | `left-top`     |
| `top-center`  | `right-center`  | `bottom-center`  | `left-center`  |
| `top-right`   | `right-bottom`  | `bottom-right`   | `left-bottom`  |

---

## 🧠 Auto-Positioning Explained

When a tooltip is displayed near the edge of the screen or a container, its default position might not have enough space to render correctly. Instead of being cut off, the tooltip component uses **auto-positioning** to adjust its placement dynamically.

### How It Works:

1. The component checks if there’s enough space for the tooltip in the desired position.
2. If not, it automatically tries alternative placements based on priority.
3. It then renders the tooltip in the first position that fits.

### ✅ Benefits

- Prevents tooltips from being cut off
- Maintains a clean and accessible UI
- Works great on small screens and inside scrollable containers

---

## 🔧 Usage

```jsx
import CustomTooltip from "./customTooltip";

<CustomTooltip placement="top-left" message="This is a smart tooltip!">
  <button>Hover me</button>
</CustomTooltip>;
```

---

## ✨ Props

| Prop        | Type                                                                                                                                                                                                                       | Required | Default        | Description                               |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------- | ----------------------------------------- |
| `children`  | `React.ReactNode`                                                                                                                                                                                                          | ✅       | —              | The element the tooltip is attached to    |
| `message`   | `string`                                                                                                                                                                                                                   | ✅       | —              | The content/text inside the tooltip       |
| `placement` | `"top-left"`<br>`"top-center"`<br>`"top-right"`<br>`"right-top"`<br>`"right-center"`<br>`"right-bottom"`<br>`"bottom-left"`<br>`"bottom-center"`<br>`"bottom-right"`<br>`"left-top"`<br>`"left-center"`<br>`"left-bottom"` | ❌       | `"top-center"` | Preferred tooltip position                |
| `className` | `string`                                                                                                                                                                                                                   | ❌       | `""`           | Additional class names for custom styling |

---

## 🧱 Project Structure

```
custom-tooltip/
├── src/
│   ├── customTooltip.tsx          # Tooltip logic and rendering
│   ├── customTooltip.module.scss  # Styles (or use styled-components)
│   ├── index.tsx                  # Export component
│   ├── App.tsx                    # Demo usage of all 12 positions
│   └── App.module.scss            # Styles for Demo usages
├── public/
│   └── index.html
├── package.json
└── README.md
```

---

## 🙌 Author

Made with ❤️ by [Deepak Gupta](https://github.com/deepakguptaap1)

---

## 🤝 Contributing

Pull requests are welcome! If you find a bug or want to add features like fade animations, touch support, or new placements — feel free to fork and contribute.

```bash
git clone https://github.com/deepakguptaap1/custom-tooltip.git
cd custom-tooltip
npm install
npm start
```

---
