/*!
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

interface User {
  key: String;
  value: String;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  userPropertyMap: Array<User>

  constructor(public oktaAuth: OktaAuthService) {

  }
  async ngOnInit() {
    const authenticatedUser = await this.oktaAuth.getUser();
    this.userPropertyMap = Object.entries(authenticatedUser).map(entry => ({ key: entry[0], value: entry[1] }));
    console.log(this.userPropertyMap);
  }

}
