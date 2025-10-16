# Complete YouTube Layouts Guide

## 🎯 100% Coverage of All Common YouTube Layouts

All 10 common YouTube layout patterns are now achievable!

---

## 1. Full-Frame (Single Focus) ✅

**Pattern:** 1×1 layout
**Use Cases:**
- Solo creator talking head
- Commentary or vlogging
- Tutorial or explainer with cutaways

**Solution:** `Container` component

```python
{
    "type": "Container",
    "config": {
        "position": "center",  # or "top-left", "top-right", etc.
        "width": "auto",
        "height": "auto"
    },
    "children": {
        "type": "CodeBlock",  # or any content
        "config": {...}
    }
}
```

**Tips:**
- Use `position: "left"` to leave right third for graphics
- Use `position: "right"` to leave left third for subtitles

---

## 2. Split Screen (2-Up) ✅

**Pattern:** 1×2 (side-by-side or top-bottom)
**Use Cases:**
- Reactions or comparisons
- Debates / co-hosts
- "Before vs After" visuals

**Solution:** `SplitScreen` template

```python
{
    "type": "SplitScreen",
    "config": {
        "direction": "horizontal",  # or "vertical"
        "ratio": 0.5,               # 50/50 split
        # "ratio": 0.7,             # 70/30 split for main vs secondary
        "gap": 20,
        "show_divider": True        # optional divider line
    },
    "left": {/* host content */},
    "right": {/* guest content */}
}
```

**Variants:**
- `ratio: 0.5` - Equal 50/50 split
- `ratio: 0.7` - 70/30 weighting for main vs secondary
- `direction: "vertical"` - Top/bottom split for screen capture

---

## 3. Picture-in-Picture (PiP) ✅

**Pattern:** Main video + small inset (usually bottom-right)
**Use Cases:**
- Commentary over gameplay or footage
- Tutorial voiceover with webcam box
- Live reaction stream

**Solution:** `PiPLayout` template ⭐ NEW!

```python
{
    "type": "PiPLayout",
    "config": {
        "pip_position": "bottom-right",  # "bottom-left", "top-right", "top-left"
        "pip_size": 15,                   # percentage of screen (default: 15%)
        "pip_border_width": 3,
        "pip_border_color": colors.primary[0]
    },
    "mainContent": {
        "type": "CodeBlock",  # Main gameplay/footage
        "config": {...}
    },
    "pipContent": {
        "type": "Container",  # Webcam overlay
        "config": {...}
    }
}
```

**Example:** 90% main screen, 10% webcam overlay

---

## 4. 3×3 Grid (Gallery / Brady Bunch Layout) ✅

**Pattern:** 3×3 = 9 tiles
**Use Cases:**
- Panel discussions
- Reaction compilation
- Choir / music collaborations
- Online call aesthetics

**Solution:** `ThreeByThreeGrid` template

```python
{
    "type": "ThreeByThreeGrid",
    "config": {
        "gap": 20,
        "border_width": 2,
        "cell_background": "rgba(0, 0, 0, 0.3)"
    },
    "children": [
        {/* participant 1 */},
        {/* participant 2 */},
        {/* participant 3 */},
        {/* participant 4 */},
        {/* participant 5 */},
        {/* participant 6 */},
        {/* participant 7 */},
        {/* participant 8 */},
        {/* participant 9 */}
    ]
}
```

**Tip:** Keep consistent framing & lighting

---

## 5. 2×2 Grid ✅

**Pattern:** 4 boxes (2×2)
**Use Cases:**
- Small panel discussions (up to 4 people)
- Game / movie reaction collab
- Multi-angle showcase (product, hands, face, screen)

**Solution:** `Grid` component with layout="2x2"

```python
{
    "type": "Grid",
    "config": {
        "layout": "2x2",
        "gap": 20,
        "padding": 40
    },
    "children": [
        {/* angle 1 */},
        {/* angle 2 */},
        {/* angle 3 */},
        {/* angle 4 */}
    ]
}
```

---

## 6. Vertical Split for Shorts ✅

**Pattern:** 9:16 aspect ratio with vertical splits
**Use Cases:**
- Reposting highlights
- Talking head + caption bar
- Meme / reaction short (top: clip, bottom: facecam)

**Solution:** `VerticalLayout` template ⭐ NEW!

```python
{
    "type": "VerticalLayout",
    "config": {
        "layout": "top-bottom",     # "caption-content", "content-caption", "split-vertical"
        "top_height": 70,            # percentage
        "border_width": 2
    },
    "topContent": {/* main clip */},
    "bottomContent": {/* facecam */},
    "captionBar": {/* optional caption overlay */}
}
```

**Layout Variants:**
- `"top-bottom"` - Top content (70%), bottom overlay (30%)
- `"caption-content"` - Caption bar at top, content below
- `"content-caption"` - Content on top, caption bar at bottom
- `"split-vertical"` - 50/50 vertical split

**Perfect for:** YouTube Shorts, TikTok, Instagram Reels

---

## 7. Commentary + Footage Hybrid ✅

**Pattern:** Main screen footage with transparent overlay or webcam box
**Use Cases:**
- YouTubers doing voiceover commentary
- "Streamer style" content

**Solution:** `AsymmetricLayout` template

