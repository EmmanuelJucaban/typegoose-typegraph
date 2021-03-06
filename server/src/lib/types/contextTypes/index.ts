import { Request, Response } from 'express';
import { Model } from 'mongoose';
import { ReturnModelType } from '@typegoose/typegoose';

import { Employee, Account, Job } from '../../../graphQl/Entities';

/*
* These are meant to be used for the context Object
* This allows us to have autoCompletion on the context object
*/

export interface NewModels {
  EmployeeModel: ReturnModelType<typeof Employee> & Employee;
  AccountModel: ReturnModelType<typeof Account> & Account;
  JobModel: ReturnModelType<typeof Job> & Job;
}

/*
* This is the actually context Object we will be using
* for the context parameter in the resolver's parameters
*/

export interface Context extends NewModels {
  req: Request;
  res: Response;
}
