<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fabric } from 'fabric';
  import Trash from 'svelte-bootstrap-icons/lib/Trash.svelte';
  import FileImage from 'svelte-bootstrap-icons/lib/FileImage.svelte';
  import Upload from 'svelte-bootstrap-icons/lib/Upload.svelte';

  let activeObject = false;
  let canvas: HTMLCanvasElement;
  let fabricCanvas: fabric.Canvas;
  let imagesArray: any[] = []; // Update this array with your sticker images paths
  let currentState = 'imageless';

  onMount(() => {
        if (typeof window !== 'undefined') {
            fabricCanvas = new fabric.Canvas(canvas, { preserveObjectStacking: true });
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
        }
    });

    onDestroy(() => {
        window.removeEventListener('resize', resizeCanvas);
    });

    function handleFileChange(event: { target: { files: any[]; }; }) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => loadImage(e.target.result.toString());
            reader.readAsDataURL(file);
        }
    }

    function loadImage(src: string) {
        fabric.Image.fromURL(src, (img) => {
            const scale = Math.min(fabricCanvas.width / img.width, fabricCanvas.height / img.height);
            img.set({
                scaleX: scale,
                scaleY: scale,
                left: (fabricCanvas.width - img.width * scale) / 2,
                top: (fabricCanvas.height - img.height * scale) / 2
            });
            fabricCanvas.clear(); // Important if you want to replace the existing image.
            fabricCanvas.setBackgroundImage(img, fabricCanvas.renderAll.bind(fabricCanvas), {
                scaleX: scale,
                scaleY: scale
            });
            currentState = 'image'; // Changes the state to display the image.
        });
    }

  function removeSelectedObject() {
    const object = fabricCanvas.getActiveObject();
    if (object) {
      fabricCanvas.remove(object);
    }
  }

  function saveAsImage() {
    const dataURL = fabricCanvas.toDataURL({ format: 'png' });
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'created-image.png';
    document.body.appendChild(link); // Append to body to ensure visibility in all browsers
    link.click();
    document.body.removeChild(link); // Clean up
  }

  function addSticker(src: string) {
    fabric.Image.fromURL(src, (img) => {
      img.scaleToWidth(fabricCanvas.width / 5); // Adjust this scale factor as needed
      fabricCanvas.add(img)._activeObject(img);
    });
  }


  function resizeCanvas() {
    throw new Error('Function not implemented.');
  }
</script>

<main class="ImageEditor">
  <!-- Only show the upload area if no image has been loaded -->
  {#if currentState === 'imageless'}
  <div class="upload-area">
    <input type="file" accept="image/*" on:change={handleFileChange} />
    <div class='inline-grid'>
      <FileImage width="32" height="32" />
      <Upload width="32" height="32" />
    </div>
    <h3>Click to upload a custom background image</h3>
  </div>
  {/if}

  <!-- Canvas and buttons are visible when an image is present -->
  {#if currentState !== 'imageless'}
  <div class="imageUI">
    <canvas bind:this={canvas} class:visibleCanvas={currentState === 'image'}></canvas>
    <div class="controls">
      {#if currentState === 'edited' || currentState === 'saved'}
      <button on:click={saveAsImage} class="button-meme">Save</button>
      {#if currentState === 'saved'}
      <button class="button-meme">Cancel</button> <!-- Implement cancel functionality if needed -->
      {/if}
      {/if}
      {#if activeObject}
      <div class="delete">
        <a href="#" on:click={removeSelectedObject}>
          <Trash width="32" height="32" />
        </a>
      </div>
      {/if}
    </div>
  </div>
  {/if}

  <!-- Sticker selection area -->
  {#if currentState === 'image'}
  <div class="interface">
    <h3>Choose a sticker:</h3>
    {#each imagesArray as image, index}
    <img src={image} alt={`Sticker ${index}`} on:click={() => addSticker(image)} />
    {/each}
  </div>
  {/if}
</main>


<style>
  .ImageEditor {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      margin-top: 50px; /* Add space at the top */
  }

  .imageUI.active {
      opacity: 1;
      transition: opacity 0.5s;
  }

  .upload-area {
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: center;
      gap: 1rem;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 20px;
      border-radius: 10px;
      width: auto;
      min-width: 80vw;
      height: auto;
      min-height: 70vh;
  }

  .visibleCanvas {
      display: none; /* Initially hidden */
  }

  :global(.image) .visibleCanvas {
      display: block; /* Show when image is available */
      width: 70vw; /* Responsive width */
      max-width: 800px; /* Maximum width */
      margin-bottom: 20px; /* Space below canvas */
  }

  .delete {
      position: absolute;
      bottom: 20px;
      right: 20px;
      cursor: pointer;
  }

  .button-meme {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 1.2rem;
      background-color: transparent;
      border: 2px solid white;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;
  }

  .button-meme:hover {
      background-color: white;
      color: black;
  }

  .inline-grid {
      display: grid;
      grid-template-columns: repeat(2, min-content);
      gap: 1rem;
  }

  .interface {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px; /* Space between stickers */
      padding: 20px; /* Padding around the sticker area */
      max-width: 80%; /* Limit width of sticker area */
  }

  img {
      width: 100px; /* Standardize sticker size */
      cursor: pointer; /* Indicate clickable items */
      transition: transform 0.2s; /* Smooth scale on hover */
  }

  img:hover {
      transform: scale(1.1); /* Enlarge stickers on hover */
  }

  :global(.image) .visibleCanvas {
    display: block; /* Make sure this matches your conditional class logic */
}

</style>