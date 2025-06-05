# Video Background Setup Guide

## Current Setup (Local Videos)

Your video background is currently set up to work with local files. Place your optimized video files in the `public/videos/` directory:

```
public/
├── videos/
│   ├── hero-video.mp4 (required)
│   └── hero-video.webm (optional, for better compression)
└── images/
    └── Auto-Detailing.png (fallback image)
```

## Video Optimization Requirements

**Before adding your video, please optimize it:**

- **Maximum size**: 10MB (currently 62MB is too large)
- **Resolution**: 1920x1080 or 1280x720
- **Format**: MP4 (H.264 codec)
- **Bitrate**: 1-3 Mbps
- **Frame rate**: 24-30 fps
- **Duration**: Keep under 60 seconds (35 seconds is perfect)
- **Audio**: Remove audio track (not needed for background videos)

### Recommended Compression Tools:

1. **HandBrake** (free, user-friendly)
2. **FFmpeg** (command line)
3. **Online tools**: CloudConvert, Compressor.io

### FFmpeg Command Example:

```bash
ffmpeg -i your-video.mp4 \
  -c:v libx264 \
  -b:v 2M \
  -maxrate 3M \
  -bufsize 6M \
  -vf "scale=1920:1080" \
  -r 30 \
  -an \
  hero-video.mp4
```

## Current Features

✅ **Lazy Loading** - Video only loads when hero section is visible
✅ **Mobile Support** - Plays on mobile devices with `playsInline`
✅ **Fallback Image** - Shows image while video loads
✅ **Auto-loop** - Video loops continuously
✅ **Muted** - No audio (required for autoplay)
✅ **Error Handling** - Falls back to image if video fails
✅ **Smooth Transitions** - Fade effect between image and video

## File Structure

```
components/
├── VideoHero.tsx (new video hero component)
├── Hero.tsx (original image hero - kept as backup)
lib/
├── firebase-video.ts (Firebase utilities for future use)
app/
├── page.tsx (updated to use VideoHero)
```

## Future: Switching to Firebase Storage

When you're ready to use Firebase Storage:

### 1. Upload Video to Firebase Storage

```bash
# Using Firebase CLI
firebase storage:upload hero-video.mp4 videos/hero-video.mp4
```

### 2. Update Code

In `app/page.tsx`, add the `firebaseVideoUrl` prop:

```tsx
<VideoHero
  fallbackImage="/images/Auto-Detailing.png"
  firebaseVideoUrl="https://firebasestorage.googleapis.com/.../hero-video.mp4"
/>
```

### 3. Enable Firebase Functions (in lib/firebase-video.ts)

Uncomment the Firebase code and add your Firebase config.

## Benefits of Firebase Storage (Later)

- **CDN Delivery** - Faster loading worldwide
- **Bandwidth Optimization** - Automatic compression
- **Easy Updates** - Change videos without redeploying
- **Analytics** - Track video performance
- **Cost Effective** - Pay only for usage

## Testing Your Setup

1. Place your optimized video in `public/videos/hero-video.mp4`
2. The component will automatically:
   - Show fallback image first
   - Load video when hero section is visible
   - Fade from image to video when loaded
   - Loop the video continuously
   - Handle errors gracefully

## Troubleshooting

**Video doesn't play on mobile:**

- Ensure `playsInline` attribute is present ✅
- Video must be muted for autoplay ✅
- Check video codec compatibility

**Video takes too long to load:**

- Reduce file size (aim for 5-8MB)
- Consider lower resolution (1280x720)
- Use WebM format for better compression

**Video doesn't loop:**

- Check that `loop` attribute is present ✅
- Ensure video file isn't corrupted

**Fallback image doesn't show:**

- Verify image path is correct
- Check image optimization and size
