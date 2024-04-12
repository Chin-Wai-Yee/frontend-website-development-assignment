from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

from uuid import uuid4

class Base(DeclarativeBase):
  pass

db = SQLAlchemy(model_class=Base)

def get_uuid():
  return str(uuid4())

class User(db.Model):
  __tablename__ = 'users'

  uuid: Mapped[str] = mapped_column(primary_key=True, default=get_uuid)
  username: Mapped[str] = mapped_column()
  password: Mapped[str] = mapped_column()
  is_admin: Mapped[bool] = mapped_column(default=False)

class Feedback(db.Model):
  __tablename__ = 'feedback'

  uuid: Mapped[str] = mapped_column(primary_key=True, default=get_uuid)
  first_name: Mapped[str] = mapped_column()
  last_name: Mapped[str] = mapped_column()
  phone: Mapped[str] = mapped_column()
  email: Mapped[str] = mapped_column()
  message: Mapped[str] = mapped_column()