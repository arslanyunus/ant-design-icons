// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize21BrokenSvg from '@ant-design/icons-svg/lib/asn/Maximize21Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize21BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize21Broken: Maximize21BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize21BrokenSvg}></AntdIcon>;
};

Maximize21Broken.displayName = 'Maximize21Broken';
Maximize21Broken.inheritAttrs = false;
export default Maximize21Broken;