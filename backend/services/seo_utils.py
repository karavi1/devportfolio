import requests
from bs4 import BeautifulSoup
from models.schemas import SEOResponse

def analyze_meta_tags(url: str) -> SEOResponse:
    try:
        res = requests.get(url, timeout=10)
        soup = BeautifulSoup(res.text, "html.parser")
        return SEOResponse(
            title=soup.title.string if soup.title else "",
            description=soup.find("meta", attrs={"name": "description"}).get("content", "") if soup.find("meta", attrs={"name": "description"}) else "",
            canonical=soup.find("link", rel="canonical").get("href", "") if soup.find("link", rel="canonical") else "",
            status="success"
        )
    except Exception as e:
        return SEOResponse(title="", description="", canonical="", status=f"error: {str(e)}")