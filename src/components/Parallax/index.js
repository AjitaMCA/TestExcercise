import Parallax from 'react-springy-parallax';
import React from 'react';
import ReactDOM from 'react-dom';
import { StickyContainer, Sticky } from 'react-sticky';
let renderCount=0;
class Parallaxes extends React.Component {
    setRefs(set) {
        this.refs.parallax.scrollTo(set);
        renderCount = set;
        console.log('render',renderCount);
    }
    render() {
        const styles = {
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 24,
            lineHeight: '10px',
            color: 'black',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }
        return (
            <div>
                <StickyContainer className="container" style={{'display':'flex'}}>
                  <Sticky>
                    {({ style }) => (
                      // <Header style={style} renderCount={renderCount++} />
                      <div style={{ background: "linear-gradient(#fff, #ddd)", width: "100%" }}>
                        <h2>
                          <span className="pull-left">
                            Section --{renderCount}--
                          </span>
                        </h2>
                      </div>
                    )}
                  </Sticky>

                  <div>
                
                <Parallax style={{ width: "80%" }} ref="parallax" pages={3}>

                    <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#cef5c9' }} />
                    <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#eec7f0' }} />
                    <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#f5c5bc' }} />

                    <Parallax.Layer
                        offset={0}
                        speed={0.5}
                        style={styles}
                        onClick={() => this.setRefs(1)}>
                        First Section!
                    </Parallax.Layer>

                    <Parallax.Layer
                        offset={1}
                        speed={-0.1}
                        style={styles}
                        onClick={() => this.setRefs(2)}>
                        Second Section  ...
                    </Parallax.Layer>

                    <Parallax.Layer
                        offset={2}
                        speed={0.5}
                        style={styles}
                        onClick={() => this.setRefs(0)}>
                        The end.
                    </Parallax.Layer>
                </Parallax>
                </div>
                </StickyContainer>
            </div>
        )
    }
}
export default Parallaxes;