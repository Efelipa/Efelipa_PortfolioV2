import CV  from './assets/content/CV.pdf'

export const ResumeButton = () => {
    const handleDownload = () =>{
        const downloadLink = document.createElement('a');
        downloadLink.href = CV;
        downloadLink.download = 'CV.pdf';
        downloadLink.click();
    }

    return (
        <button onClick={handleDownload} className={'button has-background-custom'}>
            Download resumen
        </button>
    )
}