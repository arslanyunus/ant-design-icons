// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Driver2BoldSvg from '@ant-design/icons-svg/lib/asn/Driver2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Driver2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Driver2Bold: Driver2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Driver2BoldSvg}></AntdIcon>;
};

Driver2Bold.displayName = 'Driver2Bold';
Driver2Bold.inheritAttrs = false;
export default Driver2Bold;