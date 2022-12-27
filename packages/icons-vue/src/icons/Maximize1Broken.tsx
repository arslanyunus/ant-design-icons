// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize1BrokenSvg from '@ant-design/icons-svg/lib/asn/Maximize1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize1Broken: Maximize1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize1BrokenSvg}></AntdIcon>;
};

Maximize1Broken.displayName = 'Maximize1Broken';
Maximize1Broken.inheritAttrs = false;
export default Maximize1Broken;