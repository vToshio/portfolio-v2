export const downloadResume = () => {
    const url = import.meta.env.BASE_URL + 'resume-2026_pt-br.pdf'
    window.open(url, '_blank', 'noopener noreferrer')
}