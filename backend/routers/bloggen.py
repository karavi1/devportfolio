from fastapi import APIRouter
from models.schemas import BlogRequest, BlogResponse
from services.blog_utils import generate_blog_intro

router = APIRouter()

@router.post("/generate", response_model=BlogResponse)
async def generate_blog(req: BlogRequest):
    content = generate_blog_intro(req.topic)
    return BlogResponse(topic=req.topic, content=content)