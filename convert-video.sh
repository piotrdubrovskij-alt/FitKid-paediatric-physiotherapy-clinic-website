#!/bin/bash

# FitKid Video Converter Script
# Converts and optimizes hero.mov for web

echo "🎬 FitKid Video Converter"
echo "========================="
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg not found!"
    echo ""
    echo "To install ffmpeg:"
    echo ""
    echo "  1. Install Homebrew (if not installed):"
    echo "     /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
    echo ""
    echo "  2. Install ffmpeg:"
    echo "     brew install ffmpeg"
    echo ""
    echo "After installation, run this script again."
    exit 1
fi

# Input file
INPUT="public/media/hero.mov"
OUTPUT_MP4="public/media/hero.mp4"
OUTPUT_WEBM="public/media/hero.webm"
POSTER="public/media/hero-poster.jpg"

# Check if input exists
if [ ! -f "$INPUT" ]; then
    echo "❌ File not found: $INPUT"
    exit 1
fi

echo "📁 Input file: $INPUT"
echo "📊 Original size: $(ls -lh "$INPUT" | awk '{print $5}')"
echo ""

# Get video duration
DURATION=$(ffmpeg -i "$INPUT" 2>&1 | grep Duration | awk '{print $2}' | tr -d ,)
echo "⏱️  Original duration: $DURATION"
echo ""

# Convert and optimize
echo "🔄 Converting to MP4 (web-optimized)..."
echo "   - Trimming to first 20 seconds"
echo "   - Resolution: 1920x1080"
echo "   - Quality: High (optimized for web)"
echo ""

ffmpeg -i "$INPUT" \
  -t 20 \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,fps=30" \
  -c:v libx264 \
  -preset medium \
  -crf 23 \
  -movflags +faststart \
  -an \
  "$OUTPUT_MP4" \
  -y 2>&1 | grep -E "time=|Duration"

echo ""
echo "✅ MP4 created: $OUTPUT_MP4"
echo "📊 New size: $(ls -lh "$OUTPUT_MP4" | awk '{print $5}')"
echo ""

# Create WebM version (optional, better compression)
echo "🔄 Converting to WebM (alternative format)..."
ffmpeg -i "$INPUT" \
  -t 20 \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,fps=30" \
  -c:v libvpx-vp9 \
  -crf 30 \
  -b:v 0 \
  -an \
  "$OUTPUT_WEBM" \
  -y 2>&1 | grep -E "time=|Duration"

echo ""
echo "✅ WebM created: $OUTPUT_WEBM"
echo "📊 Size: $(ls -lh "$OUTPUT_WEBM" | awk '{print $5}')"
echo ""

# Create poster image (first frame)
echo "📸 Creating poster image..."
ffmpeg -i "$OUTPUT_MP4" \
  -ss 00:00:01 \
  -vframes 1 \
  -vf "scale=1920:1080" \
  "$POSTER" \
  -y 2>&1 > /dev/null

echo "✅ Poster created: $POSTER"
echo ""

# Cleanup original large file (optional)
echo "🗑️  Original file (296MB) still exists at: $INPUT"
echo "   You can delete it manually if you want:"
echo "   rm public/media/hero.mov"
echo ""

echo "🎉 Done! Your optimized videos are ready."
echo ""
echo "📦 Files created:"
echo "   - $OUTPUT_MP4 ($(ls -lh "$OUTPUT_MP4" | awk '{print $5}'))"
echo "   - $OUTPUT_WEBM ($(ls -lh "$OUTPUT_WEBM" | awk '{print $5}'))"
echo "   - $POSTER"
echo ""
echo "🌐 Refresh your browser to see the new video:"
echo "   http://localhost:3000"
