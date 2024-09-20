# Generated by Django 5.0.6 on 2024-06-24 02:44

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("auth", "0012_alter_user_first_name_max_length"),
        ("core", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="email",
            name="is_phishing",
        ),
        migrations.RemoveField(
            model_name="report",
            name="user",
        ),
        migrations.RemoveField(
            model_name="url",
            name="is_phishing",
        ),
        migrations.AlterField(
            model_name="email",
            name="receiver",
            field=models.EmailField(max_length=254),
        ),
        migrations.AlterField(
            model_name="email",
            name="sender",
            field=models.EmailField(max_length=254),
        ),
        migrations.AlterField(
            model_name="report",
            name="timestamp",
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name="user",
            name="email",
            field=models.EmailField(
                max_length=254, unique=True, verbose_name="email address"
            ),
        ),
        migrations.AlterField(
            model_name="user",
            name="groups",
            field=models.ManyToManyField(
                blank=True,
                help_text="The groups this user belongs to. A user will get all permissions granted to each of their groups.",
                related_name="core_user_set",
                related_query_name="user",
                to="auth.group",
            ),
        ),
        migrations.AlterField(
            model_name="user",
            name="user_permissions",
            field=models.ManyToManyField(
                blank=True,
                help_text="Specific permissions for this user.",
                related_name="core_user_set",
                related_query_name="user",
                to="auth.permission",
            ),
        ),
    ]
