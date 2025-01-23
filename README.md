# My Static Website

This is a simple static website designed for testing hosting on Azure Blob Storage.

## Project Structure

```
my-static-website
├── css
│   └── styles.css
├── js
│   └── scripts.js
├── index.html
└── README.md
```

## Files Description

- **css/styles.css**: Contains the styles for the website, defining the layout, colors, fonts, and other visual elements.
- **js/scripts.js**: Contains JavaScript code for the website, which may include interactivity, event handling, and other client-side functionality.
- **index.html**: The main HTML file for the website, serving as the entry point and including references to the CSS and JavaScript files.

## Hosting on Azure Blob Storage

1. **Create a Storage Account**: 
   - Go to the Azure portal and create a new storage account.

2. **Create a Container**: 
   - In your storage account, create a new container and set the access level to "Blob (anonymous read access for blobs only)".

3. **Upload Files**: 
   - Upload the contents of the `my-static-website` folder (including `index.html`, `css`, and `js` directories) to the container.

4. **Enable Static Website Hosting**: 
   - In the storage account settings, enable static website hosting and set the index document to `index.html`.

5. **Access Your Website**: 
   - After enabling static website hosting, you will receive a URL to access your static site.

## License

This project is licensed under the MIT License.