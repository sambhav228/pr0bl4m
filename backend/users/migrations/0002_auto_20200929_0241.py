# Generated by Django 3.1.1 on 2020-09-29 02:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='user_pk',
            field=models.IntegerField(blank=True, unique=True),
        ),
    ]