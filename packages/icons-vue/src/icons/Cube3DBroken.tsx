// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Cube3DBrokenSvg from '@ant-design/icons-svg/lib/asn/Cube3DBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Cube3DBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Cube3DBroken: Cube3DBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Cube3DBrokenSvg}></AntdIcon>;
};

Cube3DBroken.displayName = 'Cube3DBroken';
Cube3DBroken.inheritAttrs = false;
export default Cube3DBroken;