import { Component } from '@angular/core';
import {
  ActionSheetButton,
  ActionSheetController,
  ActionSheetOptions,
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';
import {Movie} from "../../providers/film/film";
import {SocialSharing} from "@ionic-native/social-sharing";

/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'detail'
})
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {
  movieDetail: Movie;

  constructor(
    private sharing: SocialSharing,
    private actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController, public navParams: NavParams) {
    this.movieDetail = navParams.get('movie');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');
  }

  shareMovie() {
    const facebookButton: ActionSheetButton = {
      text: "Facebook",
      icon: 'logo-facebook',
      handler: ()=> {
        this.sharing.shareViaFacebook(
          this.movieDetail.Title,
          this.movieDetail.Poster
        )
      }
    };
    const twitterButton: ActionSheetButton = {
      text: "Twitter",
      icon: 'logo-twitter',
      handler: ()=> {

      }
    };
    const whatsAppButton: ActionSheetButton = {
      text: "Whatsapp",
      icon: 'logo-whatsapp',
      handler: ()=> {

      }
    };
    const actionSheetOptions: ActionSheetOptions = {
      title: "Share With Mates",
      buttons: [
        facebookButton,
        twitterButton,
        whatsAppButton
      ]
    };
    const shareActionSheet = this.actionSheetCtrl.create(actionSheetOptions);
    shareActionSheet.present();
  }
}
