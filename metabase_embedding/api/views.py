import jwt
import time
from django.http import JsonResponse
import os
from django.conf import settings


def metabase_embed_url(request):
    payload = {
        "resource": {"dashboard": 1},
        "params": {

        },
        "exp": round(time.time()) + (60 * 10)  # 10 minute expiration
    }
    print("METABASE_SECRET_KEY : ", settings.METABASE_SECRET_KEY)
    token = jwt.encode(payload, settings.METABASE_SECRET_KEY, algorithm="HS256")
    iframe_url = (
        f"{settings.METABASE_SITE_URL}"
        f"/embed/dashboard/{token}"
        f"#bordered=true&titled=false"
    )

    return JsonResponse({"url": iframe_url})
