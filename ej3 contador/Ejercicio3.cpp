//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include "Ejercicio3.h"
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
void __fastcall TForm1::Button2Click(TObject *Sender)
{
 Button1->Caption = StrToInt(Button1->Caption )+ 1;
}
//---------------------------------------------------------------------------
