object Form1: TForm1
  Left = 0
  Top = 0
  Caption = 'Form1'
  ClientHeight = 202
  ClientWidth = 447
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  PixelsPerInch = 96
  TextHeight = 13
  object Label1: TLabel
    Left = 96
    Top = 24
    Width = 220
    Height = 13
    Caption = 'Adivina un numero del 0 al 10 en tres intentos'
  end
  object Label2: TLabel
    Left = 96
    Top = 56
    Width = 67
    Height = 13
    Caption = 'Primer intento'
  end
  object Edit1: TEdit
    Left = 96
    Top = 75
    Width = 121
    Height = 21
    TabOrder = 0
  end
  object Button1: TButton
    Left = 241
    Top = 73
    Width = 75
    Height = 25
    Caption = 'Aceptar'
    TabOrder = 1
    OnClick = Button1Click
  end
  object ProgressBar1: TProgressBar
    Left = 112
    Top = 136
    Width = 150
    Height = 17
    Max = 60
    Position = 60
    TabOrder = 2
  end
  object Timer1: TTimer
    OnTimer = Timer1Timer
    Left = 80
    Top = 136
  end
end
