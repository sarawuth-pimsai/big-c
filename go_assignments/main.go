package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/gocarina/gocsv"
)

type Person struct {
	ID   string `csv:"id"`
	Name string `csv:"name"`
	Age  int    `csv:"age"`
	Team string `csv:"team"`
}

type Data struct {
	Total   int      `json:"total"`
	Records []Person `json:"records"`
}

type Response struct {
	Code string `json:"code"`
	Data Data   `json:"data"`
}

func readCSV(fileName string) ([]Person, error) {
	var records []Person
	file, err := os.Open(fileName)
	if err != nil {
		return records, err
	}
	defer file.Close()

	if err := gocsv.UnmarshalFile(file, &records); err != nil {
		return records, err
	}
	return records, nil
}

func handler(w http.ResponseWriter, r *http.Request) {
	var data Data = Data{
		Total:   0,
		Records: []Person{},
	}
	var response Response = Response{
		Code: "success",
		Data: data,
	}
	id := strings.TrimPrefix(r.URL.Path, "/file/")
	fileName := fmt.Sprintf("%s.csv", id)
	records, err := readCSV(fileName)
	if err != nil {
		response.Code = "failure"
		json.NewEncoder(w).Encode(response)
		return
	}
	data = Data{
		Total:   len(records),
		Records: records,
	}
	response = Response{
		Code: "success",
		Data: data,
	}
	json.NewEncoder(w).Encode(response)
}

func main() {
	http.HandleFunc("/file/", handler)
	log.Fatal(http.ListenAndServe(":3000", nil))
}
