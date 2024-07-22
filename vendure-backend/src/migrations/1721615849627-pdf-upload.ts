import {MigrationInterface, QueryRunner} from "typeorm";

export class PdfUpload1721615849627 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "customFieldsPdf"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_translation" ADD "customFields__fix_relational_custom_fields__" boolean`, undefined);
        await queryRunner.query(`COMMENT ON COLUMN "product_translation"."customFields__fix_relational_custom_fields__" IS 'A work-around needed when only relational custom fields are defined on an entity'`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD "customFieldsPdffileid" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD "customFields__fix_relational_custom_fields__" boolean`, undefined);
        await queryRunner.query(`COMMENT ON COLUMN "product"."customFields__fix_relational_custom_fields__" IS 'A work-around needed when only relational custom fields are defined on an entity'`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_fd006d2260980b8757c29e1b9bc" FOREIGN KEY ("customFieldsPdffileid") REFERENCES "asset"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_fd006d2260980b8757c29e1b9bc"`, undefined);
        await queryRunner.query(`COMMENT ON COLUMN "product"."customFields__fix_relational_custom_fields__" IS 'A work-around needed when only relational custom fields are defined on an entity'`, undefined);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "customFields__fix_relational_custom_fields__"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "customFieldsPdffileid"`, undefined);
        await queryRunner.query(`COMMENT ON COLUMN "product_translation"."customFields__fix_relational_custom_fields__" IS 'A work-around needed when only relational custom fields are defined on an entity'`, undefined);
        await queryRunner.query(`ALTER TABLE "product_translation" DROP COLUMN "customFields__fix_relational_custom_fields__"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD "customFieldsPdf" character varying(255)`, undefined);
   }

}
