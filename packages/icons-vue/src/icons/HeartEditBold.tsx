// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartEditBoldSvg from '@ant-design/icons-svg/lib/asn/HeartEditBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartEditBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartEditBold: HeartEditBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartEditBoldSvg}></AntdIcon>;
};

HeartEditBold.displayName = 'HeartEditBold';
HeartEditBold.inheritAttrs = false;
export default HeartEditBold;