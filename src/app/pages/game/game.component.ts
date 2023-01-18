import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsoWorldAPI } from 'src/app/services/consoWorldAPI.service';

declare var createUnityInstance: any;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private service: ConsoWorldAPI) { }

async ngOnInit() {

  var buildUrl = "assets/unity/Build";
  var config = {
    dataUrl: buildUrl + "/webgl.data",
    frameworkUrl: buildUrl + "/build.framework.js",
    codeUrl: buildUrl + "/build.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DenisColin",
    productName: "Unity Effects Pack",
    productVersion: "0.1",
    devicePixelRatio: 0
  };

  let container = document.querySelector("#unity-container") || new Element();
  var canvas : HTMLElement = document.querySelector("#unity-canvas") || new HTMLElement();
  var loadingBar : HTMLElement = document.querySelector("#unity-loading-bar") || new HTMLElement();
  var progressBarFull : HTMLElement = document.querySelector("#unity-progress-bar-full") || new HTMLElement();
  var fullscreenButton : HTMLElement = document.querySelector("#unity-fullscreen-button") || new HTMLElement();

  createUnityInstance(canvas, config, (progress: any) => {
    progressBarFull.style.width = 100 * progress + "%";
  }).then((unityInstance: any) => {
    loadingBar.style.display = "none";
    fullscreenButton.onclick = () => {
      unityInstance.SetFullscreen(1);
    };
  }).catch((message: any) => {
    alert(message);
  });
  }
}
