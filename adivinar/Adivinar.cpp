//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include "Unit1.h"
//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma resource "*.dfm"
TForm1 *Form1;
int Bueno, Intentos;
//---------------------------------------------------------------------------
__fastcall TForm1::TForm1(TComponent* Owner)
	: TForm(Owner)
{
}
//---------------------------------------------------------------------------
void __fastcall TForm1::Button1Click(TObject *Sender)
{
	randomize;
	int Key;
	Bueno=random(10);
	Intentos = 0;

	int numerousuario;
	numerousuario = StrToInt(Edit1->Text);



	if (numerousuario==Bueno){
		 ShowMessage("Acertaste!!");
	}     else {
		if(numerousuario>Bueno){
		ShowMessage("Fallaste, el numero era mas pequeño. pd: era " + IntToStr(Bueno));
		} else {
			ShowMessage("Fallaste, el numero era mas grande. pd: era " + IntToStr(Bueno));
        }

	}

}
//---------------------------------------------------------------------------

void __fastcall TForm1::Timer1Timer(TObject *Sender)
{
	if(ProgressBar1->Position == 0){
	ShowMessage("Se acabo el tiempo");
	Timer1->Enabled =false;
	}
}
//---------------------------------------------------------------------------

