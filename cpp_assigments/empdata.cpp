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
        ofstream empdatafile;
        empdatafile.open("empoyee");
        empdatafile << id << "\n";
        empdatafile << name << "\n";
        empdatafile.close();
    }
    if (input == "-view")
    {
        ifstream empdatafile;
        string line;
        empdatafile.open("empoyee");
        while (getline(empdatafile, line))
        {
            cout << line << "\n";
        }
        empdatafile.close();
    }
    return 0;
}
