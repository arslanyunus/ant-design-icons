// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReserveOutlineSvg from '@ant-design/icons-svg/lib/asn/ReserveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReserveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReserveOutline: ReserveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReserveOutlineSvg}></AntdIcon>;
};

ReserveOutline.displayName = 'ReserveOutline';
ReserveOutline.inheritAttrs = false;
export default ReserveOutline;