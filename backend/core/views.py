import json

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt


def health(request):
    return JsonResponse({"status": "ok", "message": "Django backend is live."})


@csrf_exempt
def echo_message(request):
    if request.method == "OPTIONS":
        return HttpResponse(status=204)

    if request.method != "POST":
        return JsonResponse({"error": "Method not allowed"}, status=405)

    payload = json.loads(request.body or "{}")
    message = payload.get("message", "").strip()
    return JsonResponse({"received": message or "No message sent"})
