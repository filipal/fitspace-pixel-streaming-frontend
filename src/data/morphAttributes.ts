export interface MorphAttribute {
  morphId: number;
  labelName: string;
  category: string;
  morphName: string;
  min: number;
  max: number;
  value: number;
}

export const morphAttributes: MorphAttribute[] = [
  { morphId: 0, labelName: "Lower Belly Move UpDown", category: "Waist", morphName: "SS_body_bs_2 Belly Lower UpDown", min: -2, max: 1.5, value: 50 },
  { morphId: 1, labelName: "Lower Belly Width", category: "Waist", morphName: "SS_body_bs_2 Belly Lower Width", min: -1.5, max: 1.5, value: 50 },
  { morphId: 2, labelName: "Belly Move InOut", category: "Waist", morphName: "SS_body_bs_4 Belly Move InOut", min: -3, max: 2, value: 50 },
  { morphId: 3, labelName: "Belly Move Rotate", category: "Waist", morphName: "SS_body_bs_4 Belly Move Rotate", min: -1.5, max: 1.5, value: 50 },
  { morphId: 4, labelName: "Belly Move UpDown", category: "Waist", morphName: "SS_body_bs_4 Belly Move UpDown", min: -1.5, max: 1.5, value: 50 },
  { morphId: 5, labelName: "Upper Belly Width", category: "Waist", morphName: "SS_body_bs_1 Belly Upper Width", min: -2, max: 2, value: 50 },
  { morphId: 6, labelName: "Pelvic Depth", category: "Hips", morphName: "SS_body_bs_Pelvic Depth", min: -1.5, max: 2, value: 50 },
  { morphId: 7, labelName: "Waist Depth", category: "Waist", morphName: "SS_body_bs_Waist Depth", min: -2, max: 2, value: 50 },
  { morphId: 8, labelName: "Waist Move FrontBack", category: "Waist", morphName: "SS_body_bs_Waist FrontBack", min: -1.5, max: 2, value: 50 },
  { morphId: 9, labelName: "Abdomen Move UpDown", category: "Waist", morphName: "SS_body_bs_Abdomen UpDown", min: -1.5, max: 1.5, value: 50 },
  // ...nastavi za sve ostale atribute iz tablice
];
