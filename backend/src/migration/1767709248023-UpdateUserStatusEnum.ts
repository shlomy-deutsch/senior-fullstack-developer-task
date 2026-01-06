import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserStatusEnum1767709248023 implements MigrationInterface {

public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      UPDATE users
      SET status = 
        CASE status
          WHEN 1 THEN 'ENABLED'
          WHEN 0 THEN 'DISABLED'
          ELSE 'DELETED'
        END
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      UPDATE users
      SET status = 
        CASE status
          WHEN 'ENABLED' THEN 1
          WHEN 'DISABLED' THEN 0
          WHEN 'DELETED' THEN -1
        END
    `);
  }
}
