import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-assembly-line",
  templateUrl: "./assembly-line.component.html",
  styleUrls: ["./assembly-line.component.scss"],
})
export class AssemblyLineComponent implements OnInit {
  @Input() stages: string[];
  stageDataStruct = [];
  items = [];
  constructor() {}

  ngOnInit() {
    this.createStages();
  }

  onKeyUp(e) {
    //debugger;
    if (e.code === "Enter") {
      this.add(e.target.value);
      e.target.value = "";
    }
  }

  add(value) {
    const item = {
      stage: 0,
      name: value,
    };
    this.stageDataStruct[0]["items"].push(item);
  }

  //increment stage value
  onLeftClick(item) {
    this.removeItem(item);
    //move this item to the next stage
    item.stage++;
    if (this.stageDataStruct[item["stage"]]) {
      this.stageDataStruct[item["stage"]]["items"].push(item);
    }
  }

  //decrement stage value
  onRightClick(item, $event) {
    // prevent context menu from showing
    $event.preventDefault();

    this.removeItem(item);

    //move this item to the previous stage
    item.stage--;
    if (this.stageDataStruct[item["stage"]]) {
      this.stageDataStruct[item["stage"]]["items"].push(item);
    }
  }

  removeItem(item) {
    const tempItems = this.stageDataStruct[item["stage"]]["items"].filter(
      (element) => element !== item
    );

    //first remove this item from its current stage
    this.stageDataStruct[item["stage"]]["items"] = tempItems;
  }

  createStages() {
    this.stages.forEach((stage) => {
      let stageObj = {
        name: stage,
        items: [],
      };

      this.stageDataStruct.push(stageObj);
    });
  }
}
