// Firebase Storage utility for video management
// This will be used when you switch from local to Firebase storage

import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
// import { app } from './firebase'; // Uncomment when you have Firebase config

export interface VideoUrls {
  mp4: string;
  webm?: string;
}

// Get video URLs from Firebase Storage
export const getVideoUrls = async (videoPath: string): Promise<VideoUrls> => {
  try {
    // Uncomment when Firebase is configured
    // const storage = getStorage(app);
    // const mp4Ref = ref(storage, `${videoPath}.mp4`);
    // const webmRef = ref(storage, `${videoPath}.webm`);

    // const mp4Url = await getDownloadURL(mp4Ref);

    // Try to get WebM version (optional)
    // let webmUrl: string | undefined;
    // try {
    //   webmUrl = await getDownloadURL(webmRef);
    // } catch (error) {
    //   console.log('WebM version not found, using MP4 only');
    // }

    // return {
    //   mp4: mp4Url,
    //   webm: webmUrl
    // };

    // For now, return local paths (remove this when Firebase is configured)
    return {
      mp4: "/videos/hero-video.mp4",
      webm: "/videos/hero-video.webm",
    };
  } catch (error) {
    console.error("Error fetching video URLs:", error);
    throw error;
  }
};

// Upload video to Firebase Storage (for future use)
export const uploadVideo = async (
  file: File,
  path: string
): Promise<string> => {
  try {
    // Uncomment when Firebase is configured
    // const storage = getStorage(app);
    // const videoRef = ref(storage, path);
    // const snapshot = await uploadBytes(videoRef, file);
    // const downloadURL = await getDownloadURL(snapshot.ref);
    // return downloadURL;

    // Placeholder for now
    throw new Error("Firebase not configured yet");
  } catch (error) {
    console.error("Error uploading video:", error);
    throw error;
  }
};

// Video optimization recommendations
export const VIDEO_OPTIMIZATION_CONFIG = {
  recommended: {
    maxSize: "10MB",
    resolution: "1920x1080",
    bitrate: "2-3 Mbps",
    frameRate: "24-30 fps",
    format: "MP4 (H.264)",
    duration: "Keep under 60 seconds",
  },
  ffmpegCommand: `
    // Example FFmpeg command for optimization:
    ffmpeg -i input.mp4 \\
      -c:v libx264 \\
      -b:v 2M \\
      -maxrate 3M \\
      -bufsize 6M \\
      -vf "scale=1920:1080" \\
      -r 30 \\
      -an \\
      output.mp4
  `,
};

// Check if video meets optimization criteria
export const validateVideoSize = (
  file: File
): { isValid: boolean; message: string } => {
  const MAX_SIZE = 10 * 1024 * 1024; // 10MB in bytes

  if (file.size > MAX_SIZE) {
    return {
      isValid: false,
      message: `Video is ${(file.size / (1024 * 1024)).toFixed(
        1
      )}MB. Please compress to under 10MB for optimal performance.`,
    };
  }

  return {
    isValid: true,
    message: "Video size is acceptable",
  };
};
