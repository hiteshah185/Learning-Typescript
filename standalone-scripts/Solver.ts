class Solver {
    towerOfHanoi(
      source: string,
      destination: string,
      extra: string,
      numberOfDisc: number
    ): void {
      if (numberOfDisc <= 0) {
        return;
      }
      this.towerOfHanoi(source, extra, destination, numberOfDisc - 1);
      console.log(`Move Disk-${numberOfDisc} from ${source} to ${destination} `);
      this.towerOfHanoi(extra, destination, source, numberOfDisc - 1);
    }
  }
  const solver = new Solver();
  solver.towerOfHanoi("s", "d", "e", 3);
  