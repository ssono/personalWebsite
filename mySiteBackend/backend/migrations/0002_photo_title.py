# Generated by Django 2.0.6 on 2019-04-09 00:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='photo',
            name='title',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
