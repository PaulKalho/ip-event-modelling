# Generated by Django 4.2.5 on 2023-09-22 22:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grpc_service', '0002_alter_user_rewards'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='rewards',
            field=models.ManyToManyField(blank=True, to='grpc_service.reward'),
        ),
    ]