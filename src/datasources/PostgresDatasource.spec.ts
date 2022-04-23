import { PlatformTest } from "@tsed/common";
import { DataSource } from "typeorm";
import { PostgresDataSource } from "./PostgresDatasource";

describe("PostgresDatasource", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<DataSource>(PostgresDataSource);
    // const instance = PlatformTest.invoke<PostgresDatasource>(PostgresDatasource); // get fresh instance

    expect(instance).toBeInstanceOf(PostgresDataSource);
  });
});
