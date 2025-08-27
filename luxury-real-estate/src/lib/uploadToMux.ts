export async function uploadVideoToMux(videoUrl: string) {
  try {
    const response = await fetch('/api/mux/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: videoUrl }),
    });

    if (!response.ok) {
      throw new Error('Failed to upload video to Mux');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error uploading to Mux:', error);
    throw error;
  }
}