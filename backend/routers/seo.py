from fastapi import APIRouter
from models.schemas import SEORequest, SEOResponse
from services.seo_utils import analyze_meta_tags

router = APIRouter()

@router.post("/analyze", response_model=SEOResponse)
async def analyze_seo(req: SEORequest):
    result = analyze_meta_tags(req.url)
    return result