// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Rotate3DBoldSvg from '@ant-design/icons-svg/lib/asn/Rotate3DBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Rotate3DBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Rotate3DBold: Rotate3DBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Rotate3DBoldSvg}></AntdIcon>;
};

Rotate3DBold.displayName = 'Rotate3DBold';
Rotate3DBold.inheritAttrs = false;
export default Rotate3DBold;