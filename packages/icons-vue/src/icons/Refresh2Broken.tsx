// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Refresh2BrokenSvg from '@ant-design/icons-svg/lib/asn/Refresh2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Refresh2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Refresh2Broken: Refresh2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Refresh2BrokenSvg}></AntdIcon>;
};

Refresh2Broken.displayName = 'Refresh2Broken';
Refresh2Broken.inheritAttrs = false;
export default Refresh2Broken;