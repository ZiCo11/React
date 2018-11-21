/**
 * @author iceland
 */
'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Input, Checkbox, Button } from '@icedesign/base';

class Group1 extends Component {
  state = {};

  render() {
    return (
      <div style={styles.group3t7ta} className="il-div">
        <div style={styles.strip86s85} className="il-div">
          <div style={styles.stripCol9qar} className="il-div">
            <a style={styles.aWuxtx} className="il-a">
              链接
            </a>

            <a style={styles.a6y6m0} className="il-a">
              链接
            </a>

            <a style={styles.aRd0ee} className="il-a">
              链接
            </a>

            <Input
              placeholder="请输入"
              style={styles.inputHg5i5}
              className="il-Input"
            />
          </div>

          <div style={styles.stripColXqvys} className="il-div">
            <a style={styles.aJwbol} className="il-a">
              链接
            </a>

            <a style={styles.aFiyii} className="il-a">
              链接
            </a>

            <span style={styles.sVGIconH1n6s} className="il-div" />

            <Checkbox.Group
              style={styles.checkboxGroupCpiic}
              className="il-CheckboxGroup"
            >
              <Checkbox value="1">默认打开</Checkbox>
            </Checkbox.Group>

            <Button
              type="primary"
              style={styles.buttonKc15i}
              className="il-Button"
            >
              确定
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  group3t7ta: {
    position: 'relative',
    top: 27,
    left: 83,
    width: 617,
    height: 64,
  },
  strip86s85: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    width: 617,
    height: 64,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    top: 0,
    left: 0,
  },
  stripCol9qar: {
    position: 'relative',
    flex: '1 1 auto',
    marginRight: 10,
  },
  aWuxtx: {
    position: 'absolute',
    width: 60,
    height: 17,
    color: '#19c2ff',
    top: 11,
    left: 8,
  },
  a6y6m0: {
    position: 'absolute',
    width: 60,
    height: 17,
    color: '#19c2ff',
    top: 11,
    left: 47,
  },
  aRd0ee: {
    position: 'absolute',
    width: 60,
    height: 17,
    color: '#19c2ff',
    top: 11,
    left: 87,
  },
  inputHg5i5: {
    position: 'absolute',
    width: 150,
    top: 6,
    left: 126,
  },
  stripColXqvys: {
    position: 'relative',
    flex: '1 1 auto',
    marginRight: 0,
  },
  aJwbol: {
    position: 'absolute',
    width: 60,
    height: 17,
    color: '#19c2ff',
    top: 11,
    left: 0,
  },
  aFiyii: {
    position: 'absolute',
    width: 60,
    height: 17,
    color: '#19c2ff',
    top: 11,
    left: 47,
  },
  sVGIconH1n6s: {
    position: 'absolute',
    top: 7,
    left: 75,
    width: 28,
    height: 25,
  },
  checkboxGroupCpiic: {
    position: 'absolute',
    top: 11,
    left: 107,
    width: 82,
    height: 21,
  },
  buttonKc15i: {
    position: 'absolute',
    top: 6,
    left: 211,
    justifyContent: 'center',
  },
};

export default Group1;
