import { connect } from "mongoose";
import { MONGODB_URL } from "@Constants";

class DB_Connection {
  url: string;
  isConnected: boolean;
  isError: boolean;
  isConnecting: boolean;
  constructor(url: string) {
    this.url = url;
    this.isConnected = false;
    this.isError = false;
    this.isConnecting = false;
  }

  async Connect() {
    if (this.isConnected) {
      return;
    }
    this.isConnecting = true;
    try {
      await connect(this.url);
      this.isConnecting = false;
      this.isConnected = true;
    } catch (error) {
      this.isConnecting = false;
      this.isError = true;
    }
  }
}

export const BlogConnect = new DB_Connection(MONGODB_URL!);
