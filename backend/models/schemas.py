from pydantic import BaseModel, HttpUrl

class BlogRequest(BaseModel):
    topic: str

class BlogResponse(BaseModel):
    topic: str
    content: str

class SEORequest(BaseModel):
    url: HttpUrl

class SEOResponse(BaseModel):
    title: str
    description: str
    canonical: str
    status: str