import React, {Component} from 'react';
import Parallax from "../src/components/Parallax";

class App extends Component {
    render() {
        return (
            <div style={{height: '600vh', backgroundColor: 'green'}}>
                <div style={{position: 'absolute', top: 0}}>
                    <div style={{
                        height: '100px',
                        width: 100,
                        backgroundColor: 'blue',
                        position: 'absolute',
                    }}>
                    </div>
                    <div style={{position: 'absolute', top: '20vh'}}>
                        <div style={{width: '100vw', height: 5, backgroundColor: 'white'}}/>

                        <Parallax speed={5}>
                            bob
                        </Parallax>
                        <Parallax speed={10}>
                            bob
                        </Parallax>
                        <div style={{width: '100vw', height: 5, backgroundColor: 'white'}}/>
                    </div>
                </div><div style={{position: 'absolute', top: '400vh'}}>
                    <div style={{
                        height: '100px',
                        width: 100,
                        backgroundColor: 'blue',
                        position: 'absolute',
                    }}>
                    </div>
                    <div style={{position: 'absolute', top: '20vh'}}>
                        <div style={{width: '100vw', height: 5, backgroundColor: 'white'}}/>

                        <Parallax speed={5}>
                            bob
                        </Parallax>
                        <Parallax speed={10}>
                            bob
                        </Parallax>
                        <div style={{width: '100vw', height: 5, backgroundColor: 'white'}}/>
                    </div>
                </div>
                {/*<div style={{position: 'absolute', top: '200vh'}}>*/}
                    {/*<div style={{*/}
                        {/*height: '100px',*/}
                        {/*width: 100,*/}
                        {/*backgroundColor: 'blue',*/}
                        {/*position: 'absolute',*/}
                        {/*top: '20vh'*/}
                    {/*}}>*/}
                    {/*</div>*/}
                    {/*<div style={{position: 'absolute', top: '60vh'}}>*/}
                        {/*<Parallax speed={1}>*/}
                            {/*bob*/}
                        {/*</Parallax>*/}
                        {/*<div style={{width: '100vw', height: 5, backgroundColor: 'white'}}/>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default App;
