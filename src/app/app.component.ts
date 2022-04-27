import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
  constructor(
    // private bluetoothSerial: BluetoothSerial,
    public alertController: AlertController
    ) { }
  // ngOnInit(): void {
  //   // Write a string
  //   this.bluetoothSerial.write('hello world').then(this.success, this.failure);

  //   // Array of int or bytes
  //   this.bluetoothSerial.write([186, 220, 222]).then(this.success, this.failure);

  //   // Typed Array
  //   const data = new Uint8Array(4);
  //   data[0] = 0x41;
  //   data[1] = 0x42;
  //   data[2] = 0x43;
  //   data[3] = 0x44;
  //   this.bluetoothSerial.write(data).then(this.success, this.failure);

  //   // Array Buffer
  //   this.bluetoothSerial.write(data.buffer).then(this.success, this.failure);
  // }

  // async success() {
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Success',
  //     // subHeader: 'connection successful',
  //     message: 'Connection Successful.',
  //     buttons: ['OK']
  //   });

  //   await alert.present();

  //   const { role } = await alert.onDidDismiss();
  //   console.log('onDidDismiss resolved with role', role);
  // }

  // async failure() {
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Failure',
  //     // subHeader: 'Subtitle',
  //     message: 'Connection Failed.',
  //     buttons: ['OK']
  //   });

  //   await alert.present();

  //   const { role } = await alert.onDidDismiss();
  //   console.log('onDidDismiss resolved with role', role);
  // }
}
