import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import utf8 from 'utf8';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  pairedDevices: any;
  loading: HTMLIonLoadingElement;
  constructor(
    private bluetoothSerial: BluetoothSerial,
    public alertController: AlertController,
    private loadingController: LoadingController,
  ) { }

  ngOnInit(): void {
    this.pairedDevices = null;
    this.bluetoothSerial.list().then(
      x =>
        this.pairedDevices = x
    );
    // Write a string
    // this.bluetoothSerial.write('hello world').then(this.success, this.failure);

    // // Array of int or bytes
    // this.bluetoothSerial.write([186, 220, 222]).then(this.success, this.failure);

    // // Typed Array
    // const data = new Uint8Array(4);
    // data[0] = 0x41;
    // data[1] = 0x42;
    // data[2] = 0x43;
    // data[3] = 0x44;
    // this.bluetoothSerial.write(data).then(this.success, this.failure);

    // // Array Buffer
    // this.bluetoothSerial.write(data.buffer).then(this.success, this.failure);
  }

  async selectDevice(device) {
    this.bluetoothSerial.isConnected().then(
      async () => {
        this.sendMessage();
      }
    ).catch(
      () => {
        this.bluetoothSerial.connect(device.address).subscribe(async x => {
          this.sendMessage();
        });
      }
    );
    // if (this.bluetoothSerial.isConnected()){
    //   this.alert('SUCCESS');
    // }
    // this.bluetoothSerial.write('hello world').then(
    //   success =>
    //   this.success(success)
    // );
  }

  async sendMessage() {
    await this.bluetoothSerial.write(utf8.encode('hello world')).then(
      async success => {
        this.loading = await this.loadingController.create({});
        await this.loading.present();
      }
    );
    await this.bluetoothSerial.read().then(async data => {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.alert(data);
      }
    });
  }

  async alert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      // subHeader: 'connection successful',
      message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async success(data) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Success',
      // subHeader: 'connection successful',
      message: JSON.stringify(data),
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async failure() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Failure',
      // subHeader: 'Subtitle',
      message: 'Connection Failed.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
