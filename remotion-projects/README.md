# YouTube Layouts Projects

This directory contains two Remotion video projects showcasing professional YouTube layout components.

## 📁 Projects

### 1. youtube_layouts_showcase
**Pure Layout Demonstration**

This project focuses on the **layout structure** using simple placeholder boxes. Perfect for understanding how each layout works without content distraction.

**Features**:
- 9 reusable layout components
- Simple `DemoBox` placeholders
- Clear visualization of layout structure
- 100% design token integration
- 33-second showcase video

**Use this when**:
- Learning how layouts work
- Understanding component props
- Testing layout configurations
- Building your own content strategy

**Preview**:
```bash
cd youtube_layouts_showcase
npm install
npm start
```

Server: http://localhost:3003

---

### 2. youtube_layouts_with_content
**Real-World Content Examples**

This project shows the **same layouts** filled with realistic video content (code blocks, webcams, terminals, slides, gameplay, etc.).

**Features**:
- Same 9 layout components
- 6 realistic content components (CodeBlock, PersonSpeaking, ScreenShare, Terminal, GameplayScreen, SlideContent)
- Real-world use case demonstrations
- Shows how layouts look in production
- 33-second showcase video

**Use this when**:
- Seeing real-world applications
- Getting inspiration for your videos
- Understanding content placement
- Demoing to stakeholders

**Preview**:
```bash
cd youtube_layouts_with_content
npm install
npm start
```

Server: http://localhost:3004 (or next available port)

---

## 🎯 Which One Should I Use?

### Start with `youtube_layouts_showcase` if you want to:
- **Learn** the layout system
- **Understand** component structure
- **Customize** layouts for your needs
- See **clean, clear** visualizations

### Check `youtube_layouts_with_content` if you want to:
- See **production-ready** examples
- Get **inspiration** for your videos
- Understand **content placement** strategies
- Show **realistic demos** to clients

---

## 📦 What's Included in Both

### Layout Components (`src/components/layouts/`)
1. **ThreeByThreeGrid** - 3×3 grid for panels
2. **ThreeColumnLayout** - Sidebar + Main + Sidebar
3. **ThreeRowLayout** - Header + Main + Footer
4. **AsymmetricLayout** - Tutorial layout (demos + main)
5. **PiPLayout** - Picture-in-picture
6. **VerticalLayout** - 9:16 for Shorts/TikTok
7. **MosaicLayout** - Irregular collage
8. **TimelineLayout** - Progress tracking
9. **SplitScreen** - Side-by-side comparison

### Design System (`src/theme/tokens.ts`)
- Color palette (primary, accent, background, text)
- Typography scale (fonts, sizes, weights)
- Spacing system (xs, sm, md, lg, xl)
- Border tokens (radius, width)

All components **respect design tokens** - change the theme once, update everywhere!

---

## 🎨 Customization

Both projects use the same design token system. To customize:

```typescript
// src/theme/tokens.ts
export const tokens = {
  colors: {
    primary: ['#YOUR_COLOR', '#DARKER', '#DARKEST'],
    accent: ['#YOUR_ACCENT', '#DARKER', '#DARKEST'],
    // ...
  },
  typography: {
    fonts: {
      heading: 'YourFont, sans-serif',
      // ...
    },
  },
};
```

All layouts will automatically update! ✨

---

## 📚 Documentation

- **COMPONENTS.md** (in both projects) - Complete API reference for all layout components
- **CONTENT_EXAMPLES.md** (in `youtube_layouts_with_content`) - Detailed content component guide

---

## 🚀 Quick Start

```bash
# Clone or navigate to this directory
cd remotion-projects

# Start the pure layout version
cd youtube_layouts_showcase
npm install && npm start

# Or start the content-rich version
cd ../youtube_layouts_with_content
npm install && npm start
```

---

## 💡 Pro Tips

1. **Start simple**: Begin with `youtube_layouts_showcase` to understand layouts
2. **Add content gradually**: Use components from `youtube_layouts_with_content` as templates
3. **Mix and match**: Copy content components you like into your own projects
4. **Customize tokens**: Make it your own by updating `src/theme/tokens.ts`
5. **Build incrementally**: Start with one layout, perfect it, then add more

---

## 🎬 What's Next?

After exploring both projects:

1. **Choose a layout** that fits your content type
2. **Customize the colors** in `tokens.ts`
3. **Add your content** (videos, images, code, etc.)
4. **Render your video** with `npm run build`

Happy video creating! 🎥
