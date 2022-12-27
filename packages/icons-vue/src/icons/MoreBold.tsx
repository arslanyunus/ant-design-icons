// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreBoldSvg from '@ant-design/icons-svg/lib/asn/MoreBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreBold: MoreBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreBoldSvg}></AntdIcon>;
};

MoreBold.displayName = 'MoreBold';
MoreBold.inheritAttrs = false;
export default MoreBold;