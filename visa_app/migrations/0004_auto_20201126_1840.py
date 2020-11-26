# Generated by Django 3.0.6 on 2020-11-26 13:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visa_app', '0003_news_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='image',
            field=models.ImageField(default='default.png', upload_to=''),
        ),
        migrations.AlterField(
            model_name='news',
            name='url',
            field=models.URLField(help_text='Paste the URL of the article that you are creating.', max_length=300),
        ),
    ]