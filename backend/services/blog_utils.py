import requests

def generate_blog_intro(topic: str) -> str:
    response = requests.post("http://localhost:11434/api/chat", json={
        "model": "mistral",
        "messages": [
            {"role": "system", "content": "You are a helpful blog writing assistant."},
            {"role": "user", "content": f"Write an engaging blog post introduction about {topic}."}
        ],
        "stream": False
    })
    return response.json()["message"]["content"]