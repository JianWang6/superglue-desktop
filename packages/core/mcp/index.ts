
export async function run(scriptName = 'streamableHttp') {
    try {
        // Dynamically import only the requested module to prevent all modules from initializing
        switch (scriptName) {
            case 'streamableHttp':
                // Import and run the streamable HTTP server
                await import('./streamableHttp.js');
                break;
            default:
                console.error(`Unknown script: ${scriptName}`);
                console.log('Available scripts:');
                console.log('- streamableHttp');
                process.exit(1);
        }
    } catch (error) {
        console.error('Error running script:', error);
        process.exit(1);
    }
}