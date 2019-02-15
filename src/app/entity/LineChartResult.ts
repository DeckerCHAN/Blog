export class LineChartResult {
  public title: string;
  public legendX: string;
  public legendY: string;
  public series: Array<LineChartSamplePoint>;
}

export class LineChartSamplePoint {
  public x: number;
  public y: number;
}
