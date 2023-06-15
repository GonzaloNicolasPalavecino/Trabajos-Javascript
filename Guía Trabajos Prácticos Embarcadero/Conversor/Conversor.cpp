//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include "Conversor.h"
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
	if(Sender = Button2){

	   Edit1->Text=Edit2->Text / 1.3;
	}
}

void __fastcall TForm1::Button1Click(TObject *Sender)
{
		if(Sender = Button1){
		Edit2->Text=Edit1->Text * 1.3;
	}
}
//---------------------------------------------------------------------------







//-------------------