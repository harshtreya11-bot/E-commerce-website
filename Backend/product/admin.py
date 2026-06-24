from django.contrib import admin
from .models import Category, Product


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'slug')
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'category', 'is_top_rated', 'is_top_selling', 'created_at')
    list_filter = ('category', 'is_top_rated', 'is_top_selling')
    search_fields = ('name', 'description')
