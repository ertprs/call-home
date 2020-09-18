import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

export type TransactionReference = 'call' | 'periodic-credit' | 'admin';

// Represents a single transaction that affects a user's wallet.
@Table
class Transaction extends Model<Transaction> {
  @AllowNull(false)
  @Column
  userId: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  reference: TransactionReference;

  @AllowNull(false)
  @Column
  amount: number;
}

export default Transaction;
