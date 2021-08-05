import React, { PureComponent } from "react";
import ReactDataSheet from "react-datasheet";
import { Box, Button } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";
import { grid } from "./data";
import Pop from "./Pop";
//import "./style.scss";

class App extends PureComponent {
  state = {
    grid,
    value: 1,
  };
  valueRenderer = (cell) => cell.value;
  onCellsChanged = (changes) => {
    const grid = this.state.grid;

    changes.forEach(({ cell, row, col, value }) => {
      grid[row][col] = { ...grid[row][col], value };
    });
    this.setState({ grid });
  };

  /**
   * Add Row
   */
  addRow = () => {
    const { grid, value } = this.state;
    const [headers = []] = grid || {};

    const rowIndexCell = { readOnly: true };
    const row = [];

    headers.map((cell, index) => {
      // update rowIndexCell
      if (index === 0) {
        this.setState({ value: value + 1 });
        row.push({ ...rowIndexCell, value });

        return row;
      }

      row.push({ cell });
      return row;
    });
    grid.push(row);

    this.setState({ grid: [...grid] });
  };

  /**
   * Add column
   */
  addcolumn = () => {
    let { grid } = this.state;
    const headers = { value: "column", readOnly: true };
    const column = { value: "" };

    grid = grid.map((row, index) => {
      if (index === 0) {
        row.push(headers);

        return row;
      }

      row.push(column);
      return row;
    });

    this.setState({ grid: [...grid] });
  };

  onSelectHeaderCell = () => {
    const { grid } = this.state;
    const [headers = []] = grid || {};
    
  };

  render() {
    return (
      <>
        <Box m={10}>
          <Scrollbars style={{ height: 300 }}>
            <ReactDataSheet
              data={this.state.grid}
              className="custom-sheet translate-table-data-grid"
              valueRenderer={this.valueRenderer}
              onCellsChanged={this.onCellsChanged}
              onSelect={this.onSelectCells}
            />
          </Scrollbars>
          <Button onClick={this.addRow}>Add Row</Button>
          <Button onClick={this.addcolumn}>Add column</Button>
        </Box>
        <Pop />
      </>
    );
  }
}

export default App;
