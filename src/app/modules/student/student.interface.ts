export interface IStudent {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  permanentAddress: string;
  presentAddress: string;
  guardian: {
    fatherName: string;
    fatherContactNo: string;
    fatherOccupation: string;
    motherName: string;
    motherContactNo: string;
    motherOccupation: string;
  };
  localGuardian?: {
    name?: string;
    occupation?: string;
    contactNo?: string;
  };
  profileImage?: string;
  isActive: "active" | "inactive";
}
