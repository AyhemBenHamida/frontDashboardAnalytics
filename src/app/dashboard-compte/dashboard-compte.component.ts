import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EChartsOption } from 'echarts';
import { CompteService } from '../service/compte.service';

@Component({
  selector: 'app-dashboard-compte',
  templateUrl: './dashboard-compte.component.html',
  styleUrls: ['./dashboard-compte.component.css']
})
export class DashboardCompteComponent implements OnInit {
  public pieChart!: EChartsOption;
  public lineChart!: EChartsOption;
  public barChart!: EChartsOption;
  serie:any=[]
  seriesn:any=[]
  label:any=[]
  dataset:any=[]
  labelline:any=[]
  datasetline:any=[]
  constructor(public chartservice: CompteService,private router:Router, private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.drawPie();
    this.drawBar();
    this.drawline()
  }
  drawPie(){
    this.chartservice.getpie().subscribe(data=>{
      //@ts-ignore
      this.serie=data
      console.log(this.serie)
      for( var i = 0; i < this.serie.length; i++){
  this.seriesn.push({value:this.serie[i].valeur,name:this.serie[i].label})
}

console.log(this.seriesn)

    this.pieChart = {

      title: {
        text: 'Compte mouvement',
        subtext: 'analyse',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: this.seriesn,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }

    },err=>{
      console.log(err)
    })
    
  }
  drawBar(){
    this.chartservice.getbar().subscribe(data=>{
      //@ts-ignore
      this.serie=data
      console.log(this.serie)
for( var j = 0; j < this.serie.length; j++){
  this.dataset.push(this.serie[j].valeur)
  this.label.push(this.serie[j].label)
}
console.log(this.dataset)

this.barChart={
  xAxis: {
    type: 'category',
    data: this.label
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: this.dataset,
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
}

    },err=>{
      console.log(err)
    })
  }

 

  drawline(){
    this.chartservice.getLine().subscribe(data=>{
      //@ts-ignore
      this.serie=data
      console.log(this.serie)
for( var j = 0; j < this.serie.length; j++){
  this.datasetline.push(this.serie[j].valeur)
  this.labelline.push(this.serie[j].label)
}
console.log(this.datasetline)

this.lineChart={
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: this.labelline
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: this.datasetline,
      type: 'line',
      areaStyle: {}
    }
  ]
}

    },err=>{
      console.log(err)
    })
  }

}
