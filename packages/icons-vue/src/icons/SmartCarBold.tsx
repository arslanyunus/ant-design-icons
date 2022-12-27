// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmartCarBoldSvg from '@ant-design/icons-svg/lib/asn/SmartCarBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmartCarBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmartCarBold: SmartCarBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmartCarBoldSvg}></AntdIcon>;
};

SmartCarBold.displayName = 'SmartCarBold';
SmartCarBold.inheritAttrs = false;
export default SmartCarBold;