// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/PenRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenRemoveOutline: PenRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenRemoveOutlineSvg}></AntdIcon>;
};

PenRemoveOutline.displayName = 'PenRemoveOutline';
PenRemoveOutline.inheritAttrs = false;
export default PenRemoveOutline;