// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartTickBoldSvg from '@ant-design/icons-svg/lib/asn/HeartTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartTickBold: HeartTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartTickBoldSvg}></AntdIcon>;
};

HeartTickBold.displayName = 'HeartTickBold';
HeartTickBold.inheritAttrs = false;
export default HeartTickBold;