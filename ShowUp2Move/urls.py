from django.urls import path
from ShowUp2Move import views
from ShowUp2Move.views import UserViewSet

user_list = UserViewSet.as_view({"get": "list"})
urlpatterns = [
    path("showup2move/login", views.Login.as_view()),
    path("showup2move/signup", views.SignUp.as_view()),
    path("users/", user_list, name="user-list"),

]