```python
{
    "type": "AsymmetricLayout",
    "config": {
        "layout": "main-right",
        "main_ratio": 80,  # 80% gameplay, 20% webcam
        "border_width": 2
    },
    "mainFeed": {
        "type": "CodeBlock",  # Main gameplay/footage
        "config": {...}
    },
    "demo1": {
        "type": "Container",  # Webcam box (top)
        "config": {...}
    },
    "demo2": {
        "type": "LowerThird",  # Stream info (bottom)
        "config": {...}
    }
}
```

**Example:** 80% gameplay / footage, 20% overlayed webcam

---

## 8. Multi-Angle Showcase ✅

**Pattern:** Split in 2, 3, or 4 sections
**Use Cases:**
- Product reviews (front cam + overhead cam)
- Music performances (guitar cam, hand cam, main)
- Studio setups (cam A/B/C)

**Solution:** `ThreeColumnLayout` or `Grid`

### 3 Camera Angles (Horizontal)
```python
{
    "type": "ThreeColumnLayout",
    "config": {
        "left_width": 33.33,
        "center_width": 33.33,
        "right_width": 33.33,
        "gap": 20
    },
    "left": {/* camera A */},
    "center": {/* camera B */},
    "right": {/* camera C */}
}
```

### 4 Camera Angles (Grid)
```python
{
    "type": "Grid",
    "config": {
        "layout": "2x2",
        "gap": 20
    },
    "children": [
        {/* front cam */},
        {/* overhead cam */},
        {/* close-up cam */},
        {/* wide shot */}
    ]
}
```

---

## 9. Collage / Mosaic Style ✅

**Pattern:** Irregular tiles or layered clips
**Use Cases:**
- Montage or recap videos
- Creative intros / highlight reels

**Solution:** `MosaicLayout` template ⭐ NEW!

```python
{
    "type": "MosaicLayout",
    "config": {
        "style": "hero-corners",  # "stacked", "spotlight", or "custom"
        "border_width": 3,
        "box_shadow": "0 8px 32px rgba(0, 0, 0, 0.4)"
    },
    "children": [
        {/* main clip (center) */},
        {/* corner accent 1 */},
        {/* corner accent 2 */},
        {/* corner accent 3 */},
        {/* corner accent 4 */}
    ]
}
```

**Preset Styles:**
- `"hero-corners"` - Large center clip with small corner accents
- `"stacked"` - Cascading layered effect
- `"spotlight"` - Main center with floating accent clips

---

## 10. Timeline / Storyboard Overlay ✅

**Pattern:** Main video + horizontal progress bar below
**Use Cases:**
- Educational explainers
- Progression videos ("Day 1 → Day 30")

**Solution:** `TimelineLayout` template ⭐ NEW!

```python
{
    "type": "TimelineLayout",
    "config": {
        "timeline_position": "bottom",  # or "top"
        "timeline_height": 80,
        "timeline_margin": 20
    },
    "mainContent": {
        "type": "CodeBlock",
        "config": {...}
    },
    "milestones": [
        {"label": "Day 1", "frame": 0},
        {"label": "Day 10", "frame": 300},
        {"label": "Day 20", "frame": 600},
        {"label": "Day 30", "frame": 900}
    ]
}
```

**Features:**
- Animated progress bar
- Milestone markers
- Current position indicator
- Customizable position (top/bottom)

---

## Quick Reference Matrix

| Layout Pattern | Template | Difficulty | Best For |
|----------------|----------|------------|----------|
| 1. Full-Frame | `Container` | ⭐ Easy | Solo creators, vlogs |
| 2. Split Screen | `SplitScreen` | ⭐ Easy | Comparisons, debates |
| 3. Picture-in-Picture | `PiPLayout` | ⭐⭐ Medium | Commentary, reactions |
| 4. 3×3 Grid | `ThreeByThreeGrid` | ⭐ Easy | Panel discussions |
| 5. 2×2 Grid | `Grid` (2x2) | ⭐ Easy | Small panels, multi-angle |
| 6. Vertical Shorts | `VerticalLayout` | ⭐⭐ Medium | Shorts, TikTok, Reels |
| 7. Commentary Hybrid | `AsymmetricLayout` | ⭐⭐ Medium | Streaming, gaming |
| 8. Multi-Angle | `ThreeColumnLayout` / `Grid` | ⭐ Easy | Product reviews, music |
| 9. Mosaic/Collage | `MosaicLayout` | ⭐⭐⭐ Advanced | Montages, recaps |
| 10. Timeline | `TimelineLayout` | ⭐⭐⭐ Advanced | Progressions, explainers |

---

## Design Token Integration

All layouts support the design token system:

```python
# Colors
"border_color": colors.primary[0]
"background": colors.background.dark
"pip_border_color": colors.accent[0]

# Spacing
"gap": 20
"padding": 40
"timeline_margin": 20

# Styling
"border_width": 2
"border_radius": 12
"box_shadow": "0 8px 32px rgba(0, 0, 0, 0.4)"
```

---

## What's Next?

- Combine layouts for complex scenes
- Experiment with different themes
- Add animations and transitions
- Create custom layout variations

---

**📚 See Also:**
- [YouTube Layouts Guide](YOUTUBE_LAYOUTS.md) - Detailed layout documentation
- [examples/youtube_layouts.py](../examples/youtube_layouts.py) - Full layout showcase

---

🎬 **All 10 YouTube layout patterns achieved!** ✅
