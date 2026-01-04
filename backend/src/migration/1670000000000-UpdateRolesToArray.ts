import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserRolesToArray1670000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      UPDATE users
      SET roles = 
        CASE username
          WHEN 'admin_user' THEN '["ADMIN"]'
          WHEN 'regular_user' THEN '["USER"]'
          WHEN 'editor_user' THEN '["EDITOR"]'
          ELSE '["USER"]'
        END
    `);
  }

    public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      UPDATE users
      SET roles = 
        CASE username
          WHEN 'admin_user' THEN 'Admin'
          WHEN 'regular_user' THEN 'User'
          WHEN 'editor_user' THEN 'Editor'
          ELSE 'User'
        END
    `);
  }
}
