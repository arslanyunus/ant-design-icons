// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Cube3DBoldSvg from '@ant-design/icons-svg/lib/asn/Cube3DBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Cube3DBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Cube3DBold: Cube3DBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Cube3DBoldSvg}></AntdIcon>;
};

Cube3DBold.displayName = 'Cube3DBold';
Cube3DBold.inheritAttrs = false;
export default Cube3DBold;