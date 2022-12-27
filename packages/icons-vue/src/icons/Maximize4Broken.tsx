// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize4BrokenSvg from '@ant-design/icons-svg/lib/asn/Maximize4Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize4BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize4Broken: Maximize4BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize4BrokenSvg}></AntdIcon>;
};

Maximize4Broken.displayName = 'Maximize4Broken';
Maximize4Broken.inheritAttrs = false;
export default Maximize4Broken;