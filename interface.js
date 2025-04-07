import { createInterface } from 'readline';
import { listFiles } from './listFiles.js';

const printOptions = () => {
    console.log("Options:");
    console.log("1. List files");
    console.log("2. Upload a file");
    console.log("3. Delete a file");
    console.log("4. Download a file");
    console.log("5. Exit");
}

// Easier method to handle ui while testing
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const handleUserChoice = async () => {
    printOptions();
    rl.question("Enter your choice: ", async (choice) => {
        switch (choice) {
            case '1':
                console.log("Listing files...");
                await listFiles();
                break;
            case '2':
                rl.question("Enter the file path to upload: ", async (filePath) => {
                    console.log(`Uploading file: ${filePath}`);
                    // Add logic to upload file using OpenAI API
                    handleUserChoice();
                });
                return;
            case '3':
                rl.question("Enter the file ID to delete: ", async (fileId) => {
                    console.log(`Deleting file with ID: ${fileId}`);
                    // Add logic to delete file using OpenAI API
                    handleUserChoice();
                });
                return;
            case '4':
                rl.question("Enter the file ID to download: ", async (fileId) => {
                    console.log(`Downloading file with ID: ${fileId}`);
                    // Add logic to download file using OpenAI API
                    handleUserChoice();
                });
                return;
            case '5':
                console.log("Exiting...");
                rl.close();
                return;
            default:
                console.log("Invalid choice. Please select a valid option (1-5).");
        }
        handleUserChoice();
    });
};

handleUserChoice();

