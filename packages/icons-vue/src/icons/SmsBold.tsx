// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmsBoldSvg from '@ant-design/icons-svg/lib/asn/SmsBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmsBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmsBold: SmsBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmsBoldSvg}></AntdIcon>;
};

SmsBold.displayName = 'SmsBold';
SmsBold.inheritAttrs = false;
export default SmsBold;