CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp,
	"email" varchar NOT NULL,
	"password" text,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
