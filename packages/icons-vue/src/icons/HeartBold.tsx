// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartBoldSvg from '@ant-design/icons-svg/lib/asn/HeartBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartBold: HeartBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartBoldSvg}></AntdIcon>;
};

HeartBold.displayName = 'HeartBold';
HeartBold.inheritAttrs = false;
export default HeartBold;