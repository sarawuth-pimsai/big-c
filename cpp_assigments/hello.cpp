#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main(int argc, char *argv[])
{
    std::string input(argv[1]);
    if (input == "-add")
    {
        int id;
        string name;
        cout << "Please enter id: ";
        cin >> id;
        cout << "Please enter name: ";
        cin >> name;
        cout << "Your id is " << id << "\n";
        cout << "Your name is " << name << "\n";
        ofstream personfile;
        personfile.open("person");
        personfile << id << "\n";
        personfile << name << "\n";
        personfile.close();
    }
    if (input == "-view")
    {
        ifstream personfile;
        string line;
        personfile.open("person");
        while (getline(personfile, line))
        {
            cout << line << "\n";
        }
        personfile.close();
    }
    return 0;
}
