import { registerProvider } from "@tsed/di";
import { DataSource } from "typeorm";
import { Logger } from "@tsed/logger";
import { User } from "src/entities/User.entity";

export const POSTGRES_DATA_SOURCE = Symbol.for("PostgresDataSource");
export const PostgresDataSource = new DataSource({
  type: "postgres",
  entities: [User],
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true
});

registerProvider<DataSource>({
  provide: PostgresDataSource,
  type: "typeorm:datasource",
  deps: [Logger],
  async useAsyncFactory(logger: Logger) {
    try {
      await PostgresDataSource.initialize();

      logger.info("Connected with typeorm to database: Postgres");

      return PostgresDataSource;
    } catch (err) {
      logger.error('error connecting to db')
    }
  },
  hooks: {
    $onDestroy(dataSource) {
      return dataSource.isInitialized && dataSource.destroy();
    }
  }
});
