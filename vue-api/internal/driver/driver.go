package driver

import (
	"database/sql"
	"fmt"
	"time"

	_ "github.com/jackc/pgconn"
	_ "github.com/jackc/pgx/v4"
	_ "github.com/jackc/pgx/v4/stdlib"
)

type DB struct {
	SQL *sql.DB
}

var dbConn = &DB{}

const maxOpenDbConn = 5               // numero maximo de conexiones permitidas abiertas
const maxIdleDbConn = 5               // numero maximo de conexiones inactivas (ociosas) Abiertas y disponibles para reutilizacion
const maxDbLifeTime = 5 * time.Minute // tiempo antes de que se considere inactiva una conexion

func ConnectPostgres(dsn string) (*DB, error) {

	d, err := sql.Open("pgx", dsn)
	if err != nil {
		return nil, err
	}

	d.SetMaxOpenConns(maxOpenDbConn)
	d.SetMaxIdleConns(maxIdleDbConn)
	d.SetConnMaxLifetime(maxDbLifeTime)

	// err is passed as parameter in order to update the value within the function and then return it.
	// the result of the testDB function is assigned back to the err variable, this allows additional actions to be performed within the testDB function based on the error state.
	err = testDB(d)
	if err != nil {
		return nil, err
	}

	dbConn.SQL = d
	return dbConn, nil
}

func testDB(d *sql.DB) error {
	err := d.Ping()
	if err != nil {
		fmt.Println("Error!", err)
		return err
	}
	fmt.Println("*** Pinged database sucessfully! ***")

	return nil
}
