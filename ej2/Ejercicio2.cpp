//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include "Ejercicio2.h"
//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma resource "*.dfm"
TForm1 *Form1;
//---------------------------------------------------------------------------
__fastcall TForm1::TForm1(TComponent* Owner)
	: TForm(Owner)
{
}
//---------------------------------------------------------------------------
void __fastcall TForm1::Button1Click(TObject *Sender)
{
			ShowMessage("Hola, " + Edit1->Text + "." );
}
//---------------------------------------------------------------------------